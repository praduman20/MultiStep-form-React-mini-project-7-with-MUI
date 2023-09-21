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

function FormPersonalDetails({ nextStep, prevStep, handleChange, values }) {
  const [open, setOpen] = useState(false);
  const cont = (e) => {
    e.preventDefault();
    if (values.occupation == "" || values.city == "" || values.bio == "") {
      setOpen(true);
    } else {
      nextStep();
    }
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
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
            Enter personal details
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <h1>Enter personal details</h1>
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
        placeholder="Enter Your Occupation"
        label="Occupation"
        onChange={handleChange("occupation")}
        defaultValue={values.occupation}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="Enter Your City"
        label="City"
        onChange={handleChange("city")}
        defaultValue={values.city}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="Enter Your Bio"
        label="Bio"
        onChange={handleChange("bio")}
        defaultValue={values.bio}
        margin="normal"
      />
      <br />
      <Button
        style={{ margin: "10px 10px" }}
        variant="contained"
        onClick={back}
        color="secondary"
      >
        Back
      </Button>
      <Button
        style={{ margin: "10px 0px" }}
        variant="contained"
        onClick={cont}
        color="primary"
      >
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

export default FormPersonalDetails;
