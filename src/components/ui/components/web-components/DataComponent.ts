import React from "react";
import ReactDOM from "react-dom/client";
import { DataCard } from "../../containers/DataTable";
import styles from "./style.css?inline";

customElements.define(
  "data-card",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(styles);
      this.shadowRoot!.adoptedStyleSheets = [styleSheet];
      const mountPoint = document.createElement("div");
      this.shadowRoot?.appendChild(mountPoint);
      const root = ReactDOM.createRoot(mountPoint);
      root.render(
        React.createElement(DataCard, { data: this.getAttribute("data") })
      );
    }
  }
);
