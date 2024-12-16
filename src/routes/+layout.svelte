<script lang="ts">
  import { Footer, Navigation, PageTransition } from "$lib/index";

  import 'open-props/style'
  import 'open-props/normalize'
  import 'open-props/buttons'

  import '../app.css'

  export let data
</script>

<div class="layout">
  <Navigation />

  <main>
    <PageTransition url={data.url}>
      <slot />
    </PageTransition> 
  </main>
  
  <Footer />
</div>

<style>
  .layout {
    height: 100%;
    max-inline-size: 1440px;
    margin-inline: auto;
    padding-inline: var(--size-7);
    display: grid;
    grid-template-rows: auto 1fr  auto;
  }

  main {
    padding-block: var(--size-9);
  }

  @media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
