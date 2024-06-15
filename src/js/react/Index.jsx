import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import { HashRouter, BrowserRouter as Router } from "react-router-dom";

// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	// <React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	// </React.StrictMode>
);
