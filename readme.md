# Konzept
- Ich nehme die Überschriften bzw. Namen, die die Gerichte in ADHEssen haben, packe die in ein Array.
- Dann mache ich ein Funktion, die aus dem kompletten Array ein Gericht raussucht.
- ~~Außerdem am besten eine für jede Kategorie, oder für ...~~
- ~~Ne, Blödsinn. Einfach Objekte, denen ich dann einen key "Kategorie" oder so zuweise.~~
- ~~Das Array besteht also aus Objekten, in das ich auch die Hauptzutat eintragen kann oder mehrere Zutaten, die wichtig sind. So ein Zutaten: ["hier", "Zutaten", "einfügen"]-Objekt-Array-Ding. Das sieht doch schonmal gut aus.~~

- Klassen initialisieren

- Klasse is da, das' ja klasse
- Klasse besteht aus "Name", "Kategorie" und {"Zutat": "Mengenangabe", "Zutat 2": "Mengangabe", ...}
- neue Instanz der Klasse wird in Array eingetragen

### html
- Startseite
- page 1: Zufallsgenerator, Filter per Dropdown auswählbar
- page 2 - 5: Kategorien: Frühstück, Hauptmahlzeit, Gebäck, Snacks
- Hauptmahlzeit Dropdownmenü: Nudeln, Reis, Kartoffeln, Bohnen
- Gebäck und Snacks Dropdownmenü: süß und herzhaft
- Seite 6, rechtsbünfig: neues Rezet hinzufügen, Formular auf die Seite, dann brauch ich kein Popup-Window (danke Toby für den Input)

### Problem: Dropdownmenü
Scheinbar kann ich den select-tag bzw. dessen options nicht ordentlich mit einem hover-Styling versehen, also muss ich ein eigenes bauen
- Paragraph wie bisher von wegen "Bitte wähle deine Kategorie: "
- Button, der beim Klicken dann folgendes darunter anzeigen lässt
- ul-Element mit den entsprechenden li-Einträgen statt options
- muss also auch JavaScript speziell dafür einbauen
- Dropdownmenü gebaut, habe aber noch keine Funktion

### weiter
- leichte Transition für Farbveränderungen in Buttons und in der navbar eingebaut, damit es nicht so krass abgegrenzt ist, wirkt jetzt smoother