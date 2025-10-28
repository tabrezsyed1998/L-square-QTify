import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage/HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
