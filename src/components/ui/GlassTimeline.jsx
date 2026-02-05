import React from 'react';
import '../../styles/glass.css';

export const GlassTimeline = ({ children, className = '', ...props }) => {
    return (
        <div className={`glass-timeline ${className}`} {...props}>
            {children}
        </div>
    );
};

export const GlassTimelineItem = ({ title, time, children, color = 'var(--color-primary)' }) => {
    return (
        <div className="glass-timeline-item">
            <div className="glass-timeline-dot" style={{ borderColor: color }}></div>
            <div style={{ marginBottom: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</h5>
                {time && <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{time}</span>}
            </div>
            <div style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                {children}
            </div>
        </div>
    );
};
