const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/", { target: "https://secure-lowlands-03035.herokuapp.com/" }));
};