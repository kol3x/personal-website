import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import CVIcon from "@mui/icons-material/Description";
import LeetcodeIcon from "@mui/icons-material/Code";
import EmailIconButton from "./emailButton";

export default function MenuBar() {
  return (
    <Box sx={{ gridRow: 1, gridColumn: "1 / -1" }}>
      <AppBar
        sx={{ backgroundColor: "black", borderBottom: "1px solid #00bf63" }}
        position="static"
      >
        <Toolbar>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="https://nikolai-shcherbinins-blog.webflow.io/">Blog</Button>
          <Button disabled sx={{ flexGrow: 1 }}></Button>
          <Tooltip title="My GitHub profile">
            <IconButton
              href="https://github.com/kol3x"
              target="_blank"
              size="large"
              edge="start"
              color="inherit"
              aria-label="My GitHub profile"
              sx={{ mr: 2 }}
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="My LinkedIn profile">
            <IconButton
              href="https://www.linkedin.com/in/nikolai-shcherbinin/"
              target="_blank"
              size="large"
              edge="start"
              color="inherit"
              aria-label="My LinkedIn profile"
              sx={{ mr: 2 }}
            >
              <LinkedinIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="My CV">
            <IconButton
              href="https://drive.google.com/file/d/1gaqd7i2KO8-nE08UuTJ8ZU_mSQZEC39E/"
              target="_blank"
              size="large"
              edge="start"
              color="inherit"
              aria-label="My CV"
              sx={{ mr: 2 }}
            >
              <CVIcon />
            </IconButton>
          </Tooltip>
          <EmailIconButton></EmailIconButton>
          <Tooltip title="LeetCode profile">
            <IconButton
              href="https://leetcode.com/kol3x/"
              target="_blank"
              size="large"
              edge="start"
              color="inherit"
              aria-label="LeetCode profile"
              sx={{ mr: 2 }}
            >
              <LeetcodeIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
