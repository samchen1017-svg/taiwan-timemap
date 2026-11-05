# v3.1 題庫稽核（2026-11-05）

共50題：保留main v3.0的21題與PR #2已公開的10題，再整合19題不同場址。北部6／中部10／南部14／東部10／離島10；歷史23／社會8／文化10／體育9。PR #2全部31個題目ID保留，避免已存進度失效；沒有把慶修院、紅葉、北海坑道、跨海大橋、扇形車庫重複加入。

新增19題沿用先前v3.1研究成果，本輪再次讀取政府、博物館與機構來源核對。座標採官方列點或官方頁導航點，並保留代表點限制。原21題的語意稽核沿用2026-10-26記錄，只有下面列出的來源維護另核對。難度為1–3的編輯評估，尚無真人答題校準。摘要重新撰寫，沒有使用來源圖片。

## 明列既有題的變更

- universiade17：原臺北旅遊網活動頁遇防爬403，改為FISU 2017-08-19開幕報導，座標來源為臺北市政府活動交通記錄；不改事件年與定位場館。核對日期2026-11-05。
- penghu-crossbridge：沿用原ID與官方座標，但名稱、題幹明確限定「白沙端」，避免把官方橋頭代表點當橋梁中點；分類改社會／交通，來源仍為觀光署。沒有新增第二題跨海大橋。
- jian-qingxiu、lanyang-museum：移入新設的文化生活類，史料、年代與ID保留。其餘PR #2題沿用已審核內容，補topic欄位。
- 先前v3.1研究中的keishuin、hongye、beihai、penghu-bridge、roundhouse沒有另行加入，對應沿用PR #2原ID。

## 來源可讀性

全庫史料與座標共60個不同網址，58個直接讀取HTTP 200；高雄旅遊網2頁遇防爬403，另由公開web reader讀到內容，未誤記為404。原始狀態、實際掃描時間、頁名與SHA-256見SOURCE-CHECK.json。HTTP 200只代表可讀，不能代替語意查證；audit.sourceAvailability表示編輯閱讀結果，與直接請求遇防爬的結果分開記錄。集集頁由web reader逾時後直接讀取官方HTML，核對的是官方「特色介紹」，沒有採用網友評論。

## 查證取捨

- 舊關山站設站年、翟山坑道開挖年，各官方頁有歧異，題幹不考唯一精確年。
- 漁翁島區分1778古塔、1874設計題字與1875西式燈塔；天后宮1604指碑記事件，非建廟年。
- 北海坑道限定南竿，1968指計畫開始，不是完工；不以歷史頁提供目前開放保證。
- 紅葉定位校內紀念館，KANO定位嘉義園區，皆不當作經典賽的比賽現場；新增體育題只有KANO，沒有為湊數加入未查證賽事。
- 六堆、二崁、霧峰林家、水庫與洞穴群採來源代表點，並非整個事件範圍、入口或測量級座標。
- 松園不採神風特攻隊傳說；小林村與監獄類題避免將受難記憶簡化為單一建築。

## 本輪新增19題

