import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState, useCallback } from 'react'

export const Route = createFileRoute('/')({
  component: WeddingInvitation,
})

// ── Floral SVG corner ornament ──────────────────────────────────────────────
function FloralCorner({ color = '#C8A96E', size = 80 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M4 4 Q4 40 40 40" stroke={color} strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M4 4 Q40 4 40 40" stroke={color} strokeWidth="0.6" fill="none" opacity="0.7" />
      <ellipse cx="12" cy="20" rx="4" ry="8" transform="rotate(-30 12 20)" fill={color} opacity="0.25" />
      <ellipse cx="20" cy="12" rx="4" ry="8" transform="rotate(60 20 12)" fill={color} opacity="0.25" />
      <ellipse cx="24" cy="30" rx="3" ry="7" transform="rotate(-50 24 30)" fill={color} opacity="0.2" />
      <ellipse cx="30" cy="24" rx="3" ry="7" transform="rotate(40 30 24)" fill={color} opacity="0.2" />
      <circle cx="40" cy="40" r="4" fill={color} opacity="0.5" />
      <ellipse cx="40" cy="33" rx="2.5" ry="4" fill={color} opacity="0.3" />
      <ellipse cx="40" cy="47" rx="2.5" ry="4" fill={color} opacity="0.3" />
      <ellipse cx="33" cy="40" rx="4" ry="2.5" fill={color} opacity="0.3" />
      <ellipse cx="47" cy="40" rx="4" ry="2.5" fill={color} opacity="0.3" />
      <ellipse cx="35" cy="35" rx="2.5" ry="4" transform="rotate(45 35 35)" fill={color} opacity="0.25" />
      <ellipse cx="45" cy="45" rx="2.5" ry="4" transform="rotate(45 45 45)" fill={color} opacity="0.25" />
      <ellipse cx="45" cy="35" rx="2.5" ry="4" transform="rotate(-45 45 35)" fill={color} opacity="0.25" />
      <ellipse cx="35" cy="45" rx="2.5" ry="4" transform="rotate(-45 35 45)" fill={color} opacity="0.25" />
      <circle cx="8" cy="8" r="2" fill={color} opacity="0.4" />
      <circle cx="16" cy="7" r="1.5" fill={color} opacity="0.3" />
      <circle cx="7" cy="16" r="1.5" fill={color} opacity="0.3" />
      <circle cx="28" cy="10" r="1.5" fill={color} opacity="0.25" />
      <circle cx="10" cy="28" r="1.5" fill={color} opacity="0.25" />
    </svg>
  )
}

// ── Decorative divider ───────────────────────────────────────────────────────
function GoldDivider({ light = false }: { light?: boolean }) {
  const c = light ? '#DFC090' : '#C8A96E'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${c})` }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2 L11.5 8.5 L18 10 L11.5 11.5 L10 18 L8.5 11.5 L2 10 L8.5 8.5 Z" fill={c} opacity="0.8" />
      </svg>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${c}, transparent)` }} />
    </div>
  )
}

// ── Couple silhouette SVG ────────────────────────────────────────────────────
function CoupleSilhouette() {
  return (
    <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="38" r="18" fill="#FAF6EF" />
      <path d="M62 220 C62 160 118 160 118 220" fill="#FAF6EF" />
      <rect x="72" y="56" width="36" height="50" rx="2" fill="#FAF6EF" />
      <path d="M90 60 L78 80 L90 85 L102 80 Z" fill="#FAF6EF" opacity="0.8" />
      <path d="M108 80 Q130 90 140 110" stroke="#FAF6EF" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="170" cy="38" r="18" fill="#FAF6EF" />
      <path d="M155 20 Q170 10 185 20 Q195 60 200 90" fill="#FAF6EF" opacity="0.4" />
      <path d="M155 20 Q145 60 145 90" fill="#FAF6EF" opacity="0.4" />
      <path d="M145 56 L145 120 Q157 130 170 132 Q183 130 195 120 L195 56 Z" fill="#FAF6EF" />
      <path d="M140 115 Q130 180 125 220 L215 220 Q210 180 200 115 Z" fill="#FAF6EF" />
      <path d="M145 80 Q130 90 120 110" stroke="#FAF6EF" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="115" cy="115" r="12" fill="#FAF6EF" opacity="0.7" />
      <circle cx="110" cy="108" r="7" fill="#FAF6EF" opacity="0.5" />
      <circle cx="122" cy="107" r="7" fill="#FAF6EF" opacity="0.5" />
      <rect x="113" y="125" width="4" height="16" fill="#FAF6EF" opacity="0.6" />
    </svg>
  )
}

