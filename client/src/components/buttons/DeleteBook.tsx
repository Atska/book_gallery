import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

interface Props {
  book_id: number;
}

const DeleteButton = (props: Props) => {
  const { book_id } = props;
  let url = `http://localhost:3001/books/${book_id}`;
  const handleClick = async (): Promise<void> => {
    try {
      const response = await axios.delete(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div data-testid="delete-btn">
      <Button onClick={handleClick}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default DeleteButton;
