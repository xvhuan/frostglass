# 🧊 FrostGlass

[![npm version](https://img.shields.io/npm/v/frostglass.svg)](https://www.npmjs.com/package/frostglass)
[![license](https://img.shields.io/npm/l/frostglass.svg)](https://github.com/xvhuan/frostglass/blob/main/LICENSE)

A beautiful **Glassmorphism** React UI component library with 30+ modern, customizable components.

<p align="center">
  <img src="https://raw.githubusercontent.com/xvhuan/frostglass/main/preview.png" alt="FrostGlass Preview" width="600">
</p>

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern frosted glass aesthetic with blur effects
- 📦 **30+ Components** - Buttons, Cards, Modals, Forms, Tables, and more
- 🎯 **Zero Config** - Works out of the box with sensible defaults
- 🌙 **Dark Mode Ready** - Beautiful in both light and dark themes
- ⚡ **Lightweight** - Tree-shakable, only import what you need
- 🔧 **Highly Customizable** - Easy to extend with CSS variables
- 📱 **Responsive** - Mobile-first design approach

## 📦 Installation

```bash
# npm
npm install frostglass

# yarn
yarn add frostglass

# pnpm
pnpm add frostglass
```

**Peer Dependencies:**
```bash
npm install react react-dom
```

## 🚀 Quick Start

```jsx
import { GlassButton, GlassCard, GlassModal } from 'frostglass';
import 'frostglass/style.css';

function App() {
  return (
    <GlassCard hoverEffect>
      <h2>Welcome to FrostGlass</h2>
      <GlassButton variant="gradient">Get Started</GlassButton>
    </GlassCard>
  );
}
```

## 📚 Components

### Core Components
| Component | Description |
|-----------|-------------|
| `GlassButton` | Multi-variant button with primary, gradient, secondary, ghost styles |
| `GlassCard` | Container with frosted glass background |
| `GlassModal` | Full-screen modal dialog with animations |

### Form Components
| Component | Description |
|-----------|-------------|
| `GlassInput` | Text input with label and error state |
| `GlassTextarea` | Multi-line text input |
| `GlassDropdown` | Custom styled select component |
| `GlassSwitch` | Toggle switch |
| `GlassCheckbox` | Checkbox with label |
| `GlassRadio` | Radio button group |
| `GlassSlider` | Range slider |

### Data Display
| Component | Description |
|-----------|-------------|
| `GlassTable` | Data table with custom columns |
| `GlassTabs` | Tab navigation with content panels |
| `GlassProgress` | Progress bar |
| `GlassBadge` | Status badge (success, warning, error) |
| `GlassAvatar` | User avatar with fallback |
| `GlassTooltip` | Hover tooltip |
| `GlassAlert` | Alert messages |
| `GlassSkeleton` | Loading placeholder |

### Advanced Components
| Component | Description |
|-----------|-------------|
| `GlassCalendar` | Date picker calendar |
| `GlassDrawer` | Slide-out panel |
| `GlassAccordion` | Collapsible content sections |
| `GlassCarousel` | Image/content carousel |
| `GlassTimeline` | Event timeline |
| `GlassPopover` | Click-triggered popup |
| `GlassConfirm` | Confirmation dialog |
| `GlassRating` | Star rating |
| `GlassUpload` | Drag & drop file upload |
| `GlassPagination` | Page navigation |
| `GlassMenu` | Vertical navigation menu |
| `GlassTag` | Closeable tags |
| `GlassSpinner` | Loading spinner |

## 🎨 Customization

### CSS Variables

Override these CSS variables to customize the theme:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-blur: 12px;
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
}
```

### Component Variants

```jsx
// Button variants
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="gradient">Gradient</GlassButton>
<GlassButton variant="secondary">Secondary</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>

// Button sizes
<GlassButton size="sm">Small</GlassButton>
<GlassButton size="md">Medium</GlassButton>
<GlassButton size="lg">Large</GlassButton>

// Badge variants
<GlassBadge variant="success">Active</GlassBadge>
<GlassBadge variant="warning">Pending</GlassBadge>
<GlassBadge variant="error">Failed</GlassBadge>
```

## 📖 Usage Examples

### Modal Dialog

```jsx
import { useState } from 'react';
import { GlassModal, GlassButton, GlassInput } from 'frostglass';
import 'frostglass/style.css';

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton onClick={() => setIsOpen(true)}>Login</GlassButton>
      <GlassModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Login"
      >
        <GlassInput label="Email" type="email" placeholder="you@example.com" />
        <GlassInput label="Password" type="password" />
        <GlassButton variant="gradient" style={{ width: '100%' }}>
          Sign In
        </GlassButton>
      </GlassModal>
    </>
  );
}
```

### Data Table

```jsx
import { GlassTable, GlassBadge } from 'frostglass';
import 'frostglass/style.css';

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { 
    key: 'status', 
    title: 'Status',
    render: (val) => <GlassBadge variant={val === 'active' ? 'success' : 'warning'}>{val}</GlassBadge>
  }
];

const data = [
  { name: 'Alice', email: 'alice@example.com', status: 'active' },
  { name: 'Bob', email: 'bob@example.com', status: 'pending' }
];

<GlassTable columns={columns} data={data} />
```

### Tabs Navigation

```jsx
import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from 'frostglass';
import 'frostglass/style.css';

<GlassTabs defaultValue="overview">
  <GlassTabsList>
    <GlassTabsTrigger value="overview">Overview</GlassTabsTrigger>
    <GlassTabsTrigger value="analytics">Analytics</GlassTabsTrigger>
    <GlassTabsTrigger value="settings">Settings</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="overview">Overview content...</GlassTabsContent>
  <GlassTabsContent value="analytics">Analytics content...</GlassTabsContent>
  <GlassTabsContent value="settings">Settings content...</GlassTabsContent>
</GlassTabs>
```

## 🌐 CDN Usage

For non-bundled projects, use via CDN:

```html
<!-- Dependencies -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- FrostGlass -->
<link rel="stylesheet" href="https://unpkg.com/frostglass/dist-lib/frostglass.css">
<script src="https://unpkg.com/frostglass/dist-lib/frostglass.umd.js"></script>

<script>
  const { GlassButton, GlassCard } = window.FrostGlass;
  // Use components with React.createElement()

  // Toast API (no React integration needed)
  window.FrostGlass.toast.success('Saved!', { title: 'Success' });
</script>
```

## 📄 License

MIT © [ius.](https://github.com/xvhuan)

---

<p align="center">
  Made with ❄️ by <a href="https://github.com/xvhuan">ius.</a>
</p>