// ── Floating rose petals ─────────────────────────────────────────────────────
function FloatingPetals() {
  const petals = [
    { x: '10%', y: '15%', r: '20px', delay: '0s', dur: '6s' },
    { x: '80%', y: '20%', r: '15px', delay: '-2s', dur: '7s' },
    { x: '60%', y: '70%', r: '18px', delay: '-4s', dur: '5.5s' },
    { x: '25%', y: '75%', r: '12px', delay: '-1s', dur: '8s' },
    { x: '90%', y: '60%', r: '16px', delay: '-3s', dur: '6.5s' },
    { x: '45%', y: '10%', r: '14px', delay: '-5s', dur: '7.5s' },
  ]
  return (
    <>
      {petals.map((p, i) => (
        <div
          key={i}
          className="petal-float"
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: p.r,
            height: p.r,
            borderRadius: '50% 0 50% 0',
            background: 'rgba(200,100,80,0.12)',
            animationDelay: p.delay,
            animationDuration: p.dur,
            transform: `rotate(${i * 40}deg)`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  )
}

// ── Countdown Timer ──────────────────────────────────────────────────────────
function CountdownTimer() {
  const TARGET_MS = 1753245600000 // 2026-07-23T12:00:00+05:30

  const getRemaining = useCallback(() => {
    const diff = TARGET_MS - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }, [TARGET_MS])

  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [getRemaining])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ display: 'flex', gap: 'clamp(16px, 4vw, 40px)', alignItems: 'center', justifyContent: 'center' }}>
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hours' },
        { value: time.minutes, label: 'Minutes' },
        { value: time.seconds, label: 'Seconds' },
      ].map(({ value, label }, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 40px)' }}>
          <div className="countdown-box">
            <div className="countdown-num">{pad(value)}</div>
            <div className="countdown-label">{label}</div>
          </div>
          {i < 3 && (
            <span style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: 'var(--gold)',
              lineHeight: 1,
              opacity: 0.7,
              marginTop: '-8px',
              animation: 'shimmer 1s ease-in-out infinite',
            }}>:</span>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const handler = () => {
      const idx = Math.round(container.scrollTop / container.clientHeight)
      setActiveSlide(idx)
    }
    container.addEventListener('scroll', handler, { passive: true })
    return () => container.removeEventListener('scroll', handler)
  }, [])

  const goTo = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="noise-overlay" />

      {/* Nav dots */}
      <nav className="nav-dots" aria-label="Page navigation">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${activeSlide === i ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </nav>

      <div className="slide-container" ref={containerRef}>

        {/* SLIDE 1 – WELCOME */}
        <div className="slide slide-welcome" ref={(el) => { slideRefs.current[0] = el }}>
          <FloatingPetals />

          <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}><FloralCorner color="#C8A96E" size={90} /></div>
          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2, transform: 'scaleX(-1)' }}><FloralCorner color="#C8A96E" size={90} /></div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, zIndex: 2, transform: 'scaleY(-1)' }}><FloralCorner color="#C8A96E" size={90} /></div>
          <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 2, transform: 'scale(-1)' }}><FloralCorner color="#C8A96E" size={90} /></div>

          <div className="silhouette-wrap"><CoupleSilhouette /></div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px' }}>
            <p className="font-display anim-fadeInUp" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)', letterSpacing: '0.4em', color: 'var(--gold)', marginBottom: '24px' }}>
              ✦ CORDIALLY INVITE YOU TO ✦
            </p>

            <h1 className="font-display anim-fadeInUp delay-200" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 500, color: 'var(--ivory)', letterSpacing: '0.25em', marginBottom: '32px' }}>
              WEDDING
            </h1>

            <div className="anim-fadeInUp delay-300" style={{ marginBottom: '20px' }}><GoldDivider light /></div>

            <h2 className="font-script anim-fadeInUp delay-400" style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Shamiz A
            </h2>
            <p className="font-serif anim-fadeInUp delay-500" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--gold-light)', fontStyle: 'italic', letterSpacing: '0.15em', margin: '6px 0' }}>
              &amp;
            </p>
            <h2 className="font-script anim-fadeInUp delay-600" style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)', color: 'var(--ivory)', lineHeight: 1.1 }}>
              Safana Hashim
            </h2>

            <div className="anim-fadeInUp delay-600" style={{ margin: '32px 0 28px' }}><GoldDivider light /></div>

            <p className="font-display anim-fadeInUp delay-800" style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', letterSpacing: '0.3em', color: 'var(--gold)' }}>
              JULY 23, 2026
            </p>
          </div>

          <div className="scroll-hint" onClick={() => goTo(1)} style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5 L12 19 M6 13 L12 19 L18 13" stroke="rgba(200,169,110,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* SLIDE 2 – INVITATION */}
        <div className="slide slide-invitation" ref={(el) => { slideRefs.current[1] = el }}>
          <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2, transform: 'scaleX(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 2, transform: 'scaleY(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 2, transform: 'scale(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
            <div style={{ width: 'min(70vw, 500px)', height: 'min(70vw, 500px)', borderRadius: '50%', border: '1px solid rgba(139,36,56,0.1)', boxShadow: '0 0 0 20px rgba(139,36,56,0.04), 0 0 0 40px rgba(139,36,56,0.02)' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 32px', maxWidth: '520px' }}>
            <p className="font-serif anim-fadeInUp" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', fontStyle: 'italic', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
              Together with our families,<br />we joyfully invite you to celebrate<br />the wedding of
            </p>

            <h2 className="font-script anim-fadeInUp delay-200" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'var(--maroon)', lineHeight: 1.1 }}>Shamiz A</h2>
            <p className="font-serif anim-fadeInUp delay-300" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--gold-dark)', fontStyle: 'italic', letterSpacing: '0.1em', margin: '4px 0' }}>&amp;</p>
            <h2 className="font-script anim-fadeInUp delay-400" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'var(--maroon)', lineHeight: 1.1 }}>Safana Hashim</h2>

            <div style={{ margin: '28px 0' }} className="anim-fadeInUp delay-500"><GoldDivider /></div>

            <p className="font-display anim-fadeInUp delay-500" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.95rem)', letterSpacing: '0.2em', color: 'var(--maroon)', marginBottom: '8px' }}>
              THURSDAY, JULY 23, 2026
            </p>
            <p className="font-serif anim-fadeInUp delay-600" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontStyle: 'italic', color: 'var(--gold-dark)', letterSpacing: '0.1em' }}>
              Safar 08, 1448
            </p>
          </div>
        </div>

        {/* SLIDE 3 – WEDDING CEREMONY */}
        <div className="slide slide-ceremony" ref={(el) => { slideRefs.current[2] = el }}>
          <FloatingPetals />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '560px', width: '100%' }}>
            <div style={{ background: 'rgba(255,252,248,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,169,110,0.4)', padding: 'clamp(32px, 6vw, 64px) clamp(24px, 6vw, 60px)', position: 'relative', boxShadow: '0 20px 60px rgba(106,26,42,0.1)' }}>
              <div style={{ position: 'absolute', top: -1, left: -1 }}><FloralCorner color="#C8A96E" size={60} /></div>
              <div style={{ position: 'absolute', top: -1, right: -1, transform: 'scaleX(-1)' }}><FloralCorner color="#C8A96E" size={60} /></div>
              <div style={{ position: 'absolute', bottom: -1, left: -1, transform: 'scaleY(-1)' }}><FloralCorner color="#C8A96E" size={60} /></div>
              <div style={{ position: 'absolute', bottom: -1, right: -1, transform: 'scale(-1)' }}><FloralCorner color="#C8A96E" size={60} /></div>

              <p className="font-display anim-fadeInUp" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', letterSpacing: '0.35em', color: 'var(--gold-dark)', marginBottom: '20px' }}>✦ YOU ARE INVITED ✦</p>

              <h2 className="font-display anim-fadeInUp delay-100" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 600, color: 'var(--maroon)', letterSpacing: '0.15em', marginBottom: '28px' }}>WEDDING CEREMONY</h2>

              <div className="anim-fadeInUp delay-200" style={{ marginBottom: '28px' }}><GoldDivider /></div>

              <p className="font-display anim-fadeInUp delay-300" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', letterSpacing: '0.2em', color: 'var(--maroon)', marginBottom: '6px' }}>Thursday, July 23, 2026</p>
              <p className="font-serif anim-fadeInUp delay-400" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', color: 'var(--gold-dark)', marginBottom: '28px' }}>Safar 08, 1448</p>

              <div className="anim-scaleIn delay-400" style={{ background: 'var(--maroon)', padding: '16px 32px', marginBottom: '28px', display: 'inline-block' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: 500, color: 'var(--ivory)', letterSpacing: '0.15em' }}>12:00 PM – 12:30 PM</p>
              </div>

              <div className="anim-fadeInUp delay-500" style={{ marginBottom: '20px' }}><GoldDivider /></div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '6px' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="var(--gold)" opacity="0.7" />
                  <circle cx="12" cy="9" r="2.5" fill="var(--ivory)" />
                </svg>
                <p className="font-display anim-fadeInUp delay-500" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', fontWeight: 500, color: 'var(--maroon)', letterSpacing: '0.1em', marginBottom: '4px' }}>Royal Auditorium</p>
                <p className="font-serif anim-fadeInUp delay-600" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', color: 'var(--text-mid)' }}>Ayathil, Kollam</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 4 – COUNTDOWN */}
        <div className="slide slide-countdown" ref={(el) => { slideRefs.current[3] = el }}>
          <FloatingPetals />

          <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}><FloralCorner color="#DFC090" size={70} /></div>
          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2, transform: 'scaleX(-1)' }}><FloralCorner color="#DFC090" size={70} /></div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, zIndex: 2, transform: 'scaleY(-1)' }}><FloralCorner color="#DFC090" size={70} /></div>
          <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 2, transform: 'scale(-1)' }}><FloralCorner color="#DFC090" size={70} /></div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px', maxWidth: '700px', width: '100%' }}>
            <p className="font-display anim-fadeInUp" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', letterSpacing: '0.4em', color: 'var(--gold)', marginBottom: '16px' }}>✦ COUNTING THE MOMENTS ✦</p>
            <h2 className="font-display anim-fadeInUp delay-100" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 500, color: 'var(--ivory)', letterSpacing: '0.2em', marginBottom: '12px' }}>WEDDING COUNTDOWN</h2>
            <p className="font-serif anim-fadeInUp delay-200" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', fontStyle: 'italic', color: 'var(--gold-light)', marginBottom: '36px' }}>July 23, 2026 · 12:00 PM IST</p>

            <div className="anim-scaleIn delay-300" style={{ marginBottom: '48px' }}>
              <CountdownTimer />
            </div>

            <div style={{ marginBottom: '32px' }}><GoldDivider light /></div>

            <p className="font-display anim-fadeInUp delay-400" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.72rem)', letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: '14px' }}>A NOTE FOR YOU</p>

            <p className="font-serif anim-fadeInUp delay-500" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontStyle: 'italic', color: 'rgba(250,246,239,0.85)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
              "Together with our families, we joyfully invite you to witness the union of two souls and celebrate with us on our wedding day."
            </p>
          </div>
        </div>

        {/* SLIDE 5 – OUR STORY */}
        <div className="slide slide-story" ref={(el) => { slideRefs.current[4] = el }}>
          <FloatingPetals />

          <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: 'clamp(8rem, 20vw, 16rem)', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(200,169,110,0.08)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', zIndex: 1 }}>&ldquo;</div>
          <div style={{ position: 'absolute', bottom: '8%', right: '5%', fontSize: 'clamp(8rem, 20vw, 16rem)', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(200,169,110,0.08)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', zIndex: 1 }}>&rdquo;</div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 32px', maxWidth: '640px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', margin: '0 auto 28px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--gold)"><path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" /></svg>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            </div>

            <p className="font-display anim-fadeInUp" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', letterSpacing: '0.4em', color: 'var(--gold)', marginBottom: '20px' }}>✦ OUR STORY ✦</p>
            <h2 className="font-display anim-fadeInUp delay-100" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', fontWeight: 500, color: 'var(--ivory)', letterSpacing: '0.2em', marginBottom: '36px' }}>OUR STORY</h2>

            <div style={{ marginBottom: '32px' }}><GoldDivider light /></div>

            <p className="font-serif anim-fadeInUp delay-300" style={{ fontSize: 'clamp(1rem, 2.8vw, 1.25rem)', fontStyle: 'italic', color: 'rgba(250,246,239,0.88)', lineHeight: 2, letterSpacing: '0.01em' }}>
              "In a world full of fleeting moments, they found something timeless in each other. Their story is woven with smiles, late-night talks, shared dreams, and countless memories that brought two souls closer every single day."
            </p>

            <div style={{ marginTop: '36px', marginBottom: '28px' }}><GoldDivider light /></div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className="font-script" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--gold-light)' }}>Shamiz</h3>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'var(--gold)', fontStyle: 'italic' }}>&amp;</span>
              <h3 className="font-script" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--gold-light)' }}>Safana</h3>
            </div>
          </div>
        </div>

        {/* SLIDE 6 – VENUE */}
        <div className="slide slide-venue" ref={(el) => { slideRefs.current[5] = el }}>
          <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2, transform: 'scaleX(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 2, transform: 'scaleY(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>
          <div style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 2, transform: 'scale(-1)' }}><FloralCorner color="#8B2438" size={80} /></div>

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px', maxWidth: '560px', width: '100%' }}>
            <p className="font-display anim-fadeInUp" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', letterSpacing: '0.4em', color: 'var(--gold-dark)', marginBottom: '16px' }}>✦ FIND US ✦</p>
            <h2 className="font-display anim-fadeInUp delay-100" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.6rem)', fontWeight: 600, color: 'var(--maroon)', letterSpacing: '0.2em', marginBottom: '28px' }}>FIND US</h2>

            <div style={{ marginBottom: '28px' }}><GoldDivider /></div>

            <div className="anim-scaleIn delay-200" style={{ background: 'var(--maroon)', padding: '32px 40px', marginBottom: '28px', position: 'relative', boxShadow: '0 20px 60px rgba(106,26,42,0.25)' }}>
              <div style={{ position: 'absolute', top: -1, left: -1 }}><FloralCorner color="#DFC090" size={44} /></div>
              <div style={{ position: 'absolute', top: -1, right: -1, transform: 'scaleX(-1)' }}><FloralCorner color="#DFC090" size={44} /></div>
              <div style={{ position: 'absolute', bottom: -1, left: -1, transform: 'scaleY(-1)' }}><FloralCorner color="#DFC090" size={44} /></div>
              <div style={{ position: 'absolute', bottom: -1, right: -1, transform: 'scale(-1)' }}><FloralCorner color="#DFC090" size={44} /></div>

              <p className="font-display" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 500, color: 'var(--ivory)', letterSpacing: '0.1em', marginBottom: '10px' }}>Royal Auditorium</p>
              <p className="font-serif" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontStyle: 'italic', color: 'var(--gold-light)', marginBottom: '6px' }}>Ayathil, Kollam, Kerala</p>
              <p className="font-display" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)', letterSpacing: '0.2em', color: 'var(--gold)', opacity: 0.8 }}>Thursday, July 23, 2026 · 12:00 PM</p>
            </div>

            <div className="anim-fadeInUp delay-400" style={{ marginBottom: '36px' }}>
              <a
                href="https://www.google.com/maps/search/Royal+Auditorium+Ayathil+Kollam+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.8" />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
                Get Directions
              </a>
            </div>

            <div style={{ marginBottom: '28px' }}><GoldDivider /></div>

            <p className="font-serif anim-fadeInUp delay-600" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '16px' }}>
              Thank You For Being Part Of Our Special Day
            </p>

            <h3 className="font-script anim-fadeInUp delay-800" style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'var(--maroon)', lineHeight: 1.2 }}>
              Shamiz A &amp; Safana Hashim
            </h3>

            <p className="font-display anim-fadeInUp delay-1000" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.3em', color: 'var(--gold-dark)', marginTop: '16px' }}>
              JULY 23, 2026 · SAFAR 08, 1448
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
