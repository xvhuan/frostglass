import React from 'react';
import '../../styles/glass.css';

const GlassBadge = ({ children, variant = 'default', className = '', ...props }) => {
    const variants = {
        default: { background: 'rgba(255, 255, 255, 0.5)', color: 'var(--color-text)' },
        primary: { background: 'rgba(59, 130, 246, 0.2)', color: '#1d4ed8', border: '1px solid rgba(59, 130, 246, 0.3)' },
        success: { background: 'rgba(16, 185, 129, 0.2)', color: '#047857', border: '1px solid rgba(16, 185, 129, 0.3)' },
        warning: { background: 'rgba(245, 158, 11, 0.2)', color: '#b45309', border: '1px solid rgba(245, 158, 11, 0.3)' },
        error: { background: 'rgba(239, 68, 68, 0.2)', color: '#b91c1c', border: '1px solid rgba(239, 68, 68, 0.3)' },
    };

    const style = {
        ...variants[variant] || variants.default,
    };

    return (
        <span className={`glass-badge ${className}`} style={{ ...style, ...props.style }} {...props}>
            {children}
        </span>
    );
};

export default GlassBadge;
