import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/glass.css';

const GlassPagination = ({ currentPage, totalPages, onPageChange, className = '', ...props }) => {

    const pages = [];
    // Simple logic for demonstration. In a real app, you'd handle truncated ranges (1, 2, ..., 10)
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // Improve display logic to show only window of pages if totalPages is large
    // (Simplified for this component version)

    return (
        <div className={`glass-pagination ${className}`} {...props}>
            <button
                className={`glass-pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`glass-pagination-item ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className={`glass-pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
};

export default GlassPagination;
