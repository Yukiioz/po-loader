/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author David Schissler @dschissler
*/
let po2json = require('po2json');
let utils = require('loader-utils');

module.exports = function(source) {
    this.cacheable();

    const options = utils.getOptions(this) || {};

    if (!('format' in options)) {
        options.format = 'mf';
    }

    const json = po2json.parse(source, options);

    Object.keys(json).forEach((key) => {
        if (json[key] === "") {
            json[key] = key;
        }
    });

    return json;
}
