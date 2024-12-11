---
title: Sprint 17
description: User needs
date: '2024-12-02'
categories:
  - sprint
published: True
---

## Table of Contents

## 2 december 2024
Deze sprint gaan we werken aan creative coding. **Coding spike:** Maak leuke code die niet functioneel hoeft te zijn.

## 9 december 2024
### View transitions
Je hebt cross-document dat bedekend dat tussen verschillende paginas een view transition toevoegd met vooral css. (:view-transition)
Je hebt same-document dat betekend dat je in de pagina zelf met JavaScript een transition maakt. (startViewTransition)

Spelen met JS en CSS: [edu.nl/4cdr4](https://codepen.io/krijnhoetmer/pen/GgKqRJx)


## 11 december 2024
### Kleuren in CSS
Naast hex en rgb zijn er verschillende manieren waarmee je kleuren kunt aangeven in css. Het gebruiken van kommas in rgb is niet meer nodig. Je kunt ook hsl(hue saturation lightness) gebruiken. De hue kun je aangeven in degs en turns. [CSS: custom properties guide](https://css-tricks.com/a-complete-guide-to-custom-properties/).

In rgb en hsl kun je de kleur woorden om rekenen naar rgb/hsl waarde door rsl(from green) te gebruiken. 

Er zijn nog veel meer kleur mogelijkheden waarin ze andere kleurenspectrums gebruiken. Zoals: hwb, lab, lch en display-p3.

### Kleurenpalet
Tips voor het gebruiken/maken van een kleurenpalet
- Je ontwerp heeft altijd wit nodig.
- Maak donkere/lichtere varianten van kleuren
- Je hebt neutrale kleuren nodig
- Gebruik voor de variaties hsl. En verander daarin niet alleen de saturation en lightness maar ook de hue.
- Witte/lichte achtergrond met dondere voorgrond is beter voor toegankelijkheid.
- Met een donkere achtergrond heeft de tekst meer leading nodig.
- Bij het gebruiken van grafieken is het beter om de saturation en lightness te veranderen dan de hue voor toegankelijkheid.
- [APCA ipv WCGA 3](https://typefully.com/DanHollick/wcag-3-and-apca-sle13GMW2Brp)

### Wat bronnnen voor je spike
- [Blendmodes](https://css-tricks.com/basics-css-blend-modes/)
- [Grainy gradients](https://css-tricks.com/grainy-gradients/)
- [CSS gradients](https://css-tricks.com/the-state-of-changing-gradients-with-css-transitions-and-animations/)
- [Split Effects with no Content Duplication](https://frontendmasters.com/blog/split-effects-with-no-content-duplication/)
- [LCH, custom props en JavaScript](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)
