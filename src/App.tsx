import "./App.css";
import Layout from "./layouts";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import Registration from "./pages/registration"; // Keep Registration import
import NotFoundPage from "./pages/404";
import Login from "./pages/login/Login"; // Keep Login import

// lazy components can be added later

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<Registration />} />{" "}
          <Route path="login" element={<Login />} /> {/* Route for login */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
