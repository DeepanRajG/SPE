
import React from "react";

import "../css/App.css";

import dollytan from "../img/afrin.png";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Container,
  Avatar,
  Grid,
  Box,
 
  Button,
 
  Stack,
  Typography,

} from "@mui/material";

export default function tolly() {
   
  return (
    <body sx={{ bgcolor: "yellow" }}>
      <Container maxWidth="xl" sx={{ marginTop: "60px" }}>
        <Grid container spacing={0}>
          <Grid item md={6}></Grid>
          <Grid item md={6} sx={{ height: "100px", width: "300px" }}>
            <Grid container spacing={0}>
              <Grid item md={6} sx={{ height: "100px", width: "200px" }}></Grid>
              <Grid item md={6}>
                <Grid
                  container
                  direction="column"
                  sx={{
                    height: "450px",
                    width: "350px",
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Grid
                    item
                    md={3}
                    sx={{
                      backgroundColor: "#223144",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  >
                    <Box sx={{ verticalAlign: "center" }}>
                      <Typography sx={{marginTop:"30px", color: "white", fontWeight: "bold" }}>
                        Patient
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
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
                      <Box sx={{ backgroundColor: "white" }}>
                        <Typography color="black">Dolly Tan</Typography>

                        <Typography color="black" >sathish.rakin@ainqa.com</Typography>
                      </Box>

                      {/* first avatar */}
                      <Grid className="avatar"  >
                        <Stack
                        //   direction="column"
                          spacing={2}
                          sx={{ paddingRight: "30px" }}
                        >
                          <Avatar
                            variant="circular"
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              border: "1px solid grey",
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            12
                          </Avatar>
                          <Typography color="black">ROOM</Typography>
                          {/* second */}
                        </Stack>
                        <Stack spacing={2}>
                          <Avatar
                            variant="circular"
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              border: "1px solid grey",
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            12
                          </Avatar>
                          <Typography color="black">BED</Typography>
                        </Stack>
                      </Grid>
                      <Grid sx={{marginTop:"50px"}}>
                        <Stack spacing={2}>
                          <Button
                            sx={{
                              bgcolor: "#FFE3E7",
                              color: "#FA273E",
                              fontWeight: "bold",
                              width: "258px",
                              height: "50px",
                              textTransform: "capitalize",
                              alignSelf: "center",

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
      </Container>
    </body>
  );
}

