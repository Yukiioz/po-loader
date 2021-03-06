const po2json = require('po2json');
const utils = require('loader-utils');

module.exports = function(source) {
    if (this.cacheable) this.cacheable();

    const options = utils.getOptions(this) || {};

    if (!('format' in options)) {
        options.format = 'mf';
    }

    const json = po2json.parse(source, options);

    for (const key in json) {
        if (!json[key]) {
            json[key] = key;
        }
    }

    return 'module.exports = ' +
        JSON.stringify(json)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029');
}
