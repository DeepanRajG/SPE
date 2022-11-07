import React from "react";
import "../css/App.css";
import dollytan from "../img/afrin.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Avatar,
  Grid,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
export default function Tolly() {
  const navigate = useNavigate();
  const logout=()=>{
    navigate("/SPE/login")
  }
  return (
    <Fragment>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6} ></Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{ height: "100px", width: "300px",}}>
            <Grid container spacing={0} sx={{display:"flex",justifyContent:"right"}}>
              <Grid item xl={6} lg={6} md={8} sm={3}   sx={{ height: "100px", width: "auto" }}></Grid>
              <Grid item xl={6} lg={6} md={4} sm={9} xs={12}>
                <Grid
                  container
                  direction="column"
                  sx={{
                    height: "430px",
                    width: "285px",
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Grid
                    item
                    lg={3} xl={3} md={3} sm={3} xs={3}
                    sx={{
                      backgroundColor: "#223144",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  >
                    <Box sx={{ verticalAlign: "center" }}>
                      <Typography sx={{marginTopcolor: "white", fontWeight: "bold",fontFamily:"poppins" }}>
                        Patient
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} xl={9} sm={9} xs={9}>
                    <Grid
                      container
                      direction="column"
                      alignSelf="center"
                      spacing={0}
                    >
                      <Avatar
                        src={dollytan}
                        sx={{
                          alignSelf: "center",
                          width: "70px",
                          height: "70px",
                          marginTop: "-40px",
                        }}
                      ></Avatar>
                      <Box sx={{ backgroundColor: "white", }}>
                        <Typography color="black" sx={{fontFamily:"poppins",fontWeight:500}} >Dolly Tan</Typography>
                        <Typography color="black" sx={{paddingTop:"5px",fontFamily:"poppins",fontSize:"12px",fontWeight:500,opacity:"0.87"}} >sathish.rakin@ainqa.com</Typography>
                      </Box>
                      {/* first avatar */}
                      <Grid className="avatar"  >
                        <Stack
                          spacing={1}
                          sx={{ paddingRight: "30px",marginTop:"10px" }}
                        >
                          <Avatar
                            variant="circular"
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              border: "1px solid grey",
                              fontWeight: "600",
                              alignSelf: "center",
                              fontSize:"18px"
                            }}
                          >
                            12
                          </Avatar>
                          <Typography color="black" sx={{fontFamily:"poppins",fontSize:"12px",fontWeight:"600",opacity:"0.69"}}>ROOM</Typography>
                          {/* second */}
                        </Stack>
                        <Stack spacing={1} sx={{marginTop:"10px"}}>
                          <Avatar
                            variant="circular"
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              border: "1px solid grey",
                              fontWeight: "bold",
                              alignSelf: "center",
                              fontSize:"18px"
                            }}
                          >
                            12
                          </Avatar>
                          <Typography color="black" sx={{fontFamily:"poppins",fontSize:"12px",fontWeight:"600",opacity:"0.69"}}>BED</Typography>
                        </Stack>
                      </Grid>
                      <Grid sx={{marginTop:"60px"}}>
                        <Stack spacing={2}>
                          <Button
                          onClick={logout}
                            sx={{
                              bgcolor: "#FFE3E7",
                              color: "#FA273E",
                              fontWeight:"600",
                              width: "170px",
                              height: "auto",
                              textTransform: "capitalize",
                              alignSelf: "center",
                              fontFamily:"poppins",
                              "&:hover": { backgroundColor: "#FFE3E7" },
                            }}
                            variant="outline"
                            startIcon={<ExitToAppIcon />}
                          >
                            Logout
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Fragment>
  );
}
