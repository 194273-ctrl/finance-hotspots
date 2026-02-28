export const financeMonitorSkill = {
  name: '财经热点监控',
  version: '1.0.0',
  description: '实时监控国内外权威媒体、社交平台和资本市场的财经热点事件，重点关注科技领域和存储芯片行业，支持个性化股票和行业跟踪',
  author: 'AI Assistant',
  category: 'data-analysis',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  capabilities: {
    tools: ['web-search', 'api-client', 'database', 'file-manager'],
    workflows: [
      {
        id: 'workflow-1',
        name: '媒体热点收集',
        description: '扫描国内外权威媒体和社交平台，收集过去24小时财经热点事件',
        steps: [
          {
            id: 'step-1',
            name: '搜索国内权威媒体',
            action: 'web-search',
            parameters: {
              sources: ['新浪财经', '东方财富', '证券时报', '第一财经', '财新网'],
              keywords: ['财经', '热点', '市场', '股市', '经济'],
              timeRange: '24h'
            }
          },
          {
            id: 'step-2',
            name: '搜索国际权威媒体',
            action: 'web-search',
            parameters: {
              sources: ['Bloomberg', 'Reuters', 'Wall Street Journal', 'Financial Times', 'CNBC'],
              keywords: ['finance', 'hot topics', 'market', 'stock', 'economy'],
              timeRange: '24h'
            }
          },
          {
            id: 'step-3',
            name: '搜索社交平台',
            action: 'web-search',
            parameters: {
              platforms: ['Twitter/X', 'Reddit', 'Weibo', '雪球'],
              keywords: ['财经热点', '股市动态', '投资话题'],
              timeRange: '24h'
            }
          },
          {
            id: 'step-4',
            name: '去重和分类',
            action: 'data-process',
            parameters: {
              operation: 'deduplicate-and-categorize'
            }
          }
        ],
        triggerConditions: ['定时触发: 每天 9:00, 13:00, 17:00', '手动触发']
      },
      {
        id: 'workflow-2',
        name: '资本市场数据收集',
        description: '收集美股、伦敦期货、A股、香港股市的实时数据和行情',
        steps: [
          {
            id: 'step-1',
            name: '收集美股数据',
            action: 'api-client',
            parameters: {
              endpoint: 'us-stock-market',
              indices: ['S&P 500', 'NASDAQ', 'DOW JONES'],
              includeTopStocks: true
            }
          },
          {
            id: 'step-2',
            name: '收集伦敦期货数据',
            action: 'api-client',
            parameters: {
              endpoint: 'london-futures',
              commodities: ['原油', '黄金', '白银', '铜', '天然气']
            }
          },
          {
            id: 'step-3',
            name: '收集A股数据',
            action: 'api-client',
            parameters: {
              endpoint: 'a-stock',
              indices: ['上证指数', '深证成指', '创业板指'],
              includeTopStocks: true
            }
          },
          {
            id: 'step-4',
            name: '收集港股数据',
            action: 'api-client',
            parameters: {
              endpoint: 'hk-stock',
              indices: ['恒生指数', '国企指数', '红筹指数'],
              includeTopStocks: true
            }
          },
          {
            id: 'step-5',
            name: '数据汇总分析',
            action: 'data-process',
            parameters: {
              operation: 'aggregate-and-analyze'
            }
          }
        ],
        triggerConditions: ['定时触发: 每小时', '市场交易时间每30分钟', '手动触发']
      },
      {
        id: 'workflow-3',
        name: '科技领域和存储芯片专项监控',
        description: '重点关注科技领域和存储芯片行业的最新动态',
        steps: [
          {
            id: 'step-1',
            name: '搜索科技热点',
            action: 'web-search',
            parameters: {
              keywords: ['AI', '芯片', '半导体', '存储芯片', 'DRAM', 'NAND Flash', '人工智能', '云计算', '5G'],
              sources: ['科技媒体', '行业报告', '公司公告'],
              timeRange: '24h'
            }
          },
          {
            id: 'step-2',
            name: '搜索存储芯片价格',
            action: 'web-search',
            parameters: {
              keywords: ['存储芯片价格', 'DRAM价格', 'NAND价格', 'SSD价格'],
              sources: ['行业数据网站', '厂商公告']
            }
          },
          {
            id: 'step-3',
            name: '搜索相关上市公司',
            action: 'web-search',
            parameters: {
              companies: ['三星电子', 'SK海力士', '美光科技', '西部数据', '长江存储', '中芯国际', '台积电'],
              keywords: ['财报', '产能', '需求', '供应']
            }
          },
          {
            id: 'step-4',
            name: '行业分析报告生成',
            action: 'data-process',
            parameters: {
              operation: 'generate-industry-report'
            }
          }
        ],
        triggerConditions: ['定时触发: 每天 10:00, 14:00', '手动触发']
      },
      {
        id: 'workflow-4',
        name: '个性化股票跟踪',
        description: '根据用户配置的股票代码和行业名称，收集相关信息',
        steps: [
          {
            id: 'step-1',
            name: '读取用户配置',
            action: 'database',
            parameters: {
              operation: 'read',
              collection: 'user_preferences',
              key: 'watchlist'
            }
          },
          {
            id: 'step-2',
            name: '搜索跟踪股票信息',
            action: 'web-search',
            parameters: {
              sources: ['watchlist']
            }
          },
          {
            id: 'step-3',
            name: '搜索跟踪行业信息',
            action: 'web-search',
            parameters: {
              sources: ['industry_list']
            }
          },
          {
            id: 'step-4',
            name: '推送更新到收集范围',
            action: 'database',
            parameters: {
              operation: 'update',
              collection: 'collection_scope',
              data: {
                additionalStocks: true,
                additionalIndustries: true
              }
            }
          }
        ],
        triggerConditions: ['用户配置更新', '定时触发: 每小时', '手动触发']
      },
      {
        id: 'workflow-5',
        name: '生成网页报告',
        description: '将收集的所有信息整理成结构化的网页报告',
        steps: [
          {
            id: 'step-1',
            name: '收集所有数据源',
            action: 'database',
            parameters: {
              operation: 'read-all',
              collections: ['media_news', 'market_data', 'tech_news', 'user_watchlist']
            }
          },
          {
            id: 'step-2',
            name: '分析和排序',
            action: 'data-process',
            parameters: {
              operation: 'analyze-and-prioritize',
              sortBy: ['重要性', '时间', '相关性']
            }
          },
          {
            id: 'step-3',
            name: '生成报告结构',
            action: 'data-process',
            parameters: {
              operation: 'generate-report-structure',
              sections: [
                '市场概览',
                '今日热点',
                '资本市场表现',
                '科技与芯片专题',
                '个性化关注',
                '风险提示'
              ]
            }
          },
          {
            id: 'step-4',
            name: '生成HTML报告',
            action: 'file-manager',
            parameters: {
              operation: 'write',
              format: 'html',
              template: 'finance-report',
              output: 'reports/finance-hotspots-{date}.html'
            }
          },
          {
            id: 'step-5',
            name: '更新历史记录',
            action: 'database',
            parameters: {
              operation: 'insert',
              collection: 'report_history',
              data: {
                timestamp: 'auto',
                filePath: 'auto'
              }
            }
          }
        ],
        triggerConditions: ['每日 18:00', '所有数据收集完成后', '手动触发']
      }
    ],
    knowledgeBase: [
      '财经知识',
      '股票市场',
      '期货交易',
      '科技行业',
      '半导体行业',
      '存储技术'
    ]
  },
  configuration: {
    parameters: [
      {
        name: '收集时间范围',
        type: 'string',
        description: '设置热点事件收集的时间范围',
        required: false,
        defaultValue: '24h',
        validation: {
          enum: ['1h', '6h', '12h', '24h', '48h', '72h']
        }
      },
      {
        name: '更新频率',
        type: 'string',
        description: '设置数据收集的更新频率',
        required: false,
        defaultValue: 'hourly',
        validation: {
          enum: ['realtime', '15min', '30min', 'hourly', '2hours', 'daily']
        }
      },
      {
        name: '跟踪股票代码',
        type: 'array',
        description: '自定义跟踪的股票代码列表',
        required: false,
        defaultValue: [],
        validation: {
          pattern: '^[A-Z]{1,4}$|^[0-9]{6}$'
        }
      },
      {
        name: '跟踪行业名称',
        type: 'array',
        description: '自定义跟踪的行业名称列表',
        required: false,
        defaultValue: [],
        validation: {
          min: 1,
          max: 20
        }
      },
      {
        name: '优先关注领域',
        type: 'array',
        description: '设置优先关注的领域，会在报告中优先展示',
        required: false,
        defaultValue: ['存储芯片', '人工智能', '科技'],
        validation: {
          min: 0,
          max: 10
        }
      },
      {
        name: '报告生成时间',
        type: 'string',
        description: '设置每日报告生成的时间',
        required: false,
        defaultValue: '18:00',
        validation: {
          pattern: '^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'
        }
      },
      {
        name: '是否推送通知',
        type: 'boolean',
        description: '发现重要事件时是否推送通知',
        required: false,
        defaultValue: true
      },
      {
        name: '重要性阈值',
        type: 'number',
        description: '设置事件重要性的最低阈值，低于阈值的事件不会包含在报告中',
        required: false,
        defaultValue: 3,
        validation: {
          min: 1,
          max: 10
        }
      }
    ],
    settings: {
      defaultWatchlist: {
        stocks: ['AAPL', 'TSLA', 'NVDA', 'MSFT', '000001', '600519', '00700'],
        industries: ['半导体', '存储芯片', '人工智能', '云计算', '新能源']
      },
      mediaSources: {
        domestic: ['新浪财经', '东方财富', '证券时报', '第一财经', '财新网', '和讯网'],
        international: ['Bloomberg', 'Reuters', 'WSJ', 'FT', 'CNBC', 'MarketWatch'],
        social: ['Twitter/X', 'Reddit/r/investing', '雪球', '微博']
      },
      marketIndices: {
        us: ['S&P 500', 'NASDAQ', 'DOW JONES', 'Russell 2000'],
        london: ['FTSE 100', 'FTSE 250'],
        china: ['上证指数', '深证成指', '创业板指', '科创50'],
        hk: ['恒生指数', '国企指数', '红筹指数']
      },
      techFocusAreas: {
        chip: ['存储芯片', 'DRAM', 'NAND Flash', 'SSD', 'HBM'],
        ai: ['人工智能', '机器学习', '深度学习', 'GPU', 'TPU'],
        cloud: ['云计算', '数据中心', '服务器', '边缘计算'],
        other: ['5G', '物联网', '区块链', '量子计算']
      }
    }
  }
}