| ID／場址 | 事實及編輯備註 | WGS84／精確度／限制 | 公開史料與定位 |
| --- | --- | --- | --- |
| pinegarden · 花蓮市・松園別館 | 今日可以看展、讀詩的松園，原先是軍事辦公空間。 | 23.9828738, 121.6155061 · official-point；採官方頁導航點；僅使用日治晚期，不引用神風特攻隊傳說。 | [花蓮縣政府：松園別館](https://hualien.travel/zh-tw/attraction/12/) · [座標](https://hualien.travel/zh-tw/attraction/12/) |
| hualien-sugar · 花蓮光復・花蓮觀光糖廠 | 光復糖廠的日式宿舍原本是員工的生活空間。 | 23.658718, 121.42063 · official-point；採官方園區點；不將園區代表點稱為廠房精確中心。 | [交通部觀光署：花蓮觀光糖廠](https://www.tad.gov.tw/m1.aspx?id=C100_176&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=C100_176&sNo=0001016) |
| guanshan-old · 臺東關山・舊關山車站 | 新站啟用不一定意味舊站必須拆除；關山留下了舊站房。 | 23.046799, 121.164724 · official-point；採文化處建檔點，觀光頁近似點亦可比對；設站年代有1919與1922不同敘述，不作唯一年份考題。 | [國家文化記憶庫：舊關山車站](https://tcmb.culture.tw/zh-tw/detail?id=273954&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=273954&indexCode=Culture_Place) |
| baxian · 臺東長濱・八仙洞 | 八仙洞不只有海蝕景觀，也保存了史前文化的研究線索。 | 23.397167, 121.476649 · official-point；採文化處列點；不把代表點宣稱單一發掘坑，也不用最早人類活動絕對斷言。 | [國家文化記憶庫：八仙洞](https://tcmb.culture.tw/zh-tw/detail?id=274388&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=274388&indexCode=Culture_Place) |
| dulan-sugar · 臺東東河・都蘭新東糖廠 | 新東糖廠是認識都蘭文化的一個入口，卻不能代表整個部落。 | 22.872189, 121.22544 · official-point；採官方列點；不附未核對的停產或轉型精確年份。 | [交通部觀光署：都蘭新東糖廠文化園區](https://www.tad.gov.tw/m1.aspx?id=A12-00286&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=A12-00286&sNo=0001016) |
| penghu-temple · 澎湖馬公・澎湖天后宮 | 1604年的石碑是核對天后宮早期歷史的重要實物線索。 | 23.56469, 119.56404 · official-point；採內政部經緯度；1604指碑記史事，避開創建年代推測。 | [內政部臺灣宗教文化地圖：澎湖天后宮](https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=62) · [座標](https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=62) |
| erkan · 澎湖西嶼・二崁傳統聚落 | 二崁古厝利用在地石材建造，裝飾則呈現傳統工藝。 | 23.605174, 119.51961 · official-point；官方列點為聚落代表位置；不同資料的保存區年份不一，本題不考指定年。 | [交通部觀光署：二崁傳統聚落](https://www.tad.gov.tw/m1.aspx?id=11487&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=11487&sNo=0001016) |
| yuweng-lighthouse · 澎湖西嶼・漁翁島燈塔 | 現存西式燈塔建於1875年，門楣上的1874是設計相關年份。 | 23.5624207488885, 119.469579885518 · official-point；採文資官方列點；以1875改建為西式燈塔，與1778舊塔及1874設計區分。 | [國家文化記憶庫：西嶼燈塔](https://tcmb.culture.tw/zh-tw/detail?id=19870417000003&indexCode=BOCH_CountryCulture_11) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=19870417000003&indexCode=BOCH_CountryCulture_11) |
| zhaishan · 金門金城・翟山坑道 | 翟山坑道包含讓小艇運補的水道，不只是步兵走的山洞。 | 24.390301, 118.32061 · official-point；採官方列點；國家公園與觀光資料對開挖年份不同，僅用戰地時期。 | [交通部觀光署：翟山坑道](https://www.tad.gov.tw/m1.aspx?id=c100_230&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=c100_230&sNo=0001016) |
| lukang-longshan · 彰化鹿港・龍山寺 | 1786年指遷建現址，早期創建則仍有傳說與史料的差別。 | 24.05042, 120.43523 · official-point；採內政部座標；不用缺乏文獻的明代創建傳說作定論。 | [內政部臺灣宗教文化地圖：鹿港龍山寺](https://taiwangods.moi.gov.tw/html/cultural/3_0011.aspx?i=10) · [座標](https://taiwangods.moi.gov.tw/html/cultural/3_0011.aspx?i=10) |
| jiji · 南投集集・集集車站 | 現在看到的集集站外觀，包含九二一震後重建的成果。 | 23.826451, 120.78489 · official-point；座標另採觀光署集集駅列點；不宣稱現存建物全部為1930原構件。 | [南投縣政府：集集車站](https://travel.nantou.gov.tw/attractions/jiji-station/) · [座標](https://jp.taiwan.net.tw/m1.aspx?id=A12-00195&sNo=0003016) |
| wufeng-lin · 臺中霧峰・林家宅第 | 霧峰林家宅園有多個系統，不能用單一建築概括。 | 24.063055, 120.70078 · official-point；採觀光署宅第群代表點，不等同大花廳入口；題目不指定單棟建物。 | [交通部觀光署：霧峰林家宅第](https://www.tad.gov.tw/m1.aspx?id=A12-00664&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=A12-00664&sNo=0001016) |
| ntmofa · 臺中西區・國立臺灣美術館 | 國美館不只舉辦展覽，也典藏與研究臺灣藝術。 | 24.141362, 120.66334 · official-point；採官方點位；1988為開館，不宣稱當時已使用現名。 | [交通部觀光署：國立臺灣美術館](https://www.tad.gov.tw/m1.aspx?id=450&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=450&sNo=0001016) |
| wushantou · 臺南官田・烏山頭水庫 | 1930年是工程完工年，之前還有長期探勘與設計。 | 23.207888, 120.36338 · official-point；史事採西拉雅管理處，座標採觀光署園區點；不作壩體或水域中心精確定位。 | [西拉雅國家風景區管理處：從源頭說起](https://www.siraya-nsa.gov.tw/zh-tw/about-siraya/discover) · [座標](https://www.tad.gov.tw/m1.aspx?id=C100_142&sNo=0001016) |
| chimei · 臺南仁德・奇美博物館 | 奇美博物館除了西洋藝術，也蒐藏樂器、兵器與自然史藏品。 | 22.934752, 120.22605 · official-point；採官方列點；不列易變動的館藏數量或世界排名。 | [交通部觀光署：奇美博物館](https://www.tad.gov.tw/m1.aspx?id=2574&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=2574&sNo=0001016) |
| nmth · 臺南安南・國立臺灣歷史博物館 | 民眾的日常物件也能成為歷史博物館的館藏。 | 23.058373, 120.23498 · official-point；採官方列點；不考查未另外核對的建館精確日期。 | [交通部觀光署：國立臺灣歷史博物館](https://www.tad.gov.tw/m1.aspx?id=A12-00403&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=A12-00403&sNo=0001016) |
| chiayi-prison · 嘉義市・嘉義舊監獄 | 舊監獄保存的不只建築技術，也提供理解近代獄政的材料。 | 23.486047, 120.458656 · official-point；採文化局建檔點；不把一般監獄一律等同政治受難者監禁場所。 | [國家文化記憶庫：國定古蹟嘉義舊監獄](https://tcmb.culture.tw/zh-tw/detail?id=188384&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=188384&indexCode=Culture_Place) |
| liudui · 屏東內埔・六堆客家文化園區 | 傘架聚落等園區景觀，用現代設計詮釋客家生活與團結意象。 | 22.658456, 120.558808 · official-point；座標採客家文化發展中心交通頁；2011指園區開園，非六堆歷史起源。 | [交通部觀光署：六堆客家文化園區](https://www.tad.gov.tw/m1.aspx?id=a12-00390&sNo=0001016) · [座標](https://thcdc.hakka.gov.tw/8268/8269/8270/8272/9521/post) |
| kano · 嘉義市・KANO園區 | KANO園區是以棒球文化為主題的公共空間，不是日本甲子園的比賽場。 | 23.48169, 120.46481 · official-point；座標採觀光開放資料（嘉義市政府）data-px/data-py；非1931決賽現場。 | [交通部觀光署台灣好行：KANO園區](https://beta.taiwantrip.tad.gov.tw/Attractions/TripSpecialp/S11596) · [座標](https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_376600000a_000043) |

## 保留PR #2的10題

| ID／場址 | 事實及編輯備註 | WGS84／精確度／限制 | 公開史料與定位 |
| --- | --- | --- | --- |
| jian-qingxiu · 花蓮吉安・慶修院 | 文化局與觀光署證實吉野移民村及八十八尊石佛；各官方檔案對創建年份有1916／1917差異，本題使用「日治時期」。 | 23.973688, 121.56471 · official-point；採交通部觀光署所列慶修院景點座標 23.973688,121.56471；對應吉安鄉中興路345-1號。 | [花蓮縣文化局：吉安慶修院](https://www.hccc.gov.tw/zh-tw/LocalCulturalHall/Detail/23) · [座標](https://www.taiwan.net.tw/m1.aspx?id=A12-00292&sno=0001016) |
| lanyang-museum · 宜蘭頭城・蘭陽博物館 | 2010/10/16正式開館依博物館官方FAQ；建築單面山與濕地依觀光署。 | 24.869007, 121.83277 · official-point；採交通部觀光署景點座標 24.869007,121.83277；地址頭城鎮青雲路三段750號。 | [蘭陽博物館：常見問答](https://www.lym.gov.tw/ch/audience-service/faq/) · [座標](https://www.taiwan.net.tw/m1.aspx?id=A12-00569&sNo=0001106) |
| hongye-baseball · 臺東延平・紅葉少棒紀念館 | 觀光署明載1968對日本和歌山少棒隊與1992紀念館啟用，場址依臺東縣觀光資料紅谷路1號；精度視為校園內概略點。 | 22.89352, 121.06372 · approximate-site；採臺東景點開放資料位置約 22.89352,121.06372；紀念館在紅葉國小校園內，非1968對日比賽原球場。 | [交通部觀光署花東縱谷管理處：紅葉少棒紀念館](https://media.taiwan.net.tw/en-us/portal/travel/details/attraction_a15010300h_000056) · [座標](https://media.taiwan.net.tw/en-us/portal/travel/details/attraction_376540000a_000233) |
| matsu-northsea · 馬祖南竿・北海坑道 | 1968指北海計畫起始年，不宣稱坑道於當年即完工；觀光署公告2026/10至2027/3整修，遊戲不保證現場開放。 | 26.143015, 119.92881 · official-point；採觀光署景點座標 26.143015,119.92881，位於南竿北海坑道區域。 | [交通部觀光署：南竿北海坑道](https://www.taiwan.net.tw/m1.aspx?id=A12-00590&sNo=0001127) · [座標](https://www.taiwan.net.tw/m1.aspx?id=A12-00590&sNo=0001127) |
| penghu-crossbridge · 澎湖白沙・跨海大橋白沙端 | 跨海大橋連接的是白沙與西嶼，並不是一座通往臺灣本島的橋。 | 23.657823, 119.55453 · official-point；採觀光署列點（白沙端），題幹明示橋端；不把橋頭說成橋中點。 | [交通部觀光署：澎湖跨海大橋](https://www.tad.gov.tw/m1.aspx?id=658&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=658&sNo=0001016) |
| dongyin-lighthouse · 馬祖東引・東引島燈塔 | 1904完工、1958停用、1989復燈依觀光署。 | 26.365429, 120.51049 · official-point；採觀光署 26.365429,120.51049；位於東引島，與南竿島坑道不同。 | [交通部觀光署：東引島燈塔](https://www.taiwan.net.tw/m1.aspx?id=A12-00213&sno=0001016) · [座標](https://www.taiwan.net.tw/m1.aspx?id=A12-00213&sno=0001016) |
| chihkan · 臺南中西區・赤崁樓 | 1653創建與普羅民遮堡舊名可核對；本題與既有安平古堡角度不同，刻意對比而非重複同一位置。 | 22.997478, 120.20254 · official-point；採觀光署 22.997478,120.20254；臺南市中西區民族路二段212號。 | [交通部觀光署：赤崁樓](https://www.taiwan.net.tw/m1.aspx?id=10889&sno=0001016) · [座標](https://www.taiwan.net.tw/m1.aspx?id=10889&sno=0001016) |
| kaohsiung-lighthouse · 高雄旗津・旗後燈塔 | 1883設置與現八角型塔見觀光署；塔體改建資料亦見高雄市文化局古蹟調查，避免將1883直接說成現塔建造年。 | 22.615459, 120.26495 · official-point；採觀光署旗後燈塔 22.615459,120.26495；旗津區旗下巷34號。 | [交通部觀光署：高雄燈塔](https://www.taiwan.net.tw/m1.aspx?id=a12-00183&sNo=0001016) · [座標](https://www.taiwan.net.tw/m1.aspx?id=a12-00183&sNo=0001016) |
| chiayi-tropic · 嘉義市西區・北回歸線標誌群 | 2004/6/21及全球第十處等表述直接取自觀光署特定景點頁。 | 23.466307, 120.42613 · official-point；採觀光署列示 23.466307,120.42613；位置是嘉義市博愛路與世賢路交會處，非嘉義縣其他北回歸線公園。 | [交通部觀光署：全球北回歸線標誌第十處](https://www.taiwan.net.tw/m1.aspx?id=8969&sNo=0001117) · [座標](https://www.taiwan.net.tw/m1.aspx?id=8969&sNo=0001117) |
| changhua-roundhouse · 彰化市・扇形車庫 | 1922建造、調車轉盤與十二股道依交通部觀光署。 | 24.085948, 120.54017 · official-point；採觀光署 24.085948,120.54017；彰化市彰美路一段1號。 | [交通部觀光署：彰化扇形車庫](https://www.tad.gov.tw/m1.aspx?id=A12-00401&sNo=0001113) · [座標](https://www.tad.gov.tw/m1.aspx?id=A12-00401&sNo=0001113) |

## 保留main v3.0的21題

| ID／場址 | 事實及編輯備註 | WGS84／精確度／限制 | 公開史料與定位 |
| --- | --- | --- | --- |
| tianma · 臺北・天馬茶房舊址 | 來源改為直接場址記錄。 | 25.054048, 121.512178 · official-point；採記憶庫列示座標，南京西路舊址；非引爆地紀念碑。 | [國家文化記憶庫：天馬茶房舊址現況](https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place) |
| dragon · 苗栗三義・龍騰斷橋 | 1935 震毀及 1999 再受損均可核對。 | 24.358435, 120.77384 · official-point；採觀光署 24.358435,120.77384。 | [交通部觀光署](https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016) |
| wushe · 南投仁愛・霧社事件紀念公園 | 保留事件／紀念地區別。 | 24.02046, 121.13231 · official-point；採記憶庫 24.02046,121.13231；非全事件戰場。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place) |
| xiluo · 雲林・西螺大橋 | 1952 完工與 1953 通車須區分；本題問通車。 | 23.8175, 120.4587 · approximate-site；沿用橋梁中段概略點；官方工程資料橋頭 23.82243,120.46291，非橋中點。 | [國家檔案資訊網](https://www.archives.gov.tw/tw/arctw/336-8865.html) · [座標](https://publicworks.chcg.gov.tw/getFile.aspx?did=25347&file=2&file_id=422161&type=2) |
| anping · 臺南安平・安平古堡 | 1624 起建與後續增建須區分。 | 23.001509, 120.16062 · official-point；採觀光署 23.001509,120.16062。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016) |
| beinan · 臺東市・卑南遺址公園 | 1980、13 次發掘可核對。 | 22.792165, 121.11593 · official-point；改採觀光署公園點 22.792165,121.11593，原點在遺址範圍北側。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=274387&indexCode=Culture_Place) · [座標](https://www.taiwan.net.tw/m1.aspx?id=9576&sno=0001123) |
| lindashan · 花蓮鳳林・林田山林業文化園區 | 1939 開發、1960 年代小上海依林業署；非首次人類活動年份。 | 23.7196, 121.3987 · approximate-site；官方地址鳳林鎮林森路99巷99號，沿用園區概略點。 | [農業部林業及自然保育署](https://www.forest.gov.tw/0000221) · [座標](https://www.forest.gov.tw/0000221) |
| penghu-fort · 澎湖西嶼・西嶼西臺 | 官方資料有1887興建、1888或1889完工歧異，移除唯一精確年宣稱。 | 23.564167, 119.48972 · official-point；採觀光署 23.564167,119.48972。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016) · [座標](https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016) |
| kinmen-battle · 金門金寧・古寧頭戰史館 | 保留1949事件年，館舍為後設紀念場所。 | 24.482975, 118.32093 · official-point；採觀光署 24.482975,118.32093；非1949全戰場。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126) · [座標](https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126) |
| matsu88 · 馬祖南竿・八八坑道 | 官方可核對命名及用途；未直接佐證1974，年份改戰地時期。 | 26.160305, 119.95324 · official-point；採觀光署 26.160305,119.95324。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127) · [座標](https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127) |
| quake · 臺中霧峰・921 地震教育園區 | 國中校址保存；冷知識移除未重新核實的精確隆起高度。 | 24.043728, 120.696324 · official-point；採記憶庫 24.043728,120.696324。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place) |
| formosa · 高雄・美麗島站（原大圓環） | 原來源137為雜誌社服務處，改交通局歷史文獻。 | 22.63141865, 120.30196552 · approximate-site；以美麗島站／中山中正路口為概略定位；非原雜誌社。 | [高雄市交通局：追公車的記憶](https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861) · [座標](https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861) |
| lily · 臺北・中正紀念堂廣場 | 1990年3月、廣場靜坐及訴求可核對。 | 25.034, 121.52095 · approximate-site；中正紀念堂廣場概略中心點；非紀念堂建物。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS) · [座標](https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS) |
| xiaolin · 高雄甲仙・小林村紀念公園 | 462人、2009災難與2012公園啟用可核對。 | 23.1646, 120.6354 · approximate-site；以小林村原址南側高地紀念公園概略點定位；非災前村落中心。 | [高雄旅遊網](https://khh.travel/zh-tw/attractions/detail/52/) · [座標](https://khh.travel/zh-tw/attractions/detail/52/) |
| baseball01 · 臺北・天母棒球場 | 原球場資訊不足佐證賽事，補臺北畫刊專訪。 | 25.114639, 121.535167 · approximate-site；沿用天母棒球場場地概略點，非入口。 | [臺北畫刊 585：陳金鋒專訪](https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf) · [座標](https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf) |
| worldgames09 · 高雄左營・國家體育場 | 2009開閉幕與太陽能屋頂可核對。 | 22.70241, 120.29463 · approximate-site；世運大道100號場館概略中心點。 | [高雄旅遊網](https://khh.travel/zh-tw/attractions/detail/164/) · [座標](https://khh.travel/zh-tw/attractions/detail/164/) |
| universiade17 · 臺北松山・臺北田徑場 | 原臺北旅遊網啟用防爬驗證，改採FISU當日開幕報導；場址另採市府交通管制記錄。 本輪再次核對FISU開幕報導，原臺北旅遊網來源遇403。 | 25.04944, 121.55111 · approximate-site；沿用臺北田徑場概略點；非小巨蛋。 | [FISU：2017世大運開幕報導](https://www.fisu.net/2017/08/19/29th-summer-universiade-opens-in-splendor/) · [座標](https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=4FCD6FEB4EAA1171&sms=72544237BBE4C5F6) |
| cpbl90 · 臺北・舊臺北市立棒球場 | 原404來源改文獻館具日期／場地記錄。 | 25.05065, 121.55035 · approximate-site；以今日小巨蛋地塊概略點定位，不宣稱現存棒球場。 | [國史館臺灣文獻館：職棒成立經過](https://www.th.gov.tw/Epaper_Content/238/7969/) · [座標](https://www.th.gov.tw/Epaper_Content/238/7969/) |
| intercontinental · 臺中北屯・洲際棒球場 | 來源改固定2023賽事頁，避免現屆賽事首頁。 | 24.2001, 120.6843 · approximate-site；沿用臺中洲際棒球場場內概略點。 | [WBC 官方：2023 年分組與賽果](https://www.mlb.com/world-baseball-classic/2023-bracket-standings) · [座標](https://www.mlb.com/world-baseball-classic/2023-bracket-standings) |
| chengching · 高雄鳥松・澄清湖棒球場 | 1999首賽事依鳥松區公所；移除只指首頁的連結。 | 22.6561, 120.3563 · approximate-site；鳥松區澄清湖棒球場概略中心點，非湖心。 | [高雄市鳥松區公所：其他設施](https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22) · [座標](https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22) |
| taoyuanball · 桃園青埔・樂天桃園棒球場 | 2009/12/12完工、12/13啟用依體育局。 | 25.0015, 121.2026 · approximate-site；青埔領航北路一段1號球場概略點。 | [桃園市體育局：桃園國際棒球場](https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738) · [座標](https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738) |

## 持續維護

每題包含固定ID、category(c)、五區region、county、year、title、name、WGS84 lat/lng、原創story、src/label、difficulty、topic、lesson、audit（checkedAt、factStatus、factNote、coordinateSource、locationType、locationPrecision、locationNote、sourceAvailability）。新增前直接讀來源並區分事件與紀念場址；有歧異則刪去精確年或不收錄。每次擴充後執行題庫契約與長期輪替測試。

每日表由scripts/generate-daily-schedule.js離線產生，不在手機上搜尋組合。若各區題數改變，須重新選擇共同週期長度並編譯，再跑730日與所有起點的365日測試；編譯失敗不應手改生成表。發版時未開局的日題會重排，合法已存ID繼續沿用。
