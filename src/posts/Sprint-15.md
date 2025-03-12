---
title: Sprint 15
description: Choices Choices
date: '2024-10-14'
categories:
  - sprint
  - eleventy
  
published: True
---

## Table of Contents

## 14 oktober 2024
Deze sprint ligt de focus op het maken van onderbouwde keuzes voor de frameworks, tools en workflow die je kunt gebruiken voor je project. 
Ook gaan we keuzes maken over welke tech-steck je gaat gebruiken.

UX(user experinace), DX(developer experinace), CMX(content manegment experiance)

## 16 oktober 2024

### Directus
Directus, Kevin Lewis. Directus is a backend with a UI. 
Kevins developer experiance team (5 people) focuses on education, community engagement and extansions in the marketplace.
Directus is not truely open source, but operates as if it is. 
How they make money:
- Directus Cloud
- Directus Plus 
- Marketplace 
- Directus TV

#### Tradeoffs
Fast, good, cheap. 
<dl>
  <dt>The Iron Triangle. </dt>
  <dd>Weighing the opposing forces of quality, speed and cost against each other.</dd>
</dl>
expensice (fast good)
slow (cheap good)
low quality (fast cheap)
all three not possible

You might want to make something perfect but if it takes to much time it might be better to delever a less good product
You might use an outdated techstack but if you know how to work it, it might be faster then learning a new techstack.

Preformance vs maintainability => slopy code but fast project vs need code but slower project.

Velocity vs Felxibility => easy/fast but only a few options vs many options but takes longer is harder to use.

Innovation vs reliability => experements vs relaibele income 

Artificial intelligence tradeoffs:
- Ethical
- Money
- Enviramentle 
- Accuratcie 

Helpful tools to make tradeoffs:
- Cost-benefit analysis
- Swot analysis
- Weighted decision matrix

#### Final toughts
- The tech you use probably doesn't matter
- You're going to make shitty decisions
- Root decisioins in user needs

### Triple
Shyanta Vleugel

Onze core:
- Development
- Design 
- Technical operations
- Data and insights

#### Wat kan invloed hebben op je tech-stack?
- SEO Performance
- Mechines met weinig performance?
- Eenmalige website?
- Wens voor animaties?
- Wat heeft je eindproduct nodig?

#### Tech tips
- Don't repeat yourself
- Gebruik van componenten is heilig, het framework waarin je giet staat hier los van.

### Techstack onderzoek
> Het is door logica dat we bewijzen. Het is door intuitie dat we ondekken.
> - Henri Poincaré

Logica is een systeem voor solide argumentatie.

#### Argumentatie
<dl>
  <dt>Stap 1:</dt>
  <dd>Formuleer een standpunt en selecteer argumenten.</dd>

  <dt>Stap 2:</dt>
  <dd>Maak een argumentatieschema.</dd>

  <dt>Stap 3:</dt>
  <dd>Beoordelen van aanvaardbaarheid.</dd>
</dl>

