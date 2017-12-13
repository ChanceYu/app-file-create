module.exports = options => `{
  "titleBarColor": "#ffffff",
  "defaultTitle": "${options.title || '页面标题'}",
  "allowsBounceVertical": "YES",
  "pullRefresh": false
}`