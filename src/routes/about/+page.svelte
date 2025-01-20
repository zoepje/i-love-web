<script>
	import * as config from '$lib/config'
</script>

<svelte:head>
  <title>{config.title} - About Me</title>
</svelte:head>

<h1>About Me</h1>
<p>
  This is my ditigal garden, in which I experment with frontend code. I also take notes of my new findings and things I learned.
</p>
<p>
  You can find me on 
  <a href="https://github.com/zoepje" target="_blank">Github</a>
</p>

<style>
  h1 {
    margin-inline: auto;
    text-align: center;
  }

  p {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;
  }
</style>