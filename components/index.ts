// 不再直接导入样式
// import './style/index.less';

import Button from './button/index';

export { Button };
export type { ButtonProps, ButtonType, ButtonSize, ButtonHTMLType } from './button/interface';

// 添加默认导出
const KUI = {
  Button
};

export default KUI; 