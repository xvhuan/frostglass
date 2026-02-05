import React, { useState } from 'react';
import { Star } from 'lucide-react';
import '../../styles/glass.css';

const GlassRating = ({ value = 0, max = 5, onChange, readOnly = false, size = 20, className = '', ...props }) => {
    const [hoverValue, setHoverValue] = useState(0);

    return (
        <div className={`glass-rating ${className}`} onMouseLeave={() => setHoverValue(0)} {...props}>
            {Array.from({ length: max }).map((_, i) => {
                const starValue = i + 1;
                const displayValue = hoverValue > 0 ? hoverValue : value;
                const isFilled = displayValue >= starValue;

                return (
                    <Star
                        key={i}
                        size={size}
                        className={`glass-rating-star ${isFilled ? 'filled' : ''}`}
                        fill={isFilled ? 'currentColor' : 'none'}
                        onMouseEnter={() => !readOnly && setHoverValue(starValue)}
                        onClick={() => !readOnly && onChange && onChange(starValue)}
                        style={{ cursor: readOnly ? 'default' : 'pointer' }}
                    />
                );
            })}
        </div>
    );
};

export default GlassRating;
