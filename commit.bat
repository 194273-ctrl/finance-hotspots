@echo off
set GIT_PATH=C:\Program Files\Git\cmd\git.exe

echo [1] 提交文件...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 commit -m "Initial commit: Finance Hotspots Reports System"

echo [2] 推送到 GitHub...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 push -u origin main

echo 完成！
pause
