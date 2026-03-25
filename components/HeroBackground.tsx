import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ── Orbs scattered across full page ─────────────── */
const orbs = [
  { color: '#7c3aed', size: 600, x: '8%',   y: '8%',   blur: 140, delay: 0,   dur: 10 },
  { color: '#4f46e5', size: 420, x: '80%',  y: '4%',   blur: 110, delay: 1.5, dur: 13 },
  { color: '#a855f7', size: 340, x: '90%',  y: '35%',  blur: 100, delay: 0.8, dur: 8  },
  { color: '#6366f1', size: 280, x: '4%',   y: '55%',  blur: 90,  delay: 2.2, dur: 15 },
  { color: '#8b5cf6', size: 220, x: '55%',  y: '25%',  blur: 70,  delay: 0.4, dur: 9  },
  { color: '#7c3aed', size: 360, x: '20%',  y: '75%',  blur: 110, delay: 1.1, dur: 12 },
  { color: '#a855f7', size: 250, x: '70%',  y: '80%',  blur: 85,  delay: 1.9, dur: 7  },
  { color: '#4f46e5', size: 190, x: '45%',  y: '90%',  blur: 65,  delay: 0.6, dur: 11 },
];

/* ── Particles ───────────────────────────────────── */
const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: (i * 137.5) % 100,              // golden-ratio spread — no Math.random
  size: (i % 5) * 0.4 + 0.5,
  dur:  6 + (i % 11),
  delay:(i * 0.17) % 12,
  opacity: 0.12 + (i % 7) * 0.06,
}));

/* ── Component ───────────────────────────────────── */
const PageBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef  = useRef(0);

  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let autoOffset = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const ROW_UNIT  = 80;
    const TOTAL_ROWS = 20;
    const COLS      = 12;

    const draw = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      /* combine auto-scroll + scroll position */
      const scrollDriven = scrollRef.current * 0.18;
      const offset = (autoOffset + scrollDriven) % (ROW_UNIT * TOTAL_ROWS);

      const hz = H * 0.52;   // horizon
      const vx = W * 0.5;    // vanishing x

      /* ── vertical lines ── */
      for (let c = 0; c <= COLS; c++) {
        const srcX = (c / COLS) * W;
        const spread = (srcX - vx) / W;
        const dstX  = vx + spread * W * 4;

        const g = ctx.createLinearGradient(vx, hz, dstX, H + 20);
        g.addColorStop(0,    'rgba(139,92,246,0)');
        g.addColorStop(0.25, 'rgba(139,92,246,0.22)');
        g.addColorStop(1,    'rgba(139,92,246,0.04)');
        ctx.beginPath();
        ctx.moveTo(vx, hz);
        ctx.lineTo(dstX, H + 20);
        ctx.strokeStyle = g;
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      /* ── horizontal lines (perspective) ── */
      for (let r = 0; r < TOTAL_ROWS; r++) {
        const raw   = (r * ROW_UNIT + offset) % (ROW_UNIT * TOTAL_ROWS);
        const ratio = Math.pow(raw / (ROW_UNIT * TOTAL_ROWS), 1.35);
        const y     = hz + (H + 20 - hz) * ratio;
        if (y <= hz || y > H + 10) continue;

        const sp    = 0.4 + ratio * 3.8;
        const alpha = ratio * 0.38;
        const x0    = vx - W * sp;
        const x1    = vx + W * sp;

        const hg = ctx.createLinearGradient(x0, 0, x1, 0);
        hg.addColorStop(0,    'rgba(139,92,246,0)');
        hg.addColorStop(0.12, `rgba(139,92,246,${alpha})`);
        hg.addColorStop(0.5,  `rgba(167,139,250,${alpha * 1.5})`);
        hg.addColorStop(0.88, `rgba(139,92,246,${alpha})`);
        hg.addColorStop(1,    'rgba(139,92,246,0)');
        ctx.beginPath();
        ctx.moveTo(x0, y);
        ctx.lineTo(x1, y);
        ctx.strokeStyle = hg;
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      /* ── horizon glow bar ── */
      const hglow = ctx.createLinearGradient(0, hz - 50, 0, hz + 70);
      hglow.addColorStop(0,   'rgba(139,92,246,0)');
      hglow.addColorStop(0.4, 'rgba(139,92,246,0.15)');
      hglow.addColorStop(0.55,'rgba(167,139,250,0.30)');
      hglow.addColorStop(1,   'rgba(139,92,246,0)');
      ctx.fillStyle = hglow;
      ctx.fillRect(0, hz - 50, W, 120);

      autoOffset = (autoOffset + 0.45) % (ROW_UNIT * TOTAL_ROWS);
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    /* fixed → covers entire viewport at all times */
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Glowing orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  orb.size,
            height: orb.size,
            left:   orb.x,
            top:    orb.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${orb.color}28 0%, ${orb.color}08 55%, transparent 75%)`,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            y:    [0, -28, 12, -18, 0],
            x:    [0, 18, -12, 22, 0],
            scale:[1, 1.07, 0.97, 1.05, 1],
          }}
          transition={{ duration: orb.dur, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Rising particles */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            width:  s.size,
            height: s.size,
            left:   `${s.x}%`,
            bottom: 0,
            boxShadow: `0 0 ${s.size * 4}px ${s.size}px rgba(167,139,250,0.55)`,
          }}
          animate={{ y: ['0vh', '-105vh'], opacity: [0, s.opacity, s.opacity, 0] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Canvas grid — fills exactly one viewport */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.95 }}
      />

      {/* Subtle vignette to keep text readable over the whole page */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgba(17,17,17,0.65) 100%)',
        }}
      />
    </div>
  );
};

export default PageBackground;
