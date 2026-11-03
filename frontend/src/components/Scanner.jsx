import React, { useRef, useState, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { SAMPLE_PRESETS } from '../mockData';

export default function Scanner({ 
  onAnalyzeFile, 
  onAnalyzePreset, 
  selectedPreset, 
  isAnalyzing, 
  error,
  onReset 
}) {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedPreset) {
      setPreviewUrl(selectedPreset.svg);
      setSelectedFile(null);
    }
  }, [selectedPreset]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleStartAnalysis = () => {
    if (selectedFile) {
      onAnalyzeFile(selectedFile);
    } else if (selectedPreset) {
      onAnalyzePreset(selectedPreset);
    } else {
      // Default sample
      onAnalyzePreset(SAMPLE_PRESETS[0]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Friendly Guide Banner */}
      <div className="card" style={{
        background: '#e8f5ed',
        borderColor: '#a7f3d0',
        padding: '24px 28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '28px' }}>📸</span>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#166534' }}>
            Check Your Plant in 3 Simple Steps
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: '16px', color: '#374151', maxWidth: '800px' }}>
          Take a photo of the sick leaf on your plant. Our AI will tell you what disease it is, how serious it is, and give you step-by-step instructions on how to cure it.
        </p>

        {/* 3 Step Visual Instructions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="step-number">1</span>
            <span style={{ fontWeight: 600, fontSize: '15px' }}>Upload or choose a leaf photo</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="step-number">2</span>
            <span style={{ fontWeight: 600, fontSize: '15px' }}>Click "Check Leaf Now"</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="step-number">3</span>
            <span style={{ fontWeight: 600, fontSize: '15px' }}>See medicine & treatment steps</span>
          </div>
        </div>
      </div>

      {/* Main Upload Box */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(280px, 0.8fr)',
        gap: '24px',
        alignItems: 'start'
      }}>
        
        {/* Left: Upload Box */}
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '14px' }}>
            Step 1: Provide Your Plant Leaf Photo
          </h2>

          <input 
            ref={fileInputRef}
            type="file" 
            accept="image/*" 
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {!previewUrl ? (
            /* Big Clickable Upload Area */
            <div 
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: '3px dashed #d1d5db',
                borderRadius: '12px',
                padding: '40px 20px',
                textAlign: 'center',
                backgroundColor: '#f9fafb',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#e8f5ed',
                color: '#1b7a42',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <Upload size={32} />
              </div>

              <div style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
                Tap here to take photo or choose from gallery
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '18px' }}>
                Supports standard photos from phone or computer
              </div>

              <button 
                type="button" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                <Camera size={18} />
                <span>Select Photo</span>
              </button>
            </div>
          ) : (
            /* Photo Preview */
            <div>
              <div style={{
                width: '100%',
                height: '300px',
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <img 
                  src={previewUrl} 
                  alt="Selected Leaf" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={handleStartAnalysis}
                  disabled={isAnalyzing}
                  className="btn btn-primary btn-large"
                  style={{ flex: 1 }}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Checking Plant Disease...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      <span>Check Leaf Now</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="btn btn-secondary"
                >
                  Change Photo
                </button>
              </div>

              {error && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fca5a5',
                  color: '#991b1b',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Quick Example Leaves */}
        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>
            Don't have a photo right now?
          </h2>
          <p style={{ fontSize: '14px', color: '#4b5563', margin: '0 0 16px 0' }}>
            Click any common plant problem below to test how it works:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {SAMPLE_PRESETS.map((preset) => (
              <div
                key={preset.id}
                onClick={() => onAnalyzePreset(preset)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: selectedPreset?.id === preset.id ? '2px solid #1b7a42' : '1px solid #e5e7eb',
                  backgroundColor: selectedPreset?.id === preset.id ? '#e8f5ed' : '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#163325'
                }}>
                  <img src={preset.svg} alt={preset.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827' }}>
                    {preset.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    Crop: {preset.crop}
                  </div>
                </div>

                <span style={{ fontSize: '13px', color: '#1b7a42', fontWeight: 700 }}>
                  Try →
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
