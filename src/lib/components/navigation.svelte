<script lang="ts">
	import Toggle from './toggle.svelte';
  import { page } from "$app/stores";
</script>

<nav>
  <a href="/" 
     class="title" class:active={$page.url.pathname === '/'}>
    Home
  </a>

  <ul class="links">
    <li>
      <a href="/notes"
         class:active={$page.url.pathname.startsWith('/notes')}>
        Notes
      </a>
    </li>
    <li>
      <a href="/experiments"
         class:active={$page.url.pathname.startsWith('/experiments')}>
        Experiments
      </a>
    </li>
    <li>
      <a href="/about"
         class:active={$page.url.pathname.startsWith('/about')}>
        About Me
      </a>
    </li>
  </ul>

  <Toggle />
</nav>

<style>
  nav {
    padding-block: var(--size-4);
  }

  .title {
    font-size: var(--font-size-4);
    font-weight: bold;
  }

  .links {
    list-style: none;
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .active {
    color: var(--color-1);
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>