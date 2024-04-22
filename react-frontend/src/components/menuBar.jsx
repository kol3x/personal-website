import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Socials from "./socials";

export default function MenuBar() {
  return (
    <Box sx={{ gridRow: 1, gridColumn: "1 / -1" }}>
      <AppBar
        sx={{ backgroundColor: "black", borderBottom: "1px solid #00bf63" }}
        position="static"
      >
        <Toolbar sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button
              color="inherit"
              href="https://spectacular-raindrop-01ff35.netlify.app"
            >
              Blog
            </Button>
          </Box>
          <Button className="barSpacer" disabled sx={{ flexGrow: 1 }}></Button>
          <Socials />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
