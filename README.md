# nodemq
传奇扑克 node mq 服务器

## 关于环境
```
node v8.9
```

## npm scripts 
启动 | 本地开发
```js
$ npm start | npm run dev-server 
``` 
单元测试
> 普通 测试 请参考 __test__/array.test.js .

> 异步api 测试 请参考 __test__/api.test.js
```js
$ npm run test
```


## 全局变量
> app.js

- `ENV`     当前node环境变量
- `ISPROD`  是否是生产环境
- `ISTEST`  是否是测试环境
- `ISDEV`   是否是开发环境
- `VERSION` 应用版本
- `APPNAME` 应用名称

## 项目配置
> config
- `dev.config.js`       本地开发配置
- `test.config.js`      测试环境配置
- `prod.config.js`      生产环境配置
- `env.js`              环境变量名称定义
- `index.js`            配置文件入口,根据当前 `env` 自动 导出对应配置文件

## 测试用例
> http api demo
`localhost:8080/api.html`

> wx demo 
`localhost:8080/ws.html`

