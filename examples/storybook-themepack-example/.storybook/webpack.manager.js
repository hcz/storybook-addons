exports.managerWebpack = function managerWebpack(config) {
	config.output.filename = '[name].manager.bundle.js';

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('awesome-typescript-loader')
	});

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
