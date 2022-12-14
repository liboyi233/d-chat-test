
function transformManifestVersion(content) {
	const manifest = JSON.parse(content.toString());
	manifest.version = process.env.npm_package_version;
	return Buffer.from(JSON.stringify(manifest));
}

/* Copied as it is to the `to` destination via CopyWebpackPlugin */
const copyPatterns = [
	{
		from: 'src/manifest.json',
		to: '.',
		transform: transformManifestVersion,
	},
	{ from: 'src/img', to: 'img' },
	{
		from: 'src/lib',
		to: 'lib/',
	},
	{
		from: 'src/_locales',
		to: '_locales'
	},
	{
		from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
		to: 'lib/js/',
	},
];

/* These are included into the HTML pages generated by HTMLWebpackPlugin*/
const htmlAssets = [
	// 'fonts/googlefonts/roboto-mono.css',
	'lib/js/browser-polyfill.js',
	'lib/js/webextensions-lib-configs/Configs.js',
	// 'lib/js/webcomponents-bundle.js',
	// 'lib/js/custom-elements-es5-adapter.js',
];

module.exports = {
	copyPatterns,
	htmlAssets
};
