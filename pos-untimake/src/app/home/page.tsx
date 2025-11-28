"use client"

import * as React from 'react';
 import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';

import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


import {
    Box,
    Button,
    Container,
    IconButton,
    MenuItem,
    Typography,
    Avatar,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


export default function home() {
     const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };
    return ( 
         <Box>
           <Container maxWidth="xl"> 
            <Box sx={{display : "flex" , justifyContent : "space-between" , mt : 4}}>

            <Box sx={{display : "flex" ,  }}>

         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 , mt : 1 }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h3"  sx={{mt : 1}} component="div" >
            Dashboard
          </Typography>
            </Box>  
              <Box sx={{display : "flex"}}>
                  <img src="/logo.webp"  width={70} alt="" />
                  <Box sx={{mt : 2}}>

                  <ClickAwayListener 
                  
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative' ,  }}>
        <button type="button" onClick={handleClick}>
        <Stack direction="row" spacing={2}>   
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>    
    </Stack>
        </button>
        {open ? (
          <Button href='/login' sx={styles}>
            logout
          </Button>
        ) : null}
      </Box>
    </ClickAwayListener>
                  </Box>
              </Box>
            </Box>

             
           </Container>
         </Box>
    )
}