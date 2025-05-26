<script lang="ts">
	import * as config from '$lib/config';
	import { Card } from '$lib/index';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>My works</h1>

<div>
	<Card
		image="werkenbijamvest.png"
		title="Werken bij Amvest"
		description="Vacantcy site for Amvest"
		site="https://werkenbij.amvest.nl/"
	/>

	<Card
		image="merlin-book-of-potions.png"
		title="Merlins book of potions"
		description="A game where you can create potions"
		site="https://merlins-book-of-potions.onrender.com/"
		repo="https://github.com/zoepje/proof-of-concept"
	/>

	<Card
		image="oncollaboration.png"
		title="Oncollaboration"
		description="A platform for radio therapists to exchange knowledge"
		site="https://oncollaboration.agency.fdnd.nl/"
		repo="https://github.com/fdnd-agency/antoni-van-leeuwenhoek-oncology/tree/release-candidate"
	/>
</div>

<p>
	If you would like to see more you can visit my
	<a href="https://github.com/zoepje" target="_blank">Github</a>.
</p>



<style>
	h1 {
		text-align: center;
		margin-inline: auto;
		padding-bottom: var(--size-3);
	}

	div {
		margin-inline: auto;
		display: flex;
		gap: var(--size-8);
		flex-wrap: wrap;
		justify-content: space-around;
		container-type: inline-size;
		max-width: 1250px;
	}

	p {
		text-align: center;
		margin-inline: auto;
		padding-top: var(--size-4);
	}
</style>
