const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			container: {
				center: true,
			}
		}
	},

	plugins: [
		require('daisyui'),
        require('tailwind-scrollbar-hide'),
	]
};

module.exports = config;
