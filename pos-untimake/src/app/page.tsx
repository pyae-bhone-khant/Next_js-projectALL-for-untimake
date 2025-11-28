"use client";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper
} from "@mui/material"; 
import { useFormState } from "react-dom";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Home() {  
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#E8ECF9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "1000px",
          height: "600px",
          display: "flex",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#067C80",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            p: 4,
          }}
        > 
        <Box>

          <img
            src="/logo.webp"
            width={300}
            style={{ marginBottom: "20px" }}
            alt="logo"
          />

          <Typography sx={{ fontSize: "20px",  }}>
            Nice to See you again
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: 2,
              mt : 2,
            }}
          >
            WELCOME TO ZANDO!
          </Typography>
        </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            width: "50%",
            backgroundColor: "white",
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#067C80",
              textAlign: "center",
              mb: 2,
            }}
          >
            Login
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              mb: 4,
              color: "gray",
              fontSize: "16px",
              lineHeight: 1.4,
            }}
          >
            Please fill in the login_ID & password to access. <br />
            Zando Point of Sales System.
          </Typography>

          {/* Username */}
          <form action="" style={{display : "flex" , flexDirection : "column" , gap : 4}}>
            <TextField sx={{mb : 3}} id="outlined-basic" label="Username" variant="outlined" />
            <TextField sx={{mb : 3}} id="outlined-basic" label="Password" variant="outlined" />
            <Button href="home/"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#067C80",
                color: "white",
                p: 1.5,
                borderRadius: "10px",
                fontSize: "18px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#05686A" },
              }}
            >
              Log In
            </Button>
          </form>


       
        </Box>
      </Paper>
    </Box>
  );
}
