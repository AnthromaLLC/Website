# GitHub Pages 访问地址

## 正确的访问URL

由于仓库名是 `Website`，正确的访问地址是：

**https://anthromallc.github.io/Website/**

⚠️ **重要**：必须包含末尾的斜杠 `/` 和路径 `/Website/`

## 常见错误

❌ **错误的URL**：
- `https://anthromallc.github.io/` (根路径，会404)
- `https://anthromallc.github.io/src/main.jsx` (开发路径，会404)

✅ **正确的URL**：
- `https://anthromallc.github.io/Website/`

## 如果遇到404错误

1. **清除浏览器缓存**：
   - Chrome/Edge: `Ctrl+Shift+Delete` (Windows) 或 `Cmd+Shift+Delete` (Mac)
   - 选择"缓存的图片和文件"，清除缓存

2. **检查GitHub Actions部署状态**：
   - 访问：https://github.com/AnthromaLLC/Website/actions
   - 确保最新的部署工作流已完成

3. **等待部署完成**：
   - 首次部署或更新后，GitHub Pages可能需要几分钟才能生效
   - 通常需要 2-5 分钟

4. **使用无痕模式测试**：
   - 打开无痕/隐私浏览窗口
   - 访问：`https://anthromallc.github.io/Website/`

## 部署配置

- **Base路径**: `/Website/` (在 `vite.config.js` 中配置)
- **构建输出**: `dist/` 目录
- **自动部署**: 推送到 `main` 分支时自动触发

