import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, Modal } from '@mui/material';
import logo from "../../images/logo.png.png"


// TODO remove, this demo shouldn't need to reset the theme.

export default function LoginFind({Findacc,setFindacc}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <Modal sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}} open={Findacc} onClose={() => {
      setFindacc(false)
    }} >
      <Grid container component="main" justifyContent={'center'} sx={{ width:'700px',padding:'60px 135px 60px 135px',bgcolor:'white', boxShadow: "0px 6px 12px 0px #0000001A",borderRadius:'15px'}}>
       
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width:'440px'
            }}
          >
            
           
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div><img src={logo} alt="logo" width={'164px'} height={'37px'} style={{marginRight:'10px'}}/></div>
                <h2>Find your account</h2>
            <Typography style={{fontSize:'14px',fontWeight:'400',margin:'8px 0px'}}>
            Enter your recovery email       </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Id"
                name="email"
                autoComplete="email"
                autoFocus
              />
              
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Next
              </Button>
              <Grid container>
                
                
                <Grid item>
                  <Typography variant="body2">
                    {"Do you have an login issue call 000 000000?"}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid></Modal>
  );
}