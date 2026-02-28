# 📱 财经热点报告 - 手机访问指南

## 快速开始（3步搞定）

### 方法 1：本地服务器（最快，无需安装）

1. **启动服务器**
   - 双击 `start-local-server.bat`
   - 等待显示 "Serving HTTP on 0.0.0.0 port 8080"

2. **查看电脑IP**
   - 打开命令提示符
   - 输入：`ipconfig`
   - 找到 "IPv4 地址"，例如：`192.168.1.100`

3. **手机访问**
   - 确保手机和电脑在同一 WiFi
   - 手机浏览器输入：`http://192.168.1.100:8080`
   - 点击 `finance-hotspots-2026-03-01.html`

---

### 方法 2：Netlify Drop（推荐，30秒）

1. **访问** https://app.netlify.com/drop
2. **拖拽** `reports` 文件夹到网页
3. **等待** 30秒上传完成
4. **获得永久 URL**，例如：`https://finance-hotspots.netlify.app`
5. **手机访问** 该 URL
6. **添加到主屏幕**：
   - iOS: Safari → 分享 → 添加到主屏幕
   - Android: Chrome → 菜单 → 添加到主屏幕

---

### 方法 3：GitHub Pages（永久免费）

#### 第一步：创建GitHub仓库
1. 访问 https://github.com/new
2. 仓库名输入：`finance-hotspots`
3. 选择 **Public**
4. 点击 **Create repository**

#### 第二步：上传文件
1. 点击 **Upload files**
2. 拖拽 `reports` 文件夹中所有文件
3. 点击 **Commit changes**

#### 第三步：启用 GitHub Pages
1. 进入仓库 **Settings**
2. 左侧菜单找到 **Pages**
3. **Build and deployment** → **Source** 选择 **Deploy from a branch**
4. **Branch** 选择 **main**，文件夹选择 **/(root)**
5. 点击 **Save**

#### 第四步：访问
- 等待1-2分钟部署完成
- 访问：`https://你的用户名.github.io/finance-hotspots/`

---

## 📊 方案对比

| 方案 | 时间 | 费用 | 优点 | 缺点 |
|------|------|------|------|------|
| **本地服务器** | 10秒 | 免费 | 无需注册，立即可用 | 需保持电脑运行 |
| **Netlify Drop** | 30秒 | 免费 | 永久URL，HTTPS | 每次更新需重新拖拽 |
| **GitHub Pages** | 5分钟 | 免费 | 永久免费，版本控制 | 需要Git知识 |

---

## 🚀 推荐方案

### 临时查看（推荐：本地服务器）
```
双击 start-local-server.bat
手机访问 http://你的电脑IP:8080
```

### 长期使用（推荐：Netlify Drop）
```
1. 一次拖拽上传到 Netlify
2. 添加手机快捷方式
3. 每天更新：双击 auto-update.bat
```

---

## 🔧 常见问题

### Q1: 手机访问不了？
- 确保手机和电脑在同一 WiFi
- 检查电脑防火墙设置
- 尝试关闭防火墙后重试

### Q2: 如何更新报告？
**本地服务器：**
- 直接在 `reports` 文件夹添加新报告
- 刷新手机页面即可

**Netlify Drop：**
- 双击 `auto-update.bat` 自动上传
- 或手动重新拖拽文件夹到 Netlify

**GitHub Pages：**
- 提交新文件到仓库
- 等待1-2分钟自动部署

### Q3: 如何查看电脑IP？
```bash
# Windows
打开命令提示符 → 输入 ipconfig → 找到 IPv4 地址

# 例如：
IPv4 地址 . . . . . . . . . . . : 192.168.1.100
```

---

## 📱 添加手机快捷方式

### iOS (iPhone/iPad)
1. Safari 打开报告网址
2. 点击底部分享按钮
3. 选择"添加到主屏幕"
4. 点击"添加"

### Android
1. Chrome 打开报告网址
2. 点击右上角菜单（三个点）
3. 选择"添加到主屏幕"或"安装应用"
4. 点击"添加"

---

## 🔄 每天更新流程

### 电脑端
```bash
# 每天只需1步
双击 auto-update.bat
```

### 手机端
```
点击桌面的"财经热点"图标 ✅
```

---

## 📋 快速参考卡片

```
本地服务器访问：
http://你的电脑IP:8080

Netlify 地址（部署后）：
https://finance-hotspots.netlify.app

GitHub Pages 地址（部署后）：
https://你的用户名.github.io/finance-hotspots/
```

---

## 💡 小贴士

1. **建议使用 Netlify**：一次部署，永久使用
2. **添加快捷方式**：手机桌面一键访问
3. **每天固定时间**：可以设置定时任务自动更新
4. **分享给朋友**：直接发送 Netlify URL 即可

---

有问题？随时问我！
