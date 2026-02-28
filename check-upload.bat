@echo off
chcp 65001 >nul
echo ========================================
echo   检查 GitHub 上传状态
echo ========================================
echo.

"C:\Program Files\Git\bin\bash.exe" -c "cd /c/Users/37334/CodeBuddy/20260228181507 && git status && git remote -v && git log --oneline -3"

pause
