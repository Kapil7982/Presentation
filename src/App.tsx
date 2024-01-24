import React from "react";
import { Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import App2 from "./App2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/anylit" element={<Demo />} />
        <Route path="/" element={<App2 />} />
      </Routes>
    </>
  );
}

export default App;
