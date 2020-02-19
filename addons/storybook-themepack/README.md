# 🎨 storybook-themepack
> Better themepacks for Storybook

[![npm version](https://badge.fury.io/js/storybook-themepack.svg)](https://badge.fury.io/js/storybook-themepack)

Storybook addon for custom themes based on CSS custom properties (CSS variables).

# Demo
Online demo [here](https://hcz.github.io/storybook-addons/), feel free to test this addon in your local environment: `npm run demo:themepack`.

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

Every option (for example, `brand`) contain sources for tooltips that can switch theme and preview your themed component.

Syntax:
````
[ <theme name>, <pack(...)>, <pack(...)>, ... ]
````

### icon
Icon for the first item.

Variants are in `@storybook/components/dist/icon/icon.d.ts`.

Default value is `mirror`.

### usePreview
Adds preview for every option of the tooltips.

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

## More

- Storybook [addons in Github](https://github.com/search?l=TypeScript&o=desc&q=storybook+addon&s=stars&type=Repositories)
- Packages [depending on @storybook/api](https://www.npmjs.com/browse/depended/@storybook/api)
- Packages [depending on @storybook/components](https://www.npmjs.com/browse/depended/@storybook/components)
