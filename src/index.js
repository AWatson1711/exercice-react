import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Components/Home";
import Login from "./Components/Login.jsx";
import Contact from "./Components/Contact.jsx";
import Inscription from "./Components/Inscription.jsx";
import UploadFile from "./Components/UploadFile.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Comment from "./Components/Comment.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/uploadfile" element={<UploadFile />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
