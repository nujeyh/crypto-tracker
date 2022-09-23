import GlobalStyle from "./styles/GlobalStyle";
import Routing from "./Routing";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
