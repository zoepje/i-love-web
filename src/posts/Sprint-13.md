---
title: Sprint 13
description: Your tribe for live
date: '2024-09-02'
categories:
  - svelte
  - sveltekit
  - sprint
published: true
---

## Table of Contents

## 3 september 2024
Deze sprit werken we met Svelte, dit is een components framework, en Svelte kit, dit is een app framework. Svelte kit apps zijn server-side renderd als default. 

### Svelte kit 
- Folder based routing. 
- GET & POST worden onderwater afgehandeld
- Elke rout heeft server & component bestand
- Data word geexpoteerd van het server bestand naar het component

#### Installatie
- [Sveltekit](https://kit.svelte.dev/)

```
$ npm create svelte@latest my-app
$ cd my-app
$ npm install
$ npm run dev
$ npm install @directus/sdk
```
- [Directus + Sveltekit](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)

### File tree
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

### Verschillende soorten files
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

### Code stukjes
Je kunt documenten uit `src/lib` halen door `$lib/` te gebruiken. Zoals in dit voorbeeld:
```js
import fetchJson from "$lib/fetch-json"
```

Een post afhandeling kun je zo doen:
```js
await request.formData() // POST handeling van een form
```

Je kunt forms enhancen met: 
```svelte
<script>
  import {enhance} from '$app/forms'
</script>

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
Voor het maken van mijn learnig journal wilde ik een website waarin je een overzicht hebt over all mijn aantekeningen. Deze aantekeningen zet ik in Markdown bestanden die ik later ophaal en omzet naar HTML zodat ik een soort van blog heb. Ik heb dit gedaan met behulp van een [SvelteKit blog](https://joyofcode.xyz/sveltekit-markdown-blog) tutorial.

### Local api endpoint
Je kunt een API endpoint creëren in je bestanden. Deze kun je per page aanmaken met een `+page.server.ts` bestand. Maar omdat ik het meerdere keren wil gebruiken maak je een map `routes/api/posts` aan met daarin een `+server.ts`. [API endpoint](https://joyofcode.xyz/sveltekit-markdown-blog#posts-api-endpoint)

```JS
import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
```

### Local API data ophalen
Als een endpoint hebt gecreerdt kun je de data ophalen in een `+page.server.js` bestand.

```JS
import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}
```

In de `+page.svelte` kun je door de data heen loopen met

```svelte
  {#each data.posts as post}
    <li class="post">
      <a href={post.slug} class="title">{post.title}</a>
      <p class="date">{formatDate(post.date)}</p>
      <p class="description">{post.description}</p>
    </li>
  {/each}
```

### Markdown omzetten naar HTML
Ik heb gebruik gemaakt van [Mdsvex](https://mdsvex.pngwn.io/) die ervoor zorgt dat je svelte components kunt gebruiken in je markdown. En markdown kunt gebruiken als svelte component. Het [opzetten van Mdsvex](https://joyofcode.xyz/sveltekit-markdown-blog#setting-up-mdsvex) is heel makkelijk te volgen.

Aan gezien ik meerdere posts heb, maak ik een detailpage hiervoor aan in `routes/[slug]`. Ook maak ik hierin een `+page.ts` waarin ik de data ophaal.

```JS
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
```

Deze data kan ik dan gebruiken in `+page.svelte` om de content weer te geven op de detailpage.

```svelte
<svelte:component this={data.content} />
```

### Pre code met kleurtjes
Mdsvex gebruikt [Prism.js](https://prismjs.com/) voor het opmaken van `<pre> <code>`. Je kunt een thema uit zoeken op [prismJS themes](https://github.com/PrismJS/prism-themes?tab=readme-ov-file). De CSS van het thema dat je wilt, download je en kun je als stylesheet toevogen zoals bij elk ander CSS bestand. 
Op deze manier gaan je code stukjes van dit:

![geen kleurtjes code](/images/no-highlights.png)

Naar dit:

![leuke kleurtjes code](/images/highlight-code.png)


## 9 september 2024
### Figma 
[Figma oefeningen](https://www.figma.com/design/ovj9RV7KsISxatMNbbzH9W/FDND-Figma-jaar-2-template-(Community)?node-id=1-3&t=nP0zrJXFQEmQznRU-1)

Om een [Figma components](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) te gebruiken kun je **opt/alt** indrukken en het component slepen naar waar je het wilt gebruiken.

## 11 september 2024
### Clean install
1. Maak een tijdelijk kopie van de folder van de squadpage repo
1. Installeer een clean install van SvelteKit voor de squadpage
1. Voeg `/routes/+page.js` deze regel code toe `export let csr = false`
1. Neem in `/lib/fetch-json.js` de code over uit hetzelfde bestand van je laatste node.js project van sprint 12
1. Importeer deze functie in `/routes/+page.server.js`
1. Check aan de hand van het voorbeeld of je alles goed gedaan hebt
1. Copy / paste jullie toegevoegde svelte code terug in `/routes/+page.svelte`

## 16 september 2024
### Van epics naar (user)stories naar tasks
Epics zijn een handige manier om werk te organiseren en een hiërarchie te creëren. Het idee is om werk op te splitsen in opleverbare stukken, zodat grote projecten kunnen worden afgerond en klanten op regelmatige basis waarde krijgen.

**Voorbeelden van epics:**
- Een nieuwe e-commerce website lanceren voor..
- Een bestaande website verbetern voor..

**Voorbeelden van stories:**
- Een winkelmandje toevoegen
- Betalingsmogelijkheden toevoegen
- Een klantenserviceportal toevoegen

**Voorbeelden van userstories:**
- Als bezoeker, wil ik producten in mijn winkelmandje kunnen doen om overzicht te houden van wat ik aanschaf.
- Als bezoeker, wil ik producten kunnen verwijderen uit mijn winkelmandje als ik iets gevoenden heb wat beter past bij wat ik nodig heb.
- Als bezoeker, wil ik overzicht houden op het uit te geven bedrag zodat ik het gevoel heb in controle te zijn.

**Voorbeelden van tasks:**
- Database voor winkelmandje
- Overzicht winkelmandje toten in HTML/CSS
- Interface ontwerpen voor verwijderen producten
- Interface ontwerpen voor aantal aanpassen
- Verder shoppen interface/ doorgaan naar betaling
- Icoon winkelmandje ontwerpen
- implementatie icoon winkelmandje
- Optelsom alle prijzen

### MoSCoW
<dl>
<dt>Must haves:</dt>
<dd>Dit moet af op de deadline als het niet af is dan is het project gefaald</dd>

<dt>Should haves:</dt>
<dd>Dit zou eigenlijk best wel af moeten, het project is een beetje jammer als het niet af is</dd>

<dt>Could haves:</dt>
<dd>Dit kan mits we tijd over hebben</dd>

<dt>Want to have but will not have this time around:</dt>
<dd>Dit zijn goede ideen en nuttig om te noteren maar we komen er nu niet aan toe</dd>
</dl>
