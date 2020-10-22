import { createMuiTheme, Theme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(18, 13, 43)",
      light: "rgb(18, 13, 43)",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#651fff",
      contrastText: "#D1CBF1",
    },
  },
});

export default theme;
