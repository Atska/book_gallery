import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">News</Typography>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;