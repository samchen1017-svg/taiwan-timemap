// Editorial bank: one record contains the question, lesson, and audit trail.
export const types={history:'🏛 台灣歷史',social:'✊ 社會記憶',sports:'⚾ 體育文化'};
export const Q=[
  {
    "id": "tianma",
    "c": "history",
    "region": "north",
    "county": "臺北市",
    "year": "1947",
    "title": "二二八事件的導火線「緝菸血案」，起於大稻埕一間茶房前。茶房舊址在哪裡？",
    "name": "臺北・天馬茶房舊址",
    "lat": 25.054048,
    "lng": 121.512178,
    "story": "1947 年 2 月 27 日查緝私菸造成流血衝突。隔日抗爭擴大，成為二二八事件的開端。此題只定位天馬茶房舊址，不代表整起事件只有一個地點。",
    "src": "https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place",
    "label": "國家文化記憶庫：天馬茶房舊址現況",
    "lesson": {
      "fact": "「二二八」的名稱來自 2 月 28 日，但引發抗爭的緝菸血案發生在前一天。",
      "key": "一個地點可以是歷史的起點，卻不代表整起事件只發生在此。",
      "src": "https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place",
      "label": "國家文化記憶庫：天馬茶房舊址現況"
    },
    "difficulty": 3,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "舊址",
      "locationPrecision": "official-point",
      "locationNote": "採記憶庫列示座標，南京西路舊址；非引爆地紀念碑。",
      "factNote": "來源改為直接場址記錄。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://tcmb.culture.tw/zh-tw/detail?id=476225&indexCode=Culture_Place"
    }
  },
  {
    "id": "dragon",
    "c": "history",
    "region": "central",
    "county": "苗栗縣",
    "year": "1935",
    "title": "1935 年新竹、臺中大地震後，一座紅磚拱形鐵路橋留下斷橋遺跡。它在何處？",
    "name": "苗栗三義・龍騰斷橋",
    "lat": 24.358435,
    "lng": 120.77384,
    "story": "舊山線的龍騰橋在 1935 年大地震中嚴重受損，殘留紅磚橋墩，後來成為重要歷史地景。",
    "src": "https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016",
    "label": "交通部觀光署",
    "lesson": {
      "fact": "龍騰斷橋並不是為了觀光而刻意做舊，而是 1935 年地震留下的真實鐵道遺跡。",
      "key": "有時一座無法通行的橋，反而成為記住地方歷史的方式。",
      "src": "https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016",
      "label": "交通部觀光署"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "遺址",
      "locationPrecision": "official-point",
      "locationNote": "採觀光署 24.358435,120.77384。",
      "factNote": "1935 震毀及 1999 再受損均可核對。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tad.gov.tw/m1.aspx?id=C100_342&sno=0001016"
    }
  },
  {
    "id": "wushe",
    "c": "history",
    "region": "central",
    "county": "南投縣",
    "year": "1930",
    "title": "1930 年賽德克族人發動霧社事件，今日紀念莫那魯道等人的「霧社事件紀念公園」位於哪裡？",
    "name": "南投仁愛・霧社事件紀念公園",
    "lat": 24.02046,
    "lng": 121.13231,
    "story": "霧社事件是原住民族抵抗殖民統治的重要歷史。題目定位紀念公園，而非整起事件的唯一發生地點。",
    "src": "https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place",
    "label": "國家文化記憶庫",
    "lesson": {
      "fact": "霧社事件的歷史現場不只一處；今日紀念公園是記憶與追思的場域之一。",
      "key": "猜歷史位置時，必須分清「事件範圍」與「紀念場所」。",
      "src": "https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place",
      "label": "國家文化記憶庫"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "紀念公園",
      "locationPrecision": "official-point",
      "locationNote": "採記憶庫 24.02046,121.13231；非全事件戰場。",
      "factNote": "保留事件／紀念地區別。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://tcmb.culture.tw/zh-tw/detail?id=618941&indexCode=Culture_Place"
    }
  },
  {
    "id": "xiluo",
    "c": "history",
    "region": "central",
    "county": "雲林縣",
    "year": "1953",
    "title": "1953 年通車、曾有「遠東第一大橋」美稱的紅色鋼橋，跨越濁水溪串連彰雲。在哪裡？",
    "name": "雲林・西螺大橋",
    "lat": 23.8175,
    "lng": 120.4587,
    "story": "西螺大橋於 1953 年通車，是早年南北交通的重要橋梁。答案取橋梁中段位置。",
    "src": "https://www.archives.gov.tw/tw/arctw/336-8865.html",
    "label": "國家檔案資訊網",
    "lesson": {
      "fact": "紅色的西螺大橋跨越濁水溪，通車後成為串聯彰化與雲林的重要交通路線。",
      "key": "一座橋，也能看見臺灣早年南北運輸的變化。",
      "src": "https://www.archives.gov.tw/tw/arctw/336-8865.html",
      "label": "國家檔案資訊網"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "橋梁",
      "locationPrecision": "approximate-site",
      "locationNote": "沿用橋梁中段概略點；官方工程資料橋頭 23.82243,120.46291，非橋中點。",
      "factNote": "1952 完工與 1953 通車須區分；本題問通車。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://publicworks.chcg.gov.tw/getFile.aspx?did=25347&file=2&file_id=422161&type=2"
    }
  },
  {
    "id": "anping",
    "c": "history",
    "region": "south",
    "county": "臺南市",
    "year": "1624",
    "title": "1624 年荷蘭人於台江內海建造熱蘭遮堡，後稱「安平古堡」。這個歷史遺址在台灣哪裡？",
    "name": "臺南安平・安平古堡",
    "lat": 23.001509,
    "lng": 120.16062,
    "story": "熱蘭遮堡是荷蘭人在臺灣的重要據點。1662 年鄭成功取得此城，清代以後逐步變遷，如今留下古堡史蹟。",
    "src": "https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016",
    "label": "交通部觀光署（含座標）",
    "lesson": {
      "fact": "你現在熟悉的安平古堡白色瞭望臺外觀，並不是 17 世紀荷蘭人留下的原貌。",
      "key": "真正保留的荷蘭時期遺構，包括外城南城垣部分磚牆。",
      "src": "https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016",
      "label": "交通部觀光署（含座標）"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "遺址",
      "locationPrecision": "official-point",
      "locationNote": "採觀光署 23.001509,120.16062。",
      "factNote": "1624 起建與後續增建須區分。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tad.gov.tw/m1.aspx?id=147&sno=0001016"
    }
  },
  {
    "id": "beinan",
    "c": "history",
    "region": "east",
    "county": "臺東縣",
    "year": "1980",
    "title": "1980 年臺東新站施工挖出大量史前石板棺、玉器，引發搶救發掘。今天的「卑南遺址公園」在哪裡？",
    "name": "臺東市・卑南遺址公園",
    "lat": 22.792165,
    "lng": 121.11593,
    "story": "卑南遺址見證臺灣新石器時代生活。1980 年鐵路工程發現大量文物，學界展開長達多年的搶救考古；答案為今日遺址公園附近。",
    "src": "https://tcmb.culture.tw/zh-tw/detail?id=274387&indexCode=Culture_Place",
    "label": "國家文化記憶庫",
    "lesson": {
      "fact": "臺東車站工程意外揭開史前遺址，後續曾進行 13 次搶救發掘。",
      "key": "卑南遺址讓人看見臺灣新石器時代的聚落與石板棺文化。",
      "src": "https://tcmb.culture.tw/zh-tw/detail?id=274387&indexCode=Culture_Place",
      "label": "國家文化記憶庫"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "遺址公園",
      "locationPrecision": "official-point",
      "locationNote": "改採觀光署公園點 22.792165,121.11593，原點在遺址範圍北側。",
      "factNote": "1980、13 次發掘可核對。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.taiwan.net.tw/m1.aspx?id=9576&sno=0001123"
    }
  },
  {
    "id": "lindashan",
    "c": "history",
    "region": "east",
    "county": "花蓮縣",
    "year": "1939",
    "title": "日治時期開始開發、1960 年代伐木繁盛，號稱「小上海」的林場如今留下木造宿舍與運材設施。在哪裡？",
    "name": "花蓮鳳林・林田山林業文化園區",
    "lat": 23.7196,
    "lng": 121.3987,
    "story": "林田山見證東台灣林業史。1939 年起投入紙漿原料探採，後成為臺灣重要林場，如今保存林業聚落。",
    "src": "https://www.forest.gov.tw/0000221",
    "label": "農業部林業及自然保育署",
    "lesson": {
      "fact": "林田山在 1960 年代林業繁盛時，因聚落熱鬧而有「小上海」之稱。",
      "key": "保留下來的不只有森林，還有工人居住與運材的生活空間。",
      "src": "https://www.forest.gov.tw/0000221",
      "label": "農業部林業及自然保育署"
    },
    "difficulty": 3,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "文化園區",
      "locationPrecision": "approximate-site",
      "locationNote": "官方地址鳳林鎮林森路99巷99號，沿用園區概略點。",
      "factNote": "1939 開發、1960 年代小上海依林業署；非首次人類活動年份。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.forest.gov.tw/0000221"
    }
  },
  {
    "id": "penghu-fort",
    "c": "history",
    "region": "islands",
    "county": "澎湖縣",
    "year": "清代",
    "title": "清法戰爭後，清廷強化澎湖海防，由劉銘傳推動修築的大型砲臺「西嶼西臺」在何處？",
    "name": "澎湖西嶼・西嶼西臺",
    "lat": 23.564167,
    "lng": 119.48972,
    "story": "清法戰爭後，劉銘傳推動澎湖海防建設，留下西嶼西臺等砲臺。不同官方頁面對興建、完工年份記述不一，本題以清代海防為線索，定位現存砲臺場址。",
    "src": "https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016",
    "label": "交通部觀光署（含座標）",
    "lesson": {
      "fact": "清代砲臺不是戰後才有的軍事建物；不同年代的海防思考，都在澎湖留下痕跡。",
      "key": "澎湖位於重要海上航道，也因此留下許多防禦工事。",
      "src": "https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016",
      "label": "交通部觀光署（含座標）"
    },
    "difficulty": 3,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "砲臺",
      "locationPrecision": "official-point",
      "locationNote": "採觀光署 23.564167,119.48972。",
      "factNote": "官方資料有1887興建、1888或1889完工歧異，移除唯一精確年宣稱。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tad.gov.tw/m1.aspx?id=2139&sNo=0001016"
    }
  },
  {
    "id": "kinmen-battle",
    "c": "history",
    "region": "islands",
    "county": "金門縣",
    "year": "1949",
    "title": "1949 年古寧頭戰役是戰後兩岸軍事史的重要事件。紀念這場戰役的「古寧頭戰史館」在哪裡？",
    "name": "金門金寧・古寧頭戰史館",
    "lat": 24.482975,
    "lng": 118.32093,
    "story": "1949 年 10 月古寧頭一帶發生戰事，後來設立古寧頭戰史館，保存戰史文物。此題猜的是戰史館，而不是全戰場範圍。",
    "src": "https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126",
    "label": "交通部觀光署（含座標）",
    "lesson": {
      "fact": "古寧頭戰役涉及金門西北部多處地點，戰史館本身是後來設置的紀念場館。",
      "key": "這題要找的是「戰史館」，不是把整個戰場縮成一個圖釘。",
      "src": "https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126",
      "label": "交通部觀光署（含座標）"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "戰史館",
      "locationPrecision": "official-point",
      "locationNote": "採觀光署 24.482975,118.32093；非1949全戰場。",
      "factNote": "保留1949事件年，館舍為後設紀念場所。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tad.gov.tw/m1.aspx?id=C100_216&sNo=0001126"
    }
  },
  {
    "id": "matsu88",
    "c": "history",
    "region": "islands",
    "county": "連江縣",
    "year": "戰地時期",
    "title": "馬祖有一處由戰備坑道改為酒窖的著名景點，因落成時適逢蔣中正 88 歲生日而命名。它在哪裡？",
    "name": "馬祖南竿・八八坑道",
    "lat": 26.160305,
    "lng": 119.95324,
    "story": "八八坑道原是山洞，後經軍方擴建，曾作戰備與電信用途，最後由馬祖酒廠使用。名稱源於落成年份的特殊紀念。",
    "src": "https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127",
    "label": "交通部觀光署（含座標）",
    "lesson": {
      "fact": "八八坑道曾經作為戰車坑道與電信設施，後來才成為儲酒的場所。",
      "key": "同一處空間，會隨著戰地任務改變而出現全新用途。",
      "src": "https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127",
      "label": "交通部觀光署（含座標）"
    },
    "difficulty": 3,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "坑道",
      "locationPrecision": "official-point",
      "locationNote": "採觀光署 26.160305,119.95324。",
      "factNote": "官方可核對命名及用途；未直接佐證1974，年份改戰地時期。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tad.gov.tw/m1.aspx?id=10447&sNo=0001127"
    }
  },
  {
    "id": "quake",
    "c": "social",
    "region": "central",
    "county": "臺中市",
    "year": "1999",
    "title": "九二一地震後，某國中毀損校舍和隆起操場被原地保存，成為今天的地震教育園區。在哪裡？",
    "name": "臺中霧峰・921 地震教育園區",
    "lat": 24.043728,
    "lng": 120.696324,
    "story": "原光復國中的斷層錯動、受損校舍與操場經保存，成為防災與震災記憶教育基地。",
    "src": "https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place",
    "label": "國家文化記憶庫",
    "lesson": {
      "fact": "受地震破壞的校舍與操場成為原址保存的教材，讓地表錯動看得見。",
      "key": "地表的高低落差不是造景，而是一堂看得見的防災課。",
      "src": "https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place",
      "label": "國家文化記憶庫"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "原址保存園區",
      "locationPrecision": "official-point",
      "locationNote": "採記憶庫 24.043728,120.696324。",
      "factNote": "國中校址保存；冷知識移除未重新核實的精確隆起高度。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://tcmb.culture.tw/zh-tw/detail?id=148080&indexCode=Culture_Place"
    }
  },
  {
    "id": "formosa",
    "c": "social",
    "region": "south",
    "county": "高雄市",
    "year": "1979",
    "title": "1979 年美麗島事件中，民主運動群眾在高雄「大圓環」一帶集會。現在這裡是哪座捷運站？",
    "name": "高雄・美麗島站（原大圓環）",
    "lat": 22.63141865,
    "lng": 120.30196552,
    "story": "1979 年世界人權日，高雄大圓環一帶的集會和衝突成為臺灣民主轉型的重要事件。答案定位大圓環一帶。",
    "src": "https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861",
    "label": "高雄市交通局：追公車的記憶",
    "lesson": {
      "fact": "1979 年美麗島事件發生在高雄大圓環一帶；今天可以用捷運美麗島站認出這片街區。",
      "key": "現代交通地標的下方，可能就疊著一段社會運動的記憶。",
      "src": "https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861",
      "label": "高雄市交通局：追公車的記憶"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "原大圓環",
      "locationPrecision": "approximate-site",
      "locationNote": "以美麗島站／中山中正路口為概略定位；非原雜誌社。",
      "factNote": "原來源137為雜誌社服務處，改交通局歷史文獻。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.tbkc.gov.tw/FileOutput/Page/%E5%85%AC%E8%BB%8A%E5%A5%97%E6%9B%B82%E8%BF%BD%E5%85%AC%E8%BB%8A%E7%9A%84%E8%A8%98%E6%86%B6%28%E5%85%A8%29-%E5%96%AE%E9%A0%81-%E5%90%88%E4%BD%B5.pdf?id=bd57dd88-361f-43ea-93e0-7e0fa8fd9861"
    }
  },
  {
    "id": "lily",
    "c": "social",
    "region": "north",
    "county": "臺北市",
    "year": "1990",
    "title": "1990 年「野百合學運」學生聚集一座大型公共廣場，要求民主改革。那座廣場在哪裡？",
    "name": "臺北・中正紀念堂廣場",
    "lat": 25.034,
    "lng": 121.52095,
    "story": "學生與民眾在中正紀念堂廣場靜坐，提出政治改革要求。此地成為 1990 年代民主運動的重要象徵。",
    "src": "https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS",
    "label": "國家文化記憶庫",
    "lesson": {
      "fact": "野百合學運發生在今天中正紀念堂的廣場，而不只是在校園內討論改革。",
      "key": "公共廣場曾是不同世代表達社會訴求的重要舞臺。",
      "src": "https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS",
      "label": "國家文化記憶庫"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "廣場",
      "locationPrecision": "approximate-site",
      "locationNote": "中正紀念堂廣場概略中心點；非紀念堂建物。",
      "factNote": "1990年3月、廣場靜坐及訴求可核對。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://tcmb.culture.tw/zh-tw/detail?id=28310051057&indexCode=MOCCOLLECTIONS"
    }
  },
  {
    "id": "xiaolin",
    "c": "social",
    "region": "south",
    "county": "高雄市",
    "year": "2009",
    "title": "2009 年莫拉克風災使一座山村遭土石掩埋。後來當地成立紀念公園，銘記 462 位罹難村民。在哪裡？",
    "name": "高雄甲仙・小林村紀念公園",
    "lat": 23.1646,
    "lng": 120.6354,
    "story": "2009 年 8 月 9 日小林村因土石崩落遭受重大災難。2012 年建成紀念公園，供居民與社會追思並記取防災教訓。本題定位紀念公園附近。",
    "src": "https://khh.travel/zh-tw/attractions/detail/52/",
    "label": "高雄旅遊網",
    "lesson": {
      "fact": "2009 年莫拉克風災後設立的小林村紀念公園，是災後追思與記憶的場所。",
      "key": "本題插旗的是紀念公園，不等於災前整座聚落的範圍。",
      "src": "https://khh.travel/zh-tw/attractions/detail/52/",
      "label": "高雄旅遊網"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "紀念公園",
      "locationPrecision": "approximate-site",
      "locationNote": "以小林村原址南側高地紀念公園概略點定位；非災前村落中心。",
      "factNote": "462人、2009災難與2012公園啟用可核對。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://khh.travel/zh-tw/attractions/detail/52/"
    }
  },
  {
    "id": "baseball01",
    "c": "sports",
    "region": "north",
    "county": "臺北市",
    "year": "2001",
    "title": "2001 年世界盃棒球賽，中華隊打敗日本拿下季軍，陳金鋒兩發全壘打。這場球在哪座棒球場？",
    "name": "臺北・天母棒球場",
    "lat": 25.114639,
    "lng": 121.535167,
    "story": "2001 年 11 月 18 日，中華隊在天母棒球場擊敗日本，奪得世界盃棒球賽季軍。",
    "src": "https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf",
    "label": "臺北畫刊 585：陳金鋒專訪",
    "lesson": {
      "fact": "2001 年世界盃棒球季軍戰，中華隊在天母棒球場擊敗日本，陳金鋒擊出兩發全壘打。",
      "key": "經典運動賽事，也會讓一座球場成為集體記憶。",
      "src": "https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf",
      "label": "臺北畫刊 585：陳金鋒專訪"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "球場",
      "locationPrecision": "approximate-site",
      "locationNote": "沿用天母棒球場場地概略點，非入口。",
      "factNote": "原球場資訊不足佐證賽事，補臺北畫刊專訪。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www-ws.gov.taipei/001/Upload/public/MMO/READ/585_01.pdf"
    }
  },
  {
    "id": "worldgames09",
    "c": "sports",
    "region": "south",
    "county": "高雄市",
    "year": "2009",
    "title": "2009 年高雄世界運動會的開、閉幕典禮，在一座擁有太陽能屋頂的國際級場館登場。它在哪裡？",
    "name": "高雄左營・國家體育場",
    "lat": 22.70241,
    "lng": 120.29463,
    "story": "高雄國家體育場是 2009 高雄世運重要場館，以開口式結構與太陽能屋頂聞名。",
    "src": "https://khh.travel/zh-tw/attractions/detail/164/",
    "label": "高雄旅遊網",
    "lesson": {
      "fact": "2009 高雄世界運動會的主要場館之一，有著非常醒目的太陽能屋頂。",
      "key": "運動建築的設計，也能代表一個城市當時的國際能見度。",
      "src": "https://khh.travel/zh-tw/attractions/detail/164/",
      "label": "高雄旅遊網"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "體育場",
      "locationPrecision": "approximate-site",
      "locationNote": "世運大道100號場館概略中心點。",
      "factNote": "2009開閉幕與太陽能屋頂可核對。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://khh.travel/zh-tw/attractions/detail/164/"
    }
  },
  {
    "id": "universiade17",
    "c": "sports",
    "region": "north",
    "county": "臺北市",
    "year": "2017",
    "title": "2017 年臺北世界大學運動會盛大開幕。開幕典禮在哪座田徑場舉行？",
    "name": "臺北松山・臺北田徑場",
    "lat": 25.04944,
    "lng": 121.55111,
    "story": "2017 年 8 月 19 日，臺北世大運開幕典禮在臺北田徑場舉行。",
    "src": "https://travel.taipei/zh-tw/event-calendar/details/8895",
    "label": "臺北旅遊網：世大運開幕",
    "lesson": {
      "fact": "2017 年臺北世大運開幕場地是臺北田徑場，不是同在臺北的其他大型室內場館。",
      "key": "同一場國際賽，開幕典禮與不同項目可能分散於多座場館。",
      "src": "https://travel.taipei/zh-tw/event-calendar/details/8895",
      "label": "臺北旅遊網：世大運開幕"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "田徑場",
      "locationPrecision": "approximate-site",
      "locationNote": "沿用臺北田徑場概略點；非小巨蛋。",
      "factNote": "來源從首頁改為2017/8/19活動頁。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://travel.taipei/zh-tw/event-calendar/details/8895"
    }
  },
  {
    "id": "cpbl90",
    "c": "sports",
    "region": "north",
    "county": "臺北市",
    "year": "1990",
    "title": "中華職棒元年開幕戰在一座現已拆除的棒球場舉行，原址後來蓋了臺北小巨蛋。這個地方在哪裡？",
    "name": "臺北・舊臺北市立棒球場",
    "lat": 25.05065,
    "lng": 121.55035,
    "story": "1990 年 3 月 17 日，中華職棒首場比賽在臺北市立棒球場開打；該址後來改建為臺北小巨蛋。",
    "src": "https://www.th.gov.tw/Epaper_Content/238/7969/",
    "label": "國史館臺灣文獻館：職棒成立經過",
    "lesson": {
      "fact": "中華職棒元年開幕戰使用的臺北市立棒球場已拆除，原址後來興建臺北小巨蛋。",
      "key": "城市景觀會改變，但同一塊土地可以留下跨世代的運動故事。",
      "src": "https://www.th.gov.tw/Epaper_Content/238/7969/",
      "label": "國史館臺灣文獻館：職棒成立經過"
    },
    "difficulty": 3,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "已拆球場原址",
      "locationPrecision": "approximate-site",
      "locationNote": "以今日小巨蛋地塊概略點定位，不宣稱現存棒球場。",
      "factNote": "原404來源改文獻館具日期／場地記錄。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.th.gov.tw/Epaper_Content/238/7969/"
    }
  },
  {
    "id": "intercontinental",
    "c": "sports",
    "region": "central",
    "county": "臺中市",
    "year": "2023",
    "title": "2023 年世界棒球經典賽 A 組賽事在臺灣登場，多場比賽都在臺中一座大型棒球場舉行。是哪裡？",
    "name": "臺中北屯・洲際棒球場",
    "lat": 24.2001,
    "lng": 120.6843,
    "story": "2023 年世界棒球經典賽 A 組比賽在臺中洲際棒球場進行，球迷的加油聲成為當年熱門記憶。",
    "src": "https://www.mlb.com/world-baseball-classic/2023-bracket-standings",
    "label": "WBC 官方：2023 年分組與賽果",
    "lesson": {
      "fact": "2023 年世界棒球經典賽 A 組賽事在臺中洲際棒球場舉行。",
      "key": "一座球場能承載不同年代、不同國際賽事的球迷記憶。",
      "src": "https://www.mlb.com/world-baseball-classic/2023-bracket-standings",
      "label": "WBC 官方：2023 年分組與賽果"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "球場",
      "locationPrecision": "approximate-site",
      "locationNote": "沿用臺中洲際棒球場場內概略點。",
      "factNote": "來源改固定2023賽事頁，避免現屆賽事首頁。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.mlb.com/world-baseball-classic/2023-bracket-standings"
    }
  },
  {
    "id": "chengching",
    "c": "sports",
    "region": "south",
    "county": "高雄市",
    "year": "1999",
    "title": "1999 年啟用、長年舉辦職棒賽事的南台灣大型棒球場，緊鄰一座知名風景區。它在哪裡？",
    "name": "高雄鳥松・澄清湖棒球場",
    "lat": 22.6561,
    "lng": 120.3563,
    "story": "澄清湖棒球場於 1999 年啟用，是南台灣重要職棒場地與國際賽事場館。",
    "src": "https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22",
    "label": "高雄市鳥松區公所：其他設施",
    "lesson": {
      "fact": "澄清湖棒球場 1999 年啟用，鄰近知名的澄清湖風景區。",
      "key": "臺灣職棒歷史不是只有北部球場，南臺灣也有自己的棒球地標。",
      "src": "https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22",
      "label": "高雄市鳥松區公所：其他設施"
    },
    "difficulty": 2,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "球場",
      "locationPrecision": "approximate-site",
      "locationNote": "鳥松區澄清湖棒球場概略中心點，非湖心。",
      "factNote": "1999首賽事依鳥松區公所；移除只指首頁的連結。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://niaosong.kcg.gov.tw/cp.aspx?n=D03E02AAC03A7B22"
    }
  },
  {
    "id": "taoyuanball",
    "c": "sports",
    "region": "north",
    "county": "桃園市",
    "year": "2009",
    "title": "2009 年落成、後來成為桃園主場球迷熱情應援據點的國際棒球場，位於哪裡？",
    "name": "桃園青埔・樂天桃園棒球場",
    "lat": 25.0015,
    "lng": 121.2026,
    "story": "桃園國際棒球場於 2009 年落成，後來成為中華職棒桃園主場的重要場地。",
    "src": "https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738",
    "label": "桃園市體育局：桃園國際棒球場",
    "lesson": {
      "fact": "桃園國際棒球場於 2009 年落成，後來成為桃園職棒球迷的重要主場。",
      "key": "同一座球場，可能因不同時期的球隊與球迷而有不同稱呼。",
      "src": "https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738",
      "label": "桃園市體育局：桃園國際棒球場"
    },
    "difficulty": 1,
    "audit": {
      "checkedAt": "2026-10-26",
      "factStatus": "reviewed",
      "locationType": "球場",
      "locationPrecision": "approximate-site",
      "locationNote": "青埔領航北路一段1號球場概略點。",
      "factNote": "2009/12/12完工、12/13啟用依體育局。",
      "sourceAvailability": "readable",
      "coordinateSource": "https://www.dst.tycg.gov.tw/cp.aspx?Create=1&n=11738"
    }
  }
];
export const LESSONS=Object.fromEntries(Q.map(q=>[q.id,q.lesson]));
