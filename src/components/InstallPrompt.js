import React, { useState } from "react";
import logo from "../assets/logoBg.png";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  });

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      {deferredPrompt && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            padding: "16px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "0 -2px 4px rgba(0,0,0,.1)",
            animationName: "slide-up",
            animationDuration: ".75s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt='Logo'
              style={{
                height: "7.5vh",
                width: "auto",
                borderRadius: "50%",
                marginRight: 16,
              }}
            />
            <div>
              <h3 style={{ marginBottom: 2, marginTop: 0 }}>
                Install React PWA
              </h3>
              <button onClick={handleInstallClick}>
                Install <span style={{ fontWeight: 600 }}>&#8681;</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default InstallPrompt;
