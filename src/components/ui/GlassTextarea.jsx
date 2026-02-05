import React from 'react';
import '../../styles/glass.css';

const GlassTextarea = ({ label, error, containerStyle, ...props }) => {
    return (
        <div style={{ marginBottom: '1rem', width: '100%', ...containerStyle }}>

            {label && (
                <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--color-text)'
                }}>
                    {label}
                </label>
            )}
            <textarea className="glass-textarea" {...props} />
            {error && (
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', marginTop: '0.2rem', display: 'block' }}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default GlassTextarea;
