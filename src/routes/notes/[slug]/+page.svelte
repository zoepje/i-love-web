<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	export let data;
	let categoryClass = data.meta.categories.includes('sprint') ? 'sprint' : '';
</script>

<svelte:head>
	<title>{config.title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class={categoryClass}>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>{data.meta.description}</p>
		{#if data.meta.lastUpdated}
			<p>Updated: {formatDate(data.meta.lastUpdated)}</p>
		{/if}
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	hgroup p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
