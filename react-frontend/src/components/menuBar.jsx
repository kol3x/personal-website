import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import CVIcon from "@mui/icons-material/Info";

export default function MenuBar() {
  return (
    <Box sx={{ gridRow: 1, gridColumn: "1 / -1" }}>
      <AppBar
        sx={{ backgroundColor: "black", borderBottom: "1px solid #00bf63" }}
        position="static"
      >
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Blog</Button>
          <Button disabled sx={{ flexGrow: 1 }}></Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LinkedinIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CVIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
