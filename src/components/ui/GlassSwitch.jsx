import React from 'react';
import '../../styles/glass.css';

const GlassSwitch = ({ checked, onChange, label }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label className="glass-switch-label">
                <input
                    type="checkbox"
                    className="glass-switch-input"
                    checked={checked}
                    onChange={(e) => onChange && onChange(e.target.checked)}
                />
                <span className="glass-switch-slider"></span>
            </label>
            {label && (
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{label}</span>
            )}
        </div>
    );
};

export default GlassSwitch;
