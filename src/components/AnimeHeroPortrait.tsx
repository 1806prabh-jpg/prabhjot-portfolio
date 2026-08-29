/**
 * AnimeHeroPortrait — an elegant SVG illustrated portrait placeholder in the
 * anime/illustration professional style described in the brief.
 *
 * This is a placeholder. Replace the <image> at the marked spot, or swap this
 * whole component, with the actual anime-style portrait of Prabhjot Singh.
 */
export function AnimeHeroPortrait({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      className={className}
      role="img"
      aria-label="Illustrated anime-style portrait placeholder of Prabhjot Singh"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#0f1828" />
          <stop offset="100%" stopColor="#131f33" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0f1828" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2a4a" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <rect width="420" height="520" rx="28" fill="url(#bg)" />
      <rect width="420" height="520" rx="28" fill="url(#glow)" />
      {/* dotted grid */}
      <g fill="#94b2dc" opacity="0.10">
        {Array.from({ length: 12 }).map((_, r) =>
          Array.from({ length: 10 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={20 + c * 42} cy={20 + r * 42} r="1.4" />
          )),
        )}
      </g>

      {/* glow ring */}
      <circle cx="210" cy="190" r="132" fill="none" stroke="url(#ring)" strokeWidth="2.5" opacity="0.5" />
      <circle cx="210" cy="190" r="148" fill="none" stroke="url(#ring)" strokeWidth="1" opacity="0.25" strokeDasharray="4 8" />

      {/* shoulders / hoodie */}
      <path d="M90 520 C 110 430, 150 392, 210 392 C 270 392, 310 430, 330 520 Z" fill="url(#hoodie)" />
      <path d="M150 412 C 170 400, 250 400, 270 412 L 262 432 C 244 422, 176 422, 158 432 Z" fill="#0b1220" opacity="0.55" />
      <path d="M198 392 c 8 12, 16 12, 24 0" fill="none" stroke="#0b1220" strokeWidth="3" opacity="0.5" />

      {/* neck */}
      <rect x="192" y="356" width="36" height="46" rx="14" fill="#e8b48a" />
      <path d="M192 386 c 12 8, 36 8, 36 -2" fill="#d99a6c" opacity="0.6" />

      {/* face */}
      <path d="M140 250 C 140 180, 175 138, 210 138 C 245 138, 280 180, 280 250 C 280 300, 250 348, 210 348 C 170 348, 140 300, 140 250 Z" fill="#f2c194" />
      {/* hair back */}
      <path d="M132 250 C 128 168, 170 128, 210 128 C 252 128, 292 170, 288 252 C 286 232, 270 210, 268 206 L 268 150 C 250 130, 170 130, 152 150 L 152 206 C 150 210, 134 232, 132 250 Z" fill="url(#hair)" />
      {/* hair front (side-swept, neat, professional) */}
      <path d="M150 196 C 158 150, 190 130, 210 130 C 232 130, 264 150, 270 198 C 250 178, 232 172, 218 176 C 230 188, 234 200, 234 210 C 214 188, 190 182, 176 196 C 184 178, 196 170, 206 168 C 188 166, 168 176, 158 196 C 154 196, 152 196, 150 196 Z" fill="url(#hair)" />
      <path d="M150 196 c -4 22 -4 40 0 54 c 2 -16 6 -28 12 -34" fill="url(#hair)" />

      {/* eyes (anime style: large, clean) */}
      <g>
        <ellipse cx="184" cy="256" rx="13" ry="17" fill="#0b1220" />
        <ellipse cx="184" cy="252" rx="6" ry="7" fill="#38bdf8" />
        <circle cx="187" cy="250" r="2.4" fill="#fff" />
        <path d="M168 242 c 10 -6, 24 -6, 32 0" fill="none" stroke="#0b1220" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <g>
        <ellipse cx="238" cy="256" rx="13" ry="17" fill="#0b1220" />
        <ellipse cx="238" cy="252" rx="6" ry="7" fill="#38bdf8" />
        <circle cx="241" cy="250" r="2.4" fill="#fff" />
        <path d="M222 242 c 10 -6, 24 -6, 32 0" fill="none" stroke="#0b1220" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* eyebrows */}
      <path d="M168 230 c 10 -5, 24 -5, 32 1" fill="none" stroke="#1b2a4a" strokeWidth="3" strokeLinecap="round" />
      <path d="M222 231 c 10 -6, 24 -6, 32 1" fill="none" stroke="#1b2a4a" strokeWidth="3" strokeLinecap="round" />
      {/* nose + mouth */}
      <path d="M210 274 c 2 8, 2 14, -2 20" fill="none" stroke="#d99a6c" strokeWidth="2" strokeLinecap="round" />
      <path d="M198 304 c 8 6, 18 6, 26 0" fill="none" stroke="#b56b4a" strokeWidth="2.4" strokeLinecap="round" />
      {/* blush */}
      <ellipse cx="170" cy="288" rx="9" ry="5" fill="#f4889a" opacity="0.35" />
      <ellipse cx="252" cy="288" rx="9" ry="5" fill="#f4889a" opacity="0.35" />

      {/* ear + headphone */}
      <rect x="118" y="250" width="14" height="40" rx="7" fill="#0b1220" />
      <rect x="288" y="250" width="14" height="40" rx="7" fill="#0b1220" />
      <path d="M132 250 C 150 232, 270 232, 288 250" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.5" />

      {/* floating code screen */}
      <g className="float-slow" style={{ transformOrigin: '360px 150px' }}>
        <rect x="318" y="110" width="92" height="66" rx="10" fill="#0b1220" stroke="url(#ring)" strokeWidth="1.5" />
        <rect x="318" y="110" width="92" height="14" rx="10" fill="#111c30" />
        <circle cx="328" cy="117" r="2.4" fill="#f87171" />
        <circle cx="336" cy="117" r="2.4" fill="#fbbf24" />
        <circle cx="344" cy="117" r="2.4" fill="#34d399" />
        <rect x="326" y="132" width="40" height="4" rx="2" fill="url(#screen)" />
        <rect x="326" y="142" width="56" height="4" rx="2" fill="#5eead4" opacity="0.7" />
        <rect x="326" y="152" width="30" height="4" rx="2" fill="#38bdf8" opacity="0.7" />
        <rect x="326" y="162" width="48" height="4" rx="2" fill="#818cf8" opacity="0.7" />
      </g>

      {/* floating chip */}
      <g className="float-slower" style={{ transformOrigin: '70px 360px' }}>
        <rect x="36" y="338" width="74" height="44" rx="10" fill="#0b1220" stroke="url(#ring)" strokeWidth="1.5" />
        <circle cx="54" cy="360" r="8" fill="url(#screen)" />
        <rect x="68" y="354" width="32" height="4" rx="2" fill="#5eead4" />
        <rect x="68" y="364" width="22" height="4" rx="2" fill="#9fb2cc" />
      </g>

      {/* small sparkles */}
      <g fill="#5eead4">
        <path d="M300 90 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" opacity="0.8" />
        <path d="M70 200 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" opacity="0.6" />
        <path d="M350 300 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" opacity="0.5" />
      </g>
    </svg>
  );
}
