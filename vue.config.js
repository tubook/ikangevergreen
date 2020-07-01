const path = require("path");

// 查找路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        prependData: `@import "./src/styles/global.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@api", resolve("src/api"))
      .set("@components", resolve("src/components"))
      .set("@config", resolve("src/config"))
      .set("@store", resolve("src/store"))
      .set("@utils", resolve("src/utils"))
      .set("@http", resolve("src/http"));

    config.optimization.minimize(true); // 最小化压缩
    config.optimization.splitChunks({
      // 分割代码
      chunks: "all"
    });
    // 打包文件带hash
    config.output.filename("[name].[hash].js").end();
  },
  pluginOptions: {
    i18n: {
      locale: "cn",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
