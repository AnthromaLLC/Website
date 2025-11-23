# 修复 GitHub Pages 部署问题

## 问题诊断

GitHub Pages 当前返回的是开发版本的 HTML（包含 `/src/main.jsx`），而不是构建后的版本。

这说明 GitHub Pages 可能配置为部署源文件而不是 GitHub Actions 构建的 dist 目录。

## 修复步骤

### 1. 检查 GitHub Pages 设置

访问：https://github.com/AnthromaLLC/Website/settings/pages

**重要**：确保以下设置：

1. **Source（源）**：必须选择 **"GitHub Actions"**，而不是：
   - ❌ "Deploy from a branch" 
   - ❌ "main" 分支的 "/ (root)"
   - ✅ **"GitHub Actions"**

2. 如果当前设置错误，请：
   - 选择 "GitHub Actions" 作为 source
   - 点击 "Save" 保存

### 2. 手动触发部署

如果设置正确但仍然有问题，手动触发一次部署：

1. 访问：https://github.com/AnthromaLLC/Website/actions
2. 点击 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择 "main" 分支
5. 点击 "Run workflow" 确认

### 3. 验证部署

等待 2-5 分钟后，检查部署的 HTML：

```bash
curl https://anthromallc.github.io/Website/ | grep -E "(src|assets)"
```

应该看到：
- ✅ `/Website/assets/index-*.js` (构建后的文件)
- ❌ 不应该看到 `/src/main.jsx` (开发文件)

### 4. 如果问题仍然存在

如果设置正确但问题仍然存在，可能需要：

1. **检查 GitHub Actions 日志**：
   - 访问：https://github.com/AnthromaLLC/Website/actions
   - 查看最新的 "Deploy to GitHub Pages" 工作流
   - 检查是否有错误

2. **重新推送代码触发部署**：
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push
   ```

3. **检查仓库权限**：
   - 确保 GitHub Actions 有 "pages: write" 权限
   - 检查 Settings > Actions > General > Workflow permissions

## 正确的部署流程

1. 代码推送到 main 分支
2. GitHub Actions 自动触发
3. 构建 dist 目录
4. 上传到 GitHub Pages
5. 网站更新（2-5分钟）

## 验证正确的部署

部署成功后，访问 https://anthromallc.github.io/Website/ 应该：
- ✅ 显示完整的网站内容
- ✅ 浏览器控制台没有 404 错误
- ✅ 网络请求显示 `/Website/assets/` 路径的文件

