import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/glass.css';

const GlassCarousel = ({ slides, className = '', autoPlay = false, ...props }) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    React.useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval);
    }, [autoPlay, slides.length]);

    return (
        <div className={`glass-carousel ${className}`} {...props}>
            <button className="glass-carousel-btn prev" onClick={prev}>
                <ChevronLeft size={20} />
            </button>
            <div className="glass-carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="glass-carousel-slide">
                        {slide}
                    </div>
                ))}
            </div>
            <button className="glass-carousel-btn next" onClick={next}>
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default GlassCarousel;
