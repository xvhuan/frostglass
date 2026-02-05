import React from 'react';
import '../../styles/glass.css';

const GlassSpinner = ({ size = 'md', className = '', ...props }) => {
    const sizes = {
        sm: { width: '16px', height: '16px', borderWidth: '2px' },
        md: { width: '24px', height: '24px', borderWidth: '3px' },
        lg: { width: '40px', height: '40px', borderWidth: '4px' },
    };

    return (
        <div
            className={`glass-spinner ${className}`}
            style={{ ...sizes[size], ...props.style }}
            {...props}
        />
    );
};

export default GlassSpinner;
