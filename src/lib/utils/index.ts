export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	// console.log(allPostFiles)
	// console.log(iterablePostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as {metadata: unknown};
			const postPath = path.slice(11, -3);


			return {
				meta: metadata,
				path: postPath
			};
		})
	);


	return allPosts;
};

export function slugify(str: string) {
	return String(str)
		.normalize('NFKD') // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
}
