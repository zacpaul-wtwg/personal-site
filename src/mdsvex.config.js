// mdsvex.config.js

import { parseHtml } from 'zepto';

const inlineCodePlugin = () => ({
	async markdown(md) {
		const defaultRenderer = md.renderer.rules.code_inline;

		md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
			// Get the default rendering
			let token = tokens[idx];
			let content = defaultRenderer(tokens, idx, options, env, self);

			// Use zepto to manipulate the HTML content
			let $ = parseHtml(content);
			$('code').addClass('language-js'); // Adding the class for JavaScript

			return $.html();
		};
	}
});

export default {
	extensions: ['.svx', '.md'],
	layout: {
		_: './src/lib/Layout.svelte'
	},
	remarkPlugins: [],
	rehypePlugins: [],
	markdownPlugins: [inlineCodePlugin]
};
