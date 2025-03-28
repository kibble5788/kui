import classNames from 'classnames';

// 前缀
const PREFIX = 'kui';

/**
 * 生成组件的类名
 * @param componentName 组件名称
 * @param modifier 修饰符
 * @returns 组件的类名（如：kui-button）
 */
export function useClassName(componentName: string, modifier?: string): string {
  const baseName = `${PREFIX}-${componentName}`;
  return modifier ? `${baseName}-${modifier}` : baseName;
}

/**
 * 合并类名
 * @param args 多个类名参数
 * @returns 合并后的类名
 */
export function cls(...args: any[]): string {
  return classNames(...args);
}

export default useClassName; 