# 🪄 Harry Potter World

Eine interaktive Webanwendung rund um die Welt von **Harry Potter**.

Das Projekt wurde mit **HTML, CSS und JavaScript** umgesetzt und dient dazu, dynamisches Rendern, strukturierte Datenverwaltung, Benutzerinteraktionen und eine übersichtliche Benutzeroberfläche praktisch umzusetzen.

---

## 📌 Projektübersicht

**Harry Potter World** stellt verschiedene Bereiche der Harry-Potter-Welt über eine übersichtliche Benutzeroberfläche dar.

Die Anwendung verwendet JavaScript, um Inhalte dynamisch zu erzeugen und in die Webseite einzufügen. Die einzelnen Bereiche werden über eine gemeinsame Datenstruktur verwaltet und anschließend als Karten dargestellt.

Aktuell stehen folgende Kategorien zur Verfügung:

- 🏰 Houses
- 👨‍🏫 Staff
- 🧑‍🎓 Students
- ✨ Spells
- 🧙 Characters

Der Aufbau des Projekts ist modular gehalten, sodass Inhalte und Funktionen später erweitert werden können.

> [!NOTE]
> Das Projekt befindet sich in einer Entwicklungs- und Lernphase. Einige Funktionen wie Suche und Filter sind bereits als Benutzeroberfläche vorgesehen und können noch weiter ausgebaut werden.

---

## ✨ Features

### 🗂️ Dynamische Kategorien

Die Kategorien werden über eine JavaScript-Datenstruktur verwaltet und anschließend dynamisch auf der Webseite dargestellt.

Beispiele:

- House
- Staff
- Students
- Spells
- Characters

---

### 🔎 Suchbereich

Die Benutzeroberfläche enthält ein Suchfeld, über das später gezielt nach Inhalten gesucht werden kann.

```text
Search...
```

Die Suchfunktion ist als Bestandteil der Benutzeroberfläche vorbereitet und kann zukünftig um eine vollständige Suchlogik erweitert werden.

---

### 🏷️ Kategorie-Filter

Über ein Dropdown-Menü können verschiedene Kategorien ausgewählt werden:

```text
all Categories
Characters
Students
Staff
House
Spells
```

Damit ist die Grundlage für eine gezielte Filterung der dargestellten Inhalte vorhanden.

---

### 🃏 Dynamische Karten

Die einzelnen Inhalte werden nicht statisch in das HTML geschrieben.

Stattdessen erzeugt JavaScript die benötigten HTML-Strukturen dynamisch:

```javascript
function getMain(index) {
    return `
        <div class="cards">
            <h4 class="cardHeader">${images[index].name}</h4>
            <button class="cardBtn">
                <img src="./assets/svg/${images[index].images}" alt="${images[index].name} Images">
            </button>
        </div>
    `;
}
```

Dadurch können neue Inhalte über die Datenstruktur hinzugefügt werden, ohne jedes Element einzeln im HTML erstellen zu müssen.

---

## 🛠️ Verwendete Technologien

### Frontend

- HTML5
- CSS3
- JavaScript
- DOM-Manipulation
- Template Literals
- JavaScript-Arrays und Objekte
- Event Handling

### CSS

- CSS Variables
- Flexbox
- Responsive Layout
- Strukturierte CSS-Dateien
- Wiederverwendbare Größen- und Farbvariablen

---

## 📁 Projektstruktur

```text
Harry-Potter/
│
├── assets/
│   └── svg/
│       ├── broom.svg
│       ├── harryPotter.svg
│       ├── hedwig.svg
│       ├── hogwarts.svg
│       ├── lopu.svg
│       └── ...
│
├── scripts/
│   ├── imagesDB.js
│   ├── template.js
│   ├── render.js
│   └── script.js
│
├── style/
│   ├── standard.css
│   ├── root.css
│   ├── header.css
│   ├── main.css
│   ├── footer.css
│   └── style.css
│
└── index.html
```

> [!IMPORTANT]
> Die Aufteilung in mehrere JavaScript- und CSS-Dateien sorgt für eine klarere Trennung der Verantwortlichkeiten und erleichtert die spätere Wartung des Projekts.

---

## 🧩 Aufbau der Anwendung

Die Anwendung ist in mehrere Bereiche unterteilt.

### Header

Der Header enthält:

- Harry-Potter-Logo
- Projekttitel
- Suchfeld
- Suchbutton
- Kategorieauswahl

### Main Content

Im Hauptbereich werden die verschiedenen Kategorien als Karten dargestellt.

Die Inhalte werden über JavaScript dynamisch generiert.

### Footer

Der Footer enthält:

- Entwicklerhinweis
- Harry-Potter-bezogenes Icon

---

## ⚙️ Dynamisches Rendering

Eine zentrale Funktion des Projekts ist das dynamische Rendern der Benutzeroberfläche.

Beim Start der Anwendung wird zunächst `init()` ausgeführt:

