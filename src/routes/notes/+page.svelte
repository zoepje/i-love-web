<script lang="ts">
  import { formatDate } from '$lib/utils';
	import * as config from '$lib/config'
  export let data;
</script>

<svelte:head>
  <title>{config.title} - Notes</title>
</svelte:head>

<h1>Notes</h1>
<ul class="posts">
  {#each data.posts as post }
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

  .title:visited{
    color: var(--color-1);
  }

	.date {
    text-transform: capitalize;
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>