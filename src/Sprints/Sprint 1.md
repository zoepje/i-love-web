---
title: Sprint 1
description: Your tribe for live
date: '2024-09-02'
categories:
  - svelte
  - sveltekit
published: true
---

# Your tribe for live
## 3/4 september 2024
Deze sprit werken we met Svelte, dit is een components framework, en Svelte kit, dit is een app framework. Svelte kit apps zijn server-side renderd als default. 

### Svelte kit: 
- Folder based routing. 
- GET & POST worden onderwater afgehandeld
- Elke rout heeft server & component bestand
- Data word geexpoteerd van het server bestand naar het component

#### Instalatie
- https://kit.svelte.dev/
- https://docs.directus.io/blog/getting-started-directus-sveltekit.html

#### File tree
- src
  - lib (Hier komen alle bestanden in te staan die je hergebruikt)
  - routes (alle routes worden hier automatisch door aangemaakt)
    - [slug] (detailpage)
      - +page.svelte (/[slug])
    - folder
      - +page.svelte (/folder)
    - +page.svelte (/)
  - app.html (de head van de html)
- static (alle assets)
- package.json
- svelte.convig.js (Als je een live url wilt moet je hier its veranderen)
- vite.convig.js

#### Verschillende soorten files
**+page.svelte:** dit is een webpagina. Hier zet je HTML, CSS en JS code in. Je hoeft je geen zorgen te maken dat als je hier de style veranderd voor een element dat deze dan ook verandert op andere paginas.

**+layout.svelte:** dit is een UI voor alle child routes.
```html
<h1>Dit is cool</h1>

<slot></slot> //Hier renderd content van de child routes

```
**+page.server.js:** dit is de server side JS voor de pagina in hetzelfde mapje.

**+layout.server.js:** dit is de server side JS voor alle child routes

**+server.js:** hierin kun je API routes maken zoals GET en POST methods.

```js
import { json } from '@sveltejs/kit'; // zo wordt json omgezet naar string
```

#### Code stukjes
Je kunt documenten uit `src/lib` halen door `$lib/` te gebruiken. Zoals in dit voorbeeld:
```js
import fetchJson from "$lib/fetch-json"
```

```js
await request.formData() // POST handeling van een form
```

Je kunt forms enhancen met 
```js
import {enhance} from '$app/forms'

<form use:enhance>
</form>
```

## 5 september 2024
### Fetch data uit API
Maak een document `fetch-json.js` aan in de lib en zet dit erin:
```js
/**
 * An asynchronous helper function that wraps the standard node.js fetch API.
 * This function calls an API url passed as the first and mandatory parameter,
 * there is an optional payload parameter to send a json object, eg. a filter.
 * It then calls the API and returns the response body parsed  as a json object.
 * @example <caption>fetchJson as returning function using the await keyword</caption>
 * const data = await fetchJson('https://api-url.com/endpoint/')
 * @example <caption>fetchJson as oneliner using the then() structure.</caption>
 * fetchJson('https://api-url.com/endpoint/').then((data)=>{
 *  // use data...
 * })
 * @param {string} url the api endpoint to address
 * @param {object} [payload] the payload to send to the API
 * @returns the response from the API endpoint parsed as a json object
 */
export default async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}
```

Dan in de `+page.server.js` importeer het `fetch-json.js` bestand en maak een functie load:
```js
export async function load() {
  const url = 'https://fdnd.directus.app/items/squad'

  const squads = await fetchJson(url)

  return {
    squads: squads.data
  }
}
```

Als je data voor een detailpage wilt ophalen dan doe je dat zo:
```js
export async function load({params}) {
  const url = `https://fdnd.directus.app/items/squad/${params.squad_id}`

  const squad = await fetchJson(url)

  return {
    squad: squad.data
  }
}
```

## 6 september 2024