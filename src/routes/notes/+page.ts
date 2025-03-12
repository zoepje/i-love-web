import type { Post } from '$lib/types';

async function fetchPosts(fetch: any): Promise<Post[]> {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	return posts;
}

export async function load({ fetch, url }: { fetch: any; url: URL }) {
	const selectedCategories =
		url.searchParams
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
