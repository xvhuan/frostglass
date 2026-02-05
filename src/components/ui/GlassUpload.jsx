import React, { useRef, useState } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import '../../styles/glass.css';

const GlassUpload = ({
    accept,
    multiple,
    onUpload,
    title = '点击或拖拽文件上传',
    hint = '支持 JPG, PNG, PDF (最大 10MB)',
    showList = true,
    className = '',
    ...props
}) => {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => (multiple ? [...prev, ...newFiles] : newFiles));
        if (onUpload) onUpload(newFiles);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles(prev => (multiple ? [...prev, ...newFiles] : newFiles));
        if (onUpload) onUpload(newFiles);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <div className={`glass-upload-container ${className}`} {...props}>
            <div
                className={`glass-upload-zone ${isDragging ? 'active' : ''}`}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                style={props.style}
            >
                <Upload size={32} strokeWidth={1.5} />
                <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.2rem' }}>{title}</p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{hint}</p>
                </div>
                <input
                    type="file"
                    ref={inputRef}
                    style={{ display: 'none' }}
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileChange}
                />
            </div>

            {showList && files.length > 0 && (
                <div className="glass-upload-file-list">
                    {files.map((file, index) => (
                        <div key={index} className="glass-upload-file-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                                <FileText size={16} />
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</span>
                            </div>
                            <button
                                onClick={() => removeFile(index)}
                                style={{ color: 'var(--color-text-dim)', cursor: 'pointer', display: 'flex' }}
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GlassUpload;
