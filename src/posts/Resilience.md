---
title: Resillience
description: Niels Leenheer
date: '2025-04-25'
categories:
  - we love web
  - HTML
published: True
---

## Table of Contents

## HTML
- HTML is resiliened, want je kunt er fouten in maken en het werkt nog steeds. Het is daarvoor gemaakt, want mensen maken fouten.
- World wide web was een browser en een editer. Je kunt nogsteeds websites bezoeken met oude HTML omdat browser gemaakt zijn om tags te negeren die zij niet kennen.
- `<noscript>` als je browser geen scripting ondersteund dan laat hij de tekst gewoon zien. De functie van de `<noscript>` tag is om alles wat in de tag staat te negeren. Het komt wel in de dom maar het wordt niet zichtbaar.
- HTML garandeer forward and backwords compatability.

## Polyfills voor onbekende tags maken
- Tags die niet ondersteund worden doorbrowsers wel werkend maken met css en javascript.
- `<blink>` Laat de tekst knipperen. Oude tag die niet meer ondersteund wordt. Heel bewust deze geslopt. 
- `<marquee>` Tekst laten bewegen over het scherm.

HTML -> tokenizer & tree builder -> DOM

## Tokenizer
- Gaat teken voor teken door het HTML bestand om de tokens naar de tree builder te sturen.
- Wanneer er parse errors komen gaat het gewoon verder

## Tree builder
- Maakt te elementen aan die van tokenizer komen.
- Maakt nieuwe en missende elementen aan.
- Fouten herstellen die wij maken, als iets bijvoorbeeld verkeerd genest worden.
  - `<b> 1 <i> 2 </b> 3 </i>` wordt als dit <b> 1 </b> <i> <b> 2 </b> 3 </i> gerenderd. genareerd een `<i>` wanneer hij 3 tegen komt.
