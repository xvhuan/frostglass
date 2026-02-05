# Glass UI 组件库使用文档

本文档详细介绍了 Glassmorphism（玻璃拟态）风格组件的用法。

## 引入方式

所有组件位于 `src/components/ui/` 目录下。样式依赖 `src/styles/glass.css`（已全局引入）。

```jsx
import GlassButton from './components/ui/GlassButton';
import GlassCard from './components/ui/GlassCard';
import GlassModal from './components/ui/GlassModal';
import { GlassInput } from './components/ui/GlassInput';
import GlassDropdown from './components/ui/GlassDropdown';
// 以及更多...
```

---

## 1. GlassButton (按钮)

支持多种变体和尺寸的玻璃风格按钮。

### Props
| 属性 | 类型 | 默认值 | 描述 |
|:--- |:--- |:--- |:--- |
| `variant` | string | `'primary'` | 可选值: `'primary'` (实心), `'gradient'` (流动渐变), `'secondary'`, `'ghost'` |
| `size` | string | `'md'` | 可选值: `'sm'`, `'md'`, `'lg'` |
| `onClick` | func | - | 点击事件回调 |
| `children` | node | - | 按钮内容 |

### 示例
```jsx
<GlassButton variant="primary">Primary (常规)</GlassButton>
<GlassButton variant="gradient">Gradient (特殊场景)</GlassButton>
<GlassButton variant="secondary">Secondary</GlassButton>
<GlassButton variant="ghost" size="sm">Ghost</GlassButton>
```

---

## 2. GlassCard (卡片)

基础容器组件，提供磨砂玻璃背景和边框。

### Props
| 属性 | 类型 | 默认值 | 描述 |
|:--- |:--- |:--- |:--- |
| `hoverEffect` | boolean | `false` | 是否开启悬停上浮效果 |
| `className` | string | `''` | 额外的 CSS 类名 |

### 示例
```jsx
<GlassCard hoverEffect={true}>
  <h3>工具标题</h3>
  <p>这里是工具描述...</p>
</GlassCard>
```

---

## 3. GlassModal (弹窗)

覆盖全屏的模态对话框，带有动画效果。使用 React Portal 渲染到 body。

### Props
| 属性 | 类型 | 默认值 | 描述 |
|:--- |:--- |:--- |:--- |
| `isOpen` | boolean | `false` | 控制弹窗显示/隐藏 |
| `onClose` | func | - | 关闭回调 (点击遮罩或关闭按钮触发) |
| `title` | string | - | 弹窗标题 |

### 示例
```jsx
const [showModal, setShowModal] = useState(false);

<GlassModal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)} 
  title="登录"
>
  <p>请输入您的账号密码...</p>
</GlassModal>
```

---

## 4. GlassInput (输入框)

风格统一的文本输入框。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `label` | string | 输入框上方的标签文本 |
| `error` | string | 错误提示信息 （显示为红色） |
| ...props | - | 支持所有原生 input 属性 (type, placeholder, value 等) |

### 示例
```jsx
<GlassInput 
  label="电子邮箱" 
  placeholder="example@aitls.com" 
  type="email" 
/>
```

---

## 5. GlassDropdown (下拉菜单)

自定义样式的下拉选择组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `options` | array | 选项数组，格式: `[{ label: '显示名', value: 'v1' }]` |
| `value` | any | 当前选中的值 |
| `onChange` | func | 选择变更回调 `(newValue) => {}` |

### 示例
```jsx
const [category, setCategory] = useState('all');

<GlassDropdown 
  value={category}
  onChange={setCategory}
  options={[
    { label: '全部工具', value: 'all' },
    { label: 'AI 工具', value: 'ai' }
  ]}
/>
```

---

## 6. GlassTextarea (多行文本框)

支持多行输入的玻璃风格文本区域。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `label` | string | 标签文本 |
| `error` | string | 错误提示 |
| ...props | - | 支持所有原生 textarea 属性 |

### 示例
```jsx
<GlassTextarea label="备注" placeholder="请输入..." rows={4} />
```

