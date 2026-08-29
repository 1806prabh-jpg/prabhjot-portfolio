import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const OWNER_EMAIL = 'prabh567jot@gmail.com';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string, maxLen: number): string {
  return value.trim().slice(0, maxLen);
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  try {
    const body = await req.json();

    const visitorName = sanitize(String(body.visitorName ?? ''), 120);
    const visitorEmail = sanitize(String(body.visitorEmail ?? ''), 200);
    const visitorPhone = sanitize(String(body.visitorPhone ?? ''), 30);
    const company = body.company ? sanitize(String(body.company), 120) : null;
    const itemTitle = sanitize(String(body.itemTitle ?? ''), 200);
    const itemType = sanitize(String(body.itemType ?? ''), 60);
    const message = sanitize(String(body.message ?? ''), 4000);

    // Server-side validation (never trust client input)
    if (!visitorName) return json({ error: 'Full name is required.' }, 400);
    if (!isValidEmail(visitorEmail)) return json({ error: 'A valid email address is required.' }, 400);
    if (!visitorPhone) return json({ error: 'Phone number is required.' }, 400);
    if (!itemTitle) return json({ error: 'Selected item is required.' }, 400);
    if (!message) return json({ error: 'A message is required.' }, 400);

    const allowedTypes = ['Project', 'Certificate', 'Internship Certificate'];
    if (!allowedTypes.includes(itemType)) {
      return json({ error: 'Invalid item type.' }, 400);
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: 'Server is not configured for submissions.' }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    // Primary: store the inquiry in the database (guaranteed reliable).
    const { error: insertError } = await supabase.from('inquiries').insert({
      visitor_name: visitorName,
      visitor_email: visitorEmail,
      visitor_phone: visitorPhone,
      company,
      item_title: itemTitle,
      item_type: itemType,
      message,
    });

    if (insertError) {
      console.error('Inquiry insert failed:', insertError.message);
      return json({ error: 'Could not submit your request. Please try again.' }, 500);
    }

    // Best-effort: email the owner via Resend if a key is configured.
    // The inquiry is already stored in the database regardless.
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      const emailSubject = `Portfolio request: ${itemTitle} (${itemType})`;
      const emailBody = [
        `New portfolio inquiry received`,
        ``,
        `Selected item: ${itemTitle}`,
        `Type: ${itemType}`,
        ``,
        `From: ${visitorName}`,
        `Email: ${visitorEmail}`,
        `Phone: ${visitorPhone}`,
        company ? `Company: ${company}` : null,
        ``,
        `Message:`,
        message,
        ``,
        `Submitted: ${new Date().toISOString()}`,
      ]
        .filter((line) => line !== null)
        .join('\n');

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: OWNER_EMAIL,
            subject: emailSubject,
            text: emailBody,
          }),
        });
      } catch (emailErr) {
        // Email is best-effort; the inquiry is already stored.
        console.error('Owner email notification failed:', (emailErr as Error).message);
      }
    }

    return json({ success: true });
  } catch (err) {
    console.error('submit-inquiry error:', (err as Error).message);
    return json({ error: 'Something went wrong. Please try again.' }, 500);
  }
});
