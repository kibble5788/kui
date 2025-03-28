import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <header style={{ 
        backgroundColor: '#4e6ef2', 
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
        marginBottom: '60px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #4e6ef2 0%, #6e8ff5 100%)'
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '16px', fontWeight: 'bold' }}>KUI 组件库</h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          一个现代化的 React UI 组件库，提供优雅、简洁的设计体验
        </p>
        <div>
          <Link to="/guide/getting-started" style={{ 
            display: 'inline-block',
            backgroundColor: 'white',
            color: '#4e6ef2',
            padding: '12px 28px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            开始使用
          </Link>
          <Link to="/components" style={{ 
            display: 'inline-block',
            border: '1px solid white',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            浏览组件
          </Link>
        </div>
      </header>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>特性</h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, padding: '32px 24px', borderRadius: '8px', border: '1px solid #eee', minWidth: '250px' }}>
            <h3 style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '24px' }}>🎨</span> 优雅美观
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>提供美观且简洁的设计体验，符合现代审美需求</p>
          </div>
          <div style={{ flex: 1, padding: '32px 24px', borderRadius: '8px', border: '1px solid #eee', minWidth: '250px' }}>
            <h3 style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '24px' }}>🛠️</span> 易于定制
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>支持灵活的主题定制，满足各种设计风格需求</p>
          </div>
          <div style={{ flex: 1, padding: '32px 24px', borderRadius: '8px', border: '1px solid #eee', minWidth: '250px' }}>
            <h3 style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '24px' }}>💡</span> 类型友好
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>使用TypeScript编写，提供完整的类型定义，增强开发体验</p>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>快速开始</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '24px', 
            borderRadius: '8px',
            overflow: 'auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <code>
{`# 使用 npm 安装
npm install @ked3/kui

# 使用 yarn 安装
yarn add @ked3/kui`}
            </code>
          </pre>
        </div>
      </div>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>示例</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '24px', 
            borderRadius: '8px',
            overflow: 'auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
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

      <div style={{ textAlign: 'center', marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
        <p style={{ color: '#666' }}>KUI 组件库 &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Home; 