---

## 7. GlassSwitch (开关)

布尔值切换组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `checked` | boolean | 是否选中 |
| `onChange` | func | 状态变更回调 |

### 示例
```jsx
<GlassSwitch checked={enabled} onChange={setEnabled} />
```

---

## 8. GlassCheckbox (复选框)

带标签的复选框。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `checked` | boolean | 是否选中 |
| `onChange` | func | 状态变更回调 |
| `label` | string | 右侧标签文本 |

### 示例
```jsx
<GlassCheckbox checked={agree} onChange={setAgree} label="同意条款" />
```

---

## 9. GlassRadio (单选框)

单选按钮组。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `name` | string | 单选组名称 |
| `value` | string | 当前项的值 |
| `checked` | boolean | 是否选中 |
| `onChange` | func | 状态变更回调 |
| `label` | string | 右侧标签文本 |

### 示例
```jsx
<GlassRadio name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} label="男" />
<GlassRadio name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} label="女" />
```

---

## 10. GlassSlider (滑块)

数值范围选择器。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `value` | number | 当前值 |
| `onChange` | func | 值变更回调 |
| `min` | number | 最小值 (默认 0) |
| `max` | number | 最大值 (默认 100) |

### 示例
```jsx
<GlassSlider value={volume} onChange={(e) => setVolume(e.target.value)} />
```

---

## 11. GlassProgress (进度条)

显示加载或完成进度。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `value` | number | 当前进度 (0-100) |

### 示例
```jsx
<GlassProgress value={75} />
```

---

## 12. GlassBadge (徽标)

小型状态标签。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `variant` | string | 颜色变体: `'default'`, `'success'`, `'warning'`, `'error'` |
| `children` | node | 徽标内容 |

### 示例
```jsx
<GlassBadge variant="success">已完成</GlassBadge>
```

---

## 13. GlassTabs (标签页)

选项卡组件，用于切换不同内容面板。

### 子组件
- `GlassTabsList`: 标签列表容器
- `GlassTabsTrigger`: 单个标签触发器 (`value` 属性必填)
- `GlassTabsContent`: 内容面板 (`value` 属性必填)

### 示例
```jsx
<GlassTabs defaultValue="tab1">
  <GlassTabsList>
    <GlassTabsTrigger value="tab1">概览</GlassTabsTrigger>
    <GlassTabsTrigger value="tab2">详情</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="tab1">概览内容...</GlassTabsContent>
  <GlassTabsContent value="tab2">详情内容...</GlassTabsContent>
</GlassTabs>
```

---

## 14. GlassTable (表格)

数据表格组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `columns` | array | 列定义 `[{ key: 'name', title: '名称', render?: (val, row) => ReactNode }]` |
| `data` | array | 数据行 |

### 示例
```jsx
<GlassTable 
  columns={[{ key: 'name', title: '名称' }, { key: 'status', title: '状态' }]}
  data={[{ name: 'Item 1', status: 'Active' }]}
/>
```

---

## 15. GlassAvatar (头像)

用户头像展示组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `src` | string | 图片地址 |
| `fallback` | string | 无图片时显示的文字 (如用户首字母) |
| `size` | string | 尺寸: `'sm'`, `'md'`, `'lg'` |

### 示例
```jsx
<GlassAvatar src="/user.jpg" fallback="A" size="md" />
```

---

## 16. GlassTooltip (文字提示)

悬停显示的提示信息。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `content` | string | 提示文本 |
| `children` | node | 触发元素 |

### 示例
```jsx
<GlassTooltip content="这是提示信息">
  <span>鼠标移到这里</span>
</GlassTooltip>
```

---

## 17. GlassAlert (警告提示)

页面内的信息提示框。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `type` | string | 类型: `'info'`, `'success'`, `'warning'`, `'error'` |
| `title` | string | 标题 |
| `children` | node | 内容 |

### 示例
```jsx
<GlassAlert type="warning" title="注意">请仔细阅读以下条款。</GlassAlert>
```

---

## 18. GlassSkeleton (骨架屏)

