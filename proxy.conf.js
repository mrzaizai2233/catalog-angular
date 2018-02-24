const PROXY_CONFIG = [{
    context: [
        "/V1",
        "/V2",
    ],
    target: "http://catalog.dev/rest",
    secure: false,
    changeOrigin: true,
    logLevel: "info"
}]

module.exports = PROXY_CONFIG;