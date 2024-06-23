# Digitalfaksimile Bern, Burgerbibliothek, Cod. AA 91 (`codAA91`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-codAA91)

## Origin

* Published on DVD in 2009: *Die Berner Parzival-Handschrift (Burgerbibliothek, Cod. AA 91) mit Volltranskription und einer Einführung von Michael Stolz. DVD mit einem Begleitheft. Konzept von Michael Stolz, Simbach/Inn 2009*
  * [More information (PDF)](https://dhbern.github.io/parzival-digitalfaksimile/codAA91/meta/FlyerCodAA91_zweiseitig.pdf)
  * About the resource:
    
     > Eine Digitaledition, welche die Handschrift kodikologisch und inhaltlich erschließt, ist online verfügbar […]. Sie ermöglicht ein von Erläuterungen und Verweisen auf einschlägige Textausgaben unterstütztes, virtuelles Blättern in der Handschrift. Begleitend wird eine Transkription des Textes zur Verfügung gestellt. Auf diese Weise wird sichtbar, wie Wolframs ‹Parzival› in einer Spätphase seiner Überlieferung gelesen und verstanden worden ist.
    
    Quoting DOI: [10.24894/978-3-7965-4223-7](https://doi.org/10.24894/978-3-7965-4223-7)
      
*Archival version (as-is): Data Science Lab, pdaengeli, 2024-06-04*

## License

---

<details><summary>Clean-up (before initial commit)</summary>

General approach: remove all spurious files (copies, obsolete notes, process artefacts), primarily based on file names (visual check).

PWD: root directory of this repository

* rename files

* purge OS junk and ftp log files:
  * `find . -type f -name "Thumbs.db" -delete`
  * `find . -type f -name \.DS_Store -delete`
  * `find . -type f -name "WS_FTP.LOG" -delete`

* (re)moved:
  * `Daten/eklog` (php-based counter; was never used; count: 0)
  * `Extras` (Junicode ttf, Firefox binaries)

* (re)moved after `grep` testing:
  * `Daten/*_before_*`
  * `Daten/*_bak.*`
  * `Daten/RScripts/*_alt.*`

</details>
