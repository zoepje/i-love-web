/**
 * @typedef {import('$lib/types').Post} Post
 */

async function fetchPosts(fetch) {
	const response = await fetch('api/posts');
	const posts = await response.json();
	return posts;
}

export async function load({ fetch, url }) {
	const searchParams = new URL(url?.toString(), 'http://localhost').searchParams;
	const selectedCategories =
		searchParams
			.get('categories')
			?.split(',')
			.map((cat) => cat.toLowerCase()) || [];
	const posts = await fetchPosts(fetch);
	const allCategories = Array.from(
		new Set(posts.flatMap((post) => post.categories.map((cat) => cat.toLowerCase())))
	);

	const filteredPosts = selectedCategories.length
		? posts.filter((post) =>
				post.categories.some((category) => selectedCategories.includes(category.toLowerCase()))
			)
		: posts;

	return { posts: filteredPosts, allCategories, selectedCategories };
}
