---
title: Sprint 15
description: Choices Choices
date: '2024-10-14'
categories:
  - sprint
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
> Henri Poincaré

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
    "start": "npx @11ty/eleventy --serve",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
  </dd>

  <dt>Stap 4:</dt>
  <dd>Maak een bestant <code>.eleventy.js</code> aan waarin je defenieert wat voor templating taal je gaat gebruiken en waarin je de code hebt staan. Zoals alles in een map <code>src</code> zetten. Het gebruiken van een map <code>src</code> zorgt ervoor dat, je README en andere bestanden die niet bij de website horen maar wel op github, niet op je website komen te staan.

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
  <dd>Maak in het mapje <code>src</code> een mapje <code>_includes</code> aan waarin je al je templates/components bewaart.</dd>
</dl>

### Werken met layouts in 11ty
In de map `_includes` maak nog een map aan met de naam `layouts` waarin je een html bestant kunt maken met een basis layout. Bijvoorbeeld `base.html`:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title> <!-- Var die je kunt mee geven in het content bestant-->
</head>
<body>
  {{ content | safe }} <!--- Het is veilig om hier de content te laden. -->
</body>
</html>
```

Je kunt deze template gebruiken in een ander bestant bijvoorbeeld `index.html`:

```html
---
layout: layouts/base.html
title: Oncollaboration
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

> 💡 **Tip:**
> Download extention nunjucks snippets

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

<!--extra.html-->
{% extends "layout/base.html"%}

{% block head %}
  <meta name="description" content="{{description}}" />
{% endblock %}
```

### CSS en Assets
Als je naar css en assets nu linkt dan werkt dit niet zoals je gewent bent. Je moet eerst in `.eleventy.js` dit toevoegen:

```JS
  eleventyConfig.addPassthroughCopy("src/assets/"); // doe dit met alle static mappen
```
Je zegt nu tegen eleventy haal deze bestanden ook op en neem ze mee in de build van de site. Nu kun je assets linken zoals je gewent bent.

