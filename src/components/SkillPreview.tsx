import type { SkillConfig } from '../vite-env'
import './SkillPreview.css'

interface SkillPreviewProps {
  config: SkillConfig
  onEdit: () => void
}

export default function SkillPreview({ config, onEdit }: SkillPreviewProps) {
  const hasData = config.metadata.name || 
                  config.capabilities.tools.length > 0 || 
                  config.capabilities.workflows.length > 0

  if (!hasData) {
    return (
      <div className="skill-preview empty">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>还没有创建技能</h3>
          <p>点击"创建技能"标签页开始创建你的第一个 AI 技能</p>
          <button className="btn btn-primary" onClick={onEdit}>
            开始创建
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="skill-preview">
      <div className="preview-header">
        <h2 className="preview-title">👁️ 技能预览</h2>
        <button className="btn btn-secondary" onClick={onEdit}>
          ✏️ 编辑
        </button>
      </div>

      <div className="preview-content">
        {/* Metadata Section */}
        <div className="preview-section">
          <h3 className="section-header">📋 基本信息</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">技能名称</span>
              <span className="info-value">{config.metadata.name || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">版本</span>
              <span className="info-value badge badge-primary">{config.metadata.version}</span>
            </div>
            <div className="info-item">
              <span className="info-label">作者</span>
              <span className="info-value">{config.metadata.author || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">分类</span>
              <span className="info-value badge badge-secondary">
                {getCategoryName(config.metadata.category)}
              </span>
            </div>
            <div className="info-item full-width">
              <span className="info-label">描述</span>
              <span className="info-value">{config.metadata.description || '-'}</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="preview-section">
          <h3 className="section-header">🔧 工具能力</h3>
          <div className="tools-preview">
            {config.capabilities.tools.length > 0 ? (
              <div className="tags-container">
                {config.capabilities.tools.map((tool) => (
                  <span key={tool} className="tag tag-tool">
                    🔧 {tool}
                  </span>
                ))}
              </div>
            ) : (
              <p className="empty-text">暂无工具</p>
            )}
          </div>

          <h4 className="sub-section-header">知识库</h4>
          <div className="tools-preview">
            {config.capabilities.knowledgeBase.length > 0 ? (
              <div className="tags-container">
                {config.capabilities.knowledgeBase.map((kb) => (
                  <span key={kb} className="tag tag-knowledge">
                    📚 {kb}
                  </span>
                ))}
              </div>
            ) : (
              <p className="empty-text">暂无知识库</p>
            )}
          </div>
        </div>

        {/* Workflows Section */}
        <div className="preview-section">
          <h3 className="section-header">⚡ 工作流</h3>
          {config.capabilities.workflows.length > 0 ? (
            <div className="workflows-preview">
              {config.capabilities.workflows.map((workflow, index) => (
                <div key={workflow.id} className="workflow-preview-card">
                  <div className="workflow-header">
                    <span className="workflow-number">#{index + 1}</span>
                    <h4 className="workflow-name">{workflow.name}</h4>
                  </div>
                  {workflow.description && (
                    <p className="workflow-description">{workflow.description}</p>
                  )}
                  {workflow.steps.length > 0 && (
                    <div className="workflow-steps">
                      {workflow.steps.map((step, stepIndex) => (
                        <div key={step.id} className="step-preview">
                          <span className="step-dot">●</span>
                          <span className="step-text">{step.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {workflow.triggerConditions && workflow.triggerConditions.length > 0 && (
                    <div className="workflow-triggers">
                      <span className="trigger-label">触发条件：</span>
                      <span className="trigger-text">
                        {workflow.triggerConditions.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-text">暂无工作流</p>
          )}
        </div>

        {/* Parameters Section */}
        <div className="preview-section">
          <h3 className="section-header">⚙️ 参数配置</h3>
          {config.configuration.parameters.length > 0 ? (
            <div className="parameters-preview">
              {config.configuration.parameters.map((param, index) => (
                <div key={index} className="parameter-preview-card">
                  <div className="parameter-header">
                    <span className="parameter-name">{param.name || '未命名'}</span>
                    <span className="parameter-type">{param.type}</span>
                    {param.required && (
                      <span className="badge badge-danger">必填</span>
                    )}
                  </div>
                  {param.description && (
                    <p className="parameter-description">{param.description}</p>
                  )}
                  {param.defaultValue !== undefined && (
                    <div className="parameter-default">
                      <span className="default-label">默认值：</span>
                      <span className="default-value">{JSON.stringify(param.defaultValue)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-text">暂无参数配置</p>
          )}
        </div>

        {/* Metadata Info */}
        <div className="preview-section metadata-info">
          <h3 className="section-header">📅 元数据</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">创建时间</span>
              <span className="info-value">{formatDate(config.metadata.createdAt)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">更新时间</span>
              <span className="info-value">{formatDate(config.metadata.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getCategoryName(category: string): string {
  const categories: Record<string, string> = {
    'data-analysis': '数据分析',
    'content-creation': '内容创作',
    'automation': '自动化',
    'integration': '集成工具',
    'development': '开发工具',
    'other': '其他',
  }
  return categories[category] || category
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateString
  }
}
