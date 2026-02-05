import React, { useState } from 'react';
import '../../styles/glass.css';

export const GlassInput = ({ label, error, ...props }) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
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
            <input className="glass-input" {...props} />
            {error && (
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', marginTop: '0.2rem', display: 'block' }}>
                    {error}
                </span>
            )}
        </div>
    );
};
