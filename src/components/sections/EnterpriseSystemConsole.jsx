/**
 * OFOQ ENTERPRISE SYSTEM CONSOLE
 * Interactive Mission-Critical Architecture, Telemetry & High-Scale Benchmark Console
 */

import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import { TechnicalLabel, Button } from '../ui/index.js';

export function EnterpriseSystemConsole() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState('stream'); // 'stream' | 'topology' | 'benchmarks'
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [simulationCompleted, setSimulationCompleted] = useState(false);

  // Live streaming log items
  const [logs, setLogs] = useState([
    { id: 1, time: '16:04:21', tag: 'GPS_TELEMETRY', project: 'Visgo', text: 'Geo-packet ingested (lat: 30.0444, lng: 31.2357) • 14ms', ok: true },
    { id: 2, time: '16:04:22', tag: 'ESCROW_KERNEL', project: 'WePort', text: 'Bilateral cryptographic contract locked in escrow ledger • 0 breaches', ok: true },
    { id: 3, time: '16:04:23', tag: 'TICKER_FEED', project: 'Wealth', text: 'Real-time gold ticker broadcasted to 15,240 subscribers in 32ms', ok: true },
    { id: 4, time: '16:04:24', tag: 'ROUTING_ENGINE', project: 'Nexus', text: 'Truck fleet path recomputed dynamically (-18% fuel transit delay)', ok: true },
    { id: 5, time: '16:04:25', tag: 'SEARCH_INDEX', project: 'Qismah', text: 'Elasticsearch faceted query executed across 42k listings in 38ms', ok: true },
    { id: 6, time: '16:04:26', tag: 'WEBRTC_SFU', project: 'PulseCare', text: 'HD Video packet routing adapted to fluctuating 3G peer bandwidth', ok: true },
  ]);

  // Periodic subtle tick simulation to show alive telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => {
        const last = prev[prev.length - 1];
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        const newLog = {
          id: Date.now(),
          time: timeStr,
          tag: 'CLUSTER_PULSE',
          project: 'Ofoq OS',
          text: `Telemetry synchronized across 12 worker nodes • Latency: ${Math.floor(28 + Math.random() * 18)}ms`,
          ok: true,
        };
        return [...prev.slice(1), newLog];
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationProgress(0);
    setSimulationCompleted(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setSimulationProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationCompleted(true);
      }
    }, 250);
  };

  return (
    <div className="ofoq-console-panel">
      {/* Console Header Bar */}
      <div className="ofoq-console-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4de0bf',
                boxShadow: '0 0 10px #4de0bf',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              OFOQ CLOUD KERNEL // 99.98% SLA
            </span>
          </div>
          <TechnicalLabel variant="emerald" style={{ fontSize: '9px', padding: '0.15rem 0.5rem' }}>
            HIGH-CONCURRENCY ARCHITECTURE
          </TechnicalLabel>
        </div>

        {/* Console Navigation Tabs */}
        <div className="ofoq-console-tabs">
          <button
            onClick={() => setActiveTab('stream')}
            className={`ofoq-console-tab-btn ${activeTab === 'stream' ? 'is-active' : ''}`}
          >
            {t('console.tabStream')}
          </button>
          <button
            onClick={() => setActiveTab('topology')}
            className={`ofoq-console-tab-btn ${activeTab === 'topology' ? 'is-active' : ''}`}
          >
            {t('console.tabTopology')}
          </button>
          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`ofoq-console-tab-btn ${activeTab === 'benchmarks' ? 'is-active' : ''}`}
          >
            {t('console.tabBenchmarks')}
          </button>
        </div>
      </div>

      {/* Console Content Window */}
      <div style={{ padding: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
        {/* TAB 1: LIVE OPERATIONS STREAM */}
        {activeTab === 'stream' && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.85rem',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>{isRtl ? 'سجل العمليات اللحظية الموزعة:' : 'LIVE DISTRIBUTED OPERATIONS FEED:'}</span>
              <span style={{ color: '#4de0bf' }}>● INGESTION ACTIVE</span>
            </div>

            <div className="ofoq-terminal-window">
              {logs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    paddingBlock: '0.3rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ color: '#627299' }}>[{log.time}]</span>
                  <span
                    style={{
                      color: '#cba16a',
                      background: 'rgba(203, 161, 106, 0.1)',
                      padding: '1px 5px',
                      borderRadius: '3px',
                      fontSize: '10px',
                    }}
                  >
                    {log.tag}
                  </span>
                  <span style={{ color: '#4de0bf', fontWeight: 600 }}>{log.project}</span>
                  <span style={{ color: '#eef3ff', flex: 1, minWidth: '200px' }}>{log.text}</span>
                  <span style={{ color: '#38c2a3', fontSize: '10px' }}>✓ OK</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CLOUD & SERVICE TOPOLOGY */}
        {activeTab === 'topology' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '0.85rem',
              }}
            >
              {/* Layer 1 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(46, 199, 255, 0.25)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#2ec7ff', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  TIER 01 // EDGE & PROXY
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: '#fff', fontWeight: 700 }}>
                  Cloudflare & Envoy WAF
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  DDoS Shield • SSL Termination • Dynamic Edge Caching
                </div>
              </div>

              {/* Layer 2 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(77, 224, 191, 0.25)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#4de0bf', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  TIER 02 // SERVICES
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: '#fff', fontWeight: 700 }}>
                  Golang & NestJS Microservices
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  High Concurrency • WebSockets • Stateless Scalability
                </div>
              </div>

              {/* Layer 3 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 161, 106, 0.25)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#cba16a', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  TIER 03 // STREAMING
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: '#fff', fontWeight: 700 }}>
                  Apache Kafka & Redis Pub/Sub
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Zero-Loss Event Bus • In-Memory High-Speed Sync
                </div>
              </div>

              {/* Layer 4 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#c084fc', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  TIER 04 // DATA VAULT
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: '#fff', fontWeight: 700 }}>
                  PostgreSQL Shards & Timescale
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Multi-AZ Replication • Automatic Failover • AES-256
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                background: 'rgba(28, 93, 78, 0.08)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid rgba(77, 224, 191, 0.2)',
              }}
            >
              {isRtl
                ? '⚡ جميع منظوماتنا مصممة وفق معمارية متوازية (Parallel Microservices) بدون أي نقطة انهيار فردية (Zero SPOF)، مع تدوير وتحديث تلقائي دون توقف الخدمة (Zero-Downtime Rolling Updates).'
                : '⚡ All systems engineered with decoupled microservices and zero single-point-of-failure (Zero SPOF), supporting automated self-healing and zero-downtime rolling releases.'}
            </div>
          </div>
        )}

        {/* TAB 3: STRESS BENCHMARKS & LOAD SIMULATOR */}
        {activeTab === 'benchmarks' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '0.85rem',
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#4de0bf', fontFamily: 'var(--font-display)' }}>
                  100k+
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  {t('console.metricConcurrent')}
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#2ec7ff', fontFamily: 'var(--font-display)' }}>
                  &lt; 45ms
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  {t('console.metricLatency')}
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#cba16a', fontFamily: 'var(--font-display)' }}>
                  99.98%
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  {t('console.metricUptime')}
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                  AES-256
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  {t('console.metricSecurity')}
                </div>
              </div>
            </div>

            {/* Interactive Simulator Trigger */}
            <div
              style={{
                background: 'rgba(4, 8, 19, 0.9)',
                border: '1px solid var(--border-default)',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff' }}>
                    {isRtl ? 'أداة التحقق من كفاءة المعمارية تحت الضغط' : 'Concurrency Load Verification Tool'}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    {isRtl ? 'محاكاة تدفق 50,000 عملية متزامنة لاختبار صمود خطوط المعالجة' : 'Simulate 50,000 concurrent streaming operations'}
                  </div>
                </div>

                <Button
                  variant="primary"
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  style={{ fontSize: 'var(--text-xs)', minHeight: '2.4rem' }}
                >
                  {isSimulating ? t('console.runningStress') : t('console.runStressBtn')}
                </Button>
              </div>

              {isSimulating && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#4de0bf', fontFamily: 'var(--font-mono)' }}>
                    <span>CONCURRENT WORKERS FIRING...</span>
                    <span>{simulationProgress}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${simulationProgress}%`,
                        background: 'linear-gradient(90deg, #1c5d4e, #4de0bf)',
                        transition: 'width 0.2s ease',
                      }}
                    />
                  </div>
                </div>
              )}

              {simulationCompleted && (
                <div
                  style={{
                    background: 'rgba(28, 93, 78, 0.25)',
                    border: '1px solid #4de0bf',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    color: '#4de0bf',
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}
                >
                  ✓ {t('console.stressSuccess')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

