import React from 'react';
import '../../styles/glass.css';

const GlassRadio = ({ checked, onChange, label, name, value, ...props }) => {
    return (
        <label className="glass-radio-container" style={props.style}>
            <input
                type="radio"
                className="glass-radio-input"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.value)}
                {...props}
            />
            <span className="glass-radio-circle"></span>
            {label}
        </label>
    );
};

export default GlassRadio;