内容加载占位符。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `variant` | string | 形状: `'text'`, `'circular'`, `'rectangular'` |
| `width` | string/number | 宽度 |
| `height` | string/number | 高度 |

### 示例
```jsx
<GlassSkeleton variant="text" width="60%" />
<GlassSkeleton variant="circular" width={40} height={40} />
```

---

## 19. GlassUpload (文件上传)

支持拖拽的文件上传区域。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `onUpload` | func | 文件选中回调 `(fileList) => {}` |
| `accept` | string | 接受的文件类型 |
| `children` | node | 自定义上传区域内容 |

### 示例
```jsx
<GlassUpload onUpload={(files) => console.log(files)} accept="image/*">
  <p>拖拽或点击上传</p>
</GlassUpload>
```

---

## 20. GlassCalendar (日历)

日期选择器组件，支持年/月切换。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `date` | Date | 初始选中日期 |
| `onDateSelect` | func | 日期选中回调 `(date) => {}` |

### 示例
```jsx
<GlassCalendar onDateSelect={(d) => console.log(d)} />
```

---

## 21. GlassPagination (分页)

页码导航组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `currentPage` | number | 当前页 |
| `totalPages` | number | 总页数 |
| `onPageChange` | func | 页码变更回调 |

### 示例
```jsx
<GlassPagination currentPage={1} totalPages={10} onPageChange={setPage} />
```

---

## 22. GlassDrawer (抽屉)

侧边滑出面板。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `isOpen` | boolean | 是否打开 |
| `onClose` | func | 关闭回调 |
| `placement` | string | 位置: `'left'` (默认), `'right'` |
| `title` | string | 标题 |

### 示例
```jsx
<GlassDrawer isOpen={open} onClose={() => setOpen(false)} title="设置">
  <p>抽屉内容...</p>
</GlassDrawer>
```

---

## 23. GlassMenu (菜单)

垂直导航菜单。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `items` | array | 菜单项 `[{ key: 'home', label: '首页', icon: <Icon /> }]` |
| `activeItem` | string | 当前激活项的 key |
| `onItemClick` | func | 点击回调 |

### 示例
```jsx
<GlassMenu 
  items={[{ key: 'home', label: '首页' }]}
  activeItem="home"
  onItemClick={setActive}
/>
```

---

## 24. GlassAccordion (折叠面板)

可展开/收起的内容区域。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `items` | array | 折叠项 `[{ title: '标题', content: '内容' }]` |
| `allowMultiple` | boolean | 是否允许多个同时展开 (默认 false) |

### 示例
```jsx
<GlassAccordion items={[{ title: 'FAQ 1', content: '答案...' }]} />
```

---

## 25. GlassTimeline (时间轴)

事件时间线展示。

### 子组件
- `GlassTimeline`: 容器
- `GlassTimelineItem`: 单个节点 (`title`, `time`, `color` 属性)

### 示例
```jsx
<GlassTimeline>
  <GlassTimelineItem title="v1.0 发布" time="2023-01">基础版本上线</GlassTimelineItem>
  <GlassTimelineItem title="v2.0 更新" time="2023-06" color="#10b981">新增功能</GlassTimelineItem>
</GlassTimeline>
```

---

## 26. GlassCarousel (轮播图)

内容轮播组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `slides` | array | 幻灯片内容 (ReactNode 数组) |

### 示例
```jsx
<GlassCarousel slides={[<div>Slide 1</div>, <div>Slide 2</div>]} />
```

---

## 27. GlassPopover (气泡卡片)

点击触发的弹出卡片。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `trigger` | node | 触发元素 |
| `content` | node | 弹出内容 |

### 示例
```jsx
<GlassPopover trigger={<button>点击</button>} content={<p>弹出内容</p>} />
```

---

## 28. GlassTag (标签)

小型文本标记。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `onClose` | func | 关闭回调 (提供此 prop 时显示关闭按钮) |
| `children` | node | 标签内容 |

