import { makeAPIpost } from '../component/api.js'
import React, { useState } from 'react'
import {
  Typography,
  IconButton,
  Container,
  Grid,
  Box,
  Avatar,
  Button,
  TextField,
  InputAdornment
} from '@mui/material'
import { useNavigate } from "react-router-dom";
import '../css/App.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import doctor from '../img/doctor.png'
import logo from '../img/logo.png'

function App() {
  const navigate = useNavigate();
  let login = async () => {
    let raw = { username: username, password: password }
    console.log(raw)
    const url = 'https://idmservices.dev.ainqaplatform.in/login_keycloackuser'

    let response = await makeAPIpost(raw, url)
    if (response.Result === "Valid user!") {
      navigate("/admin")
      localStorage.setItem('access_token', response.tokenDetails.access_token );
      localStorage.setItem('keyclkId', response.keyclkId);

    }
    console.log(response)
  }
  const [username, setusername] = useState('')
  const _handleTextFieldChange = e => {
    let Username = e.target.value
    setusername(Username)
    console.log(username)
}
  const [password, setpassword] = useState('')
  const _handleTextFieldChange1 = e => {
    let pass = e.target.value
    setpassword(pass)
    console.log(password)
  }



  const user = { paddingTop: '10px', width: '300px', paddingBottom: '20px' }
  const enter = { color: '#CDCED0', paddingBottom: '20px' }
  const log = { fontWeight: 'bold', fontSize: '32px', paddingBottom: '10px' }
  const titl = { color: '#324D70', fontWeight: 'bold' }
  const blue = { color: '#277FFE' }
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)
  // const [values, setValues] = React.useState({

  //   password: '',

  //   showPassword: false,
  // });
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });

  // };

  return (
    <Container maxWidth='xl'>

      <Avatar
        src={logo}
        style={{
          width: 60,
          height: 60
        }}
      />
      <Box sx={{ bgcolor: '#F5F7FA', height: '100vh', width: '100wh' }}>
        <Grid container>
          <Grid item xs={6}>
            <Box
              component='img'
              sx={{
                height: 900,
                width: 700,
                maxHeight: { xs: 300, md: 650 },
                maxWidth: { xs: 340, md: 600 }
              }}
              src={doctor}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: 900,
              width: 700,
              maxHeight: { xs: 200, md: 800 },
              maxWidth: { xs: 200, md: 600 }
            }}
          >
            <Container mt={15}>
              <Grid>
                <Typography style={log}>Login</Typography>
                <Typography style={enter}>
                  Enter your credentials to access your Account
                </Typography>
              </Grid>
              <Typography style={titl}>User ID / Bed No.</Typography>
              <TextField
                onChange={e => {
                  _handleTextFieldChange(e)
                }}
                value={username}
                className='TextField-without-border-radius'
                variant='outlined'
                size='small'
                id='user'
                style={user}
              />
              <Typography style={titl}>Password</Typography>
              <TextField
                onChange={e => {
                  _handleTextFieldChange1(e)
                }}
                value={password}
                id='pass'
                className='TextField-without-border-radius'
                variant='outlined'
                type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
                //   onChange={handleChange('password')}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={blue}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                size='small'
                style={user}
              />
              <Grid>
                <Typography
                  sx={{
                    float: 'center',
                    color: '#277FFE',
                    textDecoration: 'none',
                    marginLeft: '160px',
                    marginBottom: '20px'
                  }}
                >
                  Forgot Password?
                </Typography>
              </Grid>
              <Grid>
                <Button
                  onClick={login}
                  type='submit'
                  variant='contained'
                  sx={{
                    textTransform: 'capitalize',
                    width: '200px',
                    alignSelf: 'center',
                    borderRadius: '20px',
                    marginLeft: '50px'
                  }}
                >
                  Log in
                </Button>
              </Grid>

            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
export default App
