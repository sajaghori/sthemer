import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sass: {
			prependData: `@import 'src/lib/mixins'`,
		},
		scss: {
			prependData: `@import 'src/lib/mixins';`,
		},
		less: {
			prependData: `@import 'src/lib/mixins';`,
		},
	}),

	kit: {
		adapter: adapter(),
	},
}

export default config
