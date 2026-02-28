@echo off
chcp 65001 >nul
cd /d "c:\Users\37334\CodeBuddy\20260228181507"

echo [1] 提交文件...
git.exe commit -m "Initial commit: Finance Hotspots Reports System"

echo [2] 推送到 GitHub...
git.exe push -u origin main

echo 完成！
pause
