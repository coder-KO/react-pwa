import React from "react";
import logo from "./assets/logoBg.png";
import InstallPrompt from "./components/InstallPrompt";
import UpdatePrompt from "./components/UpdatePrompt";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#2B2B2B",
      }}
    >
      <img
        src={logo}
        alt="React PWA"
        style={{ width: "50%", height: "auto", maxWidth: 300 }}
      />
      <h1
        style={{
          color: "#05EDFE",
          margin: 0,
        }}
      >
        React PWA
      </h1>
      <p style={{ color: "#fff", marginTop: 2 }}>
        Barebone React PWA structure
      </p>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <InstallPrompt />
      <UpdatePrompt />
    </div>
  );
};

export default App;
