import React from 'react';
import '../../styles/glass.css';

const GlassTable = ({ columns, data, className = '', ...props }) => {
    return (
        <div className={`glass-table-container ${className}`} {...props}>
            <table className="glass-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ width: col.width }}>{col.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={`${rowIndex}-${colIndex}`}>
                                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GlassTable;