## 17 oktober 2024
Ik heb ervoor gekozen om [Eleventy](https://www.11ty.dev/) als framework te gebruiken. Van de documentatie die ik tot nu toe heb gelezen lijkt het erop dat je dit goed kunt gebruiken met Markdown.

### Setup Eleventy
<dl>
  <dt>Stap 1:</dt>
  <dd> Maak een package.json aan door in de terminal het commando <code>npm init -y</code> uit te voeren. Als je wilt werken met <a href="https://www.11ty.dev/docs/cjs-esm/">ESM en niet CommonJS</a> voer dan ook dit commando uit <code>npm pkg set type="module"</code></dd>

  <dt>Stap 2:</dt>
  <dd>Installeer 11nty met het commando <code>npm install @11ty/eleventy</code>
  </dd>

  <dt>Stap 3:</dt>
  <dd>Open eleventy op localhost met <code>npx @11ty/eleventy --serve</code>. Je kunt ook in de package.json dit als script toevoegen. Dan voer je <code>npm start</code> uit om de localhost op te starten.

  ```JS
    "scripts": {
      "build": "npx @11ty/eleventy",
      "start": "npx @11ty/eleventy --serve",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
  ```
  </dd>

  <dt>Stap 4:</dt>
  <dd>Maak een bestant <code>eleventy.config.js</code> aan waarin je defenieert wat voor templating taal je gaat gebruiken (in dit geval nunjucks) en waarin je de code hebt staan. Zoals alles in een map <code>src</code> zetten. Het gebruiken van een map <code>src</code> zorgt ervoor dat, je README en andere bestanden die niet bij de website horen maar wel op github, niet op je website komen te staan.

  ```JS
  export default function (eleventyConfig) {
    return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
    }
  };
  ```
  </dd>

  <dt>Stap 5:</dt>
  <dd>Maak in het mapje <code>src</code> een mapje <code>_includes</code> aan waarin je al je templates/components bewaart. Om components te gebruiken heb je een plugin nodig. Je kunt <a href="https://www.11ty.dev/docs/languages/webc/">WebC</a> gebruiken, of <a href="https://www.11ty.dev/docs/shortcodes/">Shortcodes</a>. 
  
  <strong>WebC:</strong>
  Deze installer je met <code> npm install @11ty/eleventy-plugin-webc</code>. Om ervoor te zorgen dat je components kunt gebruiken moet je dit aan de <code>eleventy.config.js</code> toevoegen:

  ```JS
  import pluginWebc from "@11ty/eleventy-plugin-webc";
  import { EleventyRenderPlugin } from "@11ty/eleventy";

  export default function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
      components: "src/_includes/components/*.webc",
    });
    //{...}
  };
  ```
  **Shortcodes:**
  Met shortcodes om het jezelf wat makkelijker te maken kun je <a href="https://www.npmjs.com/package/common-tags">common-tags</a> installeren met <code>npm i common-tags</code>. 
  </dd>
</dl>

### Werken met layouts in 11ty
In de map `_includes` maak nog een map aan met de naam `layouts` waarin je een html bestant kunt maken met een basis layout. Bijvoorbeeld `base.html`:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  <title>{{title}}</title>
</head>
<body>
  {{ content | safe }}
</body>
</html>
```

Je kunt deze template gebruiken in een ander bestant bijvoorbeeld `index.html`:

```html
---
layout: "layouts/base.html"
title: "Demo"
---

<header>hello</header>
<main>Hier komt wat text.</main>
<footer>Copyright 2003</footer>
```
Aangezien we in `.eleventy.js` hebben aangegeven dat HTML templating met de `njk` taal wordt geschreven, kunnen we met de hekjes "---" aangeven dat de `base.html` layout moet gebruiken voor deze pagina. Je kunt `title` ook gebruiken in de content zelf.

Je kunt ook stukjes code in de layouts inlaaden. In de map `_includes` maak je een bestant aan bijvoorbeeld `basehead.html` en deze kun je dan inladen in `base.html` met:

```HTML
<head>
  {% include "basehead.html" %}
</head>
```

<p><span class="tip">Tip:</span> Download extention nunjucks snippets</p>

Als je een layout wilt hebben die lijkt op een andere layout maar met een kleine verandering kun je dat doen met: 

```HTML
<!--base.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    {% include "basehead.html" %}
    {% block head %}{% endblock %}
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>

<!--basehead.html-->
{% extends "layout/base.html"%}

{% block head %}
  <meta name="description" content="{{description}}" />
{% endblock %}
```

### CSS en Assets
Als je naar css en assets nu linkt dan werkt dit niet zoals je gewent bent. Je moet eerst in `.eleventy.js` dit toevoegen:

```JS
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/"); // doe dit met alle static mappen
  //{...}
};
```
Je zegt nu tegen eleventy haal deze bestanden ook op en neem ze mee in de build van de site. Nu kun je assets linken zoals je gewent bent.

Als je nu de css verandert dan refeshed elventy niet automatisch. Om dit wel mogelijk te maken voeg je in `.eleventy.js` dit toe:

```JS
export default function (eleventyConfig) {
  //{...}
  eleventyConfig.addWatchTarget("src/css/");
  //{...}
};
```

### Components WebC
WebC componenten gebruiken dezelfde naam als het bestands naam, dus als je `navigation.webc` heet het componenent `<navigation>`. Je kunt bijvoorbeeld ook het component dezelfde naam geven als een element, zoals `<footer>` dit zorgt ervoor dat overal waar je footer gebruikt dit component wordt ingeladen.

```html
  {% renderTemplate "webc" %}
  <navigation></navigation>
  {% endrenderTemplate %}
