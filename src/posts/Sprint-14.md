---
title: Sprint 14
description: Lose your head
date: '2024-09-23'
categories:
  - svelte
  - sveltekit
published: True
---

## Table of Contents

## 23 september 2024
Deze sprint gaan we beginnen te werken richting Jamstack. Jamstack is een manier om websites en webapplicaties te bouwen die sneller, veiliger en schaalbaarder zijn. het doet dit door de ervaringslaag van het web los te koppelen van de gegevens en bedrijfslogica.
Jamstack maakt het mogelijk een modulaire architectuur te implementeren. 

Er zijn twee groepen technologie die onder het paraplubegrip Jamstack vallen:
- Site generators (Bv: SvelteKit)
- Headless CMS (Bv: Directus)

## 30 september 2024
> Sveltekit principles

### Structure
Framework projecten hebben vaak een saaie vaste structuur.

_Project/_
- **src/**
  - lib/
    - server/ (alleen server side code)
  - **routes/**
  - **app.html**
- static/
- .gitignore
- .env (niet naar github)
- .env.example (wat er je in .env moet zetten)
- package.json
- svelte.config.js
- vite.config.js (build tool)

### Routing
Framework projecten hebben een manier om routing af te handelen.

_Project/_
- src/
  - routes/
    - **[dynamic]/**
      - +page.server.js
      - +page.svelte
    - **static/**
      - +page.server.js
      - +page.svelte
    - +page.server.js
    - +page.svelte
 
### Error handling
Framework projecten hebben een manier om fouten af te handelen.

_Project/_
- src/
  - routes/
    - +error.svelte
   
Met `import { page } from '$app/stores'` en `{$page.status}`, `{$page.message}` kun je de error message laten zien.

### Loading data
Framework projecten hebben een manier om data in te laden.

_Project/_
- src/
  - routes/
    - +page.server.js
   
```JS
export async function load() {
  return {
    foo: 'bar'
  }
}
```

### Binding


### Library

### Components
