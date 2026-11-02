# 島嶼時光 Taiwan TimeMap 3.0

每日五題的臺灣歷史、社會與體育地圖遊戲。無須登入，沒有後端或付費服務。

## 開發與測試

Node 24、pnpm 11：

```sh
pnpm install --frozen-lockfile
pnpm dev                       # http://127.0.0.1:4173
pnpm test                      # pure logic, dates, storage, question schema
pnpm exec playwright install chromium webkit
pnpm test:e2e                  # desktop + iPhone 13 emulation + axe
pnpm build                     # dist/ static output
```

`index.html` 及相對路徑 ES modules 也可直接由任何靜態 HTTP server 提供；請勿以 file:// 開啟。

## 結構

- `index.html`：語意化頁面，SVG 圖層模板
- `src/styles.css`：翡翠視覺與手機版面
- `src/game.js`：UI 與答題狀態流程
- `src/logic.js`：臺灣日期、可重現每日選題、距離與分數
- `src/questions.js`：21 個完整題目／知識卡／史實場址稽核記錄
- `src/map.js`、`src/geography.js`：SVG 投影、互動、標籤與降級
- `src/storage.js`：驗證、v2 讀取相容、v3 紀錄、歷史與連勝
- `assets/`：固定版本的 MIT 圖資與來源授權
- `tests/`、`.github/workflows/ci.yml`：單元、瀏覽器與無障礙檢查

## 每日與儲存規則

每日依 Asia/Taipei 日期固定相同五題，五個區域各一題；區域袋輪替，偏好三種題材及不同難度，難度為編輯評估。小題庫中東部只有兩題，因此重複較快，尚未真人校準難度。計分沿用 v2：`round(100 × exp(-公里 / 85))`，每題最多100分。自由練習不影響連勝。

一局使用開局日期，跨午夜不換掉正在答的五題；返回首頁再開局取得新日題。每日結果、答案及知識卡可恢復。v2 合法紀錄維持原題組與分數；舊版未保存圖釘座標的已答題直接續至下一題。壞檔安全重開，儲存空間不足仍可玩並提示無法續存。本機每日歷史最多365天，同一天只計一次。連勝允許今日未完成但昨日有完成。

## 地圖與無障礙

預設手機單指捲頁、點擊插旗；開啟「移動／縮放」才接管觸控，且該模式點擊不插旗。滑鼠滾輪在所有模式均捲頁。地圖方向鍵移動、Enter或中心插旗按鈕可完成鍵盤答題。按鈕至少48px。動作減量偏好停用動畫。

縣市／鄉鎮幾何只在圖資首次解碼時建立。拖曳使用 requestAnimationFrame 改 viewBox；放開才重排標籤。鄉鎮標籤依可見範圍與碰撞距離篩選，最多60個。圖資使用隨站的2021.9.20快照，不需要CDN；載入失敗仍可使用內建22縣市、離島與縮放。圖為視覺立體效果，非高程。

## 部署與驗收

沿用既有專案與網址。Cloudflare Pages可繼續直接提供 repo 根目錄；若要用建置，指令 `pnpm build`、輸出 `dist`。GitHub Pages branch/root亦可運作，所有資源皆使用相對路徑，CI測試 `/taiwan-timemap/` 子路徑。

此分支沒有部署或合併 main 的 workflow；CI只檢查並上傳測試紀錄。Cloudflare若已啟用分支預覽，PR檢查會提供URL；不要把 production網址當本分支預覽。驗收後由維護者自行合併。

見 [題庫稽核](docs/QUESTION-AUDIT.md)、[測試記錄](docs/TEST-REPORT.md)。
