# Konzept
- Ich nehme die Überschriften bzw. Namen, die die Gerichte in ADHEssen haben, packe die in ein Array.
- Dann mache ich eine Funktion, die aus dem kompletten Array ein Gericht raussucht.
- ~~Außerdem am besten eine für jede Kategorie, oder für ...~~
- ~~Ne, Blödsinn. Einfach Objekte, denen ich dann einen key "Kategorie" oder so zuweise.~~
- ~~Das Array besteht also aus Objekten, in das ich auch die Hauptzutat eintragen kann oder mehrere Zutaten, die wichtig sind. So ein Zutaten: ["hier", "Zutaten", "einfügen"]-Objekt-Array-Ding. Das sieht doch schonmal gut aus.~~

- Klassen initialisieren

- Klasse is da, das' ja klasse
- Klasse besteht aus "Name", "Kategorie" und {"Zutat": "Mengenangabe", "Zutat 2": "Mengenangabe", ...}
- neue Instanz der Klasse wird in Array eingetragen

### html
- Startseite
- page 1: Zufallsgenerator, Filter per Dropdown auswählbar
- page 2 - 5: Kategorien: Frühstück, Hauptmahlzeit, Gebäck, Snacks
- Hauptmahlzeit Dropdownmenü: Nudeln, Reis, Kartoffeln, Bohnen
- Gebäck und Snacks Dropdownmenü: süß und herzhaft
- Seite 6, rechtsbündig: neues Rezet hinzufügen, Formular auf die Seite, dann brauch ich kein Popup-Window (danke Toby für den Input)

### Problem: Dropdownmenü
Scheinbar kann ich den select-tag bzw. dessen options nicht ordentlich mit einem hover-Styling versehen, also muss ich ein eigenes bauen:
- Paragraph wie bisher von wegen "Bitte wähle deine Kategorie: "
- Button, der beim Klicken dann folgendes darunter anzeigen lässt
- ul-Element mit den entsprechenden li-Einträgen statt options
- muss also auch JavaScript speziell dafür einbauen
- Dropdownmenü gebaut, habe aber noch keine Funktion
- was sollte in den Footer?
    - Links zu GitHub und itch.io oder so, ma gucken
    - "nach oben"

### weiter
- leichte Transition für Farbveränderungen in Buttons und in der navbar eingebaut, damit es nicht so krass abgegrenzt ist, wirkt jetzt smoother
- noch paar kosmetische Dinge gemacht, und das Dropdownmenü von Paragraphen in Listen (Paragraphen sowieso mega unnötig gewesen) zu Listeneinträgen mit Buttons für bessere Funktionalität und Inklusion wegen Screenreadern und so geändert
- jetzt werden dem Dropdownmenü Funktionen hinzugefügt, whooo
- um die Funktionalität zu testen, müssen dann allerdings noch einige Rezepte hinzugefügt werden, aber das kann auch morgen passieren, denn ich kann gerade nur auf die Rezepte in meinem Kopf zugreifen, wobei, die reichen ja für nen Test
- nächstes Ziel: Formular für addMeal()