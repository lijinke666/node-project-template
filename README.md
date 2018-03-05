# node-project-template
node express project template <br/>

by Dawdler [https://github.com/lijinke666/dawdler](https://github.com/lijinke666/dawdler) <br/>

Have Fun ! 

## About the system environment
```
node v8.9+
```

## npm scripts 
start | dev
```js
$ npm start | npm run dev-server 
``` 
> open

```
localhost:8080
```

Unit testing 
> utils :  __test__/array.test.js .

> api :  __test__/api.test.js

```js
$ npm run test
```


## Global Variable
> app.js

- `ENV`     node env name
- `ISPROD`  Is it a production environment
- `ISTEST`  Is it a test environment
- `ISDEV`   Is it a development environment
- `VERSION` app version
- `APPNAME` app name

## App Config
> config
- `dev.config.js`       本地开发配置
- `test.config.js`      测试环境配置
- `prod.config.js`      生产环境配置
- `env.js`              环境变量名称定义
- `index.js`            配置文件入口,根据当前 `env` 自动 导出对应配置文件



