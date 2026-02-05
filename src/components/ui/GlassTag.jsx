import React from 'react';
import { X } from 'lucide-react';
import '../../styles/glass.css';

const GlassTag = ({ children, onClose, className = '', ...props }) => {
    return (
        <span className={`glass-tag ${className}`} {...props}>
            {children}
            {onClose && (
                <span className="close-icon" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                    <X size={12} />
                </span>
            )}
        </span>
    );
};

export default GlassTag;
