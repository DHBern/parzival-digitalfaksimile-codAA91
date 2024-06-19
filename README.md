# Digitalfaksimile Bern, Burgerbibliothek, Cod. AA 91 (`codAA91`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-codAA91)

## Origin

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
