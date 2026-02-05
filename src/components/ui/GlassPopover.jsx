import React, { useState, useRef, useEffect } from 'react';
import '../../styles/glass.css';

const GlassPopover = ({ trigger, content, className = '', ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Simple position logic (bottom-center)
    // Real implementation would use Popper.js or floating-ui

    return (
        <div className="glass-popover-trigger" ref={containerRef} style={{ position: 'relative' }}>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'inline-block' }}>
                {trigger}
            </div>
            <div
                className={`glass-popover-content ${isOpen ? 'open' : ''} ${className}`}
                style={{ top: 'calc(100% + 10px)', left: '50%', transform: isOpen ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, -10px) scale(0.95)', ...props.style }}
                {...props}
            >
                {content}
            </div>
        </div>
    );
};

export default GlassPopover;
