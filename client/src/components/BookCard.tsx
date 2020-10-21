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
  book_id: number;
  cover_id: number;
  isbn: string;
  link: string;
  published: string;
  series: string;
}

const BookCard = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {
    title,
    author,
    blurp,
    book_id,
    cover_id,
    isbn,
    link,
    published,
    series,
  } = props;
  const classes = useStyles();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardMedia
        className={classes.media}
        src="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
        image="https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_little_hatred_by_joe_abercrombie.jpg"
      />
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
                  HI
                </TableCell>
                <TableCell align="right">There</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography display="inline" paragraph>
          The chimneys of industry rise over Adua and the world seethes with new
          opportunities. But old scores run deep as ever. On the blood-soaked
          borders of Angland, Leo dan Brock struggles to win fame on the
          battlefield, and defeat the marauding armies of Stour Nightfall. He
          hopes for help from the crown. But King Jezal's son, the feckless
          Prince Orso, is a man who specializes in disappointments. Savine dan
          Glokta - socialite, investor, and daughter of the most feared man in
          the Union - plans to claw her way to the top of the slag-heap of
          society by any means necessary. But the slums boil over with a rage
          that all the money in the world cannot control. The age of the machine
          dawns, but the age of magic refuses to die. With the help of the mad
          hillwoman Isern-i-Phail, Rikke struggles to control the blessing, or
          the curse, of the Long Eye. Glimpsing the future is one thing, but
          with the guiding hand of the First of the Magi still pulling the
          strings, changing it will be quite another...
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
