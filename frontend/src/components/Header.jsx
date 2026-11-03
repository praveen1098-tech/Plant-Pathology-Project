import React from 'react';
import { 
  Camera, 
  BookOpen, 
  History, 
  HelpCircle,
  Home
} from 'lucide-react';

export default function Header({ activeTab, setActiveTab, apiOnline }) {
  const tabs = [
    { id: 'scanner', label: 'Check Plant (Scanner)', icon: Camera },
    { id: 'dashboard', label: 'Home Overview', icon: Home },
    { id: 'encyclopedia', label: 'Plant Disease Guide', icon: BookOpen },
    { id: 'history', label: 'Past Scans', icon: History },
  ];

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '2px solid #e5e7eb',
      padding: '14px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        
        {/* Brand / Title */}
        <div 
          onClick={() => setActiveTab('scanner')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: '#1b7a42',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px'
          }}>
            🌱
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#111827', lineHeight: 1.1 }}>
              PlantPath AI
            </div>
            <div style={{ fontSize: '13px', color: '#4b5563', fontWeight: 500 }}>
              Simple Plant Health Doctor
            </div>
          </div>
        </div>

        {/* Clear Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  borderRadius: '8px',
                  border: isActive ? '2px solid #1b7a42' : '1px solid #d1d5db',
                  background: isActive ? '#e8f5ed' : '#ffffff',
                  color: isActive ? '#1b7a42' : '#374151',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                <Icon size={17} color={isActive ? '#1b7a42' : '#4b5563'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* System Status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '999px',
          background: apiOnline ? '#dcfce7' : '#fee2e2',
          border: `1px solid ${apiOnline ? '#86efac' : '#fca5a5'}`,
          fontSize: '12px',
          fontWeight: 700,
          color: apiOnline ? '#166534' : '#991b1b'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: apiOnline ? '#16a34a' : '#dc2626'
          }} />
          <span>{apiOnline ? 'System Ready' : 'Connecting...'}</span>
        </div>

      </div>
    </header>
  );
}