### 示例
```jsx
<GlassTag onClose={() => remove()}>React</GlassTag>
<GlassTag>Design</GlassTag>
```

---

## 29. GlassSpinner (加载动画)

旋转加载指示器。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `size` | string | 尺寸: `'sm'`, `'md'`, `'lg'` |

### 示例
```jsx
<GlassSpinner size="md" />
```

---

## 30. GlassConfirm (确认对话框)

二次确认弹窗。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `isOpen` | boolean | 是否显示 |
| `onClose` | func | 关闭回调 |
| `onConfirm` | func | 确认回调 |
| `title` | string | 标题 |
| `description` | string | 描述文本 |
| `confirmText` | string | 确认按钮文字 |

### 示例
```jsx
<GlassConfirm 
  isOpen={show}
  onClose={() => setShow(false)}
  onConfirm={handleDelete}
  title="删除确认"
  description="此操作不可撤销"
  confirmText="确认删除"
/>
```

---

## 31. GlassRating (评分)

星级评分组件。

### Props
| 属性 | 类型 | 描述 |
|:--- |:--- |:--- |
| `value` | number | 当前评分 |
| `onChange` | func | 评分变更回调 |
| `max` | number | 最大星数 (默认 5) |

### 示例
```jsx
<GlassRating value={rating} onChange={setRating} />
```

---

## CSS 工具类

如果不使用组件，也可以直接使用以下 CSS 类（定义在 `src/styles/glass.css`）：

- `.glass`: 基础玻璃效果（背景、模糊、边框、阴影）
- `.glass-interactive`: 带悬停交互效果的玻璃容器
- `.glass-input`: 玻璃风格输入框样式
- `.glass-textarea`: 玻璃风格多行文本框
- `.glass-btn`: 玻璃风格按钮基础样式
- `.glass-btn.primary`: 主按钮样式
- `.glass-btn.gradient`: 渐变流动按钮样式
- `.glass-btn.secondary`: 次级按钮样式
- `.glass-btn.ghost`: 幽灵按钮样式
- `.text-gradient`: 文字渐变色效果 (defined in index.css)

---

## 设计原则

1. **文字不可选中**: 所有交互组件（按钮、菜单、日历等）的文字默认不可被鼠标选中，提升交互体验。
2. **动画流畅**: 所有过渡动画使用 `cubic-bezier` 缓动函数，确保流畅自然。
3. **玻璃拟态**: 统一使用 `backdrop-filter: blur()` 和半透明背景实现磨砂玻璃效果。
4. **响应式**: 组件自动适应不同屏幕尺寸。

---

## 独立库构建与使用 (Standalone Library Build & Usage)

本组件库支持打包为独立的 UMD/ESM 库，供非工程化项目或通过 CDN 引用使用。

### 1. 构建命令

运行以下命令进行打包：

```bash
pnpm run build:lib
```

构建产物将输出到 `dist-lib/` 目录：
- `frostglass.umd.js`: 通用模块定义文件 (浏览器/Node 通用)
- `frostglass.es.js`: ES Module 文件 (现代构建工具使用)
- `frostglass.css`: 所有组件的样式合集

### 2. 纯 HTML/JS 项目使用示例

在 HTML 文件中引入样式和 JS 文件即可使用（需确保 React 和 ReactDOM 已预先加载）：

```html
<!-- 1. 引入 React 依赖 (必须) -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- 2. 引入 FrostGlass 样式和脚本 -->
<link rel="stylesheet" href="./dist-lib/frostglass.css">
<script src="./dist-lib/frostglass.umd.js"></script>

<!-- 3. 使用组件 -->
<div id="root"></div>
<script>
  const { GlassButton, GlassCard, toast } = window.FrostGlass; // 全局变量名为 FrostGlass

  // Toast（无需 React 集成）
  toast.success('保存成功', { title: 'Success' });

  const App = () => {
    return React.createElement(GlassCard, {}, 
      React.createElement('h3', {}, 'Hello World'),
      React.createElement(GlassButton, { variant: 'primary' }, 'Click Me')
    );
  };

  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
</script>
```
