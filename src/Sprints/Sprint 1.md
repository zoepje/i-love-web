---
title: Sprint 1
description: Your tribe for live
date: '2024-09-02'
categories:
  - svelte
  - sveltekit
published: true
---

## 3 september 2024
Deze sprit werken we met Svelte, dit is een components framework, en Svelte kit, dit is een app framework. Svelte kit apps zijn server-side renderd als default. 

### Svelte kit: 
- Folder based routing. 
- GET & POST worden onderwater afgehandeld
- Elke rout heeft server & component bestand
- Data word geexpoteerd van het server bestand naar het component

#### Instalatie
- [Sveltekit](https://kit.svelte.dev/)
- [Directus + Sveltekit](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)

#### File tree
- src
  - lib <span class="uitleg">hier komen alle bestanden in te staan die je hergebruikt</span>
  - routes <span class="uitleg">alle routes worden hier automatisch door aangemaakt</span>
    - [slug] <span class="uitleg">detailpage</span>
      - +page.svelte <span class="uitleg-2">/[slug]</span>
    - folder
      - +page.svelte <span class="uitleg-2">/folder</span>
    - +page.svelte <span class="uitleg-2">/</span>
  - app.html <span class="uitleg">de head van de html</span>
- static <span class="uitleg">alle assets</span>
- package.json
- svelte.convig.js <span class="uitleg">als je een live url wilt moet je hier its veranderen</span>
- vite.convig.js

#### Verschillende soorten files
<dl>
<dt>+page.svelte:</dt> 
<dd>Hierin zet je HTML, CSS en JS code in. Je hoeft je geen zorgen te maken dat als je hier de style veranderd voor een element dat deze dan ook verandert op andere paginas. Want svelte kit maakt zelf classes hiervoor aan.</dd>

<dt>+layout.svelte:</dt> 
<dd>Hierin kun je code zetten dat geld voor alle child routes.</dd>

```html
<h1>Dit is cool</h1>

<slot /> //Hier renderd content van de child routes

```
<dt>+page.server.js:</dt> 
<dd>Hierin staat de server side JavaScript voor de pagina die in hetzelfde mapje zit.</dd>

<dt>+layout.server.js:</dt> 
<dd>Hierin kun je de server side JS voor alle child routes in  zetten</dd>

<dt>+server.js:</dt> 
<dd>Hierin kun je API routes maken zoals GET en POST methods.</dd>

```js
import { json } from '@sveltejs/kit'; // zo wordt json omgezet naar string
```
</dl>

#### Code stukjes
Je kunt documenten uit `src/lib` halen door `$lib/` te gebruiken. Zoals in dit voorbeeld:
```js
import fetchJson from "$lib/fetch-json"
```

Een post afhandeling kun je zo doen:
```js
await request.formData() // POST handeling van een form
```

Je kunt forms enhancen met: 
```js
import {enhance} from '$app/forms'

<form use:enhance>
</form>
```

## 5 september 2024
Op school hadden we een code voorbeeld voor hoe je data uit een api kunt ophalen. In ons geval directus.

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

Daarna importeer je het `fetch-json.js` bestand in de `+page.server.js` en maak een functie load:
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
Voor het maken van mijn learnig journal wilde ik een website waarin je een overzicht hebt over all mijn aantekeningen. Deze aantekeningen zet ik in Markdown bestanden die ik later ophaal en omzet naar HTML zodat ik een soort van blog heb.

### Local api endpoint
Je kunt een API enpoint creëren in je bestanden.