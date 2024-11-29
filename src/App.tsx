import "./App.css";
import Layout from "./layouts";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import Registration from "./pages/registration";
import NotFoundPage from "./pages/404";

// lazy კომპონენტები მოგვიანებით გავუწეროთ

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
