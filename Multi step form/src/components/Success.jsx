import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function Success() {
  return (
    <div>
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
            Success
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <h1>Success</h1>
      <h2> Thank you for your submission.</h2>
      <p>You'll get email with further instructions.</p>
    </div>
  );
}

export default Success;
