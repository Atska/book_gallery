import React from "react";
import { Theme, makeStyles} from "@material-ui/core/styles";
import BookCard from "./BookCard"
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const Books: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
        <BookCard />
    </Grid>
  );
}

export default Books;