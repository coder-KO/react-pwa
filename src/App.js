import React from "react";
import logo from "./assets/logoBg.png";
import InstallPrompt from "./components/InstallPrompt";
// import UpdatePrompt from "./components/UpdatePrompt";

const App = () => {
  const [updateAvailable, setUpdateAvailable] = React.useState(false);

  React.useEffect(() => {
    // listen for messages from the service worker
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "UPDATE_AVAILABLE") {
        setUpdateAvailable(true);
      }
    });
  }, []);

  // render the modal if an update is available
  const modal = updateAvailable && (
    <div className="modal">
      <div className="modal-content">
        <p>A new version of the app is available. Please refresh the page.</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );

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
        Barebone structure for a PWA using React.
      </p>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <InstallPrompt />
      {/* <UpdatePrompt /> */}
      {modal}
    </div>
  );
};

export default App;
