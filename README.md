# vusion-loader

## Install

```
npm i --save-dev vusion-loader
```

## Vue CLI Configuration

``` js
module.exports = {
    chainWebpack(config) {
        config.module.rule('vue')
            .test(/\.vue([\\/]index\.js)?$/)
            .use('vusion-loader')
            .loader('vusion-loader');
    },
};
```
