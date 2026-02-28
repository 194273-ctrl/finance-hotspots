# 手机端查询 Skill 结果指南

## 方案一：本地服务器访问（推荐）

### 1. 启动本地服务器

如果你已经安装了 Node.js，可以使用以下方法启动本地服务器：

#### 使用 Python 启动服务器
```bash
# 进入项目目录
cd c:/Users/37334/CodeBuddy/20260228181507

# 使用 Python 3 启动服务器
python -m http.server 8080

# 或使用 Python 2
python -m SimpleHTTPServer 8080
```

#### 使用 Node.js 启动服务器
```bash
# 安装 http-server（如果还没安装）
npm install -g http-server

# 启动服务器
cd c:/Users/37334/CodeBuddy/20260228181507/reports
http-server -p 8080
```

#### 使用 PHP 启动服务器
```bash
cd c:/Users/37334/CodeBuddy/20260228181507
php -S localhost:8080
```

### 2. 查看本机 IP 地址

在电脑上打开命令行，输入：
```bash
# Windows
ipconfig

# 查找 "IPv4 地址"，例如：192.168.1.100
```

### 3. 手机访问

确保手机和电脑在**同一个 WiFi 网络**下，然后在手机浏览器中输入：

```
http://你的电脑IP地址:8080/reports/finance-hotspots-2026-02-28.html

# 例如：
http://192.168.1.100:8080/reports/finance-hotspots-2026-02-28.html
```

---

## 方案二：云部署（永久访问）

### 1. 使用 GitHub Pages

#### 步骤 1：创建 GitHub 仓库
1. 访问 https://github.com/new
2. 创建新仓库，例如 `finance-hotspots-reports`
3. 设置为 Public（公开）

#### 步骤 2：上传报告文件
```bash
# 初始化 git 仓库
cd c:/Users/37334/CodeBuddy/20260228181507/reports
git init
git add finance-hotspots-*.html
git commit -m "Add finance hotspots report"

# 关联远程仓库
git remote add origin https://github.com/你的用户名/finance-hotspots-reports.git
git branch -M main
git push -u origin main
```

#### 步骤 3：启用 GitHub Pages
1. 进入仓库的 Settings（设置）
2. 找到 "Pages" 选项
3. 在 "Source" 下选择 `main` 分支
4. 点击 Save
5. 等待几分钟后，访问 `https://你的用户名.github.io/finance-hotspots-reports/`

### 2. 使用 Netlify（更简单）

#### 方法 A：拖拽部署
1. 访问 https://app.netlify.com/drop
2. 将 `reports` 文件夹直接拖拽到页面中
3. 等待部署完成（约30秒）
4. 获得一个临时 URL，例如：`https://wonderful-sunset-123456.netlify.app`

#### 方法 B：Netlify CLI
```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
cd c:/Users/37334/CodeBuddy/20260228181507/reports
netlify deploy --prod
```

### 3. 使用 Vercel
```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
cd c:/Users/37334/CodeBuddy/20260228181507/reports
vercel --prod
```

### 4. 使用 CloudBase（腾讯云）
1. 访问 https://console.cloud.tencent.com/tcb
2. 创建新项目
3. 在"静态网站托管"中上传 `reports` 文件夹
4. 获得访问地址

### 5. 使用腾讯轻量应用服务器（Lighthouse）
1. 创建腾讯云轻量应用服务器实例
2. 使用 Nginx 部署静态网站
3. 配置域名（可选）
4. 手机访问服务器公网 IP 或域名

---

## 方案三：文件共享

### 1. 微信文件传输
- 将 HTML 文件发送到微信
- 在手机微信中直接打开

### 2. 云存储服务
- 上传到百度网盘、阿里云盘等
- 在手机上下载后用浏览器打开

### 3. QQ 文件传输
- 通过 QQ 发送到手机
- 在手机 QQ 中打开

---

## 方案四：本地网络共享

### Windows 文件共享

#### 步骤 1：设置文件共享
1. 右键点击 `reports` 文件夹
2. 选择 "属性" → "共享"
3. 点击 "共享..."
4. 选择 "Everyone" 或你的用户
5. 点击 "共享"

