---
title: Accessibility
description: Fenna de Wilde
date: '2024-01-19'
categories:
  - we love web
  - accessibility
published: True
---

## Table of Contents

## Over de spreker

Creative front-end developer bij Bakken & Bæck.

## Toepassen

Toegankelijkheid is heel erg belangrijk voor websites. De website kan wel mooi zijn maar als de gebruikers het niet kunnen gebruiken dan heb je er niks aan.

- Focus state voor keyboard gebruikers
  - `:focus-visible` per element definiëren.
  - `.custom-focus` alle elementen waar op gefocust wordt met keyboard.
- Aria attributes
  - `aria-label` als het element niet een toegankelijke naam heeft. Logo link `aria-label="To homepage"`
  - `aria-controls` een bedieningselement te koppelen aan het element dat het controleert. hierdoor kunnen screenreaders de verbinding begrijpen en meer context bieden aan gebruikers.
  - `aria-expanded` de status aan van een element dat kan worden uitgeklapt en ingeklapt.
  - `aria-live` vertelt de screenreader om dynamische veranderingen aan te kondigen en ket 3 waardes: off, polite & assertive.
  - `aria-atomic` hoeveel de screenreader moet oplezen 2 waardes: false & true.
- Carousels
  - de carousel container moet een `role="region"` hebben of het semantische element `section`. Daarnaat moet het een `aria-roledescription="carousel"` hebben en een `aria-labelledby` of `aria-label`.
  - De carousel slide moet een `role="group"` hebben.Daarnaat moet het een `aria-roledescription="slide"` hebben en een `aria-labelledby` of `aria-label`.
  - Als de slides niet zichtbaar zijn moet je ze verbergen `aria-hidden="true"` en een `tabindex="-1"`
  - Vermijd het gebruiken van li elements voor slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.
  - De controls moet een `role="group"` hebben. Daarnaast moet `aria-label` de control button `aria-:true`
- Focus guards voor models en overlays
  - HTML element `dialog`
  - Of een npm package gebruiken
- Kleurcontrast, Lettergroottes (16px) & Lijnlengtes (50 to 75 tekens)
- Alt-text voor afbeeldingen
- Semantische code

## Wat je nog meer kunt doen

- Skip to content button
- prefers-reduced-motion
- Alle autoplay videos/carousels moeten gepauzeerd kunnen worden
- Zelf een screenreader gebruiken
