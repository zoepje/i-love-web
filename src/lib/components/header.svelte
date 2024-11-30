<script lang="ts">
	import Toggle from './toggle.svelte';

  let current = 0;
</script>

<nav>
  <a href="/" 
     on:click="{() => current = 0}"
     class="title" class:active="{current === 0}">
    Home
  </a>

  <ul class="links">
    <li>
      <a href="/notes"
         on:click="{() => current = 3}"
         class:active="{current === 3}">
        Notes
      </a>
    </li>
    <li>
      <a href="/experimenten"
         on:click="{() => current = 1}"
         class:active="{current === 1}">
        Experimenten
      </a>
    </li>
    <li>
      <a href="/about"
         on:click="{() => current = 2}"
         class:active="{current === 2}">
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
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>