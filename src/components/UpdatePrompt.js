import React, { useState, useEffect } from "react";

const UpdatePrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    }
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) {
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  setShowPrompt(true);
                  setRegistration(reg);
                }
              }
            });
          });
        }
      });
    }
  }, []);

  const handleUpdateClick = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
    setShowPrompt(false);
  };

  return (
    <div>
      {showPrompt && (
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
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3 style={{ marginBottom: 2, marginTop: 0 }}>
                Update Available
              </h3>
              <button onClick={handleUpdateClick}>
                Update <span style={{ fontWeight: 600 }}>&#x21bb;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePrompt;
