const ghpages = require('gh-pages');
const path = require('path');
const { exec } = require('child_process');

console.log('构建静态文件...');
exec('node ./scripts/build-site.js', (err) => {
  if (err) {
    console.error('构建失败:', err);
    return;
  }

  console.log('部署到GitHub Pages...');
  ghpages.publish(path.resolve(__dirname, '../dist'), {
    // 分支名称（默认是 gh-pages）
    branch: 'gh-pages',
    // 提交信息
    message: '自动部署更新 👻',
    // 用户信息
    // user: {
    //   name: '你的名字',
    //   email: '你的邮箱'
    // }
  }, (err) => {
    if (err) {
      console.error('部署失败:', err);
      return;
    }
    console.log('部署成功! 你的网站应该很快就能在 GitHub Pages 上访问了');
  });
});