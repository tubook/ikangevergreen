# ikangevergreen

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 基于 vue-cli4.x 安装的 vue2.x，结合 vue-i18n,element-ui,开发 pc。mobile 适配的，国际化（中英文）支持的官网基础仓库！

```
.
├── README.md                                   //
├── babel.config.js                             //
├── jsconfig.json                               //
├── package-lock.json                           //
├── package.json                                //
├── postcss.config.js                           //
├── public                                      //
│   ├── favicon.ico                             //
│   └── index.html                              //
├── src                                         //
│   ├── App.vue                                 //
│   ├── api                                     // 接口文件
│   │   └── index.js                            //
│   ├── assets                                  //
│   │   └── logo.png                            //
│   ├── components                              // 组件库
│   │   ├── common                              // 共用组件库
│   │   ├── desktop                             // 桌面组件库
│   │   └── mobile                              // 移动组件库
│   ├── config                                  //
│   │   └── index.js                            //
│   ├── http                                    //
│   │   └── index.js                            //
│   ├── language                                // 语言配置文件
│   │   ├── cn                                  // 中文
│   │   │   └── about.js                        // 语言-页面模块
│   │   ├── cn.js                               //
│   │   ├── en                                  //
│   │   │   └── about.js                        //
│   │   └── en.js                               //
│   ├── main.js                                 // 入口文件
│   ├── router                                  // 路由文件
│   │   ├── index.js                            //
│   │   └── modules                             // 路由模块
│   │       └── RouterAbout.js                  // About-路由数据
│   ├── store                                   //
│   │   ├── index.js                            //
│   │   └── language                            //
│   │       └── index.js                        //
│   ├── styles                                  //
│   │   ├── common.scss                         // 共用css样式
│   │   └── global.scss                         // 全局scss变量
│   ├── utils                                   //
│   │   ├── element-ui.js                       // element-ui组件
│   │   ├── i18n.js                             //
│   │   └── index.js                            //
│   └── views                                   //
│       ├── About.vue                           //
│       ├── Home.vue                            //
│       └── about                               //
│           ├── about.vue                       //
│           └── index.vue                       //
├── vue.config.js                               //
└── yarn.lock                                   //

```
