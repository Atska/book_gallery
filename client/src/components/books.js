import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../utils/theme.js";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    "display": "flex",
    "flexWrap": "wrap",
    "flexGrow": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(40),
      height: theme.spacing(70),
    },
  },
  media: {
    height: 488,
  },
};

class Books extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container classes={classes.root}>
        <div className={classes.root}>
          <Card>
            <CardMedia
              className={classes.media}
              src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
              image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
              title="A little hatred"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" align="center">
                  A Little Hatred
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card>
            <CardMedia
              className={classes.media}
              src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/morning_star_by_pierce_brown.jpg"
              image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/morning_star_by_pierce_brown.jpg"
              title="Morning Star"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" align="center">
                  Morning Star
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Books);
