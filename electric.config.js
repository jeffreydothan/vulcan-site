'use strict';

var marble = require('marble');

module.exports = {
	metalComponents: ['electric-marble-components'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	codeMirrorLanguages: ['javascript', 'clike', 'swift'],
	vendorSrc: ['node_modules/marble/build/fonts/**']
};
