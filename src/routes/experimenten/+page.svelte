<script lang="ts">
	import * as config from '$lib/config'
</script>

<svelte:head>
  <title>{config.title} - Experimenten</title>
</svelte:head>

<h1>Experimenten</h1>
<div class="variable-fonts">
  <h2>Font animation</h2>
  <p>The five boxing wizards jump quicly.</p>
</div> 


<style>
  .variable-fonts {
    width: 40vw;
    height: var(--size-15);
    padding: var(--size-3);
    background-color: var(--border);

    & p {
      font-size: var(--font-size-4);
      font-family: 'Decovar Alpha';
      color: var(--color-2);
      font-variation-settings: "BLDA" 100, "TRMD" 0, "TRMC" 0, "SKLD" 0, "TRML" 0, "SKLA" 0, "TRMF" 0, "TRMK" 0, "BLDB" 0, "WMX2" 0, "TRMB" 0, "TRMA" 0, "SKLB" 0, "TRMG" 0, "TRME" 0;
    }

    & p:hover {
      font-variation-settings: "BLDA" 0, "TRMD" 2000, "TRMC" 750, "SKLD" 0, "TRML" 250, "SKLA" 1000, "TRMF" 250, "TRMK" 250, "BLDB" 10, "WMX2" 750, "TRMB" 500, "TRMA" 500, "SKLB" 1000, "TRMG" 750, "TRME" 500;
    }
  }
</style>