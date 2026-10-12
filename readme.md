# Konzept
- Ich nehme die Überschriften bzw. Namen, die die Gerichte in ADHEssen haben, packe die in ein Array.
- Dann mache ich eine Funktion, die aus dem kompletten Array ein Gericht raussucht.

- Klassen initialisieren

- Klasse is da, das' ja klasse
- Klasse besteht aus "Name", "Kategorie" und ["Zutat", "Zutat 2", ...]
- neue Instanz der Klasse wird in Array eingetragen

## wichtig
- funktioniert momentan nur mit Live-Server o. ä., wegen localStorage, der mit dem File Explorer nicht ordentlich funktioniert

### html
- Startseite
- page 1: Zufallsgenerator, Filter per Dropdown auswählbar
- page 2 - 5: Kategorien: Frühstück, Hauptmahlzeit, Gebäck, Snacks
- Hauptmahlzeit Dropdownmenü: Nudeln, Reis, Kartoffeln, Bohnen
- Gebäck und Snacks Dropdownmenü: süß und herzhaft
- Seite 6, rechtsbündig: neues Rezept hinzufügen, Formular auf die Seite, dann brauch ich kein Popup-Window (danke Toby für den Input)

### Problem: Dropdownmenü
Scheinbar kann ich den select-tag bzw. dessen options nicht ordentlich mit einem hover-Styling versehen, also muss ich ein eigenes bauen:
- Paragraph wie bisher von wegen "Bitte wähle deine Kategorie: "
- Button, der beim Klicken dann folgendes darunter anzeigen lässt
- ul-Element mit den entsprechenden li-Einträgen statt options
- muss also auch JavaScript speziell dafür einbauen
- Dropdownmenü gebaut, habe aber noch keine Funktion
- was sollte in den Footer?
    - Links zu GitHub und itch.io oder so, ma gucken
    - "nach oben", zumindest auf den Seiten mit mehreren Rezepten

### weiter
- leichte Transition für Farbveränderungen in Buttons und in der navbar eingebaut, damit es nicht so krass abgegrenzt ist, wirkt jetzt smoother
- noch paar kosmetische Dinge gemacht, und das Dropdownmenü von Paragraphen in Listen (Paragraphen sowieso mega unnötig gewesen) zu Listeneinträgen mit Buttons für bessere Funktionalität und Inklusion wegen Screenreadern und so geändert
- jetzt werden dem Dropdownmenü Funktionen hinzugefügt, whooo
- .json-Upload möglich gemacht
- Rezepte jetzt auch auf allen (bisher) beiden Seiten verfügbar
- Zufallsgenerator funktioniert (mit Live-Server)
- die anderen Seiten zeigen jetzt Rezepte an, yay
- neue Schriftarten rausgesucht (natürlich 100 % kostenlos: https://www.dafont.com/de/chalk.font, https://www.dafont.com/de/futurahand.font, https://www.dafont.com/de/crayon-libre.font?l[]=10&l[]=1&text=%E4%F6%FC)

## To-Do
- gif für loading hinzufügen, irgendwann
- css: Länge und Flex der Form und des Kategorie-Buttons checken, da stimmt was nich
- auch die Schritte und Notizen der Rezepte anzeigen lassen
- .json nicht nur importieren, sondern auch noch exportieren, das wär doch was

## Gelernt
- css: keyframes und animation für einen pulsierenden Button
- css/html: aria-current="page", um anzuzeigen, welche Seite gerade offen ist (in der Navbar)
- wiederholt: addEventListener usw., wie wir das u. a. in der Fahrschulapp hatten
- css: wie man Variablen schreibt:
    - muss mit "--" beginnen, z. B. --color-text
    - globale Variablen in :root{} deklarieren
    - aufgerufen wird dann mit var(--variable)
- css: Pseudoklasse **:empty**, bzw., wie man nur ein nicht leeres Objekt mit :not(:empty){} anspricht und styles setzt
- wie man .json-Dateien benutzt
- wiederholt: wie man git und gitHub benutzt
- wie man Fonts in css einbindet