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
      "customizeText":{
        'selectFileFormat':"파일 형식 선택",
        'selectFileSource': "파일 선택",
        'uploadFile':"업로드할 파일을 끌어오거나 이곳을 클릭하세요",
        'preview':"미리보기",
        'create':"생성",
        'edit':"수정",
        'cancel':"닫기",
        'rename':"이름 변경",
        'tablePreview':"테이블 미리보기",
        'tableName':'테이블명',
        'nameEmpty':'테이블명은 비어있을 수 없습니다',
        'saveUDF':"UDF 저장",
        'columnName':"열 이름",
        'dataType':"자료형",
        'size':"크기",
        'advanced':"향상된 기능",
        'action':"액션",
        'addNewCol':"새로운 열 추가하기",
        'settings':"설정",
        'transactional':"Transactional",
        'numOfBuckets':"Number of buckets",
        'addLocation':"지역 추가",
        'addFileFormat':"파일 형식 추가",
        'inputFormat':"형식 입력",
        'outputFormat':"형식 출력",
        'addRowFormat':"행 형식 추가",
        'fieldTerminate':"필드 종료 조건",
        'lineTerminate':"라인 종료 조건",
        'nullDefine':"Null 정의 조건",
        'escapeDefine':"Escape 정의 조건",
        'key':"키",
        'value':"값",
        'addProperties':"새로운 속성 추가",
        'newJob':"새 작업",
        'newTable':"새 테이블",
        'tableLoading':"테이블을 로드 중입니다. 잠시만 기다려 주세요",
        'tableInfoLoading':"테이블 정보를 로드 중입니다. 잠시만 기다려 주세요",
        'dbLoading':"데이터 베이스를 로드 중입니다. 잠시만 기다려 주세요",
        'jobLoading':"작업을 로드 중입니다. 잠시만 기다려 주세요",
        'dataLoading':"데이터를 로드 중입니다. 잠시만 기다려 주세요",
        'savedQueryLoading':"저장된 쿼리들을 로드 중입니다. 잠시만 기다려 주세요",
        'settingLoading':"설정을 로드 중입니다. 잠시만 기다려 주세요",
        'udfLoading':"UDF를 로드 중입니다. 잠시만 기다려 주세요",
        'loadAuthInfoRanger':"Ranger에서 권한 정보 불러오는 중",
        'columnType':"자료형",
        'comment':"메모",
        'clustered':"클러스터ed",
        'tableStatistics':"테이블 통계",
        'information':"정보",
        'statsName':"통계명",
        'includeCol':"열 포함",
        'tableStatStale':"테이블 통계가 오래되었을 수 있습니다. 통계를 다시 계산하는 것을 고려하십시오.",
        'numOfFiles':"파일 개수",
        'numOfRows':"행 개수",
        'rawDataSize':"행 데이터 크기",
        'totalSize':"전체 크기",
        'tableNotComputed':"테이블 통계가 계산되지 않습니다",
        'colStat':"열 통계",
        'statistics':"통계",
        'analyseLongTime':"테이블 통계 작업 분석에는 시간이 오래 걸릴 수 있습니다."
        'execute':"실행",
        'stopping':"중지 중",
        'stop':"멈춤",
        'saveAs':"저장",
        'insertUDF':"UDF 삽입",
        'visualExplain':"Visual Explain",
        'searchTables':"테이블 검색",
        'noTableFound':"테이블이 발견되지 않습니다",
        'confirm':"확인",
        'saveWorkSheet':"워크시트를 저장하시겠습니까?",
        'title':"제목",
        'saveSuccess':"성공적으로 저장되었습니다",
        'error':"오류 발생",
        'reject':"거부",
        'save':"저장",
        'renameWorkSheet':"워크시트 이름 변경",
        'renameSuccess':"성공적으로 이름을 변경하였습니다",
        'renameError':"이름 변경 중 오류가 발생하였습니다",
      },
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
        'columnDelimiterTooltip': "열 값의 구분 기호로 기본값은 컴마 (,)입니다",
        'escapeCharacterField': "이스케이프 문자",
        'escapeCharacterTooltip': "이스케이프 문자의 기본값은 백 슬래시 (\)입니다",
        'quoteCharacterTooltip': '인용 문자의 기본값은 큰 따옴표 (")입니다',
        'quoteCharacterField': "인용 문자",
        'isFirstRowHeader': "1행이 헤더입니까?",
        'fieldsTerminatedByTooltip': "HIVE 테이블의 문자로 종료된 필드",
        'isFirstRowHeaderTooltip': "CSV 파일의 첫 번째 행이 헤더인지 확인해주세요",
        'containsEndlines': "마지막 라인을 포함하시겠습니까?",
      },
      "uploadTable": {
        'uploadProgress': "업로드 진행률",
        'uploading': "Uploading..",
        'selectFromLocal': "로컬에서 선택",
        'hdfsPath': "HDFS 경로",
        'tableName': "테이블 이름",
        'tableNameErrorMessage': "테이블의 이름에는 영문, 숫자 그리고 밑줄 문자만 허용됩니다.",
        'tableNameTooltip': "유효한 (영문, 숫자 + 밑줄 문자) 테이블 이름을 입력하십시오.",
        'columnNameErrorMessage': "열 이름에는 영문, 숫자 그리고 밑줄 문자만 허용됩니다.",
        'hdfsFieldTooltip': "전체 HDFS 경로 입력",
        'hdfsFieldPlaceholder': "전체 HDFS 경로 입력",
        'hdfsFieldErrorMessage': "업로드 할 HDFS 파일의 전체 경로를 입력하십시오.",
        'showPreview': "미리보기"
      }
    },
    words :{
      temporary : "임시",
      actual :    "실제",
      database :  "데이터 베이스"
    },
    errors: {
      'no.query':         "프로세스에 쿼리가 없습니다.",
      'emptyDatabase':    "{{ database }}를 선택하세요.",
      'emptyTableName':   "{{ tableNameField }}를 입력하세요.",
      'illegalTableName': "잘못된 {{ tableNameField }} : '{{ tableName }}'",
      'emptyIsFirstRow':  "{{isFirstRowHeaderField}}은 Null이 될 수 없습니다.",
      'emptyHeaders':     "헤더 (열 이름 포함)은 Null일 수 없습니다.",
      'emptyColumnName':  "열 이름은 Null이 될 수 없습니다.",
      'illegalColumnName':"잘못된 열 이름 : '{{columnName}}' 열 번호 {{index}}에 있습니다",
      'emptyHdfsPath':    "HDFS 경로 이름은 Null이거나 비어있을 수 없습니다.",
      'illegalHdfPath':   "잘못된 HDFS 경로 : {{hdfsPath}}"
    },
    messages: {
      'generatingPreview':                  "미리보기 생성 중.",
      'startingToCreateActualTable':        "테이블 생성",
      'waitingToCreateActualTable':         "테이블 생성을 대기 중",
      'successfullyCreatedActualTable':     "테이블 생성을 완료하였습니다.",
      'failedToCreateActualTable':          "테이블 생성에 실패했습니다.",
      'startingToCreateTemporaryTable':     "임시 테이블 생성",
      'waitingToCreateTemporaryTable':      "임시 테이블 생성 대기 중.",
      'successfullyCreatedTemporaryTable':  "임시 테이블 생성을 완료하였습니다.",
      'failedToCreateTemporaryTable':       "임시 테이블 생성에 실패했습니다.",
      'deletingTable':                      "{{table}} 테이블 삭제 중.",
      'succesfullyDeletedTable':            "{{table}} 테이블을 삭제했습니다.",
      'failedToDeleteTable':                "{{table}} 테이블 삭제에 실패했습니다.",
      'startingToUploadFile':               "파일 업로드 중.",
      'waitingToUploadFile':                "파일 업로드 대기 중.",
      'successfullyUploadedFile':           "파일을 업로드 했습니다.",
      'failedToUploadFile':                 "파일을 업로드하지 못했습니다.",
      'startingToInsertRows':               "임시 테이블에서 실제 테이블로 행 이동",
      'waitingToInsertRows':                "임시 테이블에서 실제 테이블로 행 이동을 기다리고 있습니다.",
      'successfullyInsertedRows':           "임시 테이블에서 실제 테이블로 행 이동을 완료하였습니다.",
      'failedToInsertRows':                 "임시 테이블에서 실제 테이블로 행 이동을 실패했습니다.",
      'startingToDeleteTemporaryTable':     "임시 테이블 삭제",
      'waitingToDeleteTemporaryTable':      "임시 테이블 삭제를 대기 중",
      'successfullyDeletedTemporaryTable':  "임시 테이블 삭제를 완료하였습니다.",
      'manuallyDeleteTable':                "{{databaseName}}의 {{tableName}} 테이블을 수동으로 삭제해야합니다.",
      'uploadingFromHdfs':                  "HDFS 파일 업로드",
      'successfullyUploadedTableMessage':   "{{databaseName}} 데이터 베이스에 {{tableName}} 테이블이 생성되었습니다.",
      'successfullyUploadedTableHeader':    "업로드 완료"
    },
  }
};