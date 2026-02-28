#!/bin/bash

echo "========================================"
echo "   检查并重新上传到 GitHub"
echo "========================================"
echo ""

cd /c/Users/37334/CodeBuddy/20260228181507

echo "[1] 检查 Git 状态..."
git status
echo ""

echo "[2] 检查远程仓库..."
git remote -v
echo ""

echo "[3] 检查最近提交..."
git log --oneline -5
echo ""

echo "[4] 检查已追踪的文件..."
git ls-files | head -20
echo ""

echo "========================================"
echo "   检查完成"
echo "========================================"
