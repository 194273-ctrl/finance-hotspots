import { useState, useEffect } from 'react'
import type { SkillConfig, Workflow, WorkflowStep, Parameter } from '../vite-env'
import './SkillCreator.css'

interface SkillCreatorProps {
  initialConfig: SkillConfig
  onSave: (config: SkillConfig) => void
}

export default function SkillCreator({ initialConfig, onSave }: SkillCreatorProps) {
  const [config, setConfig] = useState<SkillConfig>(initialConfig)
  const [activeSection, setActiveSection] = useState<'metadata' | 'tools' | 'workflows' | 'parameters'>('metadata')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setConfig({
      ...initialConfig,
      metadata: {
        ...initialConfig.metadata,
        updatedAt: new Date().toISOString(),
      },
    })
  }, [initialConfig])

  const sections = [
    { id: 'metadata' as const, label: '基本信息', icon: '📋' },
    { id: 'tools' as const, label: '工具能力', icon: '🔧' },
    { id: 'workflows' as const, label: '工作流', icon: '⚡' },
    { id: 'parameters' as const, label: '参数配置', icon: '⚙️' },
  ]

  const validateMetadata = () => {
    const newErrors: Record<string, string> = {}

    if (!config.metadata.name.trim()) {
      newErrors.name = '技能名称不能为空'
    }
    if (!config.metadata.version.trim()) {
      newErrors.version = '版本号不能为空'
    }
    if (!config.metadata.description.trim()) {
      newErrors.description = '描述不能为空'
    }
    if (!config.metadata.author.trim()) {
      newErrors.author = '作者不能为空'
    }
    if (!config.metadata.category.trim()) {
      newErrors.category = '分类不能为空'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (validateMetadata()) {
      onSave(config)
    }
  }

  const handleAddWorkflow = () => {
    const newWorkflow: Workflow = {
      id: `workflow-${Date.now()}`,
      name: '新工作流',
      description: '描述这个工作流的功能',
      steps: [],
      triggerConditions: [],
    }
    setConfig({
      ...config,
      capabilities: {
        ...config.capabilities,
        workflows: [...config.capabilities.workflows, newWorkflow],
      },
    })
  }

  const handleUpdateWorkflow = (index: number, workflow: Workflow) => {
    const updatedWorkflows = [...config.capabilities.workflows]
    updatedWorkflows[index] = workflow
    setConfig({
      ...config,
      capabilities: {
        ...config.capabilities,
        workflows: updatedWorkflows,
      },
    })
  }

  const handleDeleteWorkflow = (index: number) => {
    setConfig({
      ...config,
      capabilities: {
        ...config.capabilities,
        workflows: config.capabilities.workflows.filter((_, i) => i !== index),
      },
    })
  }

  const handleAddParameter = () => {
    const newParameter: Parameter = {
      name: '',
      type: 'string',
      description: '',
      required: false,
    }
    setConfig({
      ...config,
      configuration: {
        ...config.configuration,
        parameters: [...config.configuration.parameters, newParameter],
      },
    })
  }

  const handleUpdateParameter = (index: number, parameter: Parameter) => {
    const updatedParameters = [...config.configuration.parameters]
    updatedParameters[index] = parameter
    setConfig({
      ...config,
      configuration: {
        ...config.configuration,
        parameters: updatedParameters,
      },
    })
  }

  const handleDeleteParameter = (index: number) => {
    setConfig({
      ...config,
      configuration: {
        ...config.configuration,
        parameters: config.configuration.parameters.filter((_, i) => i !== index),
      },
    })
  }

  return (
    <div className="skill-creator">
      <div className="creator-sidebar">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`sidebar-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="sidebar-icon">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      <div className="creator-content">
        {activeSection === 'metadata' && (
          <div className="section">
            <h2 className="section-title">📋 基本信息</h2>
            <div className="card">
              <div className="form-group">
                <label className="form-label required">技能名称</label>
                <input
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="例如：数据分析助手"
                  value={config.metadata.name}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      metadata: { ...config.metadata, name: e.target.value },
                    })
                  }
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label required">版本号</label>
                  <input
                    type="text"
                    className={`form-input ${errors.version ? 'error' : ''}`}
                    placeholder="1.0.0"
                    value={config.metadata.version}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        metadata: { ...config.metadata, version: e.target.value },
                      })
                    }
                  />
                  {errors.version && <span className="error-text">{errors.version}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label required">作者</label>
                  <input
                    type="text"
                    className={`form-input ${errors.author ? 'error' : ''}`}
                    placeholder="你的名字"
                    value={config.metadata.author}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        metadata: { ...config.metadata, author: e.target.value },
                      })
                    }
                  />
                  {errors.author && <span className="error-text">{errors.author}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label required">分类</label>
                <select
                  className={`form-input ${errors.category ? 'error' : ''}`}
                  value={config.metadata.category}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      metadata: { ...config.metadata, category: e.target.value },
                    })
                  }
                >
                  <option value="">选择分类</option>
                  <option value="data-analysis">数据分析</option>
                  <option value="content-creation">内容创作</option>
                  <option value="automation">自动化</option>
                  <option value="integration">集成工具</option>
                  <option value="development">开发工具</option>
                  <option value="other">其他</option>
                </select>
                {errors.category && <span className="error-text">{errors.category}</span>}
              </div>

              <div className="form-group">
                <label className="form-label required">描述</label>
                <textarea
                  className={`form-input ${errors.description ? 'error' : ''}`}
                  rows={5}
                  placeholder="详细描述这个技能的功能和用途..."
                  value={config.metadata.description}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      metadata: { ...config.metadata, description: e.target.value },
                    })
                  }
                />
                {errors.description && <span className="error-text">{errors.description}</span>}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'tools' && (
          <div className="section">
            <h2 className="section-title">🔧 工具能力</h2>
            <div className="card">
              <div className="form-group">
                <label className="form-label">集成工具</label>
                <p className="form-help">添加此技能可以使用的工具</p>
                <div className="tools-grid">
                  {['search', 'code-editor', 'file-manager', 'database', 'api-client', 'ai-model'].map((tool) => (
                    <label key={tool} className="tool-checkbox">
                      <input
                        type="checkbox"
                        checked={config.capabilities.tools.includes(tool)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setConfig({
                              ...config,
                              capabilities: {
                                ...config.capabilities,
                                tools: [...config.capabilities.tools, tool],
                              },
                            })
                          } else {
                            setConfig({
                              ...config,
                              capabilities: {
                                ...config.capabilities,
                                tools: config.capabilities.tools.filter((t) => t !== tool),
                              },
                            })
                          }
                        }}
                      />
                      <span>{tool}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">知识库</label>
                <p className="form-help">添加相关的知识库资源</p>
                <div className="tools-grid">
                  {['Spring Boot', 'Spring AI', 'Langchain', 'React', 'Vue', '腾讯云API'].map((kb) => (
                    <label key={kb} className="tool-checkbox">
                      <input
                        type="checkbox"
                        checked={config.capabilities.knowledgeBase.includes(kb)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setConfig({
                              ...config,
                              capabilities: {
                                ...config.capabilities,
                                knowledgeBase: [...config.capabilities.knowledgeBase, kb],
                              },
                            })
                          } else {
                            setConfig({
                              ...config,
                              capabilities: {
                                ...config.capabilities,
                                knowledgeBase: config.capabilities.knowledgeBase.filter((k) => k !== kb),
                              },
                            })
                          }
                        }}
                      />
                      <span>{kb}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'workflows' && (
          <div className="section">
            <h2 className="section-title">⚡ 工作流</h2>
            <div className="workflows-container">
              {config.capabilities.workflows.map((workflow, index) => (
                <WorkflowCard
                  key={workflow.id}
                  workflow={workflow}
                  index={index}
                  onUpdate={(wf) => handleUpdateWorkflow(index, wf)}
                  onDelete={() => handleDeleteWorkflow(index)}
                />
              ))}
              <button className="btn btn-primary add-workflow-btn" onClick={handleAddWorkflow}>
                ➕ 添加工作流
              </button>
            </div>
          </div>
        )}

        {activeSection === 'parameters' && (
          <div className="section">
            <h2 className="section-title">⚙️ 参数配置</h2>
            <div className="parameters-container">
              {config.configuration.parameters.map((param, index) => (
                <ParameterCard
                  key={index}
                  parameter={param}
                  index={index}
                  onUpdate={(p) => handleUpdateParameter(index, p)}
                  onDelete={() => handleDeleteParameter(index)}
                />
              ))}
              <button className="btn btn-primary add-parameter-btn" onClick={handleAddParameter}>
                ➕ 添加参数
              </button>
            </div>
          </div>
        )}

        <div className="creator-actions">
          <button className="btn btn-success" onClick={handleSave}>
            ✅ 保存并预览
          </button>
        </div>
      </div>
    </div>
  )
}

function WorkflowCard({ workflow, index, onUpdate, onDelete }: {
  workflow: Workflow
  index: number
  onUpdate: (workflow: Workflow) => void
  onDelete: () => void
}) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="workflow-card">
      <div className="workflow-header">
        <div className="workflow-number">#{index + 1}</div>
        <input
          className="workflow-name-input"
          value={workflow.name}
          onChange={(e) => onUpdate({ ...workflow, name: e.target.value })}
          placeholder="工作流名称"
        />
        <button
          className="btn-icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '▼' : '▶'}
        </button>
        <button className="btn-icon btn-icon-danger" onClick={onDelete}>
          ✕
        </button>
      </div>

      {isExpanded && (
        <div className="workflow-content">
          <div className="form-group">
            <label className="form-label">描述</label>
            <textarea
              className="form-input"
              rows={2}
              placeholder="描述工作流的功能"
              value={workflow.description}
              onChange={(e) => onUpdate({ ...workflow, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">触发条件</label>
            <input
              className="form-input"
              placeholder="例如：用户发送图片"
              value={workflow.triggerConditions?.join(', ') || ''}
              onChange={(e) =>
                onUpdate({
                  ...workflow,
                  triggerConditions: e.target.value.split(',').map(s => s.trim()).filter(Boolean),
                })
              }
            />
          </div>

          <div className="steps-section">
            <h4 className="steps-title">步骤</h4>
            {workflow.steps.map((step, stepIndex) => (
              <div key={step.id} className="step-item">
                <span className="step-number">{stepIndex + 1}</span>
                <input
                  className="step-input"
                  value={step.name}
                  onChange={(e) => {
                    const updatedSteps = [...workflow.steps]
                    updatedSteps[stepIndex] = { ...step, name: e.target.value }
                    onUpdate({ ...workflow, steps: updatedSteps })
                  }}
                  placeholder="步骤名称"
                />
              </div>
            ))}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                const newStep: WorkflowStep = {
                  id: `step-${Date.now()}`,
                  name: '新步骤',
                  action: '',
                  parameters: {},
                }
                onUpdate({ ...workflow, steps: [...workflow.steps, newStep] })
              }}
            >
              ➕ 添加步骤
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function ParameterCard({ parameter, index, onUpdate, onDelete }: {
  parameter: Parameter
  index: number
  onUpdate: (parameter: Parameter) => void
  onDelete: () => void
}) {
  return (
    <div className="parameter-card">
      <div className="grid grid-3">
        <div className="form-group">
          <label className="form-label">参数名</label>
          <input
            className="form-input"
            value={parameter.name}
            onChange={(e) => onUpdate({ ...parameter, name: e.target.value })}
            placeholder="参数名"
          />
        </div>

        <div className="form-group">
          <label className="form-label">类型</label>
          <select
            className="form-input"
            value={parameter.type}
            onChange={(e) =>
              onUpdate({ ...parameter, type: e.target.value as Parameter['type'] })
            }
          >
            <option value="string">字符串</option>
            <option value="number">数字</option>
            <option value="boolean">布尔值</option>
            <option value="array">数组</option>
            <option value="object">对象</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">必填</label>
          <select
            className="form-input"
            value={parameter.required ? 'true' : 'false'}
            onChange={(e) =>
              onUpdate({ ...parameter, required: e.target.value === 'true' })
            }
          >
            <option value="false">否</option>
            <option value="true">是</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">描述</label>
        <textarea
          className="form-input"
          rows={2}
          value={parameter.description}
          onChange={(e) => onUpdate({ ...parameter, description: e.target.value })}
          placeholder="参数描述"
        />
      </div>

      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        ✕ 删除参数
      </button>
    </div>
  )
}
