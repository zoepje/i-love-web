<script>
  import ExternalLink from "./external-link.svelte";
  import GithubMarkWhite from "./github-mark-white.svelte";
  export let image = 'error.png';
  export let title = '';
  export let description = '';
  export let site = '';
  export let repo = '';
  export let status = true;
</script>

<article>
  <img src="/images/{image}" alt="webite thumbnail">
  <h2>{title}</h2>
  <p>{description}</p>
  <div>
    <a href="{site}" target="_blank" class="website">
      <ExternalLink />
      Website
    </a>
    <a href="{repo}" target="_blank" class="code">
      <GithubMarkWhite />
      Code
    </a>
  </div>

  {#if status}
    <span>Finished</span>
  {:else}  
    <span class="not-done">Under construction</span>
  {/if}
</article>

<style>
  article {
    width: 90vw;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: var(--font-size-4);
  }

  span {
    background-color: var(--color-3);
    color: var(--text-alt);
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-round);
  }

  .not-done {
    background-color: var(--color-4);
  }

  div {
    display: flex;
    gap: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: .3rem;
    padding-bottom: 1rem;
  }

  @container (min-width: 500px) {
    article {
      width: 40vw;
    }
  } 

  @container (min-width: 800px) {
    article {
      width: 30vw;
    }
  } 
</style>