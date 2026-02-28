@echo off
chcp 65001 >nul
echo ========================================
echo   快速上传最新报告
echo ========================================
echo.

set GIT_PATH=C:\Program Files\Git\cmd\git.exe

cd /d "c:\Users\37334\CodeBuddy\20260228181507"

echo [1] 添加文件...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 add .

echo [2] 提交...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 commit -m "Update finance report %date:~0,10%"

echo [3] 推送到 GitHub...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 push origin main

echo.
echo ========================================
echo   ✅ 上传成功！
echo ========================================
echo.
echo 等待1-2分钟后，访问 Netlify 网站即可查看最新报告
echo.
pause
