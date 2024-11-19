<script lang="ts">
  import * as config from '$lib/config'
  import Card from '$lib/components/card.svelte';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<h1>My works</h1>

<div>
  <Card 
  image = "merlin-book-of-potions.png"
  title = "Merlins book of potions"
  description = "A game where you can create potions"
  site = "https://merlins-book-of-potions.onrender.com/"
  repo = "https://github.com/zoepje/proof-of-concept"/>

  <Card 
  image = "redpers.png"
  title = "RedPers"
  description = "An online news page for young aspiring journalists"
  site = "https://pleasurable-ui-ktdn.onrender.com/"
  repo = "https://github.com/Khdulkadir/pleasurable-ui"/>

  <Card 
  image = "lifely.png"
  title = "Lifely - Getting started with AI"
  description = "A static webpage about getting started with AI"
  site = "https://zoepje.github.io/the-startup-responsive-interactieve-website/"
  repo = "https://github.com/zoepje/the-startup-responsive-interactieve-website"/>

  <Card 
  image = "oncollaboration.png"
  title = "Oncollaboration"
  description = "A platform for radio oncologists to exchange knowledge"
  site = "https://oncollaboration.vercel.app/"
  repo = "https://github.com/itsValyria/Oncollaboration"
  status = {false}
  />
</div>

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
</style>
