import React, { useState } from "react";
import clsx from "clsx";
import DeleteBook from "./buttons/DeleteBook";
import UpdateButton from "./buttons/UpdateBook";
// MaterialUI
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
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

export interface Props {
  title: string;
  author: string;
  blurp: string;
  isbn: string;
  link: string;
  published: string;
  series: string;
  book_id: number;
}

const BookCard = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const classes = useStyles();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const {
    title,
    author,
    blurp,
    isbn,
    link,
    published,
    series,
    book_id,
  } = props;

  return (
    <div data-testid="book-card">
      <Card>
        <CardMedia className={classes.media} src={link} image={link} />
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle1">{series}</Typography>
            <Typography variant="subtitle2">By {author}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <UpdateButton
              title={title}
              author={author}
              blurp={blurp}
              isbn={isbn}
              link={link}
              published={published}
              series={series}
              book_id={book_id}
            />

            <DeleteBook book_id={book_id} />

            <Button
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              aria-label="show more"
              onClick={() => handleExpandClick()}
            >
              <ArrowDropDownIcon />
            </Button>
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
            <Button onClick={() => handleExpandClick()} aria-label="show more">
              <ArrowDropUpIcon />
            </Button>
          </Box>
        </Collapse>
      </Card>
    </div>
  );
};

export default BookCard;
