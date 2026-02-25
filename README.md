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
- JavaScript
- WeatherAPI

---

## Funktioner

*Funktioner kommer att uppdateras under projektets gång.*

### Grundfunktioner
- Sök efter städer
- Visa aktuellt väder
- Responsiv design

### Planerade funktioner
- 7-dagars väderprognos
- Favorit-städer

---

## Projektstruktur

```
grupp4-weather-app/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── style.css
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

Här fyller vi in information om hur projektet kan köras

---

## Git Workflow

### Arbetsflöde

#### 1. Hämta senaste ändringar
```bash
git checkout main
git pull origin main
```

#### 2. Skapa ny branch
```bash
git checkout -b funktionsnamn
```

**Exempel:**
```bash
git checkout -b 7-day-forecast
git checkout -b search-functionality
git checkout -b dark-mode
```

#### 3. Jobba med din kod
Gör dina ändringar i VS Code

#### 4. Commit med ditt namn i slutet
```bash
git add .
git commit -m "Beskrivning av ändring - Ditt Namn"
```

#### 5. Pusha till GitHub
```bash
git push origin funktionsnamn
```

#### 6. Skapa Pull Request
- Gå till GitHub
- Klicka på "Compare & pull request"
- Fyll i beskrivning av vad du gjort

#### 7. Be om Review i Discord
Skriv i Discord:
```
🔄 Pull Request klar!
Branch: funktionsnamn
[Kort beskrivning av vad du gjort]
```

#### 8. Code Review & Merge
- Vänta på godkännande från minst en gruppmedlem
- När du fått review: Merge och delete branch på GitHub

#### 9. Uppdatera lokal main
```bash
git checkout main
git pull origin main
```
---

## Licens

Detta projekt är skapat för utbildningssyfte som en del av kursen JavaScript 1 på EC Utbildning.