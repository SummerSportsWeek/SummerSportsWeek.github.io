# Summer Sports Week — Statische website

Volledige statische website klaar voor GitHub Pages.

## Bestandsstructuur

```
/
├── index.html          # Homepage
├── aanmelden.html      # Aanmelden (doorlink naar Pretix)
├── fotos.html          # Foto's (doorlinks naar MyAlbum)
├── videos.html         # Video's (YouTube embeds)
├── vrijwilligers.html  # Vrijwilligers + aanmeldformulier
├── contact.html        # Contactformulier
├── css/
│   └── style.css
└── js/
    └── main.js
```

---

## 🔧 Wat je nog moet invullen

### 1. Formspree (formulieren)
Maak een gratis account op [formspree.io](https://formspree.io).
Maak twee formulieren aan en vervang de placeholders:

- **vrijwilligers.html** → zoek naar `JOUW_FORM_ID` → vervang door jouw Formspree-ID
- **contact.html** → zoek naar `JOUW_FORM_ID_CONTACT` → vervang door jouw tweede Formspree-ID

### 2. Pretix-link (aanmelden)
In `aanmelden.html`, zoek naar:
```html
<a href="https://pretix.eu/" ...>
```
Vervang `https://pretix.eu/` door de echte link naar jullie Pretix-evenement.

### 3. YouTube video-ID's (videos.html)
Zoek naar `VIDEO_ID_2024`, `VIDEO_ID_2023`, etc.
Vervang elk met het echte YouTube video-ID (het deel na `watch?v=` in de URL).

### 4. MyAlbum-links (fotos.html)
Zoek naar `href="https://myalbum.com/"` en vervang elk door de echte albumlink per jaar.

---

## 🚀 Publiceren op GitHub Pages

1. Maak een nieuwe GitHub-repository aan (bijv. `summersportsweek`)
2. Push alle bestanden naar de `main`-branch
3. Ga naar **Settings → Pages → Source: Deploy from branch → main / root**
4. Je site is live op `https://jouwgebruikersnaam.github.io/summersportsweek/`

### Eigen domein koppelen (summersportsweek.nl)
1. Maak een bestand `CNAME` aan in de root met als inhoud: `summersportsweek.nl`
2. Stel bij je DNS-provider de volgende records in:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  jouwgebruikersnaam.github.io
   ```
3. Vink in GitHub Pages "Enforce HTTPS" aan (duurt max. 24u)
