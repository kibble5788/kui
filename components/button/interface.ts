import React from 'react';

export type ButtonType = 'default' | 'primary' | 'danger' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonHTMLType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  /**
   * 按钮类型
   * @default default
   */
  type?: ButtonType;
  
  /**
   * 按钮大小
   * @default medium
   */
  size?: ButtonSize;
  
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 设置原生 button 的 type 值
   * @default button
   */
  htmlType?: ButtonHTMLType;
  
  /**
   * 点击按钮的回调
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  
  /**
   * 自定义className
   */
  className?: string;
  
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  
  /**
   * 按钮内容
   */
  children?: React.ReactNode;
} 