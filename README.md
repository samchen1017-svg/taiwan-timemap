# 島嶼時光 Taiwan TimeMap 3.1

每日五題的臺灣歷史、社會、文化與體育地圖遊戲。45 段故事，五區各一題；無登入、無後端、無付費服務。

## 開發與測試

Node 24、pnpm 11：

```sh
pnpm install --frozen-lockfile
pnpm dev                       # http://127.0.0.1:4173
pnpm test                      # dates, deterministic sets, scoring, schema, storage
pnpm exec playwright install chromium webkit
pnpm test:e2e                  # desktop + iPhone emulation + axe on both engines
pnpm build                     # dist/ static output
node scripts/audit-sources.js   # optional network availability scan; not fact verification
```

任何靜態 HTTP server 均可提供根目錄或 `dist/`。Cloudflare Pages 使用 `pnpm build`、輸出 `dist`，或沿用根目錄直出。GitHub Pages 的 `/taiwan-timemap/` 子路徑亦受測；所有資源採相對路徑。

## 題庫與每日規則

45 題（新增24）：北6、中10、南11、東9、離島9。各題含原創故事、學習卡、公開來源、WGS84場址、1–3難度、topic、audit及locationPrecision。見 [逐題稽核](docs/QUESTION-AUDIT.md)。難度為編輯評估，座標為指定場址代表點，非測量或歷史事件範圍。

每日依 Asia/Taipei 日期固定同一組五題，五個區域各一題。區域袋輪替，每袋取前四個候選，最多評估1024種組合，優先題材、難度與topic多樣性。730日回歸驗證每天三種難度、至少三類主題、同類最多兩題、棒球最多一題，且全45題皆輪到。自由練習採時間種子，不影響連勝。擴充後尚未開局的日題會依新題庫重排；已保存的v2/v3題目ID保持不變。

計分沿用 `round(100 × exp(-公里 / 85))`，每題最多100分。跨午夜不更換進行中的題組；完成後回首頁取得新日題。

## 手機與地圖

保留v3.0已驗收的全螢幕Map Picker：單指拖曳、雙指縮放、輕觸插旗，完成選點後返回題目確認。沒有操作模式切換。快速定位縣市也可在全螢幕地圖使用。支援Esc返回、焦點循環與焦點還原；答案地圖唯讀。桌面直接操作地圖，滾輪保留捲頁行為。

首頁不下載512KB詳細圖資，也不建立縣市／鄉鎮幾何。開局先使用內建22縣市，再於首幀後載入隨站詳細圖資；368鄉鎮SVG路徑等首次放大後才建立，手勢中不建立幾何。拖曳每幀只改viewBox，放開後才更新圖釘與標籤；手機停用裝飾紋理與模糊陰影。移除無用途的getBBox同步版面讀取與大型localStorage圖資複製。詳細圖資失敗仍能操作、插旗與計分。

圖資保留2021.9.20快照及MIT授權，不依賴地圖CDN、字型服務或圖片。這是視覺地形風格，非高程。效能比較見 [量測](docs/PERFORMANCE.json)，不宣稱實機FPS。

## 學習與本機紀錄

答後先呈現一個重點與記憶提示，背景、定位依據與核對日期可展開。總結保留五張故事卡；最近七筆歷史日期可展開複習故事。紀錄最多保留365天，當日只記一次；昨日完成仍可續算連勝。紀錄留在目前瀏覽器，沒有跨裝置同步。

v2/v3合法紀錄相容；壞檔、null答案、異常歷史項目與儲存空間不足均不阻擋遊玩。無法續存時明確提示。無Web Share／剪貼簿時顯示可手動複製文字。

## 交付

本分支只供PR與Cloudflare branch preview驗收，不合併main。見 [changelog](docs/CHANGELOG-v3.1.md)、[驗收與限制](docs/TEST-REPORT.md)。
