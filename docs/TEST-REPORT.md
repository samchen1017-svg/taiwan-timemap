# v3.0 驗證記錄

測試日期：2026-10-26（Asia/Taipei）。以 b626bc8 為基礎，macOS ARM64、Node 24.22.1、Playwright 1.62.1。使用本機 HTTP server；不是測試 production 站。

## 結果

- 單元測試：6 / 6 通過。
- Chromium + WebKit 瀏覽器斷言：85 / 85 通過，詳細名稱見 [TEST-RESULTS.json](TEST-RESULTS.json)。
- 靜態建置：成功產生 dist/；根目錄與 `/taiwan-timemap/` 子路徑均通過瀏覽器測試。
- axe-core 4.11.0：答題畫面 WCAG 2 A/AA、2.1 AA 自動規則零違規（兩引擎）。此為自動基本檢查，非完整無障礙認證。
- 已目視檢視手機完整截圖：翡翠地圖、題目、選點、確認、歷史區塊無水平溢出。

## 覆蓋

開始每日五題、逐題結果與知識來源、分數加總、五張回顧、完成後重整、答後知識卡恢復、自由練習、歷史不重複入帳、分享不洩露答案、鍵盤插旗、臺灣午夜正在遊玩的題目維持不變並提示換日。

b626bc8 回歸：兩引擎桌面滾輪上下捲頁、操作模式中仍捲頁、＋／－縮放、拖曳不插旗；Chromium 真實合成 touch 輸入測上下滑頁、明確模式拖曳、雙指縮放、關閉模式恢復滑頁、手勢後可插旗。WebKit iPhone 13 模擬測 touch-action、點擊插旗、版面與按鈕尺寸。移動模式點擊不插旗。幾何圖形節點在移動過程保持同一個 DOM 節點。

圖資請求中斷後保留22縣市並能計分；損壞存檔與儲存 quota 失敗時仍可作答且提示；每日選題180天遍歷涵蓋全21題、每日五區各一題；日期換日、計分範圍、v2存檔、連勝中斷／昨天完成等。

## 執行

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm exec playwright install chromium webkit
pnpm test:e2e
```

本機既有瀏覽器使用 `PLAYWRIGHT_BROWSERS_PATH=/private/tmp/timemap-browsers`，CI會安裝同版本瀏覽器。結果、axe明細與手機截圖寫入忽略的 test-output/；CI以artifact保存。沒有把本機快取路徑寫死在測試程式。

## 限制與後續

沒有實體 iPhone/Safari 或 Android 真機驗收，也未進行 VoiceOver 人工走查。WebKit 模擬無法由 Playwright 合成完整雙指手勢；該部分用Chromium觸控協定驗證。沒有宣稱低階手機幀率達到固定數值。圖資為2021快照；概略場址不等於測量座標。21題中東部僅2題，輪替較快；未擴充到40–60題。CI遠端執行結果與Cloudflare預覽須於PR確認，不以本機通過代稱遠端通過。

未來優先：實體iPhone與VoiceOver驗收；逐批增加東部、離島及非北部社會／體育故事；根據真人作答調整難度；建立來源頁面定期語意與失效檢視。
