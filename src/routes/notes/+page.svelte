<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import { goto } from '$app/navigation';
	export let data;

	let selectedCategories: Set<string> = new Set(data.selectedCategories);

	function toggleCategory(category: string) {
		if (selectedCategories.has(category)) {
			selectedCategories.delete(category);
		} else {
			selectedCategories.add(category);
		}
		const query = Array.from(selectedCategories).join(',');
		goto(query ? `?categories=${query}` : '/notes', {replaceState: true});
	}
</script>

<svelte:head>
	<title>{config.title} - Notes</title>
</svelte:head>

<h1>Notes</h1>
<form class="categories">
	<a href="#posts" class="skip-to-content">Skip filter</a>
	{#each data.allCategories as category}
		<fieldset>
			<input
				type="checkbox"
				id={category}
				name={category}
				value={category}
				on:change={() => toggleCategory(category)}
				checked={selectedCategories.has(category)}
			/>
			<label for={category} class="surface-4 category">{category}</label>
		</fieldset>
	{/each}
</form>

<ul class="posts" id="posts">
	{#each data.posts as post}
		<li class="post">
			<a href="notes/{post.slug}" class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
		</li>
	{/each}
</ul>

<style>
	h1 {
		margin-inline: auto;
		text-align: center;
	}

	.posts {
		list-style: none;
		display: grid;
		gap: var(--size-7);
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	.post {
		max-inline-size: var(--size-content-4);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
		color: var(--brand);
	}

	.title:visited {
		color: var(--color-1);
	}

	.date {
		text-transform: capitalize;
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	.categories {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		display: flex;
		overflow-x: scroll;
		gap: var(--size-3);
		margin-inline: auto;
		padding: var(--size-3) var(--size-1);
	}

	.categories fieldset {
		position: relative;
		margin: 0;
		padding: 0;
		border: none;
	}

	.categories input {
		position: absolute;
		top: -9999em;
		right: 0;
	}

	.categories input:checked + .category {
		background-color: var(--color-1);
		color: var(--text-alt);
	}

	.categories input:focus-visible + .category {
		outline: 2px solid var(--brand);
	}

	.category {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
		text-transform: capitalize;
		white-space: nowrap;
	}

	.category:hover {
		outline: 2px solid var(--brand);
	}
</style>
