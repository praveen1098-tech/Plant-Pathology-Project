import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  Shield, 
  Sliders, 
  Save, 
  Check, 
  Server, 
  Bell, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function SettingsProfile({ 
  userRole, 
  setUserRole, 
  apiHealth,
  onRefreshHealth 
}) {
  const [farmName, setFarmName] = useState('Verdant Valley Agriscience');
  const [operatorName, setOperatorName] = useState('Dr. Praveen Reddy');
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);
  const [quarantineAlerts, setQuarantineAlerts] = useState(true);
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:8000');
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2400);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Title */}
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
          <Settings size={15} />
          <span>Diagnostic Laboratory & User Configurations</span>
        </div>
        <h1 style={{ fontSize: '32px', margin: 0, color: 'var(--forest-dark)' }}>
          Profile & System Settings
        </h1>
        <p style={{ margin: 0, marginTop: '6px', fontSize: '15px', color: 'var(--text-secondary)' }}>
          Configure field operator credentials, active farm sectors, neural thresholds, and FastAPI endpoints.
        </p>
      </div>

      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* User Identity Section */}
        <section className="glass-panel" style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <User size={20} color="#059669" />
            <h3 style={{ margin: 0, fontSize: '18px' }}>Operator Profile & Organization</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Field Investigator / Operator Name
              </label>
              <input 
                type="text"
                value={operatorName}
                onChange={(e) => setOperatorName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid var(--glass-border-strong)',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: 'var(--forest-dark)',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Farm / Research Facility Name
              </label>
              <input 
                type="text"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid var(--glass-border-strong)',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: 'var(--forest-dark)',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Active Persona Perspective
              </label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid var(--glass-border-strong)',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: 'var(--forest-dark)',
                  outline: 'none'
                }}
              >
                <option value="farmer">🌾 Farmer / Commercial Grower</option>
                <option value="student">🔬 Student / Agronomist</option>
                <option value="researcher">🧬 Plant Pathologist / Researcher</option>
              </select>
            </div>
          </div>
        </section>

        {/* Neural Classifier Parameters */}
        <section className="glass-panel" style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Sliders size={20} color="#059669" />
            <h3 style={{ margin: 0, fontSize: '18px' }}>Diagnostic Engine Calibration</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Minimum Confidence Alert Threshold
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#047857' }}>
                  {confidenceThreshold}%
                </span>
              </div>
              <input 
                type="range"
                min="50"
                max="99"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981' }}
              />
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                Scans below this score trigger a recommendation for a secondary microscopic inspection.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--forest-dark)' }}>
                  Automated High-Virulence Quarantine Warning
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                  Display immediate isolation warning when Late Blight or TYLCV is detected.
                </div>
              </div>
              <input 
                type="checkbox"
                checked={quarantineAlerts}
                onChange={(e) => setQuarantineAlerts(e.target.checked)}
                style={{ width: '20px', height: '20px', accentColor: '#10b981', cursor: 'pointer' }}
              />
            </div>
          </div>
        </section>

        {/* Backend Endpoint & Status */}
        <section className="glass-panel" style={{ padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Server size={20} color="#059669" />
              <h3 style={{ margin: 0, fontSize: '18px' }}>FastAPI Inference Core</h3>
            </div>
            <button
              type="button"
              onClick={onRefreshHealth}
              className="apple-button apple-button-secondary"
              style={{ fontSize: '12px', padding: '6px 14px' }}
            >
              <RefreshCw size={13} />
              <span>Ping Engine</span>
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(22, 51, 37, 0.08)'
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Engine Status</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: apiHealth?.status === 'ok' ? '#047857' : '#dc2626', marginTop: '2px' }}>
                {apiHealth?.status === 'ok' ? 'Online & Functional' : 'Offline'}
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(22, 51, 37, 0.08)'
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Indexed Catalog Classes</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--forest-dark)', marginTop: '2px' }}>
                {apiHealth?.classes_loaded || 8} Active Disease Classes
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(22, 51, 37, 0.08)'
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Indexed Reference Images</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--forest-dark)', marginTop: '2px' }}>
                {apiHealth?.images_indexed?.toLocaleString() || '24,860'}
              </div>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Inference Server URL
            </label>
            <input 
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid var(--glass-border-strong)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                color: 'var(--forest-dark)',
                outline: 'none'
              }}
            />
          </div>
        </section>

        {/* Save Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            type="submit"
            className="apple-button apple-button-primary"
            style={{ padding: '14px 32px', fontSize: '15px' }}
          >
            <Save size={16} />
            <span>Save Settings</span>
          </button>

          {savedToast && (
            <span style={{ fontSize: '14px', color: '#047857', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={16} />
              <span>Settings updated successfully!</span>
            </span>
          )}
        </div>

      </form>

    </div>
  );
}

