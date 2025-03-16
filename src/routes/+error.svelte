<script>
	import { page } from '$app/stores';
	function nav_back() {
		window.history.back();
	}
</script>

<section class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<div>
		<a href="/">Back to home</a>
		<button type="button" on:click={nav_back}>Back to previous page</button>
	</div>
</section>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
		justify-items: center;
	}

	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	a {
		width: fit-content;
	}
</style>
