<script lang="ts">
  import { fly } from 'svelte/transition'
  import { Moon, Sun } from 'lucide-svelte'
  import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <div in:fly={{ y: 20 }}>
      <Sun />
      <span>Light</span>
    </div>
  {:else} 
    <div in:fly={{ y: -20 }}>
      <Moon />
      <span>Dark</span>
    </div>
  {/if}
</button>

<style>
  button {
    padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
    transition: .3s ease-in-out;
  }

  button > * {
		display: flex;
		gap: var(--size-2);
	}

  button:hover {
    color: var(--color-1);
  }
</style>