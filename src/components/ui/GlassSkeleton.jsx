import React from 'react';
import '../../styles/glass.css';

const GlassSkeleton = ({ width, height, borderRadius, className = '', ...props }) => {
    return (
        <div
            className={`glass-skeleton ${className}`}
            style={{
                width,
                height,
                borderRadius: borderRadius || '8px',
                ...props.style
            }}
            {...props}
        />
    );
};

export default GlassSkeleton;
