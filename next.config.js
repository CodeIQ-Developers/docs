const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/introduction" : "";
module.exports = {
	...withNextra(),
	basePath: "",
	images: {
		unoptimized: true,
	},
};