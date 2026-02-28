@echo off
chcp 65001 >nul
echo ========================================
echo   重新上传到 GitHub
echo ========================================
echo.
echo 此脚本需要 Git Bash
echo.

cd /d "c:\Users\37334\CodeBuddy\20260228181507"

echo [步骤 1] 使用 Git Bash 检查状态...
"C:\Program Files\Git\git-cmd.exe" --no-cd --command=git status

echo.
echo [步骤 2] 添加所有文件...
"C:\Program Files\Git\git-cmd.exe" --no-cd --command=git add .

echo.
echo [步骤 3] 提交文件...
"C:\Program Files\Git\git-cmd.exe" --no-cd --command=git commit -m "Initial commit: Finance Hotspots Reports System"

echo.
echo [步骤 4] 设置主分支...
"C:\Program Files\Git\git-cmd.exe" --no-cd --command=git branch -M main

echo.
echo [步骤 5] 推送到 GitHub...
"C:\Program Files\Git\git-cmd.exe" --no-cd --command=git push -u origin main

echo.
echo ========================================
echo   完成！
echo ========================================
pause
