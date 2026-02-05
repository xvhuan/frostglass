import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// FrostGlass 库模式配置 - 用于打包组件库
export default defineConfig({
    // 关键：库构建使用 classic JSX runtime，避免打包进 react/jsx-runtime（React19 会产出 react.transitional.element，导致 React18 报错）
    // 同时能让 UMD 仅依赖 React / ReactDOM，符合 README 的 CDN 用法。
    plugins: [react({ jsxRuntime: 'classic' })],
    // 防止依赖包里出现 process.env.NODE_ENV 导致浏览器直引 UMD 报 process 未定义
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    },
    build: {
        lib: {
            // 入口文件
            entry: resolve(__dirname, 'src/components/ui/index.js'),
            // 库名称 (用于 UMD 全局变量)
            name: 'FrostGlass',
            // 输出文件名
            fileName: (format) => `frostglass.${format}.js`
        },
        rollupOptions: {
            // 外部化依赖，使用者需自行引入
            external: ['react', 'react-dom'],
            output: {
                // 为外部化依赖提供全局变量
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                // 确保 CSS 单独输出
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'frostglass.css';
                    return assetInfo.name;
                }
            }
        },
        // 输出目录
        outDir: 'dist-lib',
        // 生成 sourcemap
        sourcemap: true,
        // 清空输出目录
        emptyOutDir: true,
        // 压缩配置
        minify: 'esbuild'
    }
});
