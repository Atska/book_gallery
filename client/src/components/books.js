import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../utils/theme.js";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import Collapse from "@material-ui/core/Collapse";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    },
  },
  table: {},
  media: {
    height: 500,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
};

class Books extends Component {
  constructor(props) {
    super();
    this.state = { isExpanded: false };

    this.handleExpandclick = this.handleExpandclick.bind(this);
  }

  handleExpandclick() {
    console.log(this.state.isExpanded);
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const { classes } = this.props;
    const { isExpanded } = this.state;

    function createData(name, calories) {
      return { name, calories };
    }

    const rows = [
      createData("Frozen yoghurt", 159),
      createData("Ice cream sandwich", 237),
      createData("Eclair", 262),
      createData("Cupcake", 305),
      createData("Gingerbread", 356),
    ];

    return (
      <Grid container classes={classes.root}>
        <Box className={classes.root}>
          <Card>
            <CardMedia
              className={classes.media}
              src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
              image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
            />
            <CardContent>
              <Box align="center">
                <Typography variant="h6">A Little Hatred</Typography>
                <Typography variant="subtitle1">
                  (The Age of Madness #1)
                </Typography>
                <Typography variant="subtitle2">By Joe Abercrombie</Typography>
              </Box>
              <Box align="center">
                <Tooltip title="Update data">
                  <Button>
                    <UpdateIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete data">
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Open for more Infomation">
                  <Button
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: isExpanded,
                    })}
                    onClick={this.handleExpandclick}
                    aria-label="show more"
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </Tooltip>
              </Box>
            </CardContent>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography display="inline" paragraph>
                The chimneys of industry rise over Adua and the world seethes
                with new opportunities. But old scores run deep as ever. On the
                blood-soaked borders of Angland, Leo dan Brock struggles to win
                fame on the battlefield, and defeat the marauding armies of
                Stour Nightfall. He hopes for help from the crown. But King
                Jezal's son, the feckless Prince Orso, is a man who specializes
                in disappointments. Savine dan Glokta - socialite, investor, and
                daughter of the most feared man in the Union - plans to claw her
                way to the top of the slag-heap of society by any means
                necessary. But the slums boil over with a rage that all the
                money in the world cannot control. The age of the machine dawns,
                but the age of magic refuses to die. With the help of the mad
                hillwoman Isern-i-Phail, Rikke struggles to control the
                blessing, or the curse, of the Long Eye. Glimpsing the future is
                one thing, but with the guiding hand of the First of the Magi
                still pulling the strings, changing it will be quite another...
              </Typography>
              <Box align="center">
                <Tooltip title="Open for more Infomation">
                  <Button
                    onClick={this.handleExpandclick}
                    aria-label="show more"
                  >
                    <ArrowDropUpIcon />
                  </Button>
                </Tooltip>
              </Box>
            </Collapse>
          </Card>
          {/* CARD2 */}
          <Card>
            <CardMedia
              className={classes.media}
              src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/morning_star_by_pierce_brown.jpg"
              image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/morning_star_by_pierce_brown.jpg"
              title="Morning Star"
            />
            <CardContent>
              <Box align="center">
                <Typography variant="h6">Morning Star</Typography>
                <Typography variant="subtitle1">
                  (Red Rising Saga #1)
                </Typography>
                <Typography variant="subtitle2">By Joe Abercrombie</Typography>
              </Box>
              <Box align="center">
                <CardActionArea>
                  <Tooltip title="Update data">
                    <Button>
                      <UpdateIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete data">
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Open for more Infomation">
                    <Button
                      onClick={this.handleExpandclick}
                      aria-label="show more"
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </Tooltip>
                </CardActionArea>
              </Box>
            </CardContent>
            <Collapse timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </Collapse>
          </Card>
          {/* CARD2 */}
          <Card>
            <CardMedia
              className={classes.media}
              src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/the_three_body_problem_by_cixin_liu.jpg"
              image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/the_three_body_problem_by_cixin_liu.jpg"
              title="Morning Star"
            />
            <CardContent>
              <Box align="center">
                <Typography variant="h6">Morning Star</Typography>
                <Typography variant="subtitle1">
                  (Red Rising Saga #1)
                </Typography>
                <Typography variant="subtitle2">By Joe Abercrombie</Typography>
              </Box>
              <Box align="center">
                <CardActionArea>
                  <Tooltip title="Update data">
                    <Button>
                      <UpdateIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete data">
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Open for more Infomation">
                    <Button
                      onClick={this.handleExpandclick}
                      aria-label="show more"
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </Tooltip>
                </CardActionArea>
              </Box>
            </CardContent>
            <Collapse timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </Collapse>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Books);
