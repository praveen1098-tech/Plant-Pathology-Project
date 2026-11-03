import React from 'react';
import { 
  ScanLine, 
  Leaf, 
  ShieldAlert, 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  ThermometerSun,
  Droplets
} from 'lucide-react';
import { SAMPLE_PRESETS } from '../mockData';

export default function Dashboard({ 
  onNavigate, 
  onSelectPreset, 
  analyticsData, 
  recentScans, 
  apiHealth 
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Hero Apple Glass Specimen Banner */}
      <section className="glass-panel" style={{
        padding: '36px 40px',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 247, 242, 0.7) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle luminous glow orb behind */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.12)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            marginBottom: '16px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981'
            }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#047857', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Optical Pathology & Foliage Triaging Core
            </span>
          </div>

          <h1 style={{
            fontSize: '38px',
            lineHeight: 1.18,
            marginBottom: '14px',
            color: 'var(--forest-dark)'
          }}>
            Diagnose Crop Pathogens with <span style={{ color: '#059669', fontStyle: 'italic' }}>Cellular Precision.</span>
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            maxWidth: '680px'
          }}>
            Designed for commercial growers, researchers, and agronomists. Upload or scan any leaf specimen to instantly detect fungal blights, bacterial spots, and viral lesions with organic biocontrol and chemical treatment prescriptions.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onNavigate('scanner')}
              className="apple-button apple-button-primary"
              style={{ fontSize: '15px', padding: '13px 28px' }}
            >
              <ScanLine size={18} />
              <span>Launch Neural Scanner</span>
            </button>

            <button 
              onClick={() => onNavigate('encyclopedia')}
              className="apple-button apple-button-secondary"
              style={{ fontSize: '15px', padding: '13px 24px' }}
            >
              <BookOpen size={18} color="#059669" />
              <span>Browse Disease Library</span>
            </button>
          </div>
        </div>
      </section>

      {/* KPI Overview Telemetry Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {/* Metric 1 */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Foliage Health Index</span>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669'
            }}>
              <Leaf size={18} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '4px' }}>
            94.8<span style={{ fontSize: '18px', color: 'var(--text-tertiary)' }}>%</span>
          </div>
          <div style={{ fontSize: '12px', color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={13} />
            <span>Optimal turgor & low spore counts</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Scans Processed</span>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(59, 130, 246, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb'
            }}>
              <ScanLine size={18} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '4px' }}>
            {analyticsData?.summary?.total_scans_processed?.toLocaleString() || '14,820'}
          </div>
          <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>
            +184 processed this week
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Pathogen Classification</span>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669'
            }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '4px' }}>
            {analyticsData?.summary?.average_confidence || 96.1}<span style={{ fontSize: '18px', color: 'var(--text-tertiary)' }}>%</span>
          </div>
          <div style={{ fontSize: '12px', color: '#047857', fontWeight: 600 }}>
            Mean spectral alignment confidence
          </div>
        </div>

        {/* Metric 4 */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Active Outbreak Alerts</span>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(220, 38, 38, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#dc2626'
            }}>
              <ShieldAlert size={18} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '4px' }}>
            03 <span style={{ fontSize: '14px', color: '#dc2626', fontWeight: 600 }}>Active</span>
          </div>
          <div style={{ fontSize: '12px', color: '#dc2626', fontWeight: 600 }}>
            Salinas Valley & Yakima County
          </div>
        </div>
      </section>

      {/* Interactive Quick-Test Specimen Gallery */}
      <section className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '24px', margin: 0, marginBottom: '4px' }}>
              Reference Leaf Herbarium
            </h2>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Click any specimen to mount it into the AI diagnostic chamber and test full inference.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('scanner')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#059669',
              fontWeight: 700,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <span>Scan custom leaf photo</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '20px'
        }}>
          {SAMPLE_PRESETS.map((preset) => (
            <div
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className="specimen-mount"
              style={{
                cursor: 'pointer',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.75)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 30px -8px rgba(18, 43, 31, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(22, 51, 37, 0.04), 0 8px 24px -6px rgba(18, 43, 31, 0.08)';
              }}
            >
              {/* Leaf Specimen Visual Slide */}
              <div style={{
                width: '100%',
                height: '140px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#163325',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '12px'
              }}>
                <img 
                  src={preset.svg} 
                  alt={preset.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="specimen-tag" style={{ color: preset.badgeColor }}>
                  {preset.crop}
                </span>
              </div>

              <div>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '4px' }}>
                  {preset.title}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: preset.badgeColor, fontWeight: 700 }}>
                    {preset.badgeLabel}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                    {preset.confidence}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Section: Regional Outbreaks & Field Scans */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '24px'
      }}>
        {/* Outbreak Radar */}
        <section className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dc2626'
              }}>
                <ShieldAlert size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Regional Epidemic Radar</h3>
            </div>
            <button 
              onClick={() => onNavigate('analytics')}
              style={{ background: 'transparent', border: 'none', color: '#059669', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
            >
              Full Analytics →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {analyticsData?.regional_outbreaks?.map((outbreak, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(22, 51, 37, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--forest-dark)' }}>
                    {outbreak.region}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {outbreak.pathogen} · <span style={{ color: 'var(--text-tertiary)' }}>{outbreak.affected_crop}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className={`severity-badge ${outbreak.risk.toLowerCase()}`}>
                    {outbreak.risk}
                  </span>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                    RH: {outbreak.humidity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Field Scan History Mini */}
        <section className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669'
              }}>
                <ScanLine size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Recent Field Diagnoses</h3>
            </div>
            <button 
              onClick={() => onNavigate('history')}
              style={{ background: 'transparent', border: 'none', color: '#059669', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
            >
              View Journal →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentScans?.slice(0, 4).map((scan) => (
              <div 
                key={scan.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(22, 51, 37, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--forest-dark)' }}>
                    {scan.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    {scan.crop} · {scan.timestamp}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className={`severity-badge ${scan.risk_level}`}>
                    {scan.confidence}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}

