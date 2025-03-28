import React from 'react';
// 使用相对路径导入，后续可以改为别名导入：import { Button } from '@kui/button';
import { Button } from '@kui/button';

const ButtonDemo: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 'bold' }}>Button 按钮</h1>
      <p style={{ color: '#666', marginBottom: '40px', fontSize: '16px' }}>按钮用于开始一个即时操作。</p>
      
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', position: 'relative', paddingLeft: '12px' }}>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '16px', backgroundColor: '#4e6ef2', borderRadius: '2px' }}></div>
          基本用法
        </h2>
        <p style={{ color: '#666', marginBottom: '16px' }}>按钮有四种类型：默认按钮、主要按钮、危险按钮和链接按钮。</p>
        <div style={{ 
          padding: '24px', 
          border: '1px solid #eee', 
          borderRadius: '8px',
          marginTop: '16px',
          background: '#fff' 
        }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="danger">危险按钮</Button>
            <Button type="link">链接按钮</Button>
          </div>
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', margin: 0 }}>代码示例</h3>
          </div>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px',
            overflow: 'auto'
          }}>
            <code>
{`import { Button } from '@ked3/kui';

export default () => (
  <>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="link">链接按钮</Button>
  </>
);`}
            </code>
          </pre>
        </div>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', position: 'relative', paddingLeft: '12px' }}>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '16px', backgroundColor: '#4e6ef2', borderRadius: '2px' }}></div>
          按钮尺寸
        </h2>
        <p style={{ color: '#666', marginBottom: '16px' }}>按钮有大、中、小三种尺寸。</p>
        <div style={{ 
          padding: '24px', 
          border: '1px solid #eee', 
          borderRadius: '8px',
          marginTop: '16px',
          background: '#fff' 
        }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="small">小按钮</Button>
            <Button>中按钮</Button>
            <Button size="large">大按钮</Button>
          </div>
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', margin: 0 }}>代码示例</h3>
          </div>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px',
            overflow: 'auto'
          }}>
            <code>
{`import { Button } from '@ked3/kui';

export default () => (
  <>
    <Button size="small">小按钮</Button>
    <Button>中按钮</Button>
    <Button size="large">大按钮</Button>
  </>
);`}
            </code>
          </pre>
        </div>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', position: 'relative', paddingLeft: '12px' }}>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '16px', backgroundColor: '#4e6ef2', borderRadius: '2px' }}></div>
          禁用状态
        </h2>
        <p style={{ color: '#666', marginBottom: '16px' }}>按钮不可用状态。</p>
        <div style={{ 
          padding: '24px', 
          border: '1px solid #eee', 
          borderRadius: '8px',
          marginTop: '16px',
          background: '#fff' 
        }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button disabled>禁用按钮</Button>
            <Button type="primary" disabled>禁用主要按钮</Button>
          </div>
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', margin: 0 }}>代码示例</h3>
          </div>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px',
            overflow: 'auto'
          }}>
            <code>
{`import { Button } from '@ked3/kui';

export default () => (
  <>
    <Button disabled>禁用按钮</Button>
    <Button type="primary" disabled>禁用主要按钮</Button>
  </>
);`}
            </code>
          </pre>
        </div>
      </section>
      
      <section style={{ marginTop: '60px', backgroundColor: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #eee' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '24px', position: 'relative', paddingLeft: '12px' }}>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '16px', backgroundColor: '#4e6ef2', borderRadius: '2px' }}></div>
          API
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f7fa' }}>
              <th style={{ border: '1px solid #eee', padding: '12px 16px', textAlign: 'left', fontWeight: 'normal' }}>属性</th>
              <th style={{ border: '1px solid #eee', padding: '12px 16px', textAlign: 'left', fontWeight: 'normal' }}>说明</th>
              <th style={{ border: '1px solid #eee', padding: '12px 16px', textAlign: 'left', fontWeight: 'normal' }}>类型</th>
              <th style={{ border: '1px solid #eee', padding: '12px 16px', textAlign: 'left', fontWeight: 'normal' }}>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>type</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>按钮类型</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>
                <code>default</code> | <code>primary</code> | <code>danger</code> | <code>link</code>
              </td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>default</code></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>size</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>按钮大小</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>
                <code>small</code> | <code>medium</code> | <code>large</code>
              </td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>medium</code></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>disabled</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>是否禁用按钮</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>boolean</code></td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>false</code></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>htmlType</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>设置原生 button 的 type 值</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>
                <code>button</code> | <code>submit</code> | <code>reset</code>
              </td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>button</code></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>onClick</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>点击按钮的回调</td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}><code>(e: React.MouseEvent) =&gt; void</code></td>
              <td style={{ border: '1px solid #eee', padding: '12px 16px' }}>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ButtonDemo; 