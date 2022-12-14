import { makeAPIpost } from '../component/api.js'
import React, { useState } from 'react'
import {
  Typography,
  IconButton,
  Grid,
  Box,
  Avatar,
  Button,
  TextField,
  styled,
  InputAdornment
} from '@mui/material'
import { useNavigate } from "react-router-dom";
import '../css/App.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import doctor from '../img/doctor1.png'
import logo from '../img/logo.png'
import CustomizedSnackbars from '../component/Toast.jsx';
import { makeStyles } from '@material-ui/core/styles';
function App() {
  localStorage.setItem('roll_id', 0);
  localStorage.setItem('permsn_repo', 0);
  const navigate = useNavigate();
  const [username, setusername] = useState('')
  const _handleTextFieldChange = e => {
    let Username = e.target.value
    setusername(Username)
  }
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset", };
  const [password, setpassword] = useState('')
  const _handleTextFieldChange1 = e => {
    let pass = e.target.value
    setpassword(pass)
  }
  let login = async () => {
    let raw = { username: username, password: password }
    const url = process.env.REACT_APP_KEY_CLOACK_URL
    let response = await makeAPIpost(raw, url)
    if (response.Result === "Valid user!") {
      localStorage.setItem('access_token', response.tokenDetails.access_token);
      localStorage.setItem('keyclkId', response.keyclkId);
      let filterid = "Person.keycloackid=='" + localStorage.getItem('keyclkId') + "'"
      let raws = {
        "db_name": "ipmo",
        "entity": "Person",
        "filter": filterid,
        "return_fields": "Person"
      }
      const urls = process.env.REACT_APP_READ_DOCUMENT_URL
      let responses = await makeAPIpost(raws, urls)
      let roll_id = responses.result[0].roleid[0].roleid
      let roll_name = responses.result[0].roleid[0].rolename
      localStorage.setItem('roll_id', roll_id);
      localStorage.setItem('roll_name', roll_name);
      //////////////////////////////////////////////////////////////////////////
      let raw1 = {
        "db_name": "ipmo",
        "roleid": roll_id
      }
      const url1 = process.env.REACT_APP_ROLL_URL
      let response1 = await makeAPIpost(raw1, url1)
      let perrolepermsnid = response1.Result[0].perrolepermsnid[0]
      localStorage.setItem('perrolepermsnid', perrolepermsnid);
      let raw2 = {
        "db_name": "ipmo",
        "query": "FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='" + perrolepermsnid + "' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return document(IDM_permissionRepoMapping.repoid)._id)})"
      }
      console.log(raw2)
      const url2 = process.env.REACT_APP_QUERY_URL
      let responses1 = await makeAPIpost(raw2, url2)
      console.log(responses1[0].permsn_repo)
      //setpost(response[0].permsn_repo)
      localStorage.setItem("permsn_repo", [responses1[0].permsn_repo])
      navigate("/SPE/page")
    }
    else {
      { <CustomizedSnackbars msg="Invalid User Credentials,check Username and Password!" alerts="error" /> }
    }
  }
  const user = { paddingTop: '7px', width: '340px', height: "50px", paddingBottom: '10px' }
  const titl = { color: "#324D70", fontWeight: '600', fontSize: "15px", marginTop: "7px"}
  const blue = { color: '#277FFE', marginTop: "6px" }
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#277FFe",
    "&:hover": { backgroundColor: "#277FFE", boxShadow: "none" }
  }));
  const classes = useStyles();
  return (
    <div >
      <Grid style={{ height: "100vh" }} container sx={{ padding: { xs: "20px", sm: "20px", md: "20px", lg: "40px 50px", xl: "55px 48px 40px 65px" }, height: "90%", backgroundColor: "#F5F7FA", maxWidth: "none", display: "flex" }}>

        <Grid container item sx={{ backgroundColor: "white", borderRadius: "26px", margin: "none", display: "flex", flex: "1 1 auto", justifyContent: "center", padding: "1.5em" }} spacing={2}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={7} sx={{ position: "relative" }}>
            <div className="login_img">
              <Avatar src={logo} sx={{ width: "60px", height: "55px", maxWidth: { xl: "60px", lg: "60px", md: "60px", xs: "45px", sm: "45px" }, maxHeight: { xl: "55px", md: "55px", lg: "55px", xs: "40px", sm: "40px" }, position: "absolute", left: "-10px", top: "-10px", padding: "0px" }} />
              <img src={doctor} style={{ width: "74%", height: "auto"}}/>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={5} sx={{marginTop:{xl:"7em",md:"5em",sm:"2em",xs:"2em"} , }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  sx={{ marginLeft:"15px" }}>
              <div>
                <Typography sx={{ fontFamily: "poppins", fontWeight: 'bold', fontSize: { xl: "30px", lg: "30px", md: "30px", sm: "23px", xs: "23px" }, paddingBottom: '10px', color: "#223144", opacity: 1 }}>Login</Typography>
                <Typography sx={{ fontFamily: "poppins", fontWeight: 400, fontSize: "14px", color: '#CDCED0', paddingBottom: '20px' }} >
                  Enter your credentials to access your account
                </Typography>
                

            <Typography style={titl}>User ID / Bed No<span style={{ color: "red" }}>*</span></Typography>
            <TextField
              sx={{ 
              
                alignSelf: "center", maxWidth: { xs: 270, sm: 250, xl: 360 },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: '2px solid #277FFe',
                  }
                },
                "& .MuiOutlinedInput-root:": {
                  "& > fieldset": {
                    border: '2px solid red',
                  }
                }
              }}
              onChange={e => {
                _handleTextFieldChange(e)
              }}
              value={username}
              className='TextField-without-border-radius'
              variant='outlined'
              size='small'
              id='user'
              inputProps={{ style: inputStyle }}
              InputProps={{
                sx: {
                  "& input": {
                    margin: "6px 0px 0px 8px", fontFamily: "poppins", fontWeight: "500", color: "#324D70",fontSize:"15px"
                  }
                }
              }}
              style={user}
            />
            <Typography style={titl}>Password <span style={{ color: "red" }}>*</span></Typography>
            <TextField
              onChange={e => {
                _handleTextFieldChange1(e)
              }}
              sx={{
                alignSelf: "center", maxWidth: { xs: 270, sm: 250, xl: 360 },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: '2px solid #277FFe',
                  }
                }
              }}
              value={password}
              id='user'
              className='TextField-without-border-radius'
              variant='outlined'
              type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
              //   onChange={handleChange('password')}
              inputProps={{ style: inputStyle }}
              InputProps={{
                sx: {
                  "& input": {
                    margin: "6px 0px 0px 8px",
                    fontFamily: "poppins", fontWeight: "500", color: "#324D70",fontSize:"10px",fontSize:"15px"
                  }
                },
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      style={blue}
                      className={classes.eyeIcon}
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
                  margin: { xl: '12px 4px 20px 0px', lg: '12px 0px 20px 90px', md: '12px 0px 20px 90px', xs: "10px 0px 10px 120px", sm: "10px 0px 10px 80px" },
                  display: { md: "flex", lg: "flex", xl: "flex" },
                  justifyContent: { md: "center", lg: "center", xl: "center" },
                  fontWeight: 500,
                  fontFamily: "poppins", fontSize: "15px"
                }}
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid>
              <BlueButton
                onClick={login}
                type='submit'
                variant='contained'
                sx={{
                  textTransform: 'capitalize',
                  width: '340px', maxWidth: { xs: 270, sm: 250, xl: 360 },
                  height: "50px",
                  borderRadius: '50px',
                  fontFamily: "poppins",
                  color: "#FFFFFF",
                  boxShadow:"none"
                }}
              >
                Log in
              </BlueButton>
            </Grid>
              </div>
            </Grid>

          </Grid>
        </Grid>
      </Grid>


    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  eyeIcon: {
    '& svg': {
      fontSize: 20
    }
  }
}))
export default App