#### 步骤 2：查看电脑名称
1. 右键点击 "此电脑" → "属性"
2. 查看 "设备名称"

#### 步骤 3：手机访问
- 确保手机和电脑在同一网络
- 在手机上使用支持 SMB 的文件管理器应用（如 ES 文件浏览器）
- 输入 `\\你的电脑名称` 访问共享文件夹
- 下载 HTML 文件并用浏览器打开

---

## 方案五：生成二维码访问

### 1. 使用在线二维码生成器
1. 访问 https://cli.im/ 或 https://www.wwei.cn/
2. 输入完整的 URL（例如：`http://192.168.1.100:8080/reports/finance-hotspots-2026-02-28.html`）
3. 生成二维码
4. 用手机扫码直接访问

### 2. 使用命令行生成二维码
```bash
# 安装 qrcode
pip install qrcode

# 生成二维码
qrcode "http://192.168.1.100:8080/reports/finance-hotspots-2026-02-28.html" > qr.png
```

---

## 推荐方案对比

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| **本地服务器** | 免费、快速、无需上传 | 需要保持电脑运行 | 临时查看 |
| **GitHub Pages** | 免费、永久、有自定义域名 | 需要公开代码 | 长期分享 |
| **Netlify** | 免费快速、自动部署 | 有流量限制 | 快速部署 |
| **腾讯云 Lighthouse** | 稳定、支持域名 | 需要付费 | 商业用途 |
| **文件共享** | 最简单、无网络要求 | 需要手动传输 | 个人查看 |
| **二维码** | 方便手机访问 | 需要先有 URL | 临时分享 |

---

## 快速开始（推荐）

### 最简单的方法：Netlify Drop

1. 访问 https://app.netlify.com/drop
2. 打开 `c:/Users/37334/CodeBuddy/20260228181507/reports` 文件夹
3. 将整个文件夹拖拽到 Netlify 页面
4. 等待 30 秒，获得 URL
5. 手机访问该 URL

### 最稳定的方法：GitHub Pages

1. 在 GitHub 创建仓库
2. 上传 HTML 文件
3. 在 Settings 中启用 Pages
4. 获得 `https://你的用户名.github.io/仓库名/`
5. 永久有效，随时访问

---

## 报告更新自动化

### 方案一：定时生成报告
```bash
# 创建定时任务脚本 update-report.sh
#!/bin/bash
cd /path/to/project
npm run generate-report
git add reports/
git commit -m "Update report"
git push
```

### 方案二：使用 GitHub Actions
```yaml
# .github/workflows/update-report.yml
name: Update Finance Report
on:
  schedule:
    - cron: '0 18 * * *'  # 每天18:00
  workflow_dispatch:
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run generate-report
      - run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add reports/
          git commit -m "Auto update report" || exit 0
          git push
```

---

## 注意事项

1. **网络连接**：手机和电脑需要在同一网络（本地访问）或确保服务器可公网访问（云部署）
2. **防火墙**：确保端口（如 8080）在防火墙中开放
3. **文件路径**：确保 URL 中的文件名和路径正确
4. **浏览器兼容性**：报告使用现代 CSS，建议使用 Chrome、Safari 或较新版本浏览器
5. **数据更新**：报告需要手动或自动生成最新数据才能看到最新内容

---

## 常见问题

### Q: 手机无法访问本地服务器？
A: 检查：
- 电脑和手机是否在同一 WiFi
- 电脑防火墙是否允许 8080 端口
- IP 地址是否正确

### Q: GitHub Pages 打开显示 404？
A: 检查：
- 文件是否在仓库根目录或 `docs` 文件夹
- Pages 设置的分支和目录是否正确
- 文件名是否正确

### Q: 如何让报告自动更新？
A: 使用 GitHub Actions 定时任务，每天自动生成并推送新报告

### Q: 能否添加密码保护？
A: 可以：
- Netlify: 使用 Identity 功能添加密码保护
- Vercel: 使用 Middleware 添加验证
- 自托管: 使用 Nginx 或 Apache 配置认证
