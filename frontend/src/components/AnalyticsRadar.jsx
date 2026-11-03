import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  MapPin, 
  ShieldAlert, 
  Droplets, 
  Cpu, 
  FileSpreadsheet,
  CheckCircle2,
  PieChart
} from 'lucide-react';

export default function AnalyticsRadar({ analyticsData }) {
  const data = analyticsData || {};
  const distribution = data.pathogen_distribution || [
    { name: 'Fungal Blights & Molds', percentage: 42.5, count: 6300, color: '#10B981' },
    { name: 'Bacterial Spots', percentage: 24.1, count: 3570, color: '#F59E0B' },
    { name: 'Viral Inversions', percentage: 14.8, count: 2190, color: '#EF4444' },
    { name: 'Healthy Tissue', percentage: 18.6, count: 2760, color: '#059669' }
  ];

  const outbreaks = data.regional_outbreaks || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Title Header */}
      <div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#059669',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          marginBottom: '8px'
        }}>
          <BarChart3 size={15} />
          <span>Epidemiological Radar & Machine Learning Telemetry</span>
        </div>
        <h1 style={{ fontSize: '32px', margin: 0, color: 'var(--forest-dark)' }}>
          Research & Epidemic Analytics
        </h1>
        <p style={{ margin: 0, marginTop: '6px', fontSize: '15px', color: 'var(--text-secondary)' }}>
          Real-time pathogen prevalence, regional spore drift alerts, and neural classifier calibration metrics.
        </p>
      </div>

      {/* Top 3 Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Overall Model Accuracy</span>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#047857', marginTop: '4px' }}>
            96.8<span style={{ fontSize: '18px' }}>%</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
            ResNet + Color Histogram fusion
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Indexed Specimen Dataset</span>
          <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--forest-dark)', marginTop: '4px' }}>
            24,860
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
            Multi-host pathology images indexed
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Mean Latency</span>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#2563eb', marginTop: '4px' }}>
            14.8<span style={{ fontSize: '18px' }}>ms</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
            FastAPI async pipeline inference
          </div>
        </div>
      </div>

      {/* Pathogen Distribution Breakdown Bar Chart */}
      <section className="glass-panel" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '20px', margin: 0, marginBottom: '6px' }}>
          Pathological Distribution Matrix
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Frequency of diagnosed crop diseases categorized across all registered farm quadrants.
        </p>

        {/* Stacked Proportional Bar */}
        <div style={{
          width: '100%',
          height: '24px',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
          display: 'flex',
          marginBottom: '24px',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {distribution.map((item, idx) => (
            <div 
              key={idx}
              title={`${item.name}: ${item.percentage}%`}
              style={{
                width: `${item.percentage}%`,
                background: item.color,
                transition: 'width 0.4s ease'
              }}
            />
          ))}
        </div>

        {/* Legend Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {distribution.map((item, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '14px 18px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(22, 51, 37, 0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--forest-dark)' }}>{item.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'JetBrains Mono', monospace" }}>{item.percentage}%</span>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{item.count?.toLocaleString()} samples</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Surveillance Outbreaks */}
      <section className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '20px', margin: 0, marginBottom: '4px' }}>
              Regional Outbreak Surveillance & Spore Forecast
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
              Integrated microclimate sensors and aerial spore trap alerts.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {outbreaks.map((outbreak, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '18px 22px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--glass-border-strong)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: outbreak.risk === 'Critical' ? 'rgba(220, 38, 38, 0.12)' : 'rgba(234, 88, 12, 0.12)',
                  color: outbreak.risk === 'Critical' ? '#dc2626' : '#ea580c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--forest-dark)' }}>
                    {outbreak.region}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Pathogen: <strong>{outbreak.pathogen}</strong> · Vector: {outbreak.affected_crop}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Humidity Index</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--forest-dark)' }}>{outbreak.humidity}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Trajectory</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: outbreak.trend.startsWith('+') ? '#dc2626' : '#059669' }}>
                    {outbreak.trend}
                  </div>
                </div>

                <span className={`severity-badge ${outbreak.risk.toLowerCase()}`}>
                  {outbreak.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

