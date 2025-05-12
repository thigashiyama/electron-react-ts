// Electron から必要なモジュールをインポート
import { app, BrowserWindow } from "electron";
// Node.js の path モジュールを使ってパス解決 *はワイルドカード
import * as path from "path";

// ウィンドウ生成関数（アプリ起動時に一度だけ呼び出す）
const createWindow = () => {
  // 新しいブラウザウィンドウを作成
  const win = new BrowserWindow({
    width: 800, // ウィンドウの横幅
    height: 600, // ウィンドウの高さ
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Preloadスクリプト（レンダラーとNodeの橋渡し）
    },
  });

  // 開発時は React の開発サーバーを読み込む
  win.loadURL("http://localhost:3000");
  // 製品版では `win.loadFile('index.html')` などでビルド後ファイルを読み込む
};

// アプリが準備できたらウィンドウを作成
app.whenReady().then(() => {
  createWindow();

  // macOS: Dockアイコンをクリックしてウィンドウがなければ再作成
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 全てのウィンドウが閉じられた時の動作
app.on("window-all-closed", () => {
  // macOS 以外ではアプリを終了する（macではDockに残る）
  if (process.platform !== "darwin") app.quit();
});
