import logo from "./assets/logo.png";
import InstallPrompt from "./components/InstallPrompt";
import UpdatePrompt from "./components/UpdatePrompt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">React PWA</h3>
        <p className="version">Version: 1.1.47</p>
      </header>
      <UpdatePrompt />
      <InstallPrompt />
    </div>
  );
}

export default App;
