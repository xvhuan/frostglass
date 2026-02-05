import React from 'react';
import '../../styles/glass.css';

const GlassSlider = ({ value, min = 0, max = 100, onChange, ...props }) => {
    // Calculate percentage for background fill effect if we wanted to add it dynamically,
    // but standard range input styling handles most of it.

    return (
        <div className="glass-slider-container" style={props.style}>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange && onChange(Number(e.target.value))}
                className="glass-slider"
                {...props}
            />
        </div>
    );
};

export default GlassSlider;
