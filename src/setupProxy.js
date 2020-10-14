const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  const socketProxy = createProxyMiddleware("/socket", {
    target: "http://zalochat.ga",
    changeOrigin: true,
    ws: true,
    logLevel: "debug",
  });
  // const apiProxy = createProxyMiddleware("/api", {
  //   target: "http://localhost:3003",
  //   changeOrigin: true,
  //   // ws: true,
  //   logLevel: "debug",
  // });
  app.use(socketProxy);
  // app.use(apiProxy);
};
