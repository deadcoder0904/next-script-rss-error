module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: { plugins: [{ removeViewBox: false }] },
						titleProp: true,
					},
				},
			],
		})

		if (!options.dev && options.isServer) {
			const originalEntry = config.entry

			config.entry = async () => {
				const entries = { ...(await originalEntry()) }
				entries['./scripts/build-rss'] = './scripts/build-rss.js'
				return entries
			}
		}

		if (!options.isServer) {
			// NOTE: Doesn't work in Webpack v4
			// config.resolve.fallback.fs = false
		}

		return config
	},
}
