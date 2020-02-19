import React from 'react';
import {addParameters, configure} from '@storybook/react';

import {themepack} from './themepack';

addParameters({
	themepack: {
		pack: themepack,
		icon: 'bookmark', // default 'mirror'
		usePreview: true, // default true
		removeLabel: 'Remove', // default '-'
		sortFunction: (a, b) => {
			if (a === 'brand') {
				return 1;
			}
			return a === b ? 0 : a > b ? 1 : -1;
		},
		styles: {
			preview: `
				border-color: var(--color-bg-border);
				color: var(--color-typo-brand);
				background-color: var(--color-bg-default);
			`,
			iframe: `
				background-color: var(--color-bg-default);
			`
		}
	},
});


const context = require.context('../src', true, /\.example\.tsx?$/);

configure(function() {
		context.keys().forEach(filename => context(filename));
}, module);
