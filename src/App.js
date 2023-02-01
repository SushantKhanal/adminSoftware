import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoginView from "./authentication/LogInView";

const themes = {
  dark: "../public/css/dark-theme.css",
  light: `../public/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <LoginView />
    </div>
  );
}

export default App;
