const QUIZ_CH11_15 = [
    {
        chapterId: 11,
        title: "11. 공간 패턴",
        description: "Centroid, 평균 좌표 및 가중 분석",
        questions: [
            { id: 1, question: "기하학적 중심(Centroid)이 반드시 폴리곤 내부에 있지 않을 수 있는 이유는?", options: ["좌표계 오차", "도형의 '질량 중심' 위치 특성상", "버퍼 설정 오류", "좌표 누락"], answer: 1, explanation: "도형의 중심점은 기하학적 평균 위치이므로 오목한 도형 등에서는 밖으로 나갈 수 있습니다.", hint: "도형의 '질량 중심'을 찾는 수학적 방식임을 떠올리세요." },
            { id: 2, question: "주거인구 분포 가중치를 반영한 최적의 중심 위치를 찾는 도구는?", options: ["디졸브", "평균 좌표(들) (Mean Coordinates)", "도달불능극", "Centroid"], answer: 1, explanation: "Mean Coordinates는 인구수 등의 가중치 필드를 사용하여 평균 위치를 계산합니다.", hint: "속성 데이터 값을 가중치로 사용하는 도구입니다." },
            { id: 3, question: "폴리곤 내부에서 경계로부터 가장 멀리 떨어진 지점을 찾는 알고리즘은?", options: ["최단 경로", "도달불능극 (Pole of Inaccessibility)", "중심선 추출", "기하 속성 추가"], answer: 1, explanation: "경계선으로부터의 거리를 최대화하는 지점을 찾습니다.", hint: "육지에서 바다와 가장 먼 곳을 뜻하는 말입니다." },
            { id: 4, question: "중심점 생성 전 여러 격자 객체를 하나로 합치기 위해 써야 하는 기능은?", options: ["교차 영역", "디졸브 (Dissolve)", "필드 계산기", "대칭 차이"], answer: 1, explanation: "격자 하나하나의 중심이 아닌 전체 영역의 중심을 얻기 위해 경계를 허물어야 합니다.", hint: "여러 조각을 하나로 뭉쳐 경계를 없애는 기능입니다." },
            { id: 5, question: "단순 중심점보다 주거인구 기반 중심점이 의미 있는 이유는?", options: ["면적 넓게 활용", "도시철도역 일치", "산지에 생성 방지", "주민들의 접근성 극대화 가능"], answer: 3, explanation: "인구 비중이 높은 곳에 시설을 배치해야 다수가 혜택을 봅니다.", hint: "공공 서비스가 누구를 위해 존재하는지 생각하세요." },
            { id: 6, question: "'표면 상에 있는 포인트' 기능이 Centroid보다 유리한 점은?", options: ["인구 가중치 포함", "중심점이 무인 공간이나 밖으로 나가는 것을 방지", "선형 변환 유리", "데이터 속도"], answer: 1, explanation: "주요 위치가 물 위나 산 밖으로 나가는 것을 막고 실제 폴리곤 영역 내에 강제 위치시킵니다.", hint: "도형이 특이하게 생겨서 밖으로 튀어나가는 상황을 생각하세요." },
            { id: 7, question: "가중치 분석을 위해 필드 계산기로 생성한 가중치 컬럼의 특징은?", options: ["String '강남' 입력", "Real 좌표값 입력", "정수(Integer) '1' 입력", "날짜형 생성 시점"], answer: 2, explanation: "분산된 데이터를 합쳐서 하나의 평균으로 얻기 위해 기본 값을 1로 두어 처리합니다.", hint: "자료형과 입력 숫자를 교재 이미지에서 확인해 보세요." }
        ]
    },
    {
        chapterId: 12,
        title: "12. 공간 클러스터링",
        description: "DBSCAN 알고리즘 및 군집 시각화",
        questions: [
            { id: 1, question: "공간적으로 군집된 매장을 찾기 위해 실습에서 사용한 알고리즘은?", options: ["DBSCAN", "최근접 이웃", "K-Means", "계층적"], answer: 0, explanation: "밀도 기반 클러스터링을 수행하는 DBSCAN을 통해 상권 밀집지를 찾았습니다.", hint: "밀도를 기반으로 노이즈를 처리하며 군집을 찾는 약자입니다." },
            { id: 2, question: "클러스터링 시각화 시 심볼 스타일링 기준으로 삼은 필드는?", options: ["LATITUDE", "CLUSTER_SIZE", "CLUSTER_ID", "STORE_NAME"], answer: 2, explanation: "알고리즘 수행 결과 자동 생성된 ID 필드를 기준으로 색상을 구분합니다.", hint: "각 그룹을 식별하기 위해 자동 생성된 아이디 필드입니다." },
            { id: 3, question: "클러스터 포인트 영역 생성 시 '최소 경계 도형' 중 쓴 유형은?", options: ["Line", "Convex Hull (볼록 껍질)", "Bounding Box", "Circle"], answer: 1, explanation: "점들을 가장 효율적으로 감싸는 다각형을 만듭니다.", hint: "가장 팽팽한 고무줄 같은 다각형 명칭입니다." },
            { id: 4, question: "확장 실습 단계에서 최소경계도형에 적용한 버퍼(Buffer) 거리는?", options: ["100m", "500m", "300m", "50m"], answer: 1, explanation: "DBSCAN 반경 파라미터와 맞춰서 군집 영역을 완성했습니다.", hint: "DBSCAN 최대 거리 매개변수와 동일한 수치입니다." },
            { id: 5, question: "DBSCAN 결과 스타일링 시 '표시하지 않도록' 권장된 값은?", options: ["null (노이즈)", "1", "MAX_VALUE", "0"], answer: 0, explanation: "군집에 해당하지 않는 노이즈(NULL) 포인트는 시각적으로 숨기는 것이 깔끔합니다.", hint: "어떤 그룹에도 속하지 못한 데이터의 값입니다." },
            { id: 6, question: "본 클러스터링 분석의 활용 용도로 적절하지 않은 것은?", options: ["개별 매장 일 매출 정확히 산정", "밀집 포인트 시각화", "차별화 전략 기초", "핵심 상권 영역 파악"], answer: 0, explanation: "군집은 위치적 집중도는 보여주나 실제 매출 장부를 연동하진 않습니다.", hint: "위치 정보만으로 가능한 분석인지 보세요." },
            { id: 7, question: "DBSCAN과 열지도(KDE)의 결정적 정보 표현 차이는?", options: ["래스터에서만 작동", "열지도는 연속 평면, DBSCAN은 명확한 경계 군집", "수학적 동일함", "자동 노이즈 제거 여부"], answer: 1, explanation: "열지도는 부드럽게 퍼지는 느낌을 주며, DBSCAN은 그룹 경계를 확실히 땁니다.", hint: "색상이 퍼져나가는 지도와 점들이 묶인 그룹의 차이입니다." }
        ]
    },
    {
        chapterId: 13,
        title: "13. 공간밀도(선형)",
        description: "노선 피처 정렬 및 래스터 가독성",
        questions: [
            { id: 1, question: "버스 노선을 이용한 '라인 밀도 분석'의 가장 주된 목적은?", options: ["도로 노선 중복도 시각화", "승차 인원 통계", "실시간 위치 추적", "최단 경로 안내"], answer: 0, explanation: "선들이 얼마나 많이 겹쳐 지나가는지를 측정하여 병목 구간 등을 봅니다.", hint: "선들이 얼마나 빽빽하게 모여 있는지를 측정합니다." },
            { id: 2, question: "엑셀(xlsx) 파일을 QGIS로 직접 가공 없이 로딩하기 위한 플러그인은?", options: ["Spreadsheet Layers", "QuickOSM", "MMQGIS", "DB Manager"], answer: 0, explanation: "스프레드시트 레이어 추가 기능을 통해 엑셀 시트를 바로 불러옵니다.", hint: "데이터를 레이어로 변환해주는 이름의 도구입니다." },
            { id: 3, question: "'포인트를 경로로' 도구 사용 시 노선이 뭉치지 않게 하는 설정은?", options: ["가중치 필드", "경로 그룹 표현식 (Path group expression)", "탐색 반경", "순번 필드"], answer: 1, explanation: "노선 ID 등을 그룹 필드로 지정해야 개별 노선별로 선이 그려집니다.", hint: "같은 속성을 가진 데이터들을 하나의 그룹으로 관리하는 옵션입니다." },
            { id: 4, question: "정류소를 운행 순서에 맞게 선으로 연결하기 위해 필수인 항목은?", options: ["Create closed", "Input layer", "Order expression", "Output directory"], answer: 2, explanation: "시간순이나 번호순 정렬을 필수로 지정해야 합니다.", hint: "'순서'를 정해주는 영어 표현을 찾으세요." },
            { id: 5, question: "라인 밀도 분석의 정확도를 높이기 위해 권장되는 좌표계 형식은?", options: ["무투영", "EPSG:5179 평면직각좌표계", "WGS84 지리좌표계", "임의 로컬"], answer: 1, explanation: "미터 단위 기반의 평면 좌표계를 써야 밀도 값이 정확히 나옵니다.", hint: "실제 거리를 측정하기 유리한 좌표계가 필요합니다." },
            { id: 6, question: "분석 시 각 래스터 셀 주변에서 선형 피처를 검색할 범위 파라미터는?", options: ["탐색 반경 (Search radius)", "노선 유형", "픽셀 크기", "레이어 투명도"], answer: 0, explanation: "Search radius를 통해 어느 정도 거리의 선까지 셀에 영향을 줄지 결정합니다.", hint: "얼마나 넓은 영역을 조사할지 정하는 용어입니다." },
            { id: 7, question: "분석 속도가 너무 느릴 때 파라미터 조정 방법 중 가장 효과적인 것은?", options: ["WGS84 변경", "탐색 반경 0", "문자열 변환", "탐색 반경과 픽셀 크기 값을 더 크게 입력"], answer: 3, explanation: "연산 단위(해상도)를 낮추면(수치를 키우면) 처리 데이터량이 급감하여 빨라집니다.", hint: "해상도를 낮추면 연산 칸 수가 줄어듭니다." },
            { id: 8, question: "라인 밀도 결과 지도를 가독성 있게 만들기 위한 후속 작업은?", options: ["좌표계 4326 고정", "흑백 처리", "포인트 재변환", "투명도 조정 및 배경지도 추가"], answer: 3, explanation: "래스터의 투명도를 낮추고 지도 위에 올려야 정보를 읽기 좋습니다.", hint: "실제 지형의 어느 위치인지 알게 만드는 작업입니다." }
        ]
    },
    {
        chapterId: 14,
        title: "14. 유동인구 분석",
        description: "SKT 데이터 매핑 및 3D 시각화",
        questions: [
            { id: 1, question: "SKT 유동인구 CSV를 로딩할 때 사용하는 좌표계(CRS)는?", options: ["EPSG:5179", "EPSG:5181", "EPSG:3857", "EPSG:4326"], answer: 0, explanation: "한국 보편적 분석 좌표계인 5179(UTM-K) 기반으로 구성되어 있습니다.", hint: "X, Y 좌표 필드와 함께 지정해야 하는 한국 표준입니다." },
            { id: 2, question: "QGIS2threejs에서 기둥의 높이(Height) 기준 필드로 설정한 것은?", options: ["AVG_12TMST", "BLOCK_CD", "X_COORD", "STD_YM"], answer: 0, explanation: "생활인구 평균 수치를 높이로 써서 인구 밀집도를 표현했습니다.", hint: "시각화 목적이 인구 변화를 보여주는 것임을 고려하세요." },
            { id: 3, question: "3D 지도를 서비 없이 로컬에서 바로 확인하기 위해 체크해야 할 옵션은?", options: ["Enable the viewer to run locally", "Start animation", "Export attributes", "Preserve viewpoint"], answer: 0, explanation: "웹 리소스를 로컬 드라이브에서 직접 실행 가능하게 빌드하는 설정입니다.", hint: "'로컬' 환경 실행 활성화 문구를 찾으세요." },
            { id: 4, question: "Kepler.gl용 GeoJSON 저장 시 설정해야 하는 좌표계는?", options: ["EPSG:32652", "EPSG:5186", "EPSG:5179", "EPSG:4326"], answer: 3, explanation: "Kepler 등 대부분의 웹 지도는 WGS84 위경도 좌표를 데이터 표준으로 요구합니다.", hint: "웹 브라우저 기반 지도는 보통 WGS 84를 씁니다." },
            { id: 5, question: "3D 시각화에서 실린더 두께를 결정하는 파라미터는?", options: ["20", "100", "50", "10"], answer: 0, explanation: "튜토리얼에서는 굵기를 조절하기 위해 Radius 값을 20으로 입력했습니다.", hint: "이미지 속 Radius 항목에 입력된 숫자를 보세요." },
            { id: 6, question: "2D 지도 표현 시 수치 크기에 따라 색상을 다르게 하는 방식은?", options: ["열지도", "분류기호", "단일 심볼", "단계구분도 (Graduated)"], answer: 3, explanation: "연속된 수치 데이터를 범위별로 색상을 입히는 Graduated 방식입니다.", hint: "분석 과정 2단계에서 언급된 용어입니다." },
            { id: 7, question: "내보내기 완료 후 결과 웹 페이지 경로 확인 탭은?", options: ["Scene", "Settings", "Animation", "Log"], answer: 3, explanation: "수행 로그가 담긴 Log 탭 하단에서 결과 HTML 생성 경로를 알 수 있습니다.", hint: "작업 수행 결과가 기록되는 창입니다." }
        ]
    },
    {
        chapterId: 15,
        title: "15. 생활SOC 접근성 분석",
        description: "서비스 사각지대 및 국가최저기준",
        questions: [
            { id: 1, question: "생활SOC(Social Overhead Capital)의 가장 적절한 정의는?", options: ["영리 상업 시설", "대규모 경제 기반 시설", "정부 행정 청사", "보육, 의료, 교통 등 일상 편익 증진 시설"], answer: 3, explanation: "시민의 일상과 밀접한 소규모 인프라를 의미합니다.", hint: "개념이 '일상'으로 확장되었다는 점에 주목하세요." },
            { id: 2, question: "시속 3km/h 도보 이동 시, 초등학교 15분 거리 기준은 미터로 얼마?", options: ["750m", "500m", "1,500m", "1,000m"], answer: 0, explanation: "3000m/60m * 15m = 750m입니다.", hint: "속도에 시간을 곱하세요." },
            { id: 3, question: "초등학교 접근성 분석 중 100m 격자 데이터에서 가장 먼저 한 가공은?", options: ["인구(val) 있는 격자만 추출 및 NULL 제외", "중심점 추출", "도로 데이터 삭제", "면적 재계약"], answer: 0, explanation: "의미 없는 비거주 지역을 제외하기 위해 필터링을 우선 수행합니다.", hint: "거주 인구가 포함된 데이터를 어떻게 처리했는지 보세요." },
            { id: 4, question: "분석 결과를 행정동별로 집계하기 위해 사용한 QGIS 알고리즘은?", options: ["좌표계 변환", "버퍼 생성", "위치에 따라 속성 결합 (Join attributes by location)", "중첩 분석"], answer: 2, explanation: "격자가 속한 행정동 이름을 입히기 위해 공간 조인을 수행했습니다.", hint: "공간적 관계를 이용하는 도구를 찾으세요." },
            { id: 5, question: "단계구분도 시각화 시 가장 색이 진한(수치 높은) 동이 의미하는 것은?", options: ["평균 지가 높음", "초등학교 많음", "기준 미충족 격자나 인구가 가장 많음", "면적 넓음"], answer: 2, explanation: "접근 취약 지역을 붉은색으로 표현했으므로 진할수록 서비스 부족 지역입니다.", hint: "분석 목적이 '취약 지역 파악'임을 고려하세요." },
            { id: 6, question: "집계 후 'Group Stats' 플러그인을 사용한 주된 목적은?", options: ["행정동별 격자 개수(count) 집계", "유클리드 거리 산출", "위치 점 표시", "SHP 파일 변환"], answer: 0, explanation: "행정동별로 몇 개의 취약 격자가 있는지 통계를 내기 위함입니다.", hint: "데이터를 그룹으로 묶어 통계를 내는 과정입니다." },
            { id: 7, question: "최저기준 중 '지역거점' 시설로서 차량 이동 기준이 적용되는 것은?", options: ["보건소", "마을노인복지시설", "건강생활지원센터", "마을 주차장"], answer: 0, explanation: "보건소는 차량 20분 내 도달 여부를 평가하는 지역거점 시설입니다.", hint: "표에서 '지역거점(차량)' 단락을 찾아보세요." },
            { id: 8, question: "분석 후 실제 정책 수립 시 가장 적절한 후속 조치는?", options: ["취약 지역 인구/부지 검토 후 시설 확충 계획 수립", "속도 기준 상향", "접근성 높은 곳 추가 배치", "데이터 폐기"], answer: 0, explanation: "분석 결과를 토대로 실제 인프라 부족 문제를 해결하는 Action Plan을 짭니다.", hint: "발견된 '사각지대'를 어떻게 해결할지 생각하세요." }
        ]
    }
];
