import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoginView from "./authentication/LogInView";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";
import Layouts from "./layouts";
import store from "./store";

const cssUrl = "../public/css";

const themes = {
  dark: `${cssUrl}/dark-theme.css`,
  light: `${cssUrl}/light-theme.css}`,
};

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <ThemeSwitcherProvider
          themeMap={themes}
          defaultTheme={THEME_CONFIG.currentTheme}
          insertionPoint="styles-insertion-point"
        >
          <Layouts />
        </ThemeSwitcherProvider>
      </BrowserRouter> */}
      <Provider store={store}>
        <LoginView />
      </Provider>
    </div>
  );
}

export default App;
