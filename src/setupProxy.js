const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/manageServices", createProxyMiddleware({
        target: "http://127.0.0.1:8085",
        changeOrigin: true,
        // pathRewrite: {
        //     "^/manageServices": ""
        // }
    }))
}