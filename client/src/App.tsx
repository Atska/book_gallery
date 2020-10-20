import React from "react";
import Books from "./components/Books";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Books />
      </div>
    </ThemeProvider>
  );
}

export default App;
