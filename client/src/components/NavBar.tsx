import React from "react";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// Styles
import { Theme, makeStyles } from "@material-ui/core/styles";
import AddBookButton from "./buttons/AddBook";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    flexGrow: 1,
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div data-testid="navbar">
      <AppBar position="static" className="AppBar">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Book Gallery
          </Typography>
          <Box
            className={classes.buttons}
            display="flex"
            alignContent="center"
            justifyContent="flex-end"
          >
            <AddBookButton />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
