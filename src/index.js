import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";

import global_en from "./translations/en/global.json";
import global_srb from "./translations/srb/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    srb: {
      global: global_srb,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
