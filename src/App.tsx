import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/globalStyle";
import { router } from "@routes/index";
import ModalRoot from "./components/common/Modal";
import GlobalLoading from "./components/common/GlobalLoading";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ModalRoot />
      <GlobalStyle />
      <GlobalLoading />
    </ThemeProvider>
  );
}
