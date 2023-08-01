import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyles from "./Styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import theme from "./Styles/theme";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
