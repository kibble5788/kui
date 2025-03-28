import React from 'react';
import { useClassName, cls } from '../../hooks';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'medium',
    disabled = false,
    htmlType = 'button',
    onClick,
    className,
    style,
    children,
    ...rest
  } = props;

  const getClassName = useClassName('button');
  
  // 构建按钮的类名
  const buttonCls = cls(
    getClassName,
    {
      [`${getClassName}-${type}`]: type !== 'default',
      [`${getClassName}-${size}`]: size !== 'medium',
    },
    className
  );
  
  // 点击处理函数
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };
  
  return (
    <button
      type={htmlType}
      className={buttonCls}
      style={style}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 