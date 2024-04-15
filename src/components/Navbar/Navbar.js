import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <AppBar position="static" className="AppBar">
        <Container>
          <Toolbar>
            <Typography sx={{flexGrow:1}}>Crypto Web</Typography>
            <Box >
                <Link to='/login'>Login</Link>
                <Link to='/'> Home</Link>
                <Link to='/news'>News</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
