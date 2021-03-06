import React, { useEffect, useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import BookCard from "./BookCard";
import Grid from "@material-ui/core/Grid";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

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
  const classes = useStyles();
  const [data, setData] = useState<any>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const options: AxiosRequestConfig = {
          method: "get",
          url: "http://localhost:3001/books",
        };

        const result: AxiosResponse<any> = await axios(options);
        setData(result.data);
      } catch (error: any) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, [data]); //data

  return (
    <div data-testid="books">
      <Grid container className={classes.root}>
        {data.map((bookData: any) => {
          return (
            <BookCard
              key={bookData.book_id}
              author={bookData.author}
              blurp={bookData.blurp}
              isbn={bookData.isbn}
              series={bookData.series}
              title={bookData.title}
              link={bookData.link}
              published={bookData.published}
              book_id={bookData.book_id}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Books;
