import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//Appというコンポーネントを定義
const App = (): React.JSX.Element => {
  //Homeの後の"/"は自己終了タグを意味している。HomeというReact要素に子要素がない場合このような書き方となる
  //"/about"はindexから見た場合の相対パスを指定
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
