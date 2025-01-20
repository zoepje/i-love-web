---
title: Sprint 14
description: Lose your head
date: '2024-09-23'
categories:
  - svelte
  - sveltekit
  - sprint
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
Sveltekit principles

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
Framework projecten hebben een manier om data te _binden_.

```svelte
<script>
  let name = 'world'
  $: shout = name + 'rocks!'
</script>  

<input bind:value={name} />

<h1>Hello {name}!</h1>
<p>{shout}</p>
```

### Library
De meeste framework projecten hebben een bibliotheekfunctie.

_Project/_
- src/
  - lib/
    - server/
  - index.js

### Components 
De meeste framework projecten ondersteunen componenten.

```svelte
--- /routes/+page.svelte
<script>
  import {Component} from '$lib'
</script>

<Component awnerToLife={42} />

--- /lib/Component.svelte
<script>
  export let awnerToLife;
</script>

<p>The awnser is {awnerToLife}</p>
```

## 2 oktober 2024
Desing critique

### 10 principles of good design
1. Good design is innovative
2. Good design makes a product useful
3. Good design is aesthetic
4. Good design makes a product understandable 
6. Good design is unobtrusive
7. Good design is honest
8. Good design is long-lasting
9. Good design is thorough down to the last detail
10. Good design is environmentally friendly
11. Good design is as little design as possible

## 7 oktober 2024
Projectmethodiek

### Waterval vs. Agile
<dl>
  <dt>Specification-related paradigms:</dt> 
  <dd>Alles staat helemaal uitgeschreven voordat je begint met bouwen. Er wordt heelveel gedocumenteert Wordt ookwel Waterval genoemt.</dd>

  <dt>Comprehensice system</dt>
  <dd>De develepment-life cycle. Itereerent werken. Ook wel Agile development genoemt</dd>
</dl>

### FDND Agile woordenlijst: Agile zelftest
<dl>
  <dt>Agile Development</dt>
  <dd>Werken in iteraties.<dd>

  <dt>Backlog</dt>
  <dd>Alles wat nog gedaan moet worden en te wachten staat.</dd>

  <dt>Business owner</dt>
  <dd>Van wie het bedrijf is.</dd>

  <dt>Continuous Integration</dt>
  <dd>Elke keer als er iets naar de main gepushed wordt. Komt het gelijk live te staan.</dd>

  <dt>Daily Scrum</dt>
  <dd>Bespreking van wat je die dag hebt gedaan/ gaat doen. Met behulp van Stand-up en Checkout.</dd>

  <dt>Definition of done</dt>
  <dd>Wat er af moet zijn voor het project.</dd>

  <dt>Epic</dt>
  <dd>Wat het doel is van het project.</dd>

  <dt>Feature</dt>
  <dd>Een onderdeel van een site.</dd>

  <dt>Iteration</dt>
  <dd>Doorloping van de DCL.</dd>

  <dt>Minimal viable product</dt>
  <dd>Alle must haves van je product afhebben.</dd>

  <dt>MoSCoW</dt>
  <dd>Must haves, Should haves, Could haves and Won't have this time around.</dd>

  <dt>Velocity</dt>
  <dd>De hoeveelheid poker punten je af hebt gekregen in een bepaalde periode.</dd>
</dl>