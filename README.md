# Weather App

En modern väderapplikation som hämtar och visar väderdata i realtid med fokus på ren design och användarvänlighet.

---

## Projektinformation

**Skola:** EC Utbildning  
**Utbildning:** Frontendutvecklare  
**Kurs:** JavaScript 1  
**Grupp:** Grupp 4  

---

## Gruppmedlemmar

- Alvina Tolvgård
- Albrim Hoti
- Ivana Lucic
- Sanel Osmanovic
- Maryam Rutqvist Ristimäki

---

## Om Projektet

Väderappen är en gruppuppgift där vi skapar en webbapplikation med modern design som skiljer sig från traditionella vädertjänster. Fokus ligger på användarvänlighet, ren kod och responsiv design.

---

## Tekniker

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API ??

---

## Funktioner

*Funktioner kommer att uppdateras under projektets gång.*

### Grundfunktioner
- Sök efter städer
- Visa aktuellt väder
- Responsiv design

### Planerade funktioner
- 7-dagars väderprognos
- Geolocation
- Favorit-städer

---

## Projektstruktur

```
weather-app/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── src/
│   ├── main.js
│   ├── api.js
│   ├── storage.js
│   ├── ui.js
│   └── utils.js
│
└── assets/
    └── images/
```

---

## Installation

1. Klona repositoryt
```bash
git clone [repo-url]
```

2. Skaffa API-nyckel från OpenWeatherMap
   - Registrera på https://openweathermap.org/api
   - Skapa en `config.js` fil i `js/` mappen
   - Lägg till din API-nyckel

3. Öppna `index.html` i webbläsaren

---

## Kravspecifikation

### Godkänt (G)
- Webbsidan byggd med HTML, CSS och JavaScript
- Korrekt formaterad och indenterad kod
- Minst tre interaktiva funktioner
- JavaScript för dynamisk DOM-manipulation
- Tydlig filstruktur
- Gemensamt Git-repo med commits från alla gruppmedlemmar
- README.md med projektbeskrivning
- Gruppredovisning där alla deltar aktivt

### Väl Godkänt (VG)
- Hämtar data från externt API
- Alla funktioner kommenterade
- Felhantering implementerad
- Responsiv design (desktop och mobil)
- Genomtänkt kodstruktur

---

## Git Workflow

### Branch-strategi
```
main
  └── develop
        ├── feature/[funktionsnamn]
        ├── docs/[dokumentation]
        └── style/[design]
```

### Commit-konventioner
```
Add: Ny funktionalitet
Fix: Buggfix
Update: Uppdatering av befintlig kod
Style: CSS och design
Docs: Dokumentation
```

---

## Status

**Projektstart:** [Datum]  
**Planerat slut:** [Datum]  
**Nuvarande fas:** Setup och planering

---

## Licens

Detta projekt är skapat för utbildningssyfte som en del av kursen JavaScript 1 på EC Utbildning.