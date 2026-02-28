# 财经热点报告 - GitHub 自动部署指南

## 🎯 目标

实现完全自动化部署：说"今日财经" → 自动生成 → 自动上传 → 自动部署 → 手机查看最新报告

---

## 📋 准备工作

### 1. 注册 GitHub 账号
- 访问：https://github.com/signup
- 或登录已有账号

### 2. 创建 GitHub 仓库
- 登录 GitHub
- 点击右上角 `+` → `New repository`
- Repository name：`finance-hotspots`
- Public（推荐）或 Private
- 勾选 `Initialize this repository with a README`
- 点击 `Create repository`

### 3. 安装 Git（如果还没安装）
- 访问：https://git-scm.com/downloads
- 下载并安装 Windows 版本
- 安装时使用默认选项即可

---

## 🚀 快速设置（3步完成）

### 第1步：初始化并上传到 GitHub（运行脚本）

1. **运行初始化脚本**
   ```
   双击：setup-github-repo.bat
   ```

2. **按照提示操作**
   - 输入你的 GitHub 仓库地址
   - 例如：`https://github.com/你的用户名/finance-hotspots.git`
   - 等待上传完成

3. **验证上传**
   - 访问你的 GitHub 仓库页面
   - 确认 `reports` 文件夹已上传

---

### 第2步：连接 Netlify 自动部署

1. **登录 Netlify**
   ```
   https://app.netlify.com
   ```

2. **添加新站点**
   - 点击 `Add new site`
   - 选择 `Import from GitHub`

3. **连接 GitHub 账号**
   - 点击 `Connect GitHub`
   - 授权 Netlify 访问你的仓库

4. **选择仓库**
   - 找到 `finance-hotspots` 仓库
   - 点击 `Import`

5. **配置部署设置**
   - Build command：留空
   - Publish directory：`reports`
   - 点击 `Deploy site`

6. **等待部署完成**
   - 约1-2分钟
   - 看到 "Published" 即成功

7. **获取永久 URL**
   - 在 Site overview 中查看你的 URL
   - 例如：`https://finance-hotspots.netlify.app`

---

### 第3步：测试自动部署

1. **更新 index.html**
   - 我会自动帮你更新

2. **运行上传脚本**
   ```
   双击：upload-to-github.bat
   ```

3. **等待自动部署**
   - Netlify 会自动检测到变化
   - 1-2分钟内自动部署

4. **验证**
   - 访问你的 Netlify URL
   - 看到最新报告 ✅

---

## 📊 完整工作流程

### 以后每次更新（10秒搞定）

```
Step 1: 生成报告（5秒）
├── 对我说："今日财经"
└── 对我说："帮我更新 index.html"

Step 2: 自动上传（5秒）
└── 双击：upload-to-github.bat

Step 3: 自动部署（自动）
└── Netlify 自动检测并部署（1-2分钟）

Step 4: 手机查看（1秒）
└── 打开 Netlify URL → 看到最新报告 ✅
```

---

## 💡 脚本说明

### setup-github-repo.bat（首次使用）

**功能：**
- 检查 Git 是否已安装
- 初始化 Git 仓库
- 连接 GitHub 仓库
- 首次上传代码

**使用：**
```
双击：setup-github-repo.bat
```

---

### upload-to-github.bat（日常使用）

**功能：**
- 添加所有修改的文件
- 提交更改
- 推送到 GitHub
- 触发 Netlify 自动部署

**使用：**
```
双击：upload-to-github.bat
```

---

## 📱 手机端设置

### 添加到主屏幕

**iPhone：**
1. Safari 打开你的 Netlify URL
2. 分享 → 添加到主屏幕

**Android：**
1. Chrome 打开你的 Netlify URL
2. 菜单 → 添加到主屏幕

### 以后查看

```
点击桌面图标 → 看到最新报告 ✅
```

---

## 🎉 完成！

现在你已经实现了完全自动化部署：

| 动作 | 结果 |
|------|------|
| 电脑说"今日财经" | 生成最新报告 |
| 双击 upload-to-github.bat | 自动上传 |
| Git push | Netlify 自动部署 |
| 手机打开 URL | 看到最新报告 ✅ |

---

## ⚠️ 常见问题

### Q1：Git push 时提示错误？

**解决方法：**
```
1. 确保已在 GitHub 创建仓库
2. 检查仓库地址是否正确
3. 确保已登录 GitHub 账号
```

---

### Q2：Netlify 没有自动部署？

**解决方法：**
```
1. 检查 Netlify 的 Deploy logs
2. 确认 Git push 成功
3. 等待1-2分钟
4. 手动触发部署：Netlify → Site → Trigger deploy
```

---

### Q3：忘记 GitHub 密码？

**解决方法：**
```
1. 使用 Personal Access Token 代替密码
2. 访问：https://github.com/settings/tokens
3. 生成新的 token
4. 使用 token 作为密码
```

---

## 📞 获取帮助

如果遇到问题，请告诉我：
1. 错误信息的截图
2. 操作步骤
3. 当前的状态

我会帮你解决问题！
