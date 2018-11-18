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
        'uploadFromLocal': "로컬에서 업로드",
        'uploadFromHdfs': "HDFS에서 업로드",
        'selectFileType': "파일 유형 선택",
        'fileType': "파일 형식",
        "selectHdfsLocation": "HDFS 디렉터 선택",
        "enterHdfsPathLabel": "HDFS 경로 입력",
        "selectLocalFileLabel": "로컬 파일 선택",
      },
      "csvFormatParams": {
        'columnDelimterField': "필드 구분 기호",
        'columnDelimiterTooltip': "열 값의 구분 기호로 기본값은 컴마 (,)입니다.",
        'escapeCharacterField':   "이스케이프 문자",
        'escapeCharacterTooltip': "이스케이프 문자의 기본값은 백 슬래시 (\)입니다.",
        'quoteCharacterTooltip':  "인용 문자의 기본값은 큰 따옴표 (")입니다.",
        'quoteCharacterField':    "인용 문자",
        'isFirstRowHeader':       "1행이 헤더입니까?",
        'fieldsTerminatedByTooltip': "HIVE 테이블의 문자로 종료된 필드",
        'isFirstRowHeaderTooltip':   "CSV 파일의 첫 번째 행이 헤더인지 확인해주세요.",
        'containsEndlines':          "마지막 라인을 포함하시겠습니까?",
      },
      "uploadTable": {
        'uploadProgress':  "업로드 진행률",
        'uploading':       "Uploading..",
        'selectFromLocal': "로컬에서 선택",
        'hdfsPath':        "HDFS 경로",
        'tableName':       "테이블 이름",
        'tableNameErrorMessage': "테이블의 이름에는 영문, 숫자 그리고 밑줄 문자만 허용됩니다.",
        'tableNameTooltip':      "유효한 (영문, 숫자 + 밑줄 문자) 테이블 이름을 입력하십시오.",
        'columnNameErrorMessage':"열 이름에는 영문, 숫자 그리고 밑줄 문자만 허용됩니다.",
        'hdfsFieldTooltip':      "전체 HDFS 경로 입력",
        'hdfsFieldPlaceholder':  "전체 HDFS 경로 입력",
        'hdfsFieldErrorMessage': "업로드 할 HDFS 파일의 전체 경로를 입력하십시오.",
        'showPreview':           "Preview"
      }
    },
    words :{
      temporary : "Temporary",
      actual : "Actual",
      database : "Database"
    },
    errors: {
      'no.query': "프로세스에 쿼리가 없습니다.",
      'emptyDatabase': "Please select {{ database }}.",
      'emptyTableName': "Please enter {{ tableNameField }}.",
      'illegalTableName': "Illegal {{ tableNameField }} : '{{ tableName }}'",
      'emptyIsFirstRow': "{{isFirstRowHeaderField}} cannot be null.",
      'emptyHeaders': "Headers (containing column names) cannot be null.",
      'emptyColumnName': "Column name cannot be null.",
      'illegalColumnName': "Illegal column name : '{{columnName}}' in column number {{index}}",
      'emptyHdfsPath': "HdfsPath Name cannot be null or empty.",
      'illegalHdfPath': "Illegal hdfs path : {{hdfsPath}}"
    },
    messages: {
      'generatingPreview': "Generating Preview.",
      'startingToCreateActualTable': "Creating Actual table",
      'waitingToCreateActualTable': "Waiting for creation of Actual table",
      'successfullyCreatedActualTable': "Successfully created Actual table.",
      'failedToCreateActualTable': "Failed to create Actual table.",
      'startingToCreateTemporaryTable': "Creating Temporary table.",
      'waitingToCreateTemporaryTable': "Waiting for creation of Temporary table.",
      'successfullyCreatedTemporaryTable': "Successfully created Temporary table.",
      'failedToCreateTemporaryTable': " Failed to create temporary table.",
      'deletingTable': "Deleting {{table}} table.",
      'succesfullyDeletedTable': "Successfully deleted {{ table}} table.",
      'failedToDeleteTable': "Failed to delete {{table}} table.",
      'startingToUploadFile': "Uploading file.",
      'waitingToUploadFile': "Waiting for uploading file.",
      'successfullyUploadedFile': "Successfully uploaded file.",
      'failedToUploadFile': "Failed to upload file.",
      'startingToInsertRows': "Inserting rows from temporary table to actual table.",
      'waitingToInsertRows': "Waiting for insertion of rows from temporary table to actual table.",
      'successfullyInsertedRows': "Successfully inserted rows from temporary table to actual table.",
      'failedToInsertRows': "Failed to insert rows from temporary table to actual table.",
      'startingToDeleteTemporaryTable': "Deleting temporary table.",
      'waitingToDeleteTemporaryTable': "Waiting for deletion of temporary table.",
      'successfullyDeletedTemporaryTable': "Successfully deleted temporary table",
      'manuallyDeleteTable': "You will have to manually delete the table {{databaseName}}.{{tableName}}",
      'uploadingFromHdfs': "Uploading file from HDFS ",
      'successfullyUploadedTableMessage': "Table {{tableName}} created in database {{databaseName}}",
      'successfullyUploadedTableHeader': "Uploaded Successfully"
    },
  }
};
