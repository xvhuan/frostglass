import React from 'react';
import GlassModal from './GlassModal';
import GlassButton from './GlassButton';
import { AlertTriangle } from 'lucide-react';

const GlassConfirm = ({ isOpen, onClose, onConfirm, title = "确认操作", description = "您确定要执行此操作吗？", confirmText = "确认", cancelText = "取消" }) => {
    return (
        <GlassModal isOpen={isOpen} onClose={onClose} title={title}>
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', marginBottom: '1rem' }}>
                    <AlertTriangle size={32} />
                </div>
                <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {description}
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <GlassButton variant="ghost" onClick={onClose} style={{ flex: 1, border: '1px solid rgba(0,0,0,0.1)' }}>
                        {cancelText}
                    </GlassButton>
                    <GlassButton variant="primary" onClick={onConfirm} style={{ flex: 1 }}>
                        {confirmText}
                    </GlassButton>
                </div>
            </div>
        </GlassModal>
    );
};

export default GlassConfirm;
