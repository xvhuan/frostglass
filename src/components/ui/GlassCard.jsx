import React from 'react';
import '../../styles/glass.css';

const GlassCard = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`${hoverEffect ? 'glass-interactive' : 'glass'} ${className}`}
            style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
            {...props}
        >
            {/* Optional shine effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
            }} />
            {children}
        </div>
    );
};

export default GlassCard;
