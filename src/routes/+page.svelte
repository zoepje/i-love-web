<script lang="ts">
  import * as config from '$lib/config'
  import Card from '$lib/components/card.svelte';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<h1>Works</h1>

<Card 
  title = "Merlins book of potions"
  site = "https://merlins-book-of-potions.onrender.com/"
  repo = "https://github.com/zoepje/proof-of-concept"/>

