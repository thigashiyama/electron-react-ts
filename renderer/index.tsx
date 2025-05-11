import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//ReactDOMを使用してhtmlのroot部を定義
const root = ReactDOM.createRoot(document.getElementById("root")!);
//root部にApp.tsxのexportを使用
root.render(<App />);
