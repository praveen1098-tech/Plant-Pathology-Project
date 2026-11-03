import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Leaf, 
  ArrowLeft,
  Printer,
  BookmarkPlus
} from 'lucide-react';

export default function DiagnosisResult({ 
  result, 
  onScanAnother, 
  onSaveToJournal, 
  isSaved 
}) {
  if (!result) return null;

  const isHealthy = result.disease_id === 'healthy' || result.risk_level === 'low';

  const getSeverityBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'critical':
      case 'high':
        return <span className="badge badge-danger">⚠️ Urgent: High Danger to Crop</span>;
      case 'medium':
      case 'moderate':
        return <span className="badge badge-warning">⚡ Moderate: Needs Treatment Soon</span>;
      default:
        return <span className="badge badge-success">✅ Healthy / Low Risk</span>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Back Button */}
      <div>
        <button 
          onClick={onScanAnother}
          className="btn btn-secondary"
          style={{ padding: '8px 16px', fontSize: '14px' }}
        >
          <ArrowLeft size={16} />
          <span>Check another plant</span>
        </button>
      </div>

      {/* Main Result Header Card */}
      <div className="card" style={{
        backgroundColor: isHealthy ? '#f0fdf4' : '#fffbeb',
        borderColor: isHealthy ? '#86efac' : '#fcd34d',
        padding: '30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          
          <div>
            <div style={{ marginBottom: '10px' }}>
              {getSeverityBadge(result.risk_level)}
            </div>

            <h1 style={{ fontSize: '32px', margin: '0 0 8px 0', color: '#111827' }}>
              {result.name}
            </h1>

            <div style={{ fontSize: '15px', color: '#4b5563', marginBottom: '14px' }}>
              Scientific Name: <em>{result.scientific_name}</em>
              {result.host_crops && ` · Plants affected: ${result.host_crops.join(', ')}`}
            </div>

            <p style={{ margin: 0, fontSize: '16px', color: '#1f2937', maxWidth: '700px', lineHeight: 1.6 }}>
              {result.symptoms?.[0] || 'Symptoms detected on the leaf image.'}
            </p>
          </div>

          {/* Large Confidence Box */}
          <div style={{
            background: '#ffffff',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '16px 24px',
            textAlign: 'center',
            minWidth: '150px'
          }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#1b7a42', lineHeight: 1 }}>
              {result.confidence}%
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600, marginTop: '4px' }}>
              Accuracy Match
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          <button 
            onClick={onSaveToJournal}
            className="btn btn-primary"
          >
            <BookmarkPlus size={16} />
            <span>{isSaved ? 'Saved to My History' : 'Save This Result'}</span>
          </button>

          <button 
            onClick={() => window.print()}
            className="btn btn-secondary"
          >
            <Printer size={16} />
            <span>Print or Save PDF</span>
          </button>
        </div>
      </div>

      {/* Clear Two-Option Solution Box */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        
        {/* Natural & Organic Way */}
        <div className="card" style={{ borderTop: '4px solid #16a34a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '24px' }}>🌿</span>
            <div>
              <h2 style={{ fontSize: '18px', margin: 0, color: '#166534' }}>
                Option 1: Natural & Home Remedies
              </h2>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Safe for home gardens and organic farming</div>
            </div>
          </div>

          <ol style={{ paddingLeft: '20px', margin: 0, fontSize: '15px', color: '#1f2937', lineHeight: 1.7 }}>
            {result.organic_treatment?.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Medicine & Chemical Spray Way */}
        <div className="card" style={{ borderTop: '4px solid #2563eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '24px' }}>🧪</span>
            <div>
              <h2 style={{ fontSize: '18px', margin: 0, color: '#1e40af' }}>
                Option 2: Agricultural Medicine / Sprays
              </h2>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>For fast recovery or larger farms</div>
            </div>
          </div>

          <ol style={{ paddingLeft: '20px', margin: 0, fontSize: '15px', color: '#1f2937', lineHeight: 1.7 }}>
            {result.chemical_treatment?.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {step}
              </li>
            ))}
          </ol>
        </div>

      </div>

      {/* Prevention Box: How to stop it coming back */}
      <div className="card">
        <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#111827' }}>
          🛡️ How to prevent this in the future:
        </h2>
        <p style={{ margin: 0, fontSize: '15px', color: '#374151', lineHeight: 1.6 }}>
          {result.prevention || 'Water plants at the soil level rather than splashing the leaves, keep enough space between plants for fresh air flow, and remove fallen dry leaves.'}
        </p>
      </div>

    </div>
  );
}
