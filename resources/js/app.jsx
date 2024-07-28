import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "./bootstrap.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {Toaster} from 'react-hot-toast'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import NavBar from "./components/NavBar/NavBar";
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
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                    <Toaster />
                    <AppRoutes />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
