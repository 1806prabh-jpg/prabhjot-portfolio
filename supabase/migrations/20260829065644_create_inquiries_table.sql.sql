/*
# Create portfolio inquiries table

1. Purpose
   - Stores visitor inquiries/requests submitted from the portfolio website
     (project requests, certificate detail requests, internship requests).
   - This is a single-tenant, no-auth portfolio: visitors are NOT signed in,
     so inserts are allowed by the anon role.

2. New Tables
   - `inquiries`
     - `id`            (uuid, primary key, default gen_random_uuid())
     - `visitor_name`  (text, not null) — full name of the visitor
     - `visitor_email` (text, not null) — email address of the visitor
     - `visitor_phone` (text, not null) — phone number of the visitor
     - `company`       (text, nullable) — optional company/organization
     - `item_title`    (text, not null) — the project/certificate/internship selected
     - `item_type`     (text, not null) — 'Project' | 'Certificate' | 'Internship Certificate'
     - `message`       (text, not null) — the visitor's request/message
     - `submitted_at`  (timestamptz, default now()) — when the inquiry was submitted
     - `status`        (text, default 'new') — tracking status for the owner

3. Security
   - Enable RLS on `inquiries`.
   - This is a no-auth public portfolio. Visitors submit inquiries as the `anon` role.
   - INSERT allowed for anon + authenticated (visitors submit requests).
   - SELECT/UPDATE/DELETE restricted to authenticated (the portfolio owner
     reads/manages inquiries after signing in). anon CANNOT read inquiries —
     this prevents scraping of visitor-submitted personal data.
   - Server-side validation is enforced in the edge function, not relied on here.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_name text NOT NULL,
  visitor_email text NOT NULL,
  visitor_phone text NOT NULL,
  company text,
  item_title text NOT NULL,
  item_type text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Visitors (anon) can INSERT inquiries. This is the public submission path.
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated (the portfolio owner) can read inquiries.
-- anon CANNOT read — protects visitor personal data from public scraping.
DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries"
ON inquiries FOR SELECT
TO authenticated
USING (true);

-- Only authenticated (the portfolio owner) can update inquiry status.
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries"
ON inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated (the portfolio owner) can delete inquiries.
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries"
ON inquiries FOR DELETE
TO authenticated
USING (true);

-- Index for the owner to sort inquiries by recency.
CREATE INDEX IF NOT EXISTS inquiries_submitted_at_idx ON inquiries (submitted_at DESC);
