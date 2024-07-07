import "../css/app.css";
import Routes from "@/routes.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import "./bootstrap.jsx";
// import axios from "axios";

if (document.getElementById("app")) {
    const Index = createRoot(document.getElementById("app"));

    //Checking The Existence Of The Token
    // const token = localStorage.getItem("authToken");
    // if (token) {
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // }

    Index.render(
        <React.StrictMode>
            <div>hello</div>
        </React.StrictMode>
    );
}
