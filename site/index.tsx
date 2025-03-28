import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ButtonDemo from './components/ButtonDemo';

// 导入文档组件
import Home from './pages/home';
import GettingStarted from './pages/GettingStarted';
import ComponentsOverview from './pages/ComponentsOverview';

const Header: React.FC = () => {
  return (
    <header style={{ 
      borderBottom: '1px solid #eee',
      padding: '0 20px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '20px', color: '#4e6ef2', textDecoration: 'none', marginRight: '48px' }}>
          KUI
        </Link>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <Link to="/" style={{ color: '#333', textDecoration: 'none' }}>首页</Link>
          <Link to="/guide/getting-started" style={{ color: '#333', textDecoration: 'none' }}>开始使用</Link>
          <Link to="/components" style={{ color: '#333', textDecoration: 'none' }}>组件</Link>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <a href="https://github.com/your-repo/kui" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isComponentPath = location.pathname.startsWith('/components');
  
  if (!isComponentPath) return null;
  
  const componentGroups = [
    {
      title: '通用',
      components: [
        { name: 'Button 按钮', path: '/components/button' }
      ]
    },
    {
      title: '布局',
      components: []
    },
    {
      title: '导航',
      components: []
    },
    {
      title: '数据录入',
      components: []
    },
    {
      title: '数据展示',
      components: []
    },
    {
      title: '反馈',
      components: []
    }
  ];

  return (
    <aside style={{ 
      width: '260px',
      padding: '24px 0',
      borderRight: '1px solid #eee',
      height: '100%',
      overflow: 'auto',
      position: 'fixed',
      top: '64px',
      left: 0,
      bottom: 0,
      backgroundColor: '#fff'
    }}>
      {componentGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: '24px' }}>
          <h3 style={{ 
            fontSize: '14px', 
            padding: '0 24px', 
            margin: '0 0 12px 0',
            color: '#666',
            fontWeight: 'normal'
          }}>
            {group.title}
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {group.components.map((component, compIndex) => {
              const isActive = location.pathname === component.path;
              return (
                <li key={compIndex}>
                  <Link 
                    to={component.path} 
                    style={{ 
                      display: 'block',
                      padding: '8px 24px',
                      color: isActive ? '#4e6ef2' : '#333',
                      textDecoration: 'none',
                      backgroundColor: isActive ? '#f0f5ff' : 'transparent',
                      borderRight: isActive ? '2px solid #4e6ef2' : 'none'
                    }}
                  >
                    {component.name}
                  </Link>
                </li>
              );
            })}
            {group.components.length === 0 && (
              <li style={{ 
                padding: '8px 24px',
                color: '#999',
                fontSize: '13px'
              }}>
                暂无组件
              </li>
            )}
          </ul>
        </div>
      ))}
    </aside>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/components');
  
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ 
        display: 'flex', 
        paddingTop: '64px', // 为固定顶部导航留出空间
        minHeight: 'calc(100vh - 64px)'
      }}>
        <Sidebar />
        <main style={{ 
          flex: 1, 
          padding: '40px',
          marginLeft: showSidebar ? '260px' : 0 
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/guide/getting-started" element={<Layout><GettingStarted /></Layout>} />
        <Route path="/components" element={<Layout><ComponentsOverview /></Layout>} />
        <Route path="/components/button" element={<Layout><ButtonDemo /></Layout>} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} 