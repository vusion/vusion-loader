const vueMultifileLoader = require('vue-multifile-loader');

module.exports = function (content) {
    if (this.resourcePath.endsWith('.vue'))
        return content;
    else if (this.resourcePath.endsWith('index.js'))
        return vueMultifileLoader.call(this, content);
    else if (this.resourcePath.endsWith('index.json')) // for vue-schema
        return 'todo';
    else
        return content;
};
