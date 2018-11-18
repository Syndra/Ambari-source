/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  "hive": {
    "ui": {
      "fileSource": {
        'uploadFromLocal': "Upload von lokal",
        'uploadFromHdfs': "Hochladen von HDFS",
        'selectFileType': "Wählen Sie Dateityp",
        'fileType': "Dateityp",
        "selectHdfsLocation": "Wählen Sie das HDFS-Verzeichnis",
        "enterHdfsPathLabel": "Geben Sie den HDFS-Pfad ein",
        "selectLocalFileLabel": "Wählen Sie Local File aus",
      },
      "csvFormatParams": {
        'columnDelimterField': "Feldbegrenzer",
        'columnDelimiterTooltip': "Trennzeichen für die Spaltenwerte. Standardeinstellung ist comman (,).",
        'escapeCharacterField': "Escape-Zeichen",
        'escapeCharacterTooltip': "Escape-Zeichen. Der Standardwert ist Backslash (\).",
        'quoteCharacterTooltip': 'Anführungszeichen Der Standardwert ist Anführungszeichen (").',
        'quoteCharacterField': "Anführungszeichen",
        'isFirstRowHeader': "Ist die Kopfzeile der ersten Zeile?",
        'fieldsTerminatedByTooltip': "Felder beendet mit Zeichen für Hive-Tabelle.",
        'isFirstRowHeaderTooltip': "Prüfen Sie, ob die erste Zeile von CSV eine Kopfzeile ist.",
        'containsEndlines': "Enthält Endzeilen?",
      },
      "uploadTable": {
        'uploadProgress': "Upload-Fortschritt",
        'uploading': "Hochladen ..",
        'selectFromLocal': "Wählen Sie aus lokal",
        'hdfsPath': "HDFS-Pfad",
        'tableName': "Tabellenname",
        'tableNameErrorMessage': "Im Tabellennamen sind nur alphanumerische Zeichen und Unterstriche zulässig.",
        'tableNameTooltip': "Geben Sie einen gültigen (alphanumerischen + Unterstrich) Tabellennamen ein.",
        'columnNameErrorMessage': "In Spaltennamen sind nur alphanumerische Zeichen und Unterstriche zulässig.",
        'hdfsFieldTooltip': "Geben Sie den vollständigen HDFS-Pfad ein",
        'hdfsFieldPlaceholder': "Geben Sie den vollständigen HDFS-Pfad ein",
        'hdfsFieldErrorMessage': "Bitte geben Sie den vollständigen Pfad der hochzuladenden HDFS-Datei an.",
        'showPreview': "Vorschau"
      }
    },
    words :{
      temporary : "Temporär",
      actual : "Tatsächlich",
      database : "Datenbank"
    },
    errors: {
      'no.query': "Keine Abfrage zum Verarbeiten",
      'emptyDatabase': "Bitte wählen Sie {{Datenbank}}.",
      'emptyTableName': "Bitte geben Sie {{tableNameField}} ein.",
      'illegalTableName': "Unzulässiges {{tableNameField}}: '{{tableName}}'",
      'emptyIsFirstRow': "{{isFirstRowHeaderField}} darf nicht null sein.",
      'emptyHeaders': "Header (die Spaltennamen enthalten) dürfen nicht NULL sein.",
      'emptyColumnName': "Der Spaltenname darf nicht null sein.",
      'illegalColumnName': "Ungültiger Spaltenname: '{{columnName}}' in der Spaltennummer {{Index}}",
      'emptyHdfsPath': "HdfsPath-Name darf nicht null oder leer sein.",
      'illegalHdfPath': "Ungültiger HDFS-Pfad: {{hdfsPath}}"
    },
    messages: {
      'generatingPreview': "Vorschau erstellen.",
      'startingToCreateActualTable': "Aktuelle Tabelle erstellen",
      'waitingToCreateActualTable': "Warten auf die Erstellung der Ist-Tabelle",
      'successfullyCreatedActualTable': "Erfolgreich erstellte Ist-Tabelle.",
      'failedToCreateActualTable': "Fehler beim Erstellen der tatsächlichen Tabelle.",
      'startingToCreateTemporaryTable': "Temporäre Tabelle erstellen.",
      'waitingToCreateTemporaryTable': "Warten auf die Erstellung einer temporären Tabelle.",
      'successfullyCreatedTemporaryTable': "Temporäre Tabelle erfolgreich erstellt.",
      'failedToCreateTemporaryTable': "Temporäre Tabelle konnte nicht erstellt werden.",
      'deletingTable': "Tabelle {{table}} löschen.",
      'succesfullyDeletedTable': "{{Table}} -Tabelle wurde erfolgreich gelöscht.",
      'failedToDeleteTable': "Löschen der Tabelle {{table}} fehlgeschlagen.",
      'startingToUploadFile': "Datei hochladen",
      'waitingToUploadFile': "Warten auf das Hochladen der Datei.",
      'successfullyUploadedFile': "Datei wurde erfolgreich hochgeladen.",
      'failedToUploadFile': "Datei konnte nicht hochgeladen werden",
      'startingToInsertRows': "Zeilen aus temporärer Tabelle in tatsächliche Tabelle einfügen",
      'waitingToInsertRows': "Warten auf das Einfügen von Zeilen aus der temporären Tabelle in die aktuelle Tabelle.",
      'successfullyInsertedRows': "Zeilen aus temporärer Tabelle wurden erfolgreich in tatsächliche Tabelle eingefügt.",
      'failedToInsertRows': "Zeilen aus temporärer Tabelle konnten nicht in tatsächliche Tabelle eingefügt werden.",
      'startingToDeleteTemporaryTable': "Temporäre Tabelle löschen",
      'waitingToDeleteTemporaryTable': "Warten auf das Löschen der temporären Tabelle.",
      'successfullyDeletedTemporaryTable': "Temporäre Tabelle wurde erfolgreich gelöscht",
      'manuallyDeleteTable': "Sie müssen die Tabelle {{databaseName}}. {{TableName}} manuell löschen.",
      'uploadingFromHdfs': "Datei von HDFS hochladen ",
      'successfullyUploadedTableMessage': "Tabelle {{tableName}} in Datenbank {{DatenbankName}} erstellt",
      'successfullyUploadedTableHeader': "Erfolgreich hochgeladen"
    },
  }
};
