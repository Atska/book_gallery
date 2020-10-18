import React from "react";
import Books from "./components/books.js";
import NavBar from "./components/NavBar.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme.js";

function App() {
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
