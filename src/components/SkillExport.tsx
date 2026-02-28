import { useState } from 'react'
import type { SkillConfig } from '../vite-env'
import './SkillExport.css'

interface SkillExportProps {
  config: SkillConfig
  onEdit: () => void
}

export default function SkillExport({ config, onEdit }: SkillExportProps) {
  const [selectedFormat, setSelectedFormat] = useState<'json' | 'yaml'>('json')

  const generateJSON = (): string => {
    return JSON.stringify(config, null, 2)
  }

  const generateYAML = (): string => {
    const yamlString = toYAML(config)
    return yamlString
  }

  const toYAML = (obj: any, indent = 0): string => {
    const spaces = '  '.repeat(indent)
    let yaml = ''

    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        yaml += `${spaces}- ${toYAML(item, 0)}\n`
      })
    } else if (typeof obj === 'object' && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          yaml += `${spaces}${key}:\n`
          value.forEach((item) => {
            yaml += `${spaces}  - ${toYAML(item, 0)}\n`
          })
        } else if (typeof value === 'object' && value !== null) {
          yaml += `${spaces}${key}:\n${toYAML(value, indent + 1)}`
        } else {
          yaml += `${spaces}${key}: ${JSON.stringify(value)}\n`
        }
      })
    } else {
      yaml += JSON.stringify(obj)
    }

    return yaml
  }

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleExport = () => {
    const content = selectedFormat === 'json' ? generateJSON() : generateYAML()
    const extension = selectedFormat === 'json' ? 'json' : 'yaml'
    const filename = `${config.metadata.name || 'skill'}.${extension}`
    downloadFile(content, filename, selectedFormat === 'json' ? 'application/json' : 'text/yaml')
  }

  const handleCopy = () => {
    const content = selectedFormat === 'json' ? generateJSON() : generateYAML()
    navigator.clipboard.writeText(content)
  }

  const getPreviewContent = () => {
    return selectedFormat === 'json' ? generateJSON() : generateYAML()
  }

  const hasData = config.metadata.name || 
                  config.capabilities.tools.length > 0 || 
                  config.capabilities.workflows.length > 0

  if (!hasData) {
    return (
      <div className="skill-export empty">
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h3>没有可导出的内容</h3>
          <p>请先创建技能，然后再导出</p>
          <button className="btn btn-primary" onClick={onEdit}>
            创建技能
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="skill-export">
      <div className="export-header">
        <h2 className="export-title">📦 导出技能</h2>
        <button className="btn btn-secondary" onClick={onEdit}>
          ✏️ 编辑
        </button>
      </div>

      <div className="export-content">
        {/* Format Selection */}
        <div className="export-section">
          <h3 className="section-title">选择导出格式</h3>
          <div className="format-options">
            <button
              className={`format-btn ${selectedFormat === 'json' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('json')}
            >
              <span className="format-icon">{JSON_ICON}</span>
              <div>
                <div className="format-name">JSON</div>
                <div className="format-desc">机器可读格式</div>
              </div>
            </button>

            <button
              className={`format-btn ${selectedFormat === 'yaml' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('yaml')}
            >
              <span className="format-icon">{YAML_ICON}</span>
              <div>
                <div className="format-name">YAML</div>
                <div className="format-desc">人类可读格式</div>
              </div>
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="export-section">
          <div className="section-header">
            <h3 className="section-title">预览</h3>
            <div className="header-actions">
              <button className="btn btn-secondary btn-sm" onClick={handleCopy}>
                📋 复制
              </button>
              <button className="btn btn-success btn-sm" onClick={handleExport}>
                📥 下载
              </button>
            </div>
          </div>
          <div className="preview-box">
            <pre className="code-preview">
              <code>{getPreviewContent()}</code>
            </pre>
          </div>
        </div>

        {/* Export Info */}
        <div className="export-section info-section">
          <h3 className="section-title">📋 导出信息</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">文件名</span>
              <span className="info-value">
                {config.metadata.name || 'skill'}.{selectedFormat}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">格式</span>
              <span className="info-value badge badge-primary">
                {selectedFormat.toUpperCase()}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">工作流数量</span>
              <span className="info-value badge badge-success">
                {config.capabilities.workflows.length}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">参数数量</span>
              <span className="info-value badge badge-secondary">
                {config.configuration.parameters.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const JSON_ICON = `
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <path d="M10 12h4"></path>
  <path d="M10 16h4"></path>
  <path d="M10 8h4"></path>
</svg>
`

const YAML_ICON = `
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="8" y1="13" x2="16" y2="13"></line>
  <line x1="8" y1="17" x2="16" y2="17"></line>
  <line x1="8" y1="9" x2="16" y2="9"></line>
</svg>
`
