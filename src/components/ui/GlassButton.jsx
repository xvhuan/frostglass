import React from 'react';
import '../../styles/glass.css';

/**
 * A glassmorphism styled button
 * @param {string} variant - 'primary', 'secondary', 'ghost'
 * @param {string} size - 'sm', 'md', 'lg'
 */
const GlassButton = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const sizeClasses = {
        sm: { fontSize: '0.8rem', padding: '0.4rem 0.8rem' },
        md: { fontSize: '0.95rem', padding: '0.6rem 1.2rem' },
        lg: { fontSize: '1.1rem', padding: '0.8rem 1.6rem' },
    };

    return (
        <button
            className={`glass-btn ${variant} ${className}`}
            style={{
                ...sizeClasses[size],
                ...props.style
            }}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default GlassButton;
