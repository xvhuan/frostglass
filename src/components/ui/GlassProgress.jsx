import React from 'react';
import '../../styles/glass.css';

const GlassProgress = ({ value, max = 100, height = '12px', color, ...props }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div
            className="glass-progress-container"
            style={{ height, ...props.style }}
        >
            <div
                className="glass-progress-bar"
                style={{
                    width: `${percentage}%`,
                    backgroundColor: color || undefined
                }}
            ></div>
        </div>
    );
};

export default GlassProgress;
