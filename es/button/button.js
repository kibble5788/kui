var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { useClassName, cls } from '../hooks/index.js';
var Button = function (props) {
    var _a;
    var _b = props.type, type = _b === void 0 ? 'default' : _b, _c = props.size, size = _c === void 0 ? 'medium' : _c, _d = props.disabled, disabled = _d === void 0 ? false : _d, _e = props.htmlType, htmlType = _e === void 0 ? 'button' : _e, onClick = props.onClick, className = props.className, style = props.style, children = props.children, rest = __rest(props, ["type", "size", "disabled", "htmlType", "onClick", "className", "style", "children"]);
    var getClassName = useClassName('button');
    // 构建按钮的类名
    var buttonCls = cls(getClassName, (_a = {},
        _a["".concat(getClassName, "-").concat(type)] = type !== 'default',
        _a["".concat(getClassName, "-").concat(size)] = size !== 'medium',
        _a), className);
    // 点击处理函数
    var handleClick = function (e) {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    return (React.createElement("button", __assign({ type: htmlType, className: buttonCls, style: style, disabled: disabled, onClick: handleClick }, rest), children));
};
export default Button;
//# sourceMappingURL=button.js.map