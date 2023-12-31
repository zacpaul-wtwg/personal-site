// rehype-inline-code.js

import { visit } from 'unist-util-visit';

export default () => {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'code' && !node.properties.className) {
				node.properties.className = ['language-javascript'];
			}

			if (node.tagName === 'pre') {
				if (node.properties.className) {
					node.properties.className.push('line-numbers');
				} else {
					node.properties.className = ['line-numbers'];
				}
			}
		});
	};
};
