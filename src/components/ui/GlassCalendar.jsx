import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import '../../styles/glass.css';

const GlassCalendar = ({ date, onDateSelect, className = '', ...props }) => {
    const today = new Date();
    // State for the currently displayed month/year
    const [viewDate, setViewDate] = useState(date || today);
    // State for the actual selected date
    const [selectedDateValue, setSelectedDateValue] = useState(date || null);

    const getDaysInMonth = (d) => {
        const year = d.getFullYear();
        const month = d.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (d) => {
        const year = d.getFullYear();
        const month = d.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const handlePrevYear = () => {
        setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
    };

    const handleNextYear = () => {
        setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
    };

    const handleDateClick = (day) => {
        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        setSelectedDateValue(newDate);
        if (onDateSelect) onDateSelect(newDate);
    };

    const jumpTo = (when) => {
        const d = new Date();
        if (when === 'today') {
            // d is already now
        } else if (when === 'tomorrow') {
            d.setDate(d.getDate() + 1);
        }
        setViewDate(d);
        setSelectedDateValue(d);
        if (onDateSelect) onDateSelect(d);
    };

    const renderDays = () => {
        const daysInMonth = getDaysInMonth(viewDate);
        const firstDay = getFirstDayOfMonth(viewDate);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="glass-calendar-day empty"></div>);
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            // Check if this specific day is "today"
            const isToday =
                i === today.getDate() &&
                viewDate.getMonth() === today.getMonth() &&
                viewDate.getFullYear() === today.getFullYear();

            // Check if this specific day is "selected"
            const isSelected =
                selectedDateValue &&
                i === selectedDateValue.getDate() &&
                viewDate.getMonth() === selectedDateValue.getMonth() &&
                viewDate.getFullYear() === selectedDateValue.getFullYear();

            days.push(
                <div
                    key={i}
                    className={`glass-calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDateClick(i)}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

    return (
        <div className={`glass-calendar ${className}`} {...props} style={props.style}>
            <div className="glass-calendar-header">
                <div style={{ display: 'flex', gap: '4px' }}>
                    <button onClick={handlePrevYear} title="上一年" className="glass-calendar-nav">
                        <ChevronsLeft size={18} color="var(--color-text)" />
                    </button>
                    <button onClick={handlePrevMonth} title="上个月" className="glass-calendar-nav">
                        <ChevronLeft size={18} color="var(--color-text)" />
                    </button>
                </div>

                <span className="glass-calendar-title">
                    {viewDate.getFullYear()}年 {viewDate.getMonth() + 1}月
                </span>

                <div style={{ display: 'flex', gap: '4px' }}>
                    <button onClick={handleNextMonth} title="下个月" className="glass-calendar-nav">
                        <ChevronRight size={18} color="var(--color-text)" />
                    </button>
                    <button onClick={handleNextYear} title="下一年" className="glass-calendar-nav">
                        <ChevronsRight size={18} color="var(--color-text)" />
                    </button>
                </div>
            </div>

            <div className="glass-calendar-grid">
                {weekDays.map(day => (
                    <div key={day} className="glass-calendar-day-header">{day}</div>
                ))}
                {renderDays()}
            </div>
        </div>
    );
};

export default GlassCalendar;
