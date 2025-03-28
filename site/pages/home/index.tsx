import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.less';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>KUI 组件库</h1>
        <p className={styles.description}>
          一个现代化的 React UI 组件库，提供优雅、简洁的设计体验
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/guide/getting-started" className={styles.primaryButton}>
            开始使用
          </Link>
          <Link to="/components" className={styles.secondaryButton}>
            浏览组件
          </Link>
        </div>
      </header>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>特性</h2>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              <span className={styles.featureIcon}>🎨</span> 优雅美观
            </h3>
            <p className={styles.featureDescription}>提供美观且简洁的设计体验，符合现代审美需求</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              <span className={styles.featureIcon}>🛠️</span> 易于定制
            </h3>
            <p className={styles.featureDescription}>支持灵活的主题定制，满足各种设计风格需求</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              <span className={styles.featureIcon}>💡</span> 类型友好
            </h3>
            <p className={styles.featureDescription}>使用TypeScript编写，提供完整的类型定义，增强开发体验</p>
          </div>
        </div>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>快速开始</h2>
        <div className={styles.codeBlock}>
          <pre className={styles.code}>
            <code>
{`# 使用 npm 安装
npm install @ked3/kui

# 使用 yarn 安装
yarn add @ked3/kui`}
            </code>
          </pre>
        </div>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>示例</h2>
        <div className={styles.codeBlock}>
          <pre className={styles.code}>
            <code>
{`import React from 'react';
import { Button } from '@ked3/kui';
import '@ked3/kui/dist/kui.css';

function App() {
  return (
    <Button type="primary">开始使用</Button>
  );
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.copyright}>KUI 组件库 &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Home; 