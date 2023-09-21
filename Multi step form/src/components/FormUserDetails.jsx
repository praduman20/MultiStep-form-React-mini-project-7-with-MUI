import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  bgcolor: "#121212",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 9,
  pb: 3,
};

function FormUserDetails({ nextStep, handleChange, values }) {
  const [open, setOpen] = useState(false);
  const cont = (e) => {
    e.preventDefault();
    if (values.firstName == "" || values.lastName == "" || values.email == "") {
      setOpen(true);
    } else {
      nextStep();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ☰
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enter User Details
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <h1>Enter user details</h1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="child-modal-title">All fields are required.</h2>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        onChange={handleChange("firstName")}
        defaultValue={values.firstName}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        onChange={handleChange("lastName")}
        defaultValue={values.lastName}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange={handleChange("email")}
        defaultValue={values.email}
        margin="normal"
      />
      <br />
      <Button style={{ margin: "10px 0px" }} variant="contained" onClick={cont}>
        Continue
      </Button>
    </>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
