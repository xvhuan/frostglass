import React, { createContext, useContext, useState } from 'react';
import '../../styles/glass.css';

const TabsContext = createContext({});

export const GlassTabs = ({ defaultValue, value, onValueChange, children, className = '', ...props }) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    const isControlled = value !== undefined;
    const activeTab = isControlled ? value : uncontrolledValue;

    const setActiveTab = (nextValue) => {
        if (!isControlled) {
            setUncontrolledValue(nextValue);
        }
        if (onValueChange) {
            onValueChange(nextValue);
        }
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={`glass-tabs ${className}`} {...props} style={{ width: '100%', ...props.style }}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};


export const GlassTabsList = ({ children, className = '', ...props }) => {
    return (
        <div className={`glass-tabs-list ${className}`} {...props}>
            {children}
        </div>
    );
};

export const GlassTabsTrigger = ({ value, children, className = '', onClick, ...props }) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === value;

    const handleClick = (e) => {
        setActiveTab(value);
        if (onClick) onClick(e);
    };

    return (
        <button
            className={`glass-tab-trigger ${className}`}
            data-state={isActive ? 'active' : 'inactive'}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};


export const GlassTabsContent = ({ value, children, className = '', ...props }) => {
    const { activeTab } = useContext(TabsContext);

    if (activeTab !== value) return null;

    return (
        <div className={`glass-tab-content glass-animate-enter ${className}`} {...props} style={{ paddingTop: '1rem', ...props.style }}>
            {children}
        </div>
    );
};
