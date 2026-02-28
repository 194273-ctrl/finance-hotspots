@echo off
chcp 65001 >nul
echo ========================================
echo   财经热点报告 - 自动上传到 GitHub
echo ========================================
echo.

cd /d "c:\Users\37334\CodeBuddy\20260228181507"

echo [1/4] 检查 Git 状态...
git status
echo.

echo [2/4] 添加所有文件...
git add .
echo.

echo [3/4] 提交更改...
set /p commit_msg="请输入提交信息（按 Enter 使用默认）："
if "%commit_msg%"=="" set commit_msg=Update finance report - %date% %time%
git commit -m "%commit_msg%"
echo.

echo [4/4] 推送到 GitHub...
git push origin main
echo.

echo ========================================
echo   ✅ 上传完成！
echo ========================================
echo.
echo Netlify 将在1-2分钟内自动部署最新报告
echo.
pause
