import React from 'react';
import '../../styles/glass.css';

const GlassMenu = ({ items, activeItem, onItemClick, className = '', ...props }) => {
    return (
        <div className={`glass-menu ${className}`} {...props}>
            {items.map((item, index) => (
                <div
                    key={item.key || index}
                    className={`glass-menu-item ${activeItem === item.key ? 'active' : ''}`}
                    onClick={() => onItemClick && onItemClick(item.key)}
                >
                    {item.icon && <span style={{ marginRight: '10px', display: 'flex' }}>{item.icon}</span>}
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default GlassMenu;
