import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Confirm({ nextStep, prevStep, values }) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <React.Fragment>
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
            Confirm Your details
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <h1>Confirm Your details</h1>

      <List>
        <ListItem alignItems="center">
          <ListItemText primary="First Name:" secondary={values.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name:" secondary={values.lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email:" secondary={values.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Occupation:" secondary={values.occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City:" secondary={values.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio:" secondary={values.bio} />
        </ListItem>
      </List>

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
        Confirm & Continue
      </Button>
    </React.Fragment>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
