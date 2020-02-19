export type PackOptionItem = {
	label: string;
	css: string;
};

export type PackOptionObject = {
	[name: string]: string;
};
export type PackOptions = PackOptionItem[] | PackOptionObject;

export type Condition<S extends string> = (state: {[name in S]: string }) => boolean;

export type PackedThemePart<S extends string> = {
	options: PackOptionItem[];
	condition?: Condition<S>;
}

export type PackDetailedName = {
	id: string;
	title: string;
};

export type PackName = string | PackDetailedName;

export type ThemePackItem<S extends string> = PackedThemePart<S> | PackName | undefined;

export type ThemePack<S extends string> = {
	[property in S]: ThemePackItem<S>[];
}

function pack<S extends string>(options: PackOptions, condition?: Condition<S>): PackedThemePart<S> | undefined {
	let pack: PackedThemePart<S> = {
		options: []
	};

	if (Array.isArray(options)) {
		pack.options = options;
	} else if (options) {
		pack.options = Object.keys(options).map((label) => ({
			css: options[label],
			label
		}))
	} else {
		return undefined;
	}

	if (typeof(condition) === 'function') {
		pack.condition = condition;
	}

	return pack;
}

export type MyThemeOptions = 'brand' | 'color';

const brandValues = pack(
	[
		{
			label: 'Kassa',
			css: ':root{--gap: 20px;}'
		}
	]
);

const colorValues = pack<MyThemeOptions>(
	{ 'Default': 'root{--gap: 20px;}' },
	({brand}) => brand === 'Kassa'
);

export const themepack: ThemePack<MyThemeOptions> = {
	brand: ['brand', brandValues],
	color: ['color', colorValues]
};
