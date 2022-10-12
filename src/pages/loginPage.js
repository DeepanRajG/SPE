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
import doctor from '../img/doctor1.png'
import logo from '../img/logo.png'
import CustomizedSnackbars from '../component/Toast.jsx';

function App() {
  const navigate = useNavigate();

  const [username, setusername] = useState('')
  const [showtoast, setshowtoast] = useState(false)
  const _handleTextFieldChange = e => {
    let Username = e.target.value
    setusername(Username)
    console.log(username)
}
const header = {
  height: "60px",

}

const doco = {
  width: "70vh",
  height: "82vh",
  maxHeight: { xs: 200, md: 650 },
  maxWidth: { xs: 250, md: 600 },
  padding: "0px",
  margin: "0px"
}
  const [password, setpassword] = useState('')
  const _handleTextFieldChange1 = e => {
    let pass = e.target.value
    setpassword(pass)
    console.log(password)
  }
 
  let login = async () => {

  


    let raw = { username: username, password: password }
 
    const url = 'https://idmservices.dev.ainqaplatform.in/login_keycloackuser'


    let response = await makeAPIpost(raw, url)
    if (response.Result === "Valid user!") {
      
      localStorage.setItem('access_token', response.tokenDetails.access_token );
      localStorage.setItem('keyclkId', response.keyclkId);

      
    let filterid= "Person.keycloackid=='" + localStorage.getItem('keyclkId')  +"'"
 
 

    let raws = {
      "db_name": "ipmo",
      "entity": "Person",
      "filter": filterid ,
      "return_fields": "Person"
    }
    //console.log(raw)
    const urls = 'https://arangodbservice.dev.ainqaplatform.in/api/read_documents'
  
    let responses = await makeAPIpost(raws, urls)
    console.log(responses)
   
    let roll_id= responses.result[0].roleid[0].roleid
    let roll_name= responses.result[0].roleid[0].rolename

    localStorage.setItem('roll_id', roll_id );
    localStorage.setItem('roll_name', roll_name);


    

    

    let raw1 = {
      "db_name": "ipmo",
      "roleid": roll_id
  }
   // console.log(raw)
    const url1 = 'https://idmservices.dev.ainqaplatform.in/GetPermissionforRoles'
  
    let response1 = await makeAPIpost(raw1, url1)

    let perrolepermsnid=response1.Result[0].perrolepermsnid[0]

    console.log(perrolepermsnid)
    localStorage.setItem('perrolepermsnid', perrolepermsnid);
    navigate("/page")

 
    
    }
    else{
      {<CustomizedSnackbars msg="Invalid User Credentials,check Username and Password!" alerts="error"/>}
        
    }
    console.log(response)
  }
   const user = { paddingTop: '10px', width: '300px', paddingBottom: '20px' }
  const enter = { color: '#CDCED0', paddingBottom: '20px' }
  const log = { fontWeight: 'bold',   fontSize: "40px", paddingBottom: '10px',color:"#223144" }
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
    <div>
        <Container maxWidth="xl" sx={{ padding: "30px", backgroundColor: "#F5F7FA" }}>
            <Container maxWidth="xl" sx={{ backgroundColor: "white", borderRadius: "20px" }}>
                <Grid item container>
                    <Grid item md={12} style={header}>
                        <Avatar src={logo} style={{ width: 60, height: 60, }} />
                    </Grid>
                    <Grid item md={5} lg={6} sx={{ padding: "0px", margin: "0px" }}>
                        <Box style={doco} component="img" src={doctor} />
                    </Grid>
                    <Grid
        item
        xs={6}
        sx={{
          height: 900,
          width: 700,
          maxHeight: { xs: 200, md: 800 },
          maxWidth: { xs: 200, md: 600 },
          marginTop:10,
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
            </Container>
        </Container>
    </div>
)
}
export default App
