<script>
  import { ExternalLink, GithubMarkWhite } from "$lib/index";
  export let image = 'error.png';
  export let title = '';
  export let description = '';
  export let site = '';
  export let repo = '';
  export let status = true;
</script>

<article>
  <a href="{site}" target="_blank" class="card-link">
    <img src="/images/{image}" alt="webite thumbnail" width="450" height="280">
    <h2>{title}</h2>
    <p>{description}</p>
  </a>
  <div>
    <a href="{site}" target="_blank" class="website">
      <ExternalLink />
      Website
    </a>
    {#if repo}
      <a href="{repo}" target="_blank" class="code">
        <GithubMarkWhite />
        Code
      </a>
    {/if}
  </div>

  {#if status}
    <span>Finished</span>
  {:else}  
    <span class="not-done">Under construction</span>
  {/if}
</article>

<style>
  article {
    width: 90%;
  }

  .card-link {
    display: grid;
    color: var(--text);
    width: fit-content;
  }

  .card-link:hover {
    scale: 1.01;
  }

  .card-link::before {
    width: 0;
  }

  img {
    border: 2px solid var(--brand);
  }

  h2 {
    padding-top: var(--size-3);
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
    gap: var(--size-3);
    padding-bottom: var(--size-3);
  }

  a {
    display: flex;
    align-items: center;
    gap: var(--size-1);
  }

  @container (min-width: 600px) {
    article {
      width: 40%;
    }
  } 
</style>