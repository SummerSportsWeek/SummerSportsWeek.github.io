# Summer Sports Week

Website van **Summer Sports Week**, een jaarlijkse sportweek voor kinderen in groep 5 t/m 8 bij The Outdoor PACT in Made.

Live op [summersportsweek.nl](https://summersportsweek.nl).

## Pagina's

| Pagina | Route | Inhoud |
|---|---|---|
| Home | `/` | Introductie, countdown, programma-overzicht |
| Aanmelden | `/aanmelden/` | Aanmelden voor de sportweek (via Pretix) |
| Foto's | `/fotos/` | Fotoarchief per editie (via MyAlbum) |
| Video's | `/videos/` | Aftermovies en highlights (YouTube) |
| Vrijwilligers | `/vrijwilligers/` | Informatie en aanmeldformulier voor vrijwilligers |
| Merch | `/merch/` | Officiële SSW-merchandise |
| Contact | `/contact/` | Contactformulier |

## Tech stack

Statische HTML, CSS en vanilla JavaScript — geen build-stap, geen frameworks. Fonts via Google Fonts (Bricolage Grotesque, DM Sans).

## Structuur

```
index.html              Homepage
aanmelden/index.html    Aanmeldpagina
fotos/index.html        Fotoarchief
videos/index.html       Video's
vrijwilligers/index.html  Vrijwilligers
merch/index.html        Merchandise
contact/index.html      Contact
404.html                Foutpagina

css/style.css           Styling
js/main.js              Interactiviteit
logos/                  Logo's en favicon
images/                 Foto's per pagina
bestanden/               Downloads (programmaboekje, protocollen)
```

## Deployment

Gehost via GitHub Pages met een eigen domein (zie `CNAME`). Pushen naar `main` publiceert direct — geen build-proces nodig.
