import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../styles/glass.css';

const GlassDropdown = ({ options, value, onChange, placeholder = 'Select...' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (isOpen) setShouldRender(true);
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) setShouldRender(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLabel = options.find(o => o.value === value)?.label || placeholder;

    return (
        <div ref={ref} style={{ position: 'relative', minWidth: '150px' }}>
            <button
                className="glass-input"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: isOpen ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)'
                }}
            >
                <span>{selectedLabel}</span>
                <ChevronDown size={16}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s'
                    }}
                />
            </button>

            {shouldRender && (
                <div
                    className={`glass ${isOpen ? 'glass-dropdown-enter' : 'glass-dropdown-exit'}`}
                    onAnimationEnd={handleAnimationEnd}
                    style={{
                        position: 'absolute',
                        top: '110%',
                        left: 0,
                        right: 0,
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '0.5rem',
                        zIndex: 50,
                        maxHeight: '200px',
                        overflowY: 'auto'
                    }}
                >
                    {options.map(opt => (
                        <div
                            key={opt.value}
                            onClick={() => {
                                onChange(opt.value);
                                setIsOpen(false);
                            }}
                            style={{
                                padding: '0.6rem 0.8rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                color: value === opt.value ? 'var(--color-primary)' : 'var(--color-text)',
                                background: value === opt.value ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                fontSize: '0.9rem',
                                transition: 'background 0.2s',
                                marginBottom: '4px'
                            }}
                            onMouseEnter={e => {
                                if (value !== opt.value) e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                            }}
                            onMouseLeave={e => {
                                if (value !== opt.value) e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GlassDropdown;
