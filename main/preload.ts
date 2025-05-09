// このファイルは「レンダラープロセス」に渡されるNodeとの橋渡しスクリプト

import { contextBridge } from "electron";

// 今は何も expose していないが、後でAPIを追加する
contextBridge.exposeInMainWorld("api", {
  // 今後ここに公開したい関数を追加していく
});
