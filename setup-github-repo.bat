@echo off
chcp 65001 >nul
echo ========================================
echo   GitHub 仓库初始化脚本
echo ========================================
echo.
echo 此脚本将帮助你将 reports 文件夹上传到 GitHub
echo.
echo 使用前，请确保：
echo   1. 已安装 Git
echo   2. 已注册 GitHub 账号
echo   3. 已在 GitHub 上创建了仓库
echo.
pause

cd /d "c:\Users\37334\CodeBuddy\20260228181507"

echo.
echo [步骤 1/6] 检查 Git 是否已安装...
git --version
if %errorlevel% neq 0 (
    echo ❌ Git 未安装，请先安装 Git：https://git-scm.com/downloads
    pause
    exit /b 1
)
echo ✅ Git 已安装
echo.

echo [步骤 2/6] 请输入你的 GitHub 仓库地址...
echo.
echo 格式示例：
echo   https://github.com/用户名/finance-hotspots.git
echo.
set /p REPO_URL="请输入仓库地址："
echo.
echo 你输入的仓库地址：%REPO_URL%
echo.

echo [步骤 3/6] 初始化 Git 仓库（如果还未初始化）...
if not exist ".git" (
    git init
    echo ✅ Git 仓库已初始化
) else (
    echo ✅ Git 仓库已存在，跳过初始化
)
echo.

echo [步骤 4/6] 添加所有文件到 Git...
git add .
echo ✅ 文件已添加
echo.

echo [步骤 5/6] 创建初始提交...
git commit -m "Initial commit: Finance Hotspots Reports System"
echo ✅ 提交已完成
echo.

echo [步骤 6/6] 连接 GitHub 仓库并推送...
echo.
echo ⚠️ 如果是第一次推送，GitHub 可能会要求你登录
echo.
git branch -M main
git remote add origin %REPO_URL%
git push -u origin main
echo.

echo ========================================
echo   ✅ 上传完成！
echo ========================================
echo.
echo 你的代码已成功上传到 GitHub
echo.
echo 仓库地址：%REPO_URL%
echo.
echo 下一步：
echo   1. 访问 https://app.netlify.com
echo   2. 点击 "Add new site" -> "Import from GitHub"
echo   3. 选择你的仓库并完成部署
echo.
pause
