import * as React from 'react';
import addons, {types} from '@storybook/addons';
import {API} from '@storybook/api';

import {ADDON_ID} from './constants';
import {ThemePack} from './components/ThemePack';

addons.register(ADDON_ID, (api: API) => {
	addons.add(ADDON_ID, {
		title: 'Themes',
		type: types.TOOL,
		match: ({viewMode}) => viewMode === 'story',
		render: () => <ThemePack api={api} />,
	});
});
