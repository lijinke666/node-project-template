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
open localhost:8080
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
- `dev.config.js`       development config
- `test.config.js`      test config
- `prod.config.js`      production config
- `env.js`              The environment variable names config
- `index.js`            config root

## Database Connection
> user mysql 
```js
    mysql_db: {
        "host": "localhost",
        "port": 3306,
        "user": "dawdler",
        "password": "123456",
        "dataBase": "dawdler"
    }
```

## Test Api
```
curl http://127.0.0.1:8080/api/testApi
```

## Api Response
> like this
```js
{
    "api": "/api/testApi",
    "code": 200,
    "message": "SUCCESS",
    "method": "GET",
    "version": "0.0.1",
    "production": false,
    "result": {
        "users": {
            "id": 0,
            "username": "12345",
            "password": "9cbf8a4dcb8e30682b927f352d6559a0"
        }
    },
    "total": 0
}
```