```javascript
function init() {
    renderPage();
}
```

Anschließend werden die einzelnen Bereiche gerendert:

```javascript
function renderPage() {
    renderHeader();
    renderMain();
    renderFooter();
}
```

Dadurch wird die Seite strukturiert aufgebaut.

---

## 🗃️ Datenverwaltung

Die Inhalte werden aktuell in einer JavaScript-Datenstruktur gespeichert:

```javascript
let images = {
    "House": [
        {
            "name": "House",
            "images": "hogwarts"
        }
    ],

    "Staff": [
        {
            "name": "Staff",
            "images": "dumbledore"
        }
    ],

    "Students": [
        {
            "name": "Students",
            "images": "harry"
        }
    ]
};
```

Diese Struktur ermöglicht es, Kategorien und deren Inhalte zentral zu verwalten.

---

## 🎨 Styling

Das Styling wurde auf mehrere CSS-Dateien verteilt.

Eine zentrale Rolle spielt `root.css`, in der wiederverwendbare Variablen definiert werden.

Beispiel:

```css
:root {
    --header-backgroundColor: rgb(37,45,62);
    --header-borderColor: whitesmoke;
    --header-fontHarryYellow: rgb(255,196,1);
    --header-fontHarryRed: rgb(255, 36, 0);
    --main-backgroundColor: rgb(41,49,51);
}
```

Dadurch können Farben und Größen zentral verändert werden.

> [!TIP]
> CSS Variables sind besonders hilfreich, wenn sich Farben, Abstände oder Größen an mehreren Stellen wiederholen. Änderungen können dadurch zentral vorgenommen werden.

---

## 🧠 Was ich mit diesem Projekt vertieft habe

Während der Entwicklung habe ich insbesondere folgende Themen praktisch angewendet:

- Dynamisches Erstellen von HTML mit JavaScript
- DOM-Manipulation
- Arbeiten mit Arrays und Objekten
- Template Literals
- Funktionen zur Strukturierung des Codes
- Trennung von Daten, Rendering und Templates
- Event Handling
- CSS Variables
- Flexbox
- Strukturierung größerer CSS-Dateien
- Aufbau einer übersichtlichen Projektstruktur
- Entwicklung einer interaktiven Benutzeroberfläche

---

## 🐞 Fehleranalyse & Weiterentwicklung

Während der Entwicklung wurden verschiedene Bereiche identifiziert, die für die weitere Entwicklung interessant sind.

Beispielsweise kann die Suchfunktion vollständig implementiert und mit dem Kategorie-Filter verbunden werden.

Auch die Darstellung der einzelnen Karten kann zukünftig um weitere Informationen und Interaktionen erweitert werden.

> [!WARNING]
> Die aktuell vorhandene Benutzeroberfläche enthält bereits Such- und Filterelemente. Diese sind jedoch noch nicht vollständig mit einer entsprechenden Datenverarbeitungslogik verbunden.

---

## 🔮 Geplante Erweiterungen

Für zukünftige Versionen sind unter anderem folgende Erweiterungen denkbar:

- 🔎 Vollständige Suchfunktion
- 🏷️ Funktionierender Kategorie-Filter
- 🧙 Detailansicht einzelner Charaktere
- 📖 Zusätzliche Informationen zu Charakteren
- 🏰 Informationen zu Hogwarts-Häusern
- ✨ Darstellung einzelner Zaubersprüche
- 📱 Optimierung für verschiedene Bildschirmgrößen
- 🌐 Anbindung an eine Harry-Potter-API
- 🧪 Erweiterung durch Unit Tests
- ⚡ Verbesserung der Performance
- ♻️ Weitere Modularisierung des JavaScript-Codes

---

## 🚀 Installation

Repository klonen:

```bash
git clone <REPOSITORY-URL>
```

Anschließend in das Projektverzeichnis wechseln:

```bash
cd <PROJEKTORDNER>
```

Danach kann die Anwendung beispielsweise mit **Visual Studio Code und Live Server** gestartet werden.

Alternativ kann die `index.html` direkt im Browser geöffnet werden.

> [!CAUTION]
> Bei einer späteren API-Anbindung sollte darauf geachtet werden, Zugangsdaten und API-Keys nicht direkt im öffentlich zugänglichen Repository zu hinterlegen.

---

## 📸 Vorschau

Eine Vorschau der Anwendung kann hier ergänzt werden:

```markdown
![Harry Potter World Preview](assets/img/preview.png)
```

---

## 👨‍💻 Entwickler

**Kadir Kahraman**

Entwicklung und Umsetzung des Projekts im Rahmen meiner kontinuierlichen Weiterbildung in der Webentwicklung.

---

## 📄 Lizenz

Dieses Projekt dient Lern- und Übungszwecken.

Die verwendeten Harry-Potter-bezogenen Namen, Figuren und Marken gehören ihren jeweiligen Rechteinhabern.