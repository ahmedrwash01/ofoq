/**
 * OFOQ ARCHITECTURAL VISUAL MOCKUPS
 * High-fidelity, vector-based interactive UI frames for systems
 */

import { TechnicalLabel } from '../ui/index.js';

export function ProjectVisualMockup({ type }) {
  if (type === 'nexus') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #070d18 0%, #0b1526 100%)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '1.25rem',
          fontFamily: 'var(--font-mono, monospace)',
          color: 'var(--text-secondary)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle GIS Map Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(46, 199, 255, 0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        />

        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '0.6rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4de0bf',
                boxShadow: '0 0 10px #4de0bf',
                animation: 'ofoq-pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '11px', color: '#eef3ff', fontWeight: 600 }}>FLEET COMMAND // LAT-LONG STREAM</span>
          </div>
          <TechnicalLabel variant="cyan" style={{ fontSize: '9px', padding: '0.15rem 0.45rem' }}>
            99.98% SLA
          </TechnicalLabel>
        </div>

        {/* Dynamic Route SVG Graphics */}
        <div style={{ flex: 1, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="100%" height="100%" viewBox="0 0 400 160" fill="none" style={{ overflow: 'visible' }}>
            <path
              d="M 30 130 C 90 120, 110 50, 180 60 C 240 70, 270 120, 370 40"
              stroke="rgba(46, 199, 255, 0.25)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            <path
              d="M 30 130 C 90 120, 110 50, 180 60"
              stroke="#2ec7ff"
              strokeWidth="3"
            />
            {/* Origin Node */}
            <circle cx="30" cy="130" r="5" fill="#1c5d4e" stroke="#4de0bf" strokeWidth="2" />
            {/* Active Moving Vehicle */}
            <circle cx="180" cy="60" r="8" fill="#cba16a" stroke="#fff" strokeWidth="2">
              <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Target Destination */}
            <circle cx="370" cy="40" r="5" fill="#0d1424" stroke="#eef3ff" strokeWidth="2" />

            {/* Simulated Route Label */}
            <text x="195" y="58" fill="#eef3ff" fontSize="10" fontFamily="monospace" fontWeight="bold">TRK-890 [ACTIVE - 74 KM/H]</text>
            <text x="195" y="74" fill="#9aa8c7" fontSize="9" fontFamily="monospace">ETA: 18 MIN • OPTIMIZED</text>
          </svg>
        </div>

        {/* Telemetry Footer HUD */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5rem',
            background: 'rgba(8, 15, 28, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '6px',
            padding: '0.5rem 0.75rem',
          }}
        >
          <div>
            <div style={{ fontSize: '9px', color: '#9aa8c7' }}>DISPATCHED FLEET</div>
            <div style={{ fontSize: '12px', color: '#eef3ff', fontWeight: 700 }}>120 VEHICLES</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', color: '#9aa8c7' }}>THROUGHPUT</div>
            <div style={{ fontSize: '12px', color: '#4de0bf', fontWeight: 700 }}>45K / MONTH</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', color: '#9aa8c7' }}>FUEL EFFICIENCY</div>
            <div style={{ fontSize: '12px', color: '#cba16a', fontWeight: 700 }}>+22% SAVED</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'qismah') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #09101b 0%, #111a2f 100%)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '1.25rem',
          fontFamily: 'var(--font-mono, monospace)',
          color: 'var(--text-secondary)',
          overflow: 'hidden',
        }}
      >
        {/* Top Search Simulation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '0.45rem 0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', color: '#eef3ff' }}>
            <span style={{ color: '#cba16a' }}>⚡ SEARCH:</span>
            <span>Villa • New Cairo • &lt; 50ms</span>
          </div>
          <span style={{ fontSize: '9px', color: '#4de0bf', background: 'rgba(77, 224, 191, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
            ELASTICSEARCH 8.x
          </span>
        </div>

        {/* 3D Property Model Wireframe / Showcase */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <svg width="220" height="110" viewBox="0 0 220 110" fill="none">
            {/* Isometric 3D Building wireframe */}
            <polygon points="110,15 190,50 110,85 30,50" fill="rgba(28, 93, 78, 0.35)" stroke="#1c5d4e" strokeWidth="1.5" />
            <polygon points="30,50 110,85 110,105 30,70" fill="rgba(14, 22, 40, 0.7)" stroke="#2ec7ff" strokeWidth="1" />
            <polygon points="110,85 190,50 190,70 110,105" fill="rgba(20, 30, 52, 0.7)" stroke="#cba16a" strokeWidth="1" />
            <circle cx="110" cy="50" r="14" fill="none" stroke="#eef3ff" strokeWidth="1" strokeDasharray="3 3" />
            <text x="110" y="53" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">360° TOUR</text>
          </svg>
        </div>

        {/* Property Specs Pill row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10px' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '4px', color: '#eef3ff' }}>
              4 Beds • 380 m²
            </span>
            <span style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '4px', color: '#cba16a' }}>
              Verified Owner
            </span>
          </div>
          <span style={{ color: '#4de0bf', fontWeight: 'bold' }}>150k+ Visits/Mo</span>
        </div>
      </div>
    );
  }

  // pulsecare
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #060e18 0%, #0c192d 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '1.25rem',
        fontFamily: 'var(--font-mono, monospace)',
        color: 'var(--text-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '0.6rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'ofoq-pulse 1.5s infinite' }} />
          <span style={{ fontSize: '10px', color: '#eef3ff', fontWeight: 700 }}>WEBRTC SECURE CALL // AES-256 E2EE</span>
        </div>
        <TechnicalLabel variant="emerald" style={{ fontSize: '9px', padding: '0.15rem 0.45rem' }}>
          HIPAA READY
        </TechnicalLabel>
      </div>

      {/* Video Consultation Simulation */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'relative' }}>
        {/* Physician HUD */}
        <div
          style={{
            width: '45%',
            height: '80%',
            background: 'rgba(28, 93, 78, 0.2)',
            border: '1px solid rgba(77, 224, 191, 0.3)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1c5d4e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>
            👨‍⚕️
          </div>
          <span style={{ fontSize: '9px', color: '#eef3ff' }}>Consultant MD</span>
          <span style={{ fontSize: '8px', color: '#4de0bf' }}>Adaptive SFU • 1080p</span>
        </div>

        {/* Live Patient Audio Vitals Waveform */}
        <div style={{ width: '45%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.4rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '0.4rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '8px', color: '#9aa8c7' }}>PULSE VITALS</div>
            <div style={{ fontSize: '13px', color: '#4de0bf', fontWeight: 'bold' }}>74 BPM (NORMAL)</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '0.4rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '8px', color: '#9aa8c7' }}>ENCRYPTED E-RX</div>
            <div style={{ fontSize: '11px', color: '#cba16a', fontWeight: 'bold' }}>DISPATCHED TO PHARMACY</div>
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', color: '#9aa8c7' }}>
        <span>LATENCY: 42MS</span>
        <span style={{ color: '#4de0bf' }}>10,000+ SESSIONS DELIVERED</span>
        <span>ZERO PACKET LOSS</span>
      </div>
    </div>
  );
}

