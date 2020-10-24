import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import axios, { AxiosRequestConfig } from "axios";

interface Props {
  book_id: number;
}

const DeleteButton = (props: Props) => {
  const { book_id } = props;
  let url = "http://localhost:3001/deleteBook";
  const handleClick = async (): Promise<void> => {
    try {
      const response = await axios.delete(url, {
        params: { book_id: book_id },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={handleClick}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
