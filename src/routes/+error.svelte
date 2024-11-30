<script>
	import { page } from '$app/stores'
</script>

<section class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<a href="/">Back to home</a>
</section>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
