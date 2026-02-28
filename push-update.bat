@echo off
set GIT_PATH=C:\Program Files\Git\cmd\git.exe

echo [1] 添加文件...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 add .

echo [2] 提交...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 commit -m "Add Netlify config and update index for reports"

echo [3] 推送到 GitHub...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 push origin main

echo 完成！
pause
