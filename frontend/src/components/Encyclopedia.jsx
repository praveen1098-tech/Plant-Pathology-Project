import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Leaf, 
  ShieldAlert, 
  ArrowRight, 
  X,
  ExternalLink,
  Tag
} from 'lucide-react';
import { INITIAL_ENCYCLOPEDIA } from '../mockData';

export default function Encyclopedia({ onSelectDisease }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [activeModalDisease, setActiveModalDisease] = useState(null);

  const pathogenTypes = ['All', 'Fungal', 'Bacterial', 'Viral', 'Oomycete / Water Mold', 'Non-pathogenic'];

  const filteredDiseases = INITIAL_ENCYCLOPEDIA.filter(disease => {
    const matchesType = selectedType === 'All' || disease.pathogen_type.toLowerCase() === selectedType.toLowerCase();
    const matchesSearch = 
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.scientific_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.host_crops.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Title & Filter Bar */}
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
            <BookOpen size={15} />
            <span>Botanical Pathology Reference</span>
          </div>
          <h1 style={{ fontSize: '32px', margin: 0, color: 'var(--forest-dark)' }}>
            Plant Disease Encyclopedia
          </h1>
          <p style={{ margin: 0, marginTop: '6px', fontSize: '15px', color: 'var(--text-secondary)' }}>
            Comprehensive etiology, symptomatology, transmission routes, and IPM protocols.
          </p>
        </div>

        {/* Search Input Box */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.85)',
          padding: '10px 16px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--glass-border-strong)',
          boxShadow: 'var(--shadow-ambient)',
          minWidth: '280px'
        }}>
          <Search size={16} color="var(--text-tertiary)" />
          <input 
            type="text"
            placeholder="Search crop, pathogen, or symptom..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              fontFamily: 'inherit',
              width: '100%',
              color: 'var(--forest-dark)'
            }}
          />
          {searchQuery && (
            <X 
              size={14} 
              color="var(--text-tertiary)" 
              style={{ cursor: 'pointer' }}
              onClick={() => setSearchQuery('')}
            />
          )}
        </div>
      </div>

      {/* Pathogen Filter Badges */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {pathogenTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: selectedType === type ? '#10b981' : 'rgba(22, 51, 37, 0.1)',
              background: selectedType === type ? '#10b981' : 'rgba(255, 255, 255, 0.75)',
              color: selectedType === type ? '#ffffff' : 'var(--forest-dark)',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: selectedType === type ? '0 4px 14px rgba(16, 185, 129, 0.3)' : 'none'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Encyclopedia Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {filteredDiseases.map(disease => (
          <div
            key={disease.id}
            className="glass-panel"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => setActiveModalDisease(disease)}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span className={`severity-badge ${disease.risk_level}`}>
                  {disease.severity} Severity
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {disease.pathogen_type}
                </span>
              </div>

              <h3 style={{ fontSize: '20px', margin: 0, marginBottom: '4px', color: 'var(--forest-dark)' }}>
                {disease.name}
              </h3>

              <div style={{ fontSize: '14px', fontStyle: 'italic', color: '#047857', fontFamily: "'Playfair Display', Georgia, serif", marginBottom: '12px' }}>
                {disease.scientific_name}
              </div>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                {disease.host_crops.map(crop => (
                  <span key={crop} style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: 'rgba(22, 51, 37, 0.06)',
                    color: 'var(--text-secondary)'
                  }}>
                    {crop}
                  </span>
                ))}
              </div>

              <p style={{
                margin: 0,
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {disease.symptoms[0]}
              </p>
            </div>

            <div style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(22, 51, 37, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700 }}>
                View Full Pathology Profile
              </span>
              <ArrowRight size={15} color="#059669" />
            </div>
          </div>
        ))}
      </div>

      {/* Disease Detail Slide-over / Modal */}
      {activeModalDisease && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 36, 26, 0.45)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setActiveModalDisease(null)}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-modal)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className={`severity-badge ${activeModalDisease.risk_level}`} style={{ marginBottom: '8px' }}>
                  {activeModalDisease.severity}
                </span>
                <h2 style={{ fontSize: '28px', margin: 0, color: 'var(--forest-dark)' }}>
                  {activeModalDisease.name}
                </h2>
                <div style={{ fontSize: '16px', fontStyle: 'italic', color: '#047857', fontFamily: "'Playfair Display', serif" }}>
                  {activeModalDisease.scientific_name}
                </div>
              </div>

              <button 
                onClick={() => setActiveModalDisease(null)}
                style={{
                  background: 'rgba(22, 51, 37, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                  Diagnostic Symptoms
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {activeModalDisease.symptoms.map((s, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>{s}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '16px', borderRadius: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '14px', color: '#047857', marginBottom: '6px' }}>
                  Organic & Biological Control
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {activeModalDisease.organic_treatment.map((t, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>{t}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '16px', borderRadius: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '14px', color: '#1d4ed8', marginBottom: '6px' }}>
                  Chemical & Conventional Treatment
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {activeModalDisease.chemical_treatment.map((t, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                  Transmission Vectors
                </h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {activeModalDisease.transmission_vectors}
                </p>
              </div>

              <div>
                <h4 style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                  Agronomic Prevention
                </h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {activeModalDisease.prevention}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

