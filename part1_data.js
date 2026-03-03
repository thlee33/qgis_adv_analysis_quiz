const QUIZ_CH1_5 = [
    {
        chapterId: 1,
        title: "1. 오픈소스 GIS",
        description: "거버넌스, 라이선스 및 QGIS 기초",
        questions: [
            { id: 1, question: "오픈소스 소프트웨어(FOSS)에서 'Free'가 의미하는 핵심적인 개념은 무엇입니까?", options: ["보상 의무", "가격 무료", "상업적 독점", "사용자의 수정 및 재배포 권리"], answer: 3, explanation: "FOSS는 소스코드에 접근하여 수정하고 재배포할 수 있는 '자유'를 핵심 가치로 합니다.", hint: "가격보다는 '권한'에 집중해 보세요." },
            { id: 2, question: "QGIS의 기능적 위치는 어느 단계 사이에 있습니까?", options: ["ArcEditor > QGIS > ArcInfo", "ArcView > QGIS > ArcEditor", "ArcView와 동일", "ArcInfo보다 상위"], answer: 0, explanation: "ArcView < ArcEditor < QGIS < ArcInfo 순으로 기능적 위계가 설명됩니다.", hint: "상용 SW의 중간~상위 단계 수준입니다." },
            { id: 3, question: "OSGeo에 대한 설명으로 올바르지 않은 것은?", options: ["비영리 민간 기구", "로컬 지부 운영", "FOSS4G 주최", "OGC와 동일 조직"], answer: 3, explanation: "OGC는 표준 기구, OSGeo는 재단으로 서로 다른 조직입니다.", hint: "표준과 오픈소스 지원은 다릅니다." },
            { id: 4, question: "QGIS 설치 시 권장되는 LTR 버전의 의미는?", options: ["안정성 장기 지원", "가벼운 버전", "실험적 버전", "유료 버전"], answer: 0, explanation: "LTR(Long Term Release)은 장기적인 유지보수와 안정성을 지원합니다.", hint: "기업이나 기관에서 제1원칙으로 삼는 요소입니다." },
            { id: 5, question: "GDAL과 OGR 라이브러리 설명으로 옳은 것은?", options: ["PostgreSQL 전용", "GDAL은 벡터 담당", "QGIS는 사용 안 함", "2.0부터 통합 제공"], answer: 3, explanation: "GDAL 2.0 이후부터 래스터와 벡터 라이브러리가 통합되었습니다.", hint: "과거엔 분리되었으나 현재는 하나입니다." },
            { id: 6, question: "Zonal Statistics(구역 통계) 분석 결과 생성된 필드가 아닌 것은?", options: ["_sum", "_mean", "_count", "_buffer"], answer: 3, explanation: "구역 통계는 래스터의 통계값(합계, 평균 등)을 내며 버퍼는 공간 연산 기능입니다.", hint: "통계값 계산 결과를 생각하세요." },
            { id: 7, question: "QGIS 분석 실습 중 '문제가 있는 객체를 만날 경우 무시하고 넘어가기' 설정 이유는?", options: ["속도 향상", "프로세스 중단 방지", "위상 오류 수정", "기하학 유효화"], answer: 1, explanation: "결함이 있는 소수 객체 때문에 전체 분석이 멈추는 것을 방지합니다.", hint: "끊김 없는 진행을 위한 필수 설정입니다." },
            { id: 8, question: "QGIS 표현식에서 '도'로 끝나는 명칭 선택 구문은?", options: ["SIDO_NM = 도$", "'SIDO_NM' == '*도'", "\"SIDO_NM\" like '%도'", "\"SIDO_NM\" contains '도'"], answer: 2, explanation: "필드명은 쌍따옴표, 값은 홑따옴표와 % 와일드카드를 씁니다.", hint: "SQL 구문과 유사합니다." },
            { id: 9, question: "오픈소스 GIS의 소프트웨어적 자유에 포함되지 않는 것은?", options: ["Modified", "Redistribute", "Responsibility", "Use"], answer: 2, explanation: "사용 결과에 대한 책임은 사용자에게 있으며 제작자에게 '책임에서의 자유'가 있는 것은 아닙니다.", hint: "자유에는 책임도 따릅니다." }
        ]
    },
    {
        chapterId: 2,
        title: "2. 공간분석 개요",
        description: "공간 데이터 처리 원리와 라이브러리",
        questions: [
            { id: 1, question: "공간분석의 정의로 가장 적절한 것은?", options: ["오타 수정", "심볼 변경", "위치 분포 현상 분석", "지도 스캔"], answer: 2, explanation: "객체들의 위치, 형태, 분포 등을 통해 의미 있는 정보를 도출하는 기법입니다.", hint: "지형지물의 배치 특징 파악 활동입니다." },
            { id: 2, question: "벡터 공간 분석 중 '근접성' 분석에 해당하지 않는 것은?", options: ["Buffering", "Union", "Thiessen Polygon", "Distance Matrix"], answer: 1, explanation: "Union은 중첩 분석에 해당합니다.", hint: "레이어를 서로 겹쳐 새로운 정보를 만드는 기능입니다." },
            { id: 3, question: "최단 경로 분석을 위해 사용되는 QGIS 플러그인은?", options: ["Semi-Auto", "LecoS", "QNEAT3", "Visibility"], answer: 2, explanation: "QNEAT3는 고급 네트워크 도달 범위 분석을 제공합니다.", hint: "Network Analysis 관련 이름을 찾아보세요." },
            { id: 4, question: "래스터 분석에서 여러 레이어를 수식으로 계산하는 도구는?", options: ["Terrain", "Field Calc", "Vector", "Raster Calculator"], answer: 3, explanation: "래스터 계산기를 통해 픽셀 단위 연산을 수행합니다.", hint: "셀 값들을 수식으로 처리합니다." },
            { id: 5, question: "공간 분석 시 CRS 관련 반드시 주의해야 할 사항은?", options: ["색상 설정", "로드 불가", "자동 투영", "거리 계산 시 경위도 지양"], answer: 3, explanation: "영향 실무에서는 미터 단위의 투영좌표계를 써야 정확한 분석이 됩니다.", hint: "각도 단위와 미터 단위의 차이를 생각하세요." },
            { id: 6, question: "래스터 분석 결과 오류를 줄이기 위해 틀린 것은?", options: ["해상도 정의", "셀 크기 가변 설정", "동일 분석 영역", "사전 영역 명확화"], answer: 1, explanation: "분석 시 레이어 간 셀 크기가 일치해야 오차가 줄어듭니다.", hint: "격자 크기가 다를 때의 문제를 생각하세요." },
            { id: 7, question: "거리 측정 시 래스터 분석을 선택하는 것이 유리한 경우는?", options: ["모든 셀 대상 거리 분포 파악", "두 지점 정밀 수치", "주소 기반 최단 경로", "회전 제약 고려"], answer: 0, explanation: "래스터는 공간 전체에 대한 분석(Cost Distance 등)에 유리합니다.", hint: "공간 전체에 퍼진 '분포'에 주목하세요." },
            { id: 8, question: "래스터 분석 중 ProcessingToolbox > Interpolation > Heatmap 경로는?", options: ["커널 밀도", "티센 폴리곤", "구역 통계", "경사도 추출"], answer: 0, explanation: "보간법 중 하나로 밀도를 추정하는 커널 밀도(KDE) 분석 기능입니다.", hint: "포인트 가중치를 부드러운 표면으로 보여주는 기능입니다." },
            { id: 9, question: "DBSCAN, K-means 등의 알고리즘이 포함된 분류는?", options: ["중첩", "군집", "네트워크", "일반화"], answer: 1, explanation: "공간적인 패턴과 무리(Cluster)를 찾는 군집 분석입니다.", hint: "비슷한 것끼리 묶어 그룹화하는 작업입니다." }
        ]
    },
    {
        chapterId: 3,
        title: "3. 공간 통계",
        description: "생활인구 및 속성 데이터 처리",
        questions: [
            { id: 1, question: "서울 '생활인구' 데이터의 정의는?", options: ["상주 인구", "공공 및 통신 기반 추계", "센서스 인구", "주민등록 인구"], answer: 1, explanation: "특정 시점에 서울에 존재하는 모든 인구를 과학적으로 추계한 데이터입니다.", hint: "산출 주체와 '추계' 성격을 생각하세요." },
            { id: 2, question: "벡터 레이어 속성의 개수, 최소/최대, 평균 등을 확인하는 경로는?", options: ["지리 정보 처리", "필드에 대한 기본 통계", "속성 테이블", "보고서 작성"], answer: 1, explanation: "모든 수치 데이터를 한 눈에 요약해서 보여주는 기본 도구입니다.", hint: "수치 속성을 분석하는 도구군을 찾으세요." },
            { id: 3, question: "생활인구 데이터에서 '*' 기호를 0으로 바꾸는 적절한 함수는?", options: ["sum", "replace", "if", "convert"], answer: 1, explanation: "replace(\"필드명\", '*', '0') 형태로 사용합니다.", hint: "특정 문자를 '교체'합니다." },
            { id: 4, question: "필드 타입을 String에서 Double로 영구 변경하는 도구는?", options: ["객체 병합", "속성 조인", "필드 재작성 (Refactor)", "공간 처리"], answer: 2, explanation: "레이어를 새로 구성하며 구조를 바꾸는 강력한 도구입니다.", hint: "구조를 '다시 구성'한다는 뜻입니다." },
            { id: 5, question: "집계구 데이터를 행정동 단위로 합산하는 플러그인은?", options: ["Group Stats", "MMQGIS", "QuickOSM", "TMS"], answer: 0, explanation: "특정 필드 기준으로 그룹화하여 기술 통계량을 산출합니다.", hint: "데이터를 묶어서 통계를 낸다는 이름입니다." },
            { id: 6, question: "CSV 통계 데이터와 행정동 shp를 연결하는 기준(Key)은?", options: ["ADM_CD", "POP", "ID", "AREA"], answer: 0, explanation: "행정동 코드가 두 데이터 간의 연결 고리가 됩니다.", hint: "고유하게 식별할 수 있는 코드 항목입니다." },
            { id: 7, question: "지리적 버블맵을 그리기 위해 폴리곤을 변환해야 하는 형태는?", options: ["그리드", "멀티폴리곤", "라인", "중심점 (Centroid)"], answer: 3, explanation: "폴리곤 면적 위에 원을 올리기 위해서는 기준점이 되는 포인트가 필요합니다.", hint: "면적의 한가운데를 대표하는 '점'을 먼저 만들어야 합니다." },
            { id: 8, question: "인구 수치에 따라 점의 크기를 자동 조절하는 메뉴는?", options: ["분류", "라벨", "도우미 (Assistant)", "투명도"], answer: 2, explanation: "데이터 수치와 심볼 크기를 매핑시켜주는 지능형 기능입니다.", hint: "수치 정보를 심볼에 연동하는 '아이콘' 모양 메뉴입니다." },
            { id: 9, question: "서울 생활인구 공간 범위 중 가장 세밀한 단위는?", options: ["집계구", "행정동", "지적도 필지", "자치구"], answer: 0, explanation: "통계청 최소 공개 단위인 집계구가 가장 미세합니다.", hint: "통계청의 지리 단위를 생각하세요." },
            { id: 10, question: "Graduated와 Proportional 심볼 지도의 주요 차이점은?", options: ["배경지도 유무", "등급 분류 vs 수치 비례", "좌표계 차이", "색상 차이"], answer: 1, explanation: "단계 구분도는 범위를 나누는 것이고, 비례 지도는 수치 그대로 크기를 정합니다.", hint: "범주로 묶는지, 값 그대로 비례시키는지의 차이입니다." }
        ]
    },
    {
        chapterId: 4,
        title: "4. 공간 단위",
        description: "행정구역, 격차 통계 및 국가지점번호",
        questions: [
            { id: 1, question: "법률 행위나 공식 문서에 주로 사용되며 변화가 없는 공간 단위는?", options: ["행정동", "국가기초구역", "법정동", "집계구"], answer: 2, explanation: "법정동은 명칭과 구역이 법적으로 고정되어 실무의 기준이 됩니다.", hint: "부동산 등기부 등본의 주소를 생각하세요." },
            { id: 2, question: "통계청 '집계구'에 대한 설명으로 옳은 것은?", options: ["일반인 다운로드 불가", "법정동과 일치", "행정동의 하위 구역 단위", "최소 1,000명 이상 필수"], answer: 2, explanation: "행정동의 통계를 더 세부적으로 보기 위해 나눈 하위 단위입니다.", hint: "행정읍면동과의 계층적 관계를 생각하세요." },
            { id: 3, question: "공공 서비스 기본 단위이며 집계구보다 약 3배 큰 단위는?", options: ["기초단위구", "블록", "국가기초구역", "법정리"], answer: 2, explanation: "국가기초구역은 우편번호 시스템의 근간입니다.", hint: "여러 기관이 공유하는 표준 구역입니다." },
            { id: 4, question: "육각형 형태 그리드 시스템으로 다양한 API를 제공하는 것은?", options: ["MGRS", "GeoHash", "Google S2", "Uber H3"], answer: 3, explanation: "Uber H3는 공간 인덱싱에 최적화된 육각형 격자 라이브러리입니다.", hint: "개발자 친화적인 육각형 그리드 시스템입니다." },
            { id: 5, question: "격자(Grid) 단위 통계가 행정경계보다 유리한 점은?", options: ["시계열 분석 용이", "거시적 특성", "지명 포함 명확함", "무인 공간 배제"], answer: 0, explanation: "고정된 모양의 격자는 시간적 변화를 추적하기에 최적입니다.", hint: "경계가 변하지 않는다는 점의 효과를 보세요." },
            { id: 6, question: "국가지점번호에 대한 설명으로 가장 적절하지 않은 것은?", options: ["아파트 상세 주소용", "라마 2120 0425 형태", "산악 지역 조난 대처용", "재난 안전 대응용"], answer: 0, explanation: "국가지점번호는 산악, 해안 등 도로명 주소가 없는 곳을 위해 설계되었습니다.", hint: "설치되는 주요 장소가 어디인지 생각하세요." },
            { id: 7, question: "국토통계지도에서 격자 데이터를 받을 때 선택 항목이 아닌 것은?", options: ["시점", "주민센터 명칭", "지표 분류", "격자 크기"], answer: 1, explanation: "격자는 좌표 기준이므로 특정 주민센터 명칭은 선택지가 아닙니다.", hint: "공간적/시간적 데이터 구성 과정을 보세요." },
            { id: 8, question: "집계구와 국토통계지도의 단계구분도 비교 중 틀린 것은?", options: ["국토통계지도는 주거인구 기준", "집계구는 총생활인구 시각화 가능", "국토통계 격자는 행정동과 항상 일치", "인구 정의가 다르므로 공간 크기 비교가 적절함"], answer: 2, explanation: "격자(Grid) 시스템은 행정경계와는 독립적으로 구성됩니다.", hint: "격자가 행정경계에 종속적인지 독립적인지 생각하세요." },
            { id: 9, question: "공간 단위 포함 관계를 설명한 것 중 적절한 것은?", options: ["기초구역은 격자의 1/3 고정", "기초구역은 법정동 하위에 포함", "집계구는 행정읍면동 하위 포함", "기초단위구는 여러 집계구 포함"], answer: 2, explanation: "집계구는 행정동 체계를 기본으로 설계된 통계 단위입니다.", hint: "행정동 내부를 나누어 만든 단위가 무엇인지 생각하세요." },
            { id: 10, question: "행정경계 기반 분석의 한계점으로 지적된 내용이 아닌 것은?", options: ["기관별 경계 상충", "격자보다 세밀한 특성 반영 유리", "수시 변화로 시계열 분석 어려움", "실생활 패턴 반영의 제약"], answer: 1, explanation: "오히려 행정경계는 격자에 비해 소지역의 세밀한 기하학적 특성을 반영하기 어렵습니다.", hint: "행정 구역이 거시적인지 미시적인지 고민하세요." }
        ]
    },
    {
        chapterId: 5,
        title: "5. 공간 밀도",
        description: "열지도, 가중 분석 및 지오코딩 검증",
        questions: [
            { id: 1, question: "현재 영업 중인 커피숍만 추출하기 위한 논리 연산자는?", options: ["OR", "AND", "NOT", "XOR"], answer: 1, explanation: "두 조건이 모두 진실이어야 하므로 AND를 씁니다.", hint: "동시 충족을 의미하는 연산자입니다." },
            { id: 2, question: "필드 재작성(Refactor Fields) 기능을 사용하는 주요 목적은?", options: ["래스터 변환", "좌표계 변환", "배경지도 추가", "데이터 호환성을 위한 영문 필드명 변경"], answer: 3, explanation: "shp 파일의 한글 필드 깨짐 등을 방지하기 위해 영문으로 정규화할 때 유용합니다.", hint: "파일 저장이나 공유 시 필드명이 미치는 영향을 생각하세요." },
            { id: 3, question: "열지도 심볼과 커널 밀도 추정(KDE) 기능의 결정적 차이는?", options: ["물리적 래스터 파일 생성 여부", "가중치 부여 여부", "색상표 적용 여부", "좌표계 설정 여부"], answer: 0, explanation: "심볼은 보여주기만 하고, KDE 도구는 실제 결과 파일을 만듭니다.", hint: "눈에 보이는 것과 물리적 저장의 차이입니다." },
            { id: 4, question: "열지도 분석 시 '반경(Radius)'이 결과에 미치는 영향은?", options: ["작을수록 픽셀 증가", "클수록 개별 위치 정밀", "클수록 밀도 분포가 부드럽게 표현", "최대값 수치에 영향 없음"], answer: 2, explanation: "반경이 클수록 주변 데이터를 더 넓게 통합하여 시각적으로 매끄러워집니다.", hint: "영향력을 미치는 범위가 넓어질 때를 생각하세요." },
            { id: 5, question: "단순 개수가 아닌 커피숍 면적을 고려한 공간 밀도 분석 옵션은?", options: ["렌더링 최상", "가중치 부여 (Weight from field)", "반경 단위 변경", "픽셀 크기 조절"], answer: 1, explanation: "가중치 필드에 면적 속성을 지정하면 큰 점포의 비중이 높아집니다.", hint: "특정 수치 데이터가 연산에 더 큰 비중을 갖게 하는 옵션입니다." },
            { id: 6, question: "상대적 비율 계산식 round((\"VALUE\" / 64.1) * 100)에서 64.1의 의미는?", options: ["전체 면적", "설정 반경", "분석 영역 내 측정된 최대 밀도값", "전체 개수"], answer: 2, explanation: "측정된 값 중 가장 높은 것을 100으로 두기 위한 기준 수치입니다.", hint: "어떤 값을 100%로 가정한 수식인지 보세요." },
            { id: 7, question: "상위 25% 이내(밀도 하위 75% 이상) 지역을 선택하는 표현식은?", options: ["<= 25", "== 75", ">= 75", "> 0"], answer: 2, explanation: "수치가 높을수록 상위권에 속하도록 계산된 필드이므로 >= 수식을 씁니다.", hint: "밀도 값이 높을수록 백분위 필드값이 커짐을 상기하세요." },
            { id: 8, question: "지오코딩 포인트의 위치 정확도를 확인하는 가장 간편한 도구는?", options: ["속성 테이블 검사", "XYZ Tiles 배경지도 추가", "색상표 변경", "필드 재작성"], answer: 1, explanation: "실제 지도 건물 위나 도로 위에 점이 있는지 육안 검증이 가장 확실합니다.", hint: "실제 지형이나 도로 정보가 필요한 작업입니다." }
        ]
    }
];
