# v3.1 題庫稽核（2026-11-04）

45 題：保留 v3.0 的 21 題，新增 24 題（東部 7、離島 6、中部 5、南部 6）。全庫北部 6／中部 10／南部 11／東部 9／離島 9。歷史 19／社會 8／文化 9／體育 9。

新增題逐頁核對公開的政府、文化資產及主管機關資料；每題保留來源、座標來源、難度（編輯評估）、topic 與 audit。摘要為重新撰寫，未複製圖片。可讀性掃描與頁面 SHA-256 存於 SOURCE-CHECK.json；HTTP 200 不等於史實自動獲證。原 21 題沿用 2026-10-26 的語意稽核，這次另重新掃描來源連結。

## 新增 24 題

| ID | 場址 | 核對重點 | 座標及限制 | 公開依據 |
| --- | --- | --- | --- | --- |
| pinegarden | 花蓮市・松園別館 | 今日可以看展、讀詩的松園，原先是軍事辦公空間。 | 23.9828738, 121.6155061；採官方頁導航點；僅使用日治晚期，不引用神風特攻隊傳說。 | [史料](https://hualien.travel/zh-tw/attraction/12/) · [定位](https://hualien.travel/zh-tw/attraction/12/) |
| keishuin | 花蓮吉安・慶修院 | 慶修院的前身是布教所，不是軍事神社。 | 23.973688, 121.56471；採觀光署點位；不用神社誤稱與缺乏直接佐證的石佛請回傳說。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00292&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00292&sNo=0001016) |
| hualien-sugar | 花蓮光復・花蓮觀光糖廠 | 光復糖廠的日式宿舍原本是員工的生活空間。 | 23.658718, 121.42063；採官方園區點；不將園區代表點稱為廠房精確中心。 | [史料](https://www.tad.gov.tw/m1.aspx?id=C100_176&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=C100_176&sNo=0001016) |
| hongye | 臺東延平・紅葉少棒紀念館 | 紅葉少棒紀念館位於紅葉國小校園內。 | 22.89358, 121.06368；採官方頁 place:location 座標；不使用世界冠軍等錯誤對手稱號，亦不敘述未核實比數。 | [史料](https://tour.taitung.gov.tw/zh-tw/attraction/details/233) · [定位](https://tour.taitung.gov.tw/zh-tw/attraction/details/233) |
| guanshan-old | 臺東關山・舊關山車站 | 新站啟用不一定意味舊站必須拆除；關山留下了舊站房。 | 23.046799, 121.164724；採文化處建檔點，觀光頁近似點亦可比對；設站年代有1919與1922不同敘述，不作唯一年份考題。 | [史料](https://tcmb.culture.tw/zh-tw/detail?id=273954&indexCode=Culture_Place) · [定位](https://tcmb.culture.tw/zh-tw/detail?id=273954&indexCode=Culture_Place) |
| baxian | 臺東長濱・八仙洞 | 八仙洞不只有海蝕景觀，也保存了史前文化的研究線索。 | 23.397167, 121.476649；採文化處列點；不把代表點宣稱單一發掘坑，也不用最早人類活動絕對斷言。 | [史料](https://tcmb.culture.tw/zh-tw/detail?id=274388&indexCode=Culture_Place) · [定位](https://tcmb.culture.tw/zh-tw/detail?id=274388&indexCode=Culture_Place) |
| dulan-sugar | 臺東東河・都蘭新東糖廠 | 新東糖廠是認識都蘭文化的一個入口，卻不能代表整個部落。 | 22.872189, 121.22544；採官方列點；不附未核對的停產或轉型精確年份。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00286&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00286&sNo=0001016) |
| penghu-temple | 澎湖馬公・澎湖天后宮 | 1604年的石碑是核對天后宮早期歷史的重要實物線索。 | 23.56469, 119.56404；採內政部經緯度；1604指碑記史事，避開創建年代推測。 | [史料](https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=62) · [定位](https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=62) |
| erkan | 澎湖西嶼・二崁傳統聚落 | 二崁古厝利用在地石材建造，裝飾則呈現傳統工藝。 | 23.605174, 119.51961；官方列點為聚落代表位置；不同資料的保存區年份不一，本題不考指定年。 | [史料](https://www.tad.gov.tw/m1.aspx?id=11487&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=11487&sNo=0001016) |
| yuweng-lighthouse | 澎湖西嶼・漁翁島燈塔 | 現存西式燈塔建於1875年，門楣上的1874是設計相關年份。 | 23.5624207488885, 119.469579885518；採文資官方列點；以1875改建為西式燈塔，與1778舊塔及1874設計區分。 | [史料](https://tcmb.culture.tw/zh-tw/detail?id=19870417000003&indexCode=BOCH_CountryCulture_11) · [定位](https://tcmb.culture.tw/zh-tw/detail?id=19870417000003&indexCode=BOCH_CountryCulture_11) |
| penghu-bridge | 澎湖白沙・跨海大橋白沙端 | 跨海大橋連接的是白沙與西嶼，並不是一座通往臺灣本島的橋。 | 23.657823, 119.55453；採觀光署列點（白沙端），題幹明示橋端；不把橋頭說成橋中點。 | [史料](https://www.tad.gov.tw/m1.aspx?id=658&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=658&sNo=0001016) |
| zhaishan | 金門金城・翟山坑道 | 翟山坑道包含讓小艇運補的水道，不只是步兵走的山洞。 | 24.390301, 118.32061；採官方列點；國家公園與觀光資料對開挖年份不同，僅用戰地時期。 | [史料](https://www.tad.gov.tw/m1.aspx?id=c100_230&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=c100_230&sNo=0001016) |
| beihai | 馬祖南竿・北海坑道 | 北海計畫在馬祖不只留下單一工事；本題限定南竿。 | 26.143015, 119.92881；採官方列點；1968為計畫開始，非完工年；來源公告整修不影響歷史定位，不提供參觀承諾。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00590&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00590&sNo=0001016) |
| lukang-longshan | 彰化鹿港・龍山寺 | 1786年指遷建現址，早期創建則仍有傳說與史料的差別。 | 24.05042, 120.43523；採內政部座標；不用缺乏文獻的明代創建傳說作定論。 | [史料](https://taiwangods.moi.gov.tw/html/cultural/3_0011.aspx?i=10) · [定位](https://taiwangods.moi.gov.tw/html/cultural/3_0011.aspx?i=10) |
| roundhouse | 彰化市・扇形車庫 | 扇形軌道不是裝飾，而是服務火車頭進出車庫的配置。 | 24.085948, 120.54017；採官方列點；保留1922與12股道，不採仍可免費參觀等即時營運資訊。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00401&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00401&sNo=0001016) |
| jiji | 南投集集・集集車站 | 現在看到的集集站外觀，包含九二一震後重建的成果。 | 23.826451, 120.78489；座標另採觀光署集集駅列點；不宣稱現存建物全部為1930原構件。 | [史料](https://travel.nantou.gov.tw/attractions/jiji-station/) · [定位](https://jp.taiwan.net.tw/m1.aspx?id=A12-00195&sNo=0003016) |
| wufeng-lin | 臺中霧峰・林家宅第 | 霧峰林家宅園有多個系統，不能用單一建築概括。 | 24.063055, 120.70078；採觀光署宅第群代表點，不等同大花廳入口；題目不指定單棟建物。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00664&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00664&sNo=0001016) |
| ntmofa | 臺中西區・國立臺灣美術館 | 國美館不只舉辦展覽，也典藏與研究臺灣藝術。 | 24.141362, 120.66334；採官方點位；1988為開館，不宣稱當時已使用現名。 | [史料](https://www.tad.gov.tw/m1.aspx?id=450&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=450&sNo=0001016) |
| wushantou | 臺南官田・烏山頭水庫 | 1930年是工程完工年，之前還有長期探勘與設計。 | 23.207888, 120.36338；史事採西拉雅管理處，座標採觀光署園區點；不作壩體或水域中心精確定位。 | [史料](https://www.siraya-nsa.gov.tw/zh-tw/about-siraya/discover) · [定位](https://www.tad.gov.tw/m1.aspx?id=C100_142&sNo=0001016) |
| chimei | 臺南仁德・奇美博物館 | 奇美博物館除了西洋藝術，也蒐藏樂器、兵器與自然史藏品。 | 22.934752, 120.22605；採官方列點；不列易變動的館藏數量或世界排名。 | [史料](https://www.tad.gov.tw/m1.aspx?id=2574&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=2574&sNo=0001016) |
| nmth | 臺南安南・國立臺灣歷史博物館 | 民眾的日常物件也能成為歷史博物館的館藏。 | 23.058373, 120.23498；採官方列點；不考查未另外核對的建館精確日期。 | [史料](https://www.tad.gov.tw/m1.aspx?id=A12-00403&sNo=0001016) · [定位](https://www.tad.gov.tw/m1.aspx?id=A12-00403&sNo=0001016) |
| chiayi-prison | 嘉義市・嘉義舊監獄 | 舊監獄保存的不只建築技術，也提供理解近代獄政的材料。 | 23.486047, 120.458656；採文化局建檔點；不把一般監獄一律等同政治受難者監禁場所。 | [史料](https://tcmb.culture.tw/zh-tw/detail?id=188384&indexCode=Culture_Place) · [定位](https://tcmb.culture.tw/zh-tw/detail?id=188384&indexCode=Culture_Place) |
| liudui | 屏東內埔・六堆客家文化園區 | 傘架聚落等園區景觀，用現代設計詮釋客家生活與團結意象。 | 22.658456, 120.558808；座標採客家文化發展中心交通頁；2011指園區開園，非六堆歷史起源。 | [史料](https://www.tad.gov.tw/m1.aspx?id=a12-00390&sNo=0001016) · [定位](https://thcdc.hakka.gov.tw/8268/8269/8270/8272/9521/post) |
| kano | 嘉義市・KANO園區 | KANO園區是以棒球文化為主題的公共空間，不是日本甲子園的比賽場。 | 23.48169, 120.46481；座標採觀光開放資料（嘉義市政府）data-px/data-py；非1931決賽現場。 | [史料](https://beta.taiwantrip.tad.gov.tw/Attractions/TripSpecialp/S11596) · [定位](https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_376600000a_000043) |

## v3.0來源維護

全庫來源與定位共52個不同網址：50個自動直讀成功；高雄旅遊網2頁受防爬驗證保護（403），另以公開web reader讀到內容並核對，不能將403當成失效。世大運題已將原本受阻的臺北旅遊網換成FISU當日開幕報導，定位輔以臺北市政府交通管制記錄。原21題的其餘語意稽核沿用原記錄。

## 查證取捨

- 翟山坑道、舊關山站的官方資料對開挖／設站年份有出入；題幹不使用唯一精確年。
- 漁翁島燈塔區分古塔、1874 設計與1875西式燈塔工程；澎湖天后宮的1604是碑記史事，非宣稱建廟年。
- 北海坑道題限定南竿，1968指計畫開始；不提供現場開放承諾（來源有整修公告）。
- 紅葉題定位校內紀念館，KANO定位後設園區；不把紀念場址當成經典賽的比賽現場。
- 六堆、二崁、霧峰林家、水庫與洞穴群皆以來源的代表點出題，不宣稱測量級精度或整個歷史事件只在單點發生。
- 烏山頭的舊水利機關網域無法解析，改為可讀的西拉雅官方史事頁，定位另用觀光署資料。

## v3.0 保留 21 題的編輯稽核（2026-10-26）

以下為 v3.0 原始稽核記錄，21 題均保留。依可讀官方／機構內容核對史實；來源可讀不等於所有說法毫無爭議。未使用任何來源圖片。

座標分為官方列點與概略場址，後者未聲稱測量級精度。所有座標均為遊戲指定場址，不代表整起事件範圍；精確度限制同時保存在題庫。

| ID | 題目／事實處理 | 座標稽核 | 來源 |
| --- | --- | --- | --- |
| tianma | 來源改為直接場址記錄。 | 採記憶庫列示座標，南京西路舊址；非引爆地紀念碑。 | [國家文化記憶庫：天馬茶房舊址現況](https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place) |
| dragon | 1935 震毀及 1999 再受損均可核對。 | 採觀光署 24.358435,120.77384。 | [交通部觀光署](https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016) |
| wushe | 保留事件／紀念地區別。 | 採記憶庫 24.02046,121.13231；非全事件戰場。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place) |
| xiluo | 1952 完工與 1953 通車須區分；本題問通車。 | 沿用橋梁中段概略點；官方工程資料橋頭 23.82243,120.46291，非橋中點。 | [國家檔案資訊網](https://www.archives.gov.tw/tw/arctw/336-8865.html) |
| anping | 1624 起建與後續增建須區分。 | 採觀光署 23.001509,120.16062。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016) |
| beinan | 1980、13 次發掘可核對。 | 改採觀光署公園點 22.792165,121.11593，原點在遺址範圍北側。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=274387&indexCode=Culture_Place) |
| lindashan | 1939 開發、1960 年代小上海依林業署；非首次人類活動年份。 | 官方地址鳳林鎮林森路99巷99號，沿用園區概略點。 | [農業部林業及自然保育署](https://www.forest.gov.tw/0000221) |
| penghu-fort | 官方資料有1887興建、1888或1889完工歧異，移除唯一精確年宣稱。 | 採觀光署 23.564167,119.48972。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016) |
| kinmen-battle | 保留1949事件年，館舍為後設紀念場所。 | 採觀光署 24.482975,118.32093；非1949全戰場。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126) |
| matsu88 | 官方可核對命名及用途；未直接佐證1974，年份改戰地時期。 | 採觀光署 26.160305,119.95324。 | [交通部觀光署（含座標）](https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127) |
| quake | 國中校址保存；冷知識移除未重新核實的精確隆起高度。 | 採記憶庫 24.043728,120.696324。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place) |
| formosa | 原來源137為雜誌社服務處，改交通局歷史文獻。 | 以美麗島站／中山中正路口為概略定位；非原雜誌社。 | [高雄市交通局：追公車的記憶](https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861) |
| lily | 1990年3月、廣場靜坐及訴求可核對。 | 中正紀念堂廣場概略中心點；非紀念堂建物。 | [國家文化記憶庫](https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS) |
| xiaolin | 462人、2009災難與2012公園啟用可核對。 | 以小林村原址南側高地紀念公園概略點定位；非災前村落中心。 | [高雄旅遊網](https://khh.travel/zh-tw/attractions/detail/52/) |
| baseball01 | 原球場資訊不足佐證賽事，補臺北畫刊專訪。 | 沿用天母棒球場場地概略點，非入口。 | [臺北畫刊 585：陳金鋒專訪](https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf) |
| worldgames09 | 2009開閉幕與太陽能屋頂可核對。 | 世運大道100號場館概略中心點。 | [高雄旅遊網](https://khh.travel/zh-tw/attractions/detail/164/) |
| universiade17 | 來源從首頁改為2017/8/19活動頁。 | 沿用臺北田徑場概略點；非小巨蛋。 | [臺北旅遊網：世大運開幕](https://travel.taipei/zh-tw/event-calendar/details/8895) |
| cpbl90 | 原404來源改文獻館具日期／場地記錄。 | 以今日小巨蛋地塊概略點定位，不宣稱現存棒球場。 | [國史館臺灣文獻館：職棒成立經過](https://www.th.gov.tw/Epaper_Content/238/7969/) |
| intercontinental | 來源改固定2023賽事頁，避免現屆賽事首頁。 | 沿用臺中洲際棒球場場內概略點。 | [WBC 官方：2023 年分組與賽果](https://www.mlb.com/world-baseball-classic/2023-bracket-standings) |
| chengching | 1999首賽事依鳥松區公所；移除只指首頁的連結。 | 鳥松區澄清湖棒球場概略中心點，非湖心。 | [高雄市鳥松區公所：其他設施](https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22) |
| taoyuanball | 2009/12/12完工、12/13啟用依體育局。 | 青埔領航北路一段1號球場概略點。 | [桃園市體育局：桃園國際棒球場](https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738) |

## 維護方式

在 `src/questions.js` 新增完整 record：固定 id、category(c)、五區 region、county、year、title、name、WGS84 lat/lng、原創摘要 story、來源 src/label、1–3 難度、lesson、audit。difficulty 為編輯評估，尚未有真人答題數據。新增前需直接讀來源、區分事件與紀念地、確認來源可讀、標示概略點、避免複製未授權圖文。`pnpm test` 檢查結構與地理範圍。

連結檢查不能只看 HTTP 200：曾發現有效頁面其實指向另一個場址。未來可加入定期連結監測，仍需人工語意檢視。
