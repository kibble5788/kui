import classNames from 'classnames';
// 前缀
var PREFIX = 'kui';
/**
 * 生成组件的类名
 * @param componentName 组件名称
 * @param modifier 修饰符
 * @returns 组件的类名（如：kui-button）
 */
export function useClassName(componentName, modifier) {
    var baseName = "".concat(PREFIX, "-").concat(componentName);
    return modifier ? "".concat(baseName, "-").concat(modifier) : baseName;
}
/**
 * 合并类名
 * @param args 多个类名参数
 * @returns 合并后的类名
 */
export function cls() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return classNames.apply(void 0, args);
}
export default useClassName;
//# sourceMappingURL=useClassName.js.map