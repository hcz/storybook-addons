import {pack} from '../../../../addons/storybook-themepack/src';
import {ThemePack} from '../../../../addons/storybook-themepack/src/types';
import {ThemePackOptions} from './types';

import colorMyDefault from './variables/color/colorMyDefault';
import colorMyBrand from './variables/color/colorMyBrand';
import colorMyInverse from './variables/color/colorMyInverse';
import colorMySuccess from './variables/color/colorMySuccess';

import colorProjectBrand from './variables/color/colorProjectBrand';
import colorProjectDefault from './variables/color/colorProjectDefault';
import colorProjectInverse from './variables/color/colorProjectInverse';
import colorProjectSuccess from './variables/color/colorProjectSuccess';

import gapMedium from './variables/gap/gapMedium';
import gapSmall from './variables/gap/gapSmall';

import defaultMyTheme from './variables/theme/defaultMyTheme';
import defaultProjectTheme from './variables/theme/defaultProjectTheme';

export const themepack: ThemePack<ThemePackOptions> = {
	brand: ['Brand', pack({'My': defaultMyTheme, 'Project': defaultProjectTheme})],
	color: [
		'Color',
		pack(
			{colorMyDefault, colorMyBrand, colorMyInverse, colorMySuccess},
			({brand}) => brand ? brand === 'My' : false
		),
		pack(
			{colorProjectBrand, colorProjectDefault, colorProjectInverse, colorProjectSuccess},
			({brand}) => brand ? brand === 'Project' : false
		),
	],
	gap: ['Gap', pack({gapSmall, gapMedium})]
};
