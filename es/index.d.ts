import './style/index.less';
import Button from './button/index.js';
export { Button };
export type { ButtonProps, ButtonType, ButtonSize, ButtonHTMLType } from './button/interface.js';
declare const KUI: {
    Button: import("react").FC<import("./button/interface").ButtonProps>;
};
export default KUI;
