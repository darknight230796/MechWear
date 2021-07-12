const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://afternoon-plateau-32480.herokuapp.com/',
      changeOrigin: true,
    })
  );
};