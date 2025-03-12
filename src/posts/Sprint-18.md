---
title: Sprint 18
description: Release Candidate
date: '2025-01-06'
categories:
  - sprint
  - entering the industry
  - Animations
  - best practices
published: True
---
## Table of Contents

## 6 januari 2025
### De software release life cycle (SRLC)
1. Pre-alpha (ontwikkelen)
1. Alpha-testen (intern testing)
1. Beta-testen (outside testing)
1. Release candidate (betaversie met de potentie een stabiel product te worden)


## 8 januari 2025
### Tijdlijn animatie en scenes met GSAP
Ga even spelen met GSAP op [codepen](https://codepen.io/zoepje/pen/yyBvYGm?editors=0010).
Maak scene 3 op een [fork](https://github.dev/joostf/GSAP-timelines/) van deze site.

## 13 januari 2025
### Clean code
> Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.
> - Robert C. Martin

Schrijven van clean code is wat je doet om jezelf professional te kunnen noemen. Code is clean als het gemakkelijk te begrijpen is door iedereen in het team. Begrijpelijk betekent: leesbaar, aanpasbaar, uitbreidbaar en onderhoudbaar.

_Try and leave this world a little better than you found it._ Als we allemaal onze code net iets schoner inchecken dan toen we die uitcheckten, zou de code simpelweg niet kunnen verouderen.

Tips voor clean code:
- Gebruik betekenisvolle namen
- Schrijf kleine functies
    - Maar 1 verantwoordelijkheid hebben
    - Zo minmogelijk parameter max 2 of gebruik een object
    - Voorkom side-effects, dingen die buiten de scope van de functie vallen.
- Gebruik goed commentaar (gebruik zo minmogelijk)
- Maak code leesbaar (voor mensen)

### Refactoring
Refactoring is een proces van het verbeteren van de structuur van de code zonder het gedrag te veranderen.

Tips voor refactoring:
- Patroon: Hernoem functie declaratie
    - De handtekening van een functie omvat de naam, parameters, en soms het returntype
- Patroon: Splits conditionals op
- Patroon: vervang loops door piplines
    - Traditionele iteraties over collecties worden vervangen door een functionele stijl met behulp van een pipeline van operaties.
- Patroon: verwijder dode code
- Patroon: verschuif statements
    - Herpositioneren van code binnen een methode om de leesbaarheid en logische volgorde te verbeteren. 

### Sveltekit best practices
Tips:
- Voorkom het inladen van componenten, die componenten inladen, die componenten inladen
- Als een bestand te groot wordt zet je `<script>` en `<style>` elementen in een apart bestand en importeer die!
- Pre-rendering kun je per route aanzetten
- Performance test in `build`
- @sveltejs/enhanced-img voor responsive images locaal.
- Maken van sitemaps voor search optimalisation.

## 20 januari 2025
ThreeJS - WebGL - Shaders

### Three.js
1. Scene - de wereld waarin de 3d objecten zich bevinden
1. Camera - de camera waarmee je naar de 3d objecten kijkt
1. Renderer - 

Je Three.js 
1. Mesh -
1. Light -
1. Shader - 

#### Basis
- Scene
- Perspective camera
- Orthographic camera
- WebGLRenderer
    - setSize
    - render
- BoxGeometry
- MeshBasicMaterial
    - 0xFFFFFF
- 

### Tutorials
- [Three.js journey](https://threejs-journey.com/)
- [Codrops](https://tympanus.net/codrops/)
- [The book of shaders](https://thebookofshaders.com/)
- [The coding train](https://thecodingtrain.com/)

## 22 januari 2025
Van offerte tot oplevering

### Vraag
Hoe kom je aan projecten? Netwerk, Netwerk, Netwerk

### Gesprek
Wat wil de opdrachtgever?
- Briefing
- Verwachtingen
- Wat kan jij, wat kan ik.
- Nee zeggen, wil ik dit wel?

### Offerte
Lang kort maakt niet zoveel uit:
1. Wat ga je doen
1. Begroting 
    - Lage en hoge inschatting
    - Uur tarief check the good list
1. Planning & afspraken
1. Algemene voorwaarden (FENIT)

### Design
Van schetsen naar ontwerp
- Grove schetsen laten zien
- Daarna high fi
- En dan snel bouwen
- Design changes on the way

### Development
Bouwen, bouwen, bouwen
- Fundering, data model
- Framework kiezen
- CMS? Zeker doen
- Testen
- Acceptatie omgeving opzetten (klant kan kijken wat je hebt gemaakt maar nog niet live)

### Oplevering
Feetje & Money time
- Afspraken over oplevering (nooit op een vrijdag, liefts maandag)
- Garantie, bug fixing
- Factuur sturen (gebruik een systeem)
- Track je uren ALTIJD

### Service level agrement (SLA)
Maak afspraken voor na de oplevering:
- Hostingkosten? 
- Updates?
- Maandelijkse vaste uren?
- Nacalculatie?