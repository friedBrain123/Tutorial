import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
            <App />
        </Theme>
    </React.StrictMode>
);
