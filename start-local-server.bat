@echo off
chcp 65001 >nul
echo ====================================
echo 财经热点报告 - 本地服务器启动
echo ====================================
echo.
echo 正在启动本地服务器...
echo.
echo 服务器地址：http://localhost:8080
echo 手机访问地址（同一WiFi）：http://[你的电脑IP]:8080
echo.
echo 查看电脑IP方法：打开命令行，输入 ipconfig
echo.
echo 按 Ctrl+C 停止服务器
echo ====================================
echo.

cd /d "%~dp0reports"
python -m http.server 8080

pause
