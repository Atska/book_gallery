import React from "react";
//import axios, { AxiosResponse } from "axios";
// Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// Icons
import BookIcon from "@material-ui/icons/Book";

export default function AddBookButton() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log("Lul");
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Book
        <BookIcon fontSize="small" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new book. Fill out every infomation and press the add
            button.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Title"
            type="text"
            size="small"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="author"
            size="small"
            label="Author"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="series"
            size="small"
            label="Series"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="date"
            size="small"
            label="Published Date YYYY-MM-DD"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="isbn"
            size="small"
            label="ISBN"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="blurp"
            size="medium"
            label="Blurp"
            type="text"
            fullWidth
            multiline
            rows="6"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
