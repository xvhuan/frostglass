import React from 'react';
import { Check } from 'lucide-react';
import '../../styles/glass.css';

const GlassCheckbox = ({ checked, onChange, label, ...props }) => {
    return (
        <label className="glass-checkbox-container" style={props.style}>
            <input
                type="checkbox"
                className="glass-checkbox-input"
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                {...props}
            />
            <span className="glass-checkbox-checkmark">
                {checked && <Check size={14} strokeWidth={3} />}
            </span>
            {label}
        </label>
    );
};

export default GlassCheckbox;
