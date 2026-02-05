import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import '../../styles/glass.css';

const GlassAccordion = ({ items, className = '', allowMultiple = false, ...props }) => {
    const [openIndexes, setOpenIndexes] = useState(new Set([0]));

    const toggle = (index) => {
        setOpenIndexes(prev => {
            const next = new Set(allowMultiple ? prev : []);
            if (prev.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <div className={`glass-accordion ${className}`} {...props}>
            {items.map((item, index) => {
                const isOpen = openIndexes.has(index);
                return (
                    <div key={index} className="glass-accordion-item">
                        <button className="glass-accordion-header" onClick={() => toggle(index)}>
                            <span>{item.title}</span>
                            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        <div className={`glass-accordion-content-wrapper ${isOpen ? 'expanded' : ''}`}>
                            <div className="glass-accordion-content">
                                <div className="glass-accordion-inner">
                                    <div style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GlassAccordion;
