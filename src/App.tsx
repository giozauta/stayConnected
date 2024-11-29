import "./App.css";
import Layout from "./layouts";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomeView from "./pages/home/views/index";
import Registration from "./pages/registration"; // Keep Registration import
import NotFoundPage from "./pages/404";
import Login from "./pages/login/Login"; // Keep Login import
import Profile from "./pages/profile"; //keep Profile import
import { ThemeProvider } from "@/components/theme-provider";

// lazy components can be added later

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeView />} />
            <Route path="signUp" element={<Registration />} />{" "}
            <Route path="login" element={<Login />} /> {/* Route for login */}
            <Route path="signUp" element={<Registration />} />
            <Route path="profile" element={<Profile />} />
            {/* Route for profile */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
