import "./App.css";
import Layout from "./layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";

// lazy კომპონენტები მოგვიანებით გავუწეროთ

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
