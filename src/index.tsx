import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const rootNode = document.getElementById("root");

if (!rootNode) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
