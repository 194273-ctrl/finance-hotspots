@echo off
REM 财经热点报告自动更新脚本 (Windows)

echo ========================================
echo 财经热点报告自动更新系统
echo ========================================
echo.

REM 检查 Python 是否安装
python --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 Python，请先安装 Python
    pause
    exit /b 1
)

REM 运行更新脚本
echo [1/2] 生成报告...
python auto-update-script.py

if errorlevel 1 (
    echo [错误] 报告生成失败
    pause
    exit /b 1
)

echo.
echo [2/2] 上传到云存储...

REM 检查 Netlify CLI
netlify --version >nul 2>&1
if not errorlevel 1 (
    echo 检测到 Netlify CLI，开始上传...
    cd reports
    netlify deploy --prod
    cd ..
) else (
    echo [跳过] 未安装 Netlify CLI
    echo 如需自动上传，请运行: npm install -g netlify-cli
)

echo.
echo ========================================
echo ✨ 完成！
echo ========================================
echo.

REM 显示最新报告路径
set TODAY=%date:~0,4%-%date:~5,2%-%date:~8,2%
echo 最新报告: reports\finance-hotspots-%TODAY%.html
echo.

REM 询问是否打开浏览器
set /p OPEN_BROWSER="是否在浏览器中打开报告? (Y/N): "
if /i "%OPEN_BROWSER%"=="Y" (
    start "" "reports\finance-hotspots-%TODAY%.html"
)

pause
