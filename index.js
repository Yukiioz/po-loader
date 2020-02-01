/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author David Schissler @dschissler
*/
let po2json = require('po2json');
let utils = require('loader-utils');

module.exports = function(source) {
    this.cacheable();

    const options = utils.getOptions(this) || {};

    // default option
    if (!('stringify' in options)) {
        options.stringify = true;
    }

    if (!('format' in options)) {
        options.format = 'mf';
    }

    return po2json.parse(source, options);
}
