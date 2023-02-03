import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";
import Layouts from "./layouts";
import store from "./store";
import * as history from "history";

const cssUrl = "/css";

const themes = {
  dark: `${cssUrl}/dark-theme.css`,
  light: `${cssUrl}/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter history={history.createBrowserHistory()}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint={document.getElementById("inject-styles-here")}
          >
            <Layouts />
          </ThemeSwitcherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
