import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import '../../styles/glass.css';

const GlassAlert = ({ type = 'info', title, children, className = '', ...props }) => {
    const styles = {
        info: {
            background: 'rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            color: '#1d4ed8',
            icon: <Info size={20} />
        },
        success: {
            background: 'rgba(16, 185, 129, 0.1)',
            borderColor: 'rgba(16, 185, 129, 0.2)',
            color: '#047857',
            icon: <CheckCircle size={20} />
        },
        warning: {
            background: 'rgba(245, 158, 11, 0.1)',
            borderColor: 'rgba(245, 158, 11, 0.2)',
            color: '#b45309',
            icon: <AlertCircle size={20} />
        },
        error: {
            background: 'rgba(239, 68, 68, 0.1)',
            borderColor: 'rgba(239, 68, 68, 0.2)',
            color: '#b91c1c',
            icon: <XCircle size={20} />
        }
    };

    const currentStyle = styles[type] || styles.info;

    return (
        <div
            className={`glass-alert ${className}`}
            style={{
                background: currentStyle.background,
                borderColor: currentStyle.borderColor,
                color: currentStyle.color,
                ...props.style
            }}
            {...props}
        >
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
                {currentStyle.icon}
            </div>
            <div>
                {title && <h5 className="glass-alert-title">{title}</h5>}
                <div className="glass-alert-desc">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GlassAlert;
