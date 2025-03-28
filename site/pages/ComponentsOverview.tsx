import React from 'react';
import { Link } from 'react-router-dom';

const ComponentsOverview: React.FC = () => {
  const componentGroups = [
    {
      title: '通用',
      components: [
        { name: 'Button 按钮', path: '/components/button', icon: '🔘' }
      ]
    },
    {
      title: '导航',
      components: [
        // 待添加
      ]
    },
    {
      title: '数据录入',
      components: [
        // 待添加
      ]
    },
    {
      title: '数据展示',
      components: [
        // 待添加
      ]
    },
    {
      title: '反馈',
      components: [
        // 待添加
      ]
    }
  ];

  return (
    <div>
      <h1>组件总览</h1>
      <p>KUI 提供了丰富的组件，涵盖了常见的 UI 场景。</p>
      
      {componentGroups.map((group, groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>{group.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {group.components.map((component, compIndex) => (
              <Link
                key={compIndex}
                to={component.path}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '170px',
                  height: '120px',
                  padding: '20px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{component.icon}</div>
                <div>{component.name}</div>
              </Link>
            ))}
            {group.components.length === 0 && (
              <div style={{ 
                width: '100%', 
                padding: '20px', 
                textAlign: 'center',
                color: '#999',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px'
              }}>
                更多组件正在开发中...
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentsOverview; 