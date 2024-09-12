<script lang="ts">
	import * as config from '$lib/config'
</script>

<svelte:head>
  <title>{config.title} - Experimenten</title>
</svelte:head>

<h1>Experimenten</h1>
<p class="question">Wat gaat hier komen????? </p>
<p class="upsiedownsies">Who knows!</p>

<div>
  <p>Open props is so nice to work with!!</p>
</div>

<style>
  p.question{
    text-align: right;
    color: var(--color-2);
  }

  p.upsiedownsies{
    text-align: center;
    transform: scale(1, -1);
    text-transform: uppercase;
    color: var(--color-1);
  }

  div {
    height: var(--size-15);
    background: var(--gradient-10);

    & p {
      text-align: center;
    }
  }
</style>