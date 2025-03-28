import React from 'react';

const GettingStarted: React.FC = () => {
  return (
    <div>
      <h1>开始使用</h1>
      
      <section>
        <h2>安装</h2>
        <p>KUI 是一个现代化的 React UI 组件库，您可以通过 npm 或 yarn 安装：</p>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '16px', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
          <code>
{`# 使用 npm 安装
npm install @ked3/kui

# 使用 yarn 安装
yarn add @ked3/kui`}
          </code>
        </pre>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2>快速上手</h2>
        <p>在项目中引入组件：</p>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '16px', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
          <code>
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@ked3/kui';
import '@ked3/kui/dist/kui.css';

function App() {
  return (
    <div>
      <Button type="primary">KUI 按钮</Button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
          </code>
        </pre>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2>浏览器兼容性</h2>
        <p>KUI 支持所有现代浏览器和 IE11+。</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #eee', padding: '12px', textAlign: 'left' }}>浏览器</th>
              <th style={{ border: '1px solid #eee', padding: '12px', textAlign: 'left' }}>版本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>Chrome</td>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>最新 2 个版本</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>Firefox</td>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>最新 2 个版本</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>Safari</td>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>最新 2 个版本</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>Edge</td>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>最新 2 个版本</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>IE</td>
              <td style={{ border: '1px solid #eee', padding: '12px' }}>11+</td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2>版本</h2>
        <p>KUI 目前处于活跃开发中，当前版本为 <code>0.1.0</code>。</p>
      </section>
    </div>
  );
};

export default GettingStarted; 