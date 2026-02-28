@echo off
set GIT_PATH=C:\Program Files\Git\cmd\git.exe

echo 配置 Git 用户信息...
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 config user.name "194273-ctrl"
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 config user.email "194273-ctrl@users.noreply.github.com"

echo 配置完成！
"%GIT_PATH%" -C c:\Users\37334\CodeBuddy\20260228181507 config --list | findstr user
