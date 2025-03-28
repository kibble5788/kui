import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.less';

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>组件总览</h1>
        <p className={styles.description}>
          KUI 提供了丰富的组件，涵盖了常见的 UI 场景。每个组件都经过精心设计，确保易用性和美观性。
        </p>
      </header>
      
      {componentGroups.map((group, groupIndex) => (
        <div key={groupIndex} className={styles.section}>
          <h2 className={styles.sectionTitle}>{group.title}</h2>
          <div className={styles.componentGrid}>
            {group.components.map((component, compIndex) => (
              <Link
                key={compIndex}
                to={component.path}
                className={styles.componentCard}
              >
                <div className={styles.componentIcon}>{component.icon}</div>
                <div className={styles.componentName}>{component.name}</div>
              </Link>
            ))}
            {group.components.length === 0 && (
              <div className={styles.emptyState}>
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