import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import '../../styles/glass.css';

const GlassModal = ({ isOpen, onClose, title, children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            // Calculate scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="glass-overlay">
            <div
                className="glass glass-animate-enter"
                style={{
                    width: '90%',
                    maxWidth: '500px',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h3>
                    <button
                        onClick={onClose}
                        className="glass-close-btn"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default GlassModal;
