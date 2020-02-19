module.exports = function clientWebpack({config}) {
	config.output.filename = '[name].bundle.js';

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('awesome-typescript-loader')
	});

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
