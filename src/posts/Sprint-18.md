---
title: Sprint 18
description: Release Candidate
date: '2025-01-06'
categories:
  - sprint
published: True
---
## Table of Contents

## 6 januarie 2025
### De software release life cycle (SRLC)
1. Pre-alpha (ontwikkelen)
1. Alpha-testen (intern testing)
1. Beta-testen (outside testing)
1. Release candidate (betaversie met de potentie een stabiel product te worden)


## 8 januarie 2025
### Tijdlijn animatie en scenes met GSAP
Ga even spelen met GSAP op [codepen](https://codepen.io/zoepje/pen/yyBvYGm?editors=0010).
Maak scene 3 op een [fork](https://github.dev/joostf/GSAP-timelines/) van deze site.

## 13 januarie 2025
### Clean code
> Even bad code can be ...

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
    - Complexe
- Patroon: vervang loops door piplines
    - Traditionele iteraties over collecties worden vervangen door een functionele stijl met behulp van een pipeline van operaties.
- Patroon: verwijder dode code
- Patroon: verschuif statements
    - Herpositioneren van code binnen een methode om de leesbaarheid en logische volgorde te verbeteren. 

### Sveltekit best practices
Tips:
- Voorkom het inladen van componenten, die componenten inladen, die componenten inladen
- Als een bestand te groot wordt zet je <script> en <style> elementen in een apart bestand en importeer die!
- Pre-rendering kun je per route aanzetten
- Performance test in `build`
- @sveltejs/enhanced-img voor responsive images locaal.
- Maken van sitemaps voor search optimalisation.
