
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: 40 }}>
      <h1>Bienvenue sur Chut 👋</h1>
      <p>Application minimaliste déployée via GitHub Pages.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
