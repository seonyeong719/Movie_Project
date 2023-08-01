import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyles from "./Styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import theme from "./Styles/theme";

function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
