import React from 'react';
import '../../styles/glass.css';

const GlassTooltip = ({ content, children, className = '', ...props }) => {
    return (
        <div className={`glass-tooltip-trigger ${className}`} {...props}>
            {children}
            <div className="glass-tooltip-content">
                {content}
            </div>
        </div>
    );
};

export default GlassTooltip;
