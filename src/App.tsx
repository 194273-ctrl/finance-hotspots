import { useState } from 'react'
import SkillCreator from './components/SkillCreator'
import SkillPreview from './components/SkillPreview'
import SkillExport from './components/SkillExport'
import type { SkillConfig } from './vite-env'
import './App.css'

function App() {
  const [skillConfig, setSkillConfig] = useState<SkillConfig>({
    metadata: {
      name: '',
      version: '1.0.0',
      description: '',
      author: '',
      category: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    capabilities: {
      tools: [],
      workflows: [],
      knowledgeBase: [],
    },
    configuration: {
      parameters: [],
      settings: {},
    },
  })

  const [activeTab, setActiveTab] = useState<'create' | 'preview' | 'export'>('create')

  const tabs = [
    { id: 'create' as const, label: '创建技能', icon: '✏️' },
    { id: 'preview' as const, label: '预览', icon: '👁️' },
    { id: 'export' as const, label: '导出', icon: '📦' },
  ]

  const handleSaveSkill = (config: SkillConfig) => {
    setSkillConfig(config)
    setActiveTab('preview')
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            🎯 Skill Creator
          </h1>
          <p className="app-subtitle">AI 技能创建器 - 轻松创建和管理 AI 助手技能</p>
        </div>
      </header>

      <div className="app-container">
        <nav className="app-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="app-main">
          {activeTab === 'create' && (
            <SkillCreator
              initialConfig={skillConfig}
              onSave={handleSaveSkill}
            />
          )}

          {activeTab === 'preview' && (
            <SkillPreview
              config={skillConfig}
              onEdit={() => setActiveTab('create')}
            />
          )}

          {activeTab === 'export' && (
            <SkillExport
              config={skillConfig}
              onEdit={() => setActiveTab('create')}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
