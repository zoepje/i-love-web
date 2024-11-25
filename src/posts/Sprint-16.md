---
title: Sprint 16
description: Don't repeat yourself
date: '2024-11-11'
categories:
  - sprint
published: True
---

## Table of Contents

## 11 november 2024
### Wat is een component library?
Een verzameing vooral gemaakte, geteste en goed gedocumenteerde UI-componenten die eenvoudig kunnen worden hergebruikt in de gebruikersinterface van een product.


Het zorgt ervoor dat het product een consistente uitstraling en gevoel heeft en bevordert efficiente en schaalbaarheid.


Met componentenbibiliotheken kunnen ontwerpers en ontwikkelaar snel nieuwe functies en paginas toevoegen, terwijl de algehele ontwerpconsistente en kwaliteit behouden blijft.

### Morphological chart
Morphological charts are used in product design and are particularly useful to come up with unexpected alternatives for complex designs. Their origin lies in the field of industrial product design.

**Benodigdheden:**
- Wil om veel varianten van een app te bedenken
- Een systematische manier van werken
- Een vel A3 papier en tekenmaterialen
- Een analyse van onderdelen van je component

## 13 november 2024
### Typografie en fonts
Zet de fonts naast elkaar met alle woorden die je gaat gebruiken op je website. Ook kun je kijken hoe de tekst eruit met wit op zwart en zwart op wit. 95% van webdesign is typografie.


**Micro-Typography**
- Tracking and glyph-width (font-kerning, font-variation-settings)
- Protrusion, margin kerning, or hanging punctuation
- Punctually increasing or decreasing word space
- Chunking words through word spacing or other with space (word-spacing, letter-spacing)

**Macro-Typogrphy**
- The format: the basic dimensions within which we set type (font, line-height)
- The grid: type size, proportion of columns (columns, word-break, hyphens)
- The hierarchy: how the different type sizes and the formatting relate to each other (heading)

A complete collection of web safe CSS font stacks https://www.cssfontstack.com

### Variable fonts
Variable fonts are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single filte, rather than having a separate font file fot every width, weight, or style. https://variablefonts.io

Je kunt kijken of je font een variable font is op https://wakamaifondue.com

### Visuele hiërarchie
Visuele hiërarchie kun je op verschillende manieren bereiken, zoals:
- Grootte
- Positie op het scherm
- Witruimte
- Kleur / contrast
- Animatie

#### The inverted pyramid
3 niveau's van visuele hiërarchie:
- Belangrijkste informatie
- Belangrijke details
- Achtergrondinformatie

### Modular scale
A modular scale is a sequence of numbers that relate to one another in a meaningful way. Using the golden ratio, for eample, we can produce values for a modular scale by multiplying by 1.618 to arrive at the next highest number, or dividing by 1.618 to arrive at the next number down.

## 18 november 2024
Het gdbruik van een component library:
- Versnelt ontwikkeling door hergebruik => grotere kans op fouten
- Zorgt voor consistentie in projecten => alles ziet er hetzelfde uit
- Vergroot de onderhoudbaarheid => vergroot de chaos

### Metanaamgeving
Een hiërarchische benadering om het over bepaalde soorten componenten te hebben. In principe is alles component maar hoe noemen we:
- Geneste componenten
- Variaties op componenten
- sjjd

Je kunt je mappen indelen op verschillende manieren:
- Page-section-component
- Functional layering
- LEGO
- Atomic design
- Presenter-Container

## 20 november 2024
The new responsive: web design in a component-driven world. (Artiekel)[https://web.dev/articles/new-responsive?hl=ennsice]

### Responsive to the user
Instellingen van een gebruiker. Zoals bijvoorbeeld darkmode en motion. 
De anatomie van een meadia query:
- Aanroep van de media query
- Media types
- Media features
- De conditie waaraan voldaan moet worden

### Responsive to the container
Gebruik container queries met Media queries voor een smooth flow.

### Responsive to the form factor
Je hebt nu ook vouwbare schermen hiermee kun je ook rekening houden door bijvoorbeeld `@media (spanning: <type of fold>)` te gebruiken.