```

Om de styling van het component mee te geven moet je in het component aan de `<style>` [web:keep](https://www.11ty.dev/docs/languages/webc/#webckeep) toevoegen. Het zelfde geld ook voor `<script>`.

Het is ook handig om [webc:scoped](https://www.11ty.dev/docs/languages/webc/#webcscoped) toe te voegen aan de styling zodat je styling alleen maar gebruikt wordt op het component. En als je styling later toevoeged aan de pagina dat je niet de styling van je component mee zit te spelen. Dit is iets dat svelte al automatisch doet maar in eleventy moet je het aangeven.

Je kunt ook met slots werken. Zie hier meer over op [introduction webc slots](https://11ty.rocks/posts/introduction-webc/#slots).

## 22 oktober 2024
### Components Shortcodes
Je maakt een js bestand aan voor je component. In dit bestant maak je een functie aan met dezelfde naam als het component. Aan deze functie kun je variabelen door geven, dit is fijn voor als je met dynamic data gaat spelen. Alle JavaScript wordt uitgevoord server side dus de gebruiker merkt er niks van.

```JS
//Navigation.js
export function Navigation({currentPageUrl}){
return `
    <nav class="menu">
      <ul>
        <li>
          <a href="/" class="${currentPageUrl === "/" ? "active" : ""}">
            <svg class='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>Home
          </a>
        </li>
    </nav>`
}  
```

```JS
//eleventy.config.js
import { Navigation } from "./src/_includes/components/Navigation.js";

export default function (eleventyConfig) {
  // Components:
  eleventyConfig.addShortcode("navigation", Navigation);
} 
```

```html
  <header>
    {% navigation currentPageUrl=page.url%}
  </header>
```

Er moet vast wel een manier zijn om css scoped door tegeven maar ik heb daar nog niks van gevonden. Dus gewoon met classes werken.

## 24 october 2024
### Fetch data uit database
Je kunt een plugin [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/) toevoegen dat het fetchen van data heel makkelijk maakt. Dit doe je met `npm install @11ty/eleventy-fetch`.

Je maakt dan een map `_data` in `src` aan, in deze map maak je een javascript document aan waarin je de fetch gaat schrijven.

```js
import EleventyFetch from "@11ty/eleventy-fetch"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export default async function (){
  const webinar = `${baseURL}avl_webinars`
  const response = await EleventyFetch(webinar, {
    duration: "1d",
    type: "json"
  });

  const webinars = response.data;

  return webinars;
}
```

Als je met dit gaat werken is moet je `.cache` toevoegen aan je `.gitignore`, zodat de data niet naar je git wordt gestuurd.

Je kunt deze data ophalen met het naam van het bestand `{{webinars | dump }}`, dit laat alle JSON op je pagina zien.

### Loops met components erin
Deze data die je ophaalt wil je nettjes in je website laden. Dit kun je doen met een for loop.

```html
{% for webinar in webinars %}
  <h2>{{ webinar.title }}</h2>
{% endfor %}  
```

Als je werkt met componenten kun je dit zo doen:
```html
{% for webinar in webinars %}

  {% WebinarOverview slug=webinar.slug, thumbnail=webinar.thumbnail, duration=webinar.duration, title=webinar.title, speakers=webinar.speakers, categories=webinar.categories %}

{% endfor %}
```
Zoals je ziet doe je geen dubbele haakjes "{{}}" om de variabelen, dit is omdat in nunjucks hij automatisch weet dat het een variable is. Als je het wel tussen haakjes doet dan geeft hij een error.

### Dynamische paginas
In svelte kun je heel makkelijk een dynamische pagina maken door een mapje `[slug]` aan te maken. Dit werkt anders in 11ty. Je kunt in eleventy gebruik maken van [pagination](https://www.11ty.dev/docs/pagination/). Dit is ontzetten makkelijk je zet maakt een document in het mapje layouts en daarin zet je boven aan de pagina de pagination details die je nodig hebt. Je gebruikt size 1 omdat je maar object uit de data wilt halen per pagina. Achter de permalink moet je `/index.html` doen zodat eleventy weet dat het een webpagina is.

```html
---
pagination:
  data: webinars
  size: 1
  alias: webinar
permalink: webinars/{{webinar.slug}}/index.html
---

<h1>{{webinar.title}}</h1>
<p>{{webinar.description}}</p>
```