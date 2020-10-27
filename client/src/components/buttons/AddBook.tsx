import React from "react";
import { Formik } from "formik";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// Icons
import BookIcon from "@material-ui/icons/Book";

interface SubmitData {
  title: string;
  author: string;
  series: string;
  date: string;
  isbn: string;
  link: string;
  blurp: string;
}

export default function AddBookButton() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handlePostData = async (data: SubmitData): Promise<void> => {
    try {
      const options: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:3001/books",
        data: data,
      };
      const response: AxiosResponse<any> = await axios(options);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div data-testid="addBook-btn">
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        <Box data-testid="add-btn" display="flex" alignItems="center">
          Add Book
          <BookIcon fontSize="small" />
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new book</DialogTitle>
        <DialogContent>
          <DialogContentText>Every input is required.</DialogContentText>
          <Formik
            initialValues={{
              title: "",
              author: "",
              series: "",
              date: "",
              isbn: "",
              link: "",
              blurp: "",
            }}
            onSubmit={(data) => handlePostData(data)}
          >
            {({ values, handleBlur, handleSubmit, handleChange }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    required
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    margin="dense"
                    label="Title"
                    type="text"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    required
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="author"
                    size="small"
                    label="Author"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    required
                    name="series"
                    value={values.series}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="series"
                    size="small"
                    label="Series"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    required
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="date"
                    size="small"
                    label="Published Date YYYY-MM-DD"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    required
                    name="isbn"
                    value={values.isbn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="isbn"
                    size="small"
                    label="ISBN"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    required
                    name="link"
                    value={values.link}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="link"
                    size="small"
                    label="Image link"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    required
                    name="blurp"
                    value={values.blurp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    id="blurp"
                    size="medium"
                    label="Blurp"
                    type="text"
                    fullWidth
                    multiline
                    rows="6"
                  />
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button color="primary" type="submit" onClick={handleClose}>
                      Send
                    </Button>
                  </DialogActions>
                </form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
