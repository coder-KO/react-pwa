import React, { useState } from "react";

const UpdatePrompt = () => {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setShowUpdatePrompt(true);
            }
          });
        });
      });
  });

  const handleUpdateClick = () => {
    window.location.reload();
  };

  return (
    <div>
      {showUpdatePrompt && (
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
          }}
        >
          <h3>Update Available</h3>
          <button onClick={handleUpdateClick}>
            Update <span style={{ fontWeight: 600 }}>&#10227;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdatePrompt;
