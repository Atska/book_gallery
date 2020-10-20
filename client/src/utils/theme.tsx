import { createMuiTheme, Theme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(18, 13, 43)",
      light: "rgb(18, 13, 43)",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
