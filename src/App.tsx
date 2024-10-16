import { ThemeProvider } from "@mui/material";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Homepage />
      </main>
    </ThemeProvider>
  );
}

export default App;
