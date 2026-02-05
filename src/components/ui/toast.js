const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

let toastLimit = 5;
let nextToastId = 1;
const timers = new Map();

const DEFAULT_DURATION = 2800;

const cssEscape = (value) => {
    const str = String(value);
    if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') return CSS.escape(str);
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
};

const TYPE_CLASS = {
    info: 'glass-toast--info',
    success: 'glass-toast--success',
    warning: 'glass-toast--warning',
    error: 'glass-toast--error'
};

const getIconSvg = (type) => {
    const common = 'width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

    switch (type) {
        case 'success':
            return `<svg ${common}><path d="M20 6 9 17l-5-5"/></svg>`;
        case 'error':
            return `<svg ${common}><path d="M18 6 6 18"/><path d="M6 6 18 18"/></svg>`;
        case 'warning':
            return `<svg ${common}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`;
        case 'info':
        default:
            return `<svg ${common}><path d="M12 16v-4"/><path d="M12 8h.01"/><circle cx="12" cy="12" r="10"/></svg>`;
    }
};

const ensureContainer = () => {
    if (!isBrowser()) return null;
    if (!document.body) return null;

    let container = document.querySelector('.toast-container[data-frostglass-toast="1"]');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.setAttribute('data-frostglass-toast', '1');
        document.body.appendChild(container);
    }
    return container;
};

const clampLimit = (value) => {
    const num = Number(value);
    if (!Number.isFinite(num)) return 5;
    return Math.max(1, Math.min(10, Math.floor(num)));
};

const scheduleAutoClose = (id, node, duration) => {
    if (!isBrowser()) return;
    if (!duration || duration <= 0) return;

    const t = window.setTimeout(() => dismiss(id), duration);
    timers.set(id, { timer: t, node });
};

const clearTimer = (id) => {
    const entry = timers.get(id);
    if (!entry) return;
    window.clearTimeout(entry.timer);
    timers.delete(id);
};

const removeNode = (id, node) => {
    if (!node) return;
    clearTimer(id);

    const finish = () => {
        node.removeEventListener('animationend', finish);
        node.remove();
    };

    node.addEventListener('animationend', finish, { once: true });
    node.classList.remove('toast-enter');
    node.classList.add('toast-exit');

    // 兜底：某些环境 animationend 不触发
    window.setTimeout(finish, 350);
};

export const dismiss = (id) => {
    if (!isBrowser()) return;
    const toastId = String(id);
    const entry = timers.get(toastId);
    if (entry?.node) {
        removeNode(toastId, entry.node);
        return;
    }
    const node = document.querySelector(`.glass-toast[data-toast-id="${cssEscape(toastId)}"]`);
    if (node) removeNode(toastId, node);
};

export const clearToasts = () => {
    if (!isBrowser()) return;
    const container = ensureContainer();
    if (!container) return;
    container.querySelectorAll('.glass-toast').forEach((node) => {
        const id = node.getAttribute('data-toast-id');
        if (id) clearTimer(id);
        node.remove();
    });
};

export const configureToast = ({ limit } = {}) => {
    toastLimit = clampLimit(limit);
};

export const showToast = ({
    type = 'info',
    title,
    message,
    duration = DEFAULT_DURATION,
    id
} = {}) => {
    const container = ensureContainer();
    if (!container) return null;

    const toastId = String(id ?? nextToastId++);
    const safeType = TYPE_CLASS[type] ? type : 'info';

    const toast = document.createElement('div');
    toast.className = `glass-toast toast-enter ${TYPE_CLASS[safeType]}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', safeType === 'error' ? 'assertive' : 'polite');
    toast.setAttribute('data-toast-id', String(toastId));

    const icon = document.createElement('span');
    icon.className = 'glass-toast-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = getIconSvg(safeType);

    const content = document.createElement('div');
    content.className = 'glass-toast-content';

    if (title) {
        const t = document.createElement('div');
        t.className = 'glass-toast-title';
        t.textContent = String(title);
        content.appendChild(t);
    }

    if (message) {
        const m = document.createElement('div');
        m.className = 'glass-toast-message';
        m.textContent = String(message);
        content.appendChild(m);
    }

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'glass-toast-close';
    close.setAttribute('aria-label', '关闭');
    close.textContent = '×';
    close.addEventListener('click', () => dismiss(toastId));

    toast.appendChild(icon);
    toast.appendChild(content);
    toast.appendChild(close);

    container.appendChild(toast);

    // 超上限：移除最早的（保留动画）
    const all = container.querySelectorAll('.glass-toast');
    if (all.length > toastLimit) {
        const overflow = all.length - toastLimit;
        for (let i = 0; i < overflow; i += 1) {
            const node = all[i];
            const oldId = node.getAttribute('data-toast-id');
            removeNode(oldId ?? '', node);
        }
    }

    scheduleAutoClose(toastId, toast, duration);
    return toastId;
};

export const toast = {
    show: showToast,
    info: (message, options = {}) => showToast({ ...options, type: 'info', message }),
    success: (message, options = {}) => showToast({ ...options, type: 'success', message }),
    warning: (message, options = {}) => showToast({ ...options, type: 'warning', message }),
    error: (message, options = {}) => showToast({ ...options, type: 'error', message }),
    dismiss,
    clear: clearToasts,
    configure: configureToast
};
