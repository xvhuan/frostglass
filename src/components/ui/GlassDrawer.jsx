import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import '../../styles/glass.css';

const GlassDrawer = ({ isOpen, onClose, placement = 'left', title, children, className = '', ...props }) => {

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <>
            <div className="glass-drawer-overlay" onClick={onClose}></div>
            <div
                className={`glass-drawer-content glass-drawer-${placement} ${className}`}
                {...props}
            >
                <div className="glass-drawer-header">
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{title}</h3>
                    <button onClick={onClose} style={{ padding: '4px', cursor: 'pointer', opacity: 0.6 }}>
                        <X size={20} />
                    </button>
                </div>
                <div className="glass-drawer-body">
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
};

export default GlassDrawer;
