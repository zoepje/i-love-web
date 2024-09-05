# Your tribe for live
## 3/4 september 2024
Deze sprit werken we met Svelte, dit is een components framework, en Svelte kit, dit is een app framework. Svelte kit apps zijn server-side renderd als default. 

### Svelte kit: 
- Folder based routing. 
- GET & POST worden onderwater afgehandeld
- Elke rout heeft server & component bestand
- Data word geexpoteerd van het server bestand naar het component

#### Instalatie
- https://kit.svelte.dev/
- https://docs.directus.io/blog/getting-started-directus-sveltekit.html

#### File tree
- src
  - lib (Hier komen alle bestanden in te staan die je hergebruikt)
  - routes (alle routes worden hier automatisch door aangemaakt)
    - [slug] (detailpage)
      - +page.svelte (/[slug])
    - folder
      - +page.svelte (/folder)
    - +page.svelte (/)
  - app.html (de head van de html)
- static (alle assets)
- package.json
- svelte.convig.js (Als je een live url wilt moet je hier its veranderen)
- vite.convig.js

#### Verschillende soorten files
*+page.svelte:* dit is een webpagina. Hier zet je HTML, CSS en JS code in. Je hoeft je geen zorgen te maken dat als je hier de style veranderd voor een element dat deze dan ook verandert op andere paginas.

