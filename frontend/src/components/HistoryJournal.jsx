import React, { useState } from 'react';
import { 
  History, 
  Calendar, 
  Search, 
  Filter, 
  CheckCircle, 
  AlertTriangle, 
  ShieldAlert, 
  Download, 
  Trash2,
  MapPin,
  Clock
} from 'lucide-react';

export default function HistoryJournal({ 
  scans, 
  onSelectScan, 
  onClearHistory,
  userRole 
}) {
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScans = scans.filter(scan => {
    const matchesSev = filterSeverity === 'All' || scan.severity.toLowerCase() === filterSeverity.toLowerCase();
    const matchesSearch = 
      scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (scan.field_zone && scan.field_zone.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSev && matchesSearch;
  });

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scans, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `plantpath-field-journal-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Title & Action Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
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
            <History size={15} />
            <span>Field Longitudinal Journal</span>
          </div>
          <h1 style={{ fontSize: '32px', margin: 0, color: 'var(--forest-dark)' }}>
            Diagnosis Scan Journal
          </h1>
          <p style={{ margin: 0, marginTop: '6px', fontSize: '15px', color: 'var(--text-secondary)' }}>
            Historical record of all leaf scans, zone allocations, confidence vectors, and quarantine actions.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={exportJSON}
            className="apple-button apple-button-secondary"
            style={{ fontSize: '13px' }}
          >
            <Download size={15} />
            <span>Export Journal Data</span>
          </button>

          {scans.length > 0 && (
            <button 
              onClick={onClearHistory}
              className="apple-button apple-button-secondary"
              style={{ fontSize: '13px', color: '#dc2626' }}
              title="Clear current session history"
            >
              <Trash2 size={15} />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel" style={{
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.85)',
          padding: '8px 14px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--glass-border-strong)',
          minWidth: '240px'
        }}>
          <Search size={15} color="var(--text-tertiary)" />
          <input 
            type="text"
            placeholder="Filter scans by crop or field zone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              width: '100%',
              color: 'var(--forest-dark)'
            }}
          />
        </div>

        {/* Severity Pills */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['All', 'Critical', 'High', 'Moderate', 'None'].map(sev => (
            <button
              key={sev}
              onClick={() => setFilterSeverity(sev)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: filterSeverity === sev ? '#10b981' : 'rgba(22, 51, 37, 0.08)',
                background: filterSeverity === sev ? '#10b981' : 'rgba(255, 255, 255, 0.7)',
                color: filterSeverity === sev ? '#ffffff' : 'var(--forest-dark)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* Journal Table/List */}
      <div className="glass-panel" style={{ padding: '24px', overflowX: 'auto' }}>
        {filteredScans.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No matching scan logs found in the journal.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredScans.map((scan) => (
              <div 
                key={scan.id}
                onClick={() => onSelectScan(scan)}
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(22, 51, 37, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
                  e.currentTarget.style.borderColor = 'rgba(22, 51, 37, 0.08)';
                }}
              >
                {/* ID & Date */}
                <div style={{ minWidth: '130px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    {scan.id}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <Clock size={12} />
                    <span>{scan.timestamp}</span>
                  </div>
                </div>

                {/* Pathogen & Crop */}
                <div style={{ flex: 1, minWidth: '180px' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--forest-dark)' }}>
                    {scan.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {scan.crop} {scan.field_zone ? `· ${scan.field_zone}` : ''}
                  </div>
                </div>

                {/* Status Pill */}
                <div style={{ minWidth: '120px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(22, 51, 37, 0.06)',
                    color: 'var(--forest-medium)'
                  }}>
                    {scan.status || 'Verified'}
                  </span>
                </div>

                {/* Severity Badge */}
                <div>
                  <span className={`severity-badge ${scan.risk_level || 'medium'}`}>
                    {scan.severity}
                  </span>
                </div>

                {/* Confidence */}
                <div style={{ textAlign: 'right', minWidth: '80px' }}>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--forest-dark)'
                  }}>
                    {scan.confidence}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

