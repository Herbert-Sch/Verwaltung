# AI Camera Management System

Ein vollständiges Managementsystem für AI-Kameras mit Live-Streaming, Produktionsverwaltung und Equipment-Tracking.

## 🚀 Features

### Dashboard
- **Übersichtskarte** mit weltweiten Kamera-Standorten
- **Live-Statistiken** über Kamera-Status
- **Interaktive Weltkarte** mit farbkodierten Markern

### Productions
- **Produktionsverwaltung** mit Wochensortierung
- **CRUD-Funktionalität** (Erstellen, Bearbeiten, Löschen)
- **Automatische Statistiken** (Jahres-, Wochen-, Planungsübersicht)
- **CSV-basierte Datenspeicherung**

### Equipment
- **Live-Video-Streams** von aktiven Kameras (HLS)
- **Standby-Displays** für Kameras ohne Stream
- **Detaillierte Kamera-Informationen** mit separaten CSV-Dateien
- **Bildergalerien** für jede Kamera
- **Status-basierte Gruppierung** (Aktiv/Pending/Inaktiv)

## 📂 Dateistruktur

```
AI Camera Management/
├── index.html              # Login-Seite
├── dashboard.html           # Hauptdashboard mit Weltkarte
├── productions.html         # Produktionsverwaltung
├── equipment.html           # Equipment-Übersicht mit Live-Streams
├── installations.html       # Installations-Verwaltung
├── finance.html            # Finanz-Übersicht
├── style.css               # Hauptstyles
├── script.js               # Gemeinsame Funktionen
├── ai_cameras.csv          # Haupt-Kamera-Datenbank
├── productions.csv         # Produktions-Datenbank
├── camera_details_[ID].csv # Detaillierte Kamera-Informationen
└── camera_images/          # Kamera-Bilder nach ID organisiert
    ├── 3305/
    ├── 3316/
    ├── 3248/
    └── [weitere Kamera-IDs]/
```

## 🛠 Technische Details

### Live-Streaming
- **HLS.js** für professionelle Video-Streams
- **Automatische Fehlerbehandlung** und Wiederherstellung
- **Server-basierte URLs**: `https://ingest-{SERVER_ID}.clipmyhorse.tv:9443/ingest/outstream_low/playlist.m3u8`

### Kamera-Details
- **Modulare CSV-Struktur** für jede Kamera
- **Automatische Bildladung** mit Fallback-Optionen
- **Responsive Modals** für detaillierte Ansichten

### Datenverwaltung
- **CSV-basierte Speicherung** für Portabilität
- **LocalStorage** für Zwischenspeicherung
- **Automatische Datenvalidierung**

## 📱 Responsive Design

Das System ist vollständig responsive und funktioniert auf:
- **Desktop** (1920px+)
- **Tablet** (768px - 1200px)
- **Mobile** (< 768px)

## 🔐 Benutzer-Login

Standard-Login-Daten:
- **Username**: admin
- **Password**: password

## 🎨 Design-System

### Farbschema
- **Primärfarbe**: ClipMyHorse.TV Rot (#B30918)
- **Sekundärfarbe**: ClipMyHorse.TV Blau (#070E16)
- **Erfolg**: Grün (#34a853)
- **Warnung**: Gelb (#fbbc04)
- **Fehler**: Rot (#ea4335)

### Status-Kennzeichnung
- 🟢 **Aktiv**: Grüne Markierung und Rahmen
- 🟡 **Pending**: Gelbe Markierung für zu installierende Geräte
- 🔴 **Inaktiv**: Rote Markierung für Storage/Inaktive Geräte

## 📊 CSV-Struktur

### ai_cameras.csv
```csv
ID,Camera-ID,Location,Address,Arena,Installation Type,IP Address,Installation Date,Uninstallation Date,Status,Event Manager,Local Contact,Server-ID
```

### productions.csv
```csv
Production-ID,Production-Name,Camera-ID,Location,Start-Date,End-Date,Event-Manager,Cockpit-User,Status,Notes
```

### camera_details_[ID].csv
```csv
Field,Value
Camera-ID,[ID]
Address,[Adresse]
Installation-Details,[Details]
...
```

## 🚀 Installation

1. Alle Dateien in einen Webserver-Ordner kopieren
2. CSV-Dateien mit aktuellen Daten befüllen
3. Kamera-Bilder in entsprechende Ordner einordnen
4. Browser öffnen und zu index.html navigieren

## 📈 Erweiterung

Das System ist modular aufgebaut und kann einfach erweitert werden:
- Neue Seiten durch Kopieren der Vorlage
- Zusätzliche CSV-Felder durch Anpassung der Parser
- Neue Funktionen durch Erweiterung der JavaScript-Module 