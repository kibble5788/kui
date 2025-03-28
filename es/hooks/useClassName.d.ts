/**
 * 生成组件的类名
 * @param componentName 组件名称
 * @param modifier 修饰符
 * @returns 组件的类名（如：kui-button）
 */
export declare function useClassName(componentName: string, modifier?: string): string;
/**
 * 合并类名
 * @param args 多个类名参数
 * @returns 合并后的类名
 */
export declare function cls(...args: any[]): string;
export default useClassName;
