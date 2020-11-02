# 🎨 storybook-themepack
> Better themepacks for Storybook

[![npm version](https://badge.fury.io/js/storybook-themepack.svg)](https://badge.fury.io/js/storybook-themepack)

Storybook addon for custom themes.

Ideal for themes based on CSS custom properties (CSS variables).

## Demo

Online demo [link here](https://hcz.github.io/storybook-addons/examples/storybook-themepack-example/demo).

Demo source [code](https://github.com/hcz/storybook-addons/tree/master/examples/storybook-themepack-example).

![Example](./docs/assets/preview.png)

Feel free to test this addon in your local environment: `npm run demo`.

## Usage

Install:
```bash
npm install --save-dev storybook-themepack
```

Then register addon:

```javascript
// addons.js
import 'storybook-themepack/register';
```

And add some configuration:
```javascript
// config.js
import {addParameters} from '@storybook/react';

const gaps = {
    gapSmall: '--gap: 12px;',
    gapMedium: '--gap: 16px;'
};

addParameters({
    themepack: {
        pack: {
            gap: [ 'Gap', pack(gaps) ]
        }
    },
});

```

Voilà! Now you can use all the power of themes based on CSS custom properties.

Also you can add per-story configuration:

```javascript
storiesOf('Your Library 🎨', module)
    .addParameters({
        themepack: {
            pack: {
                gap: [ 'Gap', pack(gaps) ]
            }
        }
     })

    .add('example', () => <p>example</p>);
```

## TypeScript

You can find an example repo here: `examples/storybook-themepack-example`

## Configuration and options

Example configuration

```javascript
// config.js
import {pack} from 'storybook-themepack';

addParameters({
    themepack: {
        pack: {
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
        },
        icon: 'bookmark',
        usePreview: true,
        removeLabel: 'Remove',
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
```

### pack
Main themepack configuration. Every field of this object is an array.

Every option (for example, `brand`) contain sources for tooltips that can switch theme and preview your themed component. Packs' content for any option is merged in tooltip options.

Syntax:
````
[ <theme name>, <pack(...)>, <pack(...)>, ... ]
````

Packs' syntax:
````javascript
pack(
    // Object contains options for tooltip
    {'theme option item name': 'css content'},
    // Optional function for conditional drawing. Uses selected values for every option
    ({yourThemeOption1, yourThemeOption2}) => true
);

pack(
    // Array of options for tooltip
    [{ label: 'theme option item name', css: 'css content' }]
);

````

### icon
Icon for the first item.

Variants are in [`@storybook/components`](https://github.com/storybookjs/storybook/blob/next/lib/components/src/icon/icons.tsx).

Default value is `mirror`.

### usePreview
Adds preview for every option of the tooltips.

You can set up preview styles in configuration property `styles.preview`.

Default value is `true`.

### removeLabel
Text for the element that clears tooltip.

Default value is `-`.

### sortFunction
Function that sorts keys of your themepack.

Default value is not set.

### styles
Object `{preview: 'string', iframe 'string'}` with CSS styles.

It contains styles for a themepack item preview inside every tooltip and global style for your component preview inside Storybook.

Default value is not set.

## TODO

[ ] Update Readme and examples to Storybook v6
