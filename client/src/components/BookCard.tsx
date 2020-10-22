import React, { useState } from "react";
import clsx from "clsx";
// MaterialUI
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// ICONS
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
// Styles
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 500,
    maxHeight: 500,
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
}));

interface Props {
  title: string;
  author: string;
  blurp: string;
  isbn: string;
  link: string;
  published: string;
  series: string;
}

const BookCard = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const classes = useStyles();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const { title, author, blurp, isbn, link, published, series } = props;

  return (
    <Card>
      <CardMedia className={classes.media} src={link} image={link} />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{series}</Typography>
          <Typography variant="subtitle2">By {author}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
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
                [classes.expandOpen]: expanded,
              })}
              aria-label="show more"
              onClick={() => handleExpandClick()}
            >
              <ArrowDropDownIcon />
            </Button>
          </Tooltip>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Published:
                </TableCell>
                <TableCell align="right">{published.slice(0, 10)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  ISBN:
                </TableCell>
                <TableCell align="right">{isbn}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography display="inline" paragraph>
          {blurp}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Tooltip title="Open for more Infomation">
            <Button onClick={() => handleExpandClick()} aria-label="show more">
              <ArrowDropUpIcon />
            </Button>
          </Tooltip>
        </Box>
      </Collapse>
    </Card>
  );
};

export default BookCard;
