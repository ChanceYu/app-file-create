module.exports = options => `{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "${options.title || '页面标题'}",
  "backgroundColor": "#000000",
  "backgroundTextStyle": "light",
  "enablePullDownRefresh": false
}`