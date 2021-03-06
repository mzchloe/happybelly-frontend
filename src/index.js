import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Places,
  Account,
  LandingPage,
  Favorites,
  NotFound,
} from "./pages";
import { Signup, Login, EditPlace, PlaceForm } from "./components";
import { AuthContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* These are public routes */}
            <Route index element={<LandingPage />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            {/* These is protected routes */}
            <Route path="home" element={<Home />} />
            <Route path="places" element={<Places />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="add" element={<PlaceForm />} />
            <Route path="editPlace/:id" element={<EditPlace />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
