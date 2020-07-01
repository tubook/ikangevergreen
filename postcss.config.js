module.exports = {
  plugins: {
    // to edit target browsers: use "browserslist" field in package.json
    // autoprefixer: {},
    "postcss-preset-env": {
      stage: false,
      browsers: ["last 2 versions", "> 1%"]
    },
    cssnano: {
      preset: [
        "default",
        {
          autoprefixer: false,
          reduceIdents: false,
          mergeIdents: true,
          zindex: false
        }
      ]
    }
  }
};
