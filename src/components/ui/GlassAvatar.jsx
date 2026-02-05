import React from 'react';
import '../../styles/glass.css';

const GlassAvatar = ({ src, alt, fallback, size = 'md', className = '', ...props }) => {
    const sizeStyles = {
        sm: { width: '32px', height: '32px', fontSize: '12px' },
        md: { width: '40px', height: '40px', fontSize: '14px' },
        lg: { width: '56px', height: '56px', fontSize: '18px' },
        xl: { width: '80px', height: '80px', fontSize: '24px' },
    };

    return (
        <div
            className={`glass-avatar ${className}`}
            style={{ ...sizeStyles[size], ...props.style }}
            {...props}
        >
            {src ? (
                <img src={src} alt={alt} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
            ) : null}
            <span
                className="glass-avatar-fallback"
                style={{ display: src ? 'none' : 'flex' }}
            >
                {fallback || alt?.charAt(0).toUpperCase() || '?'}
            </span>
        </div>
    );
};

export default GlassAvatar;
