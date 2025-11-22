# 部署说明

## 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/organizations/Anthroma/repositories/new
   - 或者访问 https://github.com/new（如果是个人账户，需要先创建 Anthroma 组织）

2. 仓库设置：
   - **Repository name**: `case-tracker-app-ios`
   - **Description**: Anthroma Case Tracker Web Application
   - **Visibility**: Public（GitHub Pages 需要）
   - **不要**初始化 README、.gitignore 或 license（我们已经有了）

3. 点击 "Create repository"

## 步骤 2: 推送代码到 GitHub

在终端中运行以下命令：

```bash
cd /Users/jinyili/Desktop/Case-tracker-webn

# 添加远程仓库（替换 YOUR_USERNAME 为实际的 GitHub 用户名或组织名）
git remote add origin https://github.com/Anthroma/case-tracker-app-ios.git

# 或者使用 SSH（如果已配置）
# git remote add origin git@github.com:Anthroma/case-tracker-app-ios.git

# 推送代码
git branch -M main
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages

1. 进入仓库设置：https://github.com/Anthroma/case-tracker-app-ios/settings/pages

2. 在 "Source" 部分：
   - 选择 "GitHub Actions" 作为部署源
   - 保存设置

3. GitHub Actions 会自动运行并部署网站

## 步骤 4: 访问网站

部署完成后（通常需要几分钟），网站将在以下地址可用：

**https://anthroma.github.io/case-tracker-app-ios/**

## 注意事项

- 首次部署可能需要 5-10 分钟
- 每次推送到 main 分支都会自动重新部署
- 可以在仓库的 "Actions" 标签页查看部署状态

