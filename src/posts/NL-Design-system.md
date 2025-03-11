---
title: NL Design system
description: Yolijn van der Kolk
date: '2023-11-24'
categories:
  - we love web
published: True
---

## Table of Contents

## Wat is een design system?

- Stijlgids voor consistente huisstijl
- Design kit voor ux-ontwerpers
- Componentenbibliotheek voor ontwikkelaars
- Richtlijnen teksten en microcopy
- Gedeelde inzichten uit gebruikersonderzoek
- Goed geteste patronen

### Voorbeelden

- [Sanoma Learning](https://sanomalearning.design/)
- [ING](https://lion-web.netlify.app)
- [NL Design system](https://nldesignsystem.nl)

## Wat is NL design system?

- Samen met een community bouwen aan een overheidsbreed design system.
- Samenwerking tussen overheidsorganisaties.
- Samenwerking met leveranciers van overheden.
- Gedeelde ambitie om niet het wiel opnieuw uit te vinden.
- Kernteam dat alle teams ondersteunt en samenwerken faciliteert.
- Estafette model
  1. Help wanted
  2. Community
  3. Candidate
  4. Hall of fame

## Waar we rekening mee houden

- Elke organisatie heeft eer eigen huistijl
- Elke organisatie laat eigen digitale producten bouwen
- Code en design in sync
- Open source voor iedereen te gebruiken

## Architectuur

- Aka one tech-stack
- CSS componenten met voorspelbare namen
- Design tokens in JSON
- Webcomponenten waar mogelijk
- Framework componenten waar handig
- Documentatie in Markdown
- Storybooks met visuele regressie tests

## CSS met BEM

- Samenwerking: vendor prefix voor class name
- Voorspelbare naamgeving: bekend van webstandaarden
- Design tokens in CSS
  - Custom properties
  - Double underscores
  - Klein risico op onduidelijkheid
  - Iedereen heeft een eigen thema

## Design tokens in lagen

1. Huisstijl tokens
2. Algemene tokens
3. Component tokens

### Tokens JSON

- Een bron van waarheid voor code en design
- Style dictionary

1. Figma -> 2. GitHub -> 3. Style dictionary -> 4. CSS

### Design tokens als API

- Webcomponenten
- Toegankelijkheid
  - Testing-library
- High-contrast mode
  - Forced colors mode
  - CSS system colors
  - Testen in storybook
- Lokalisatie
  - Translate van de browser
  - Geen left/right/top/bottom maar:
    - inline-start
    - inline-end
    - block-start
    - block-end
