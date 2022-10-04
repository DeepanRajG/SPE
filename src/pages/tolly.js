import React from 'react'
import logo from '../img/logo.png'
import Carousel from 'react-material-ui-carousel'
import {
    Container,
    Avatar,
    Grid,
    Box,
  
    Typography

} from "@mui/material";

export default function tolly() {
    return (
        <body style={{ backgroundColor: "#707070", }}>
            <Container maxWidth="xl" sx={{ marginTop: "60px", }}>
                <Grid container spacing={0} >
                    <Grid item md={6} >
                        <Carousel>

                            <Grid item md={12} sx={{ width: "100%", height: "100px", backgroundColor: "red" }}></Grid>
                            <Grid item md={12} sx={{ width: "100%", height: "100px", backgroundColor: "blue" }}></Grid>
                            <Grid item md={12} sx={{ width: "100%", height: "100px", backgroundColor: "yellow" }}></Grid>
                            <Grid item md={12} sx={{ width: "100%", height: "100px", backgroundColor: "green" }}></Grid>




                        </Carousel>





                    </Grid>
                    <Grid item md={6} sx={{ height: "100px", width: "300px" }} >
                        <Grid container spacing={0}>
                            <Grid item md={6} sx={{ height: "100px", width: "200px" }} >
                            </Grid>
                            <Grid item md={6} >
                                <Grid container direction="column" sx={{ height: "450px", width: "350px", textAlign: "center", backgroundColor: "white", borderRadius: '10px' }}>
                                    <Grid item md={3} sx={{ backgroundColor: "#223144", borderRadius: '10px 10px 0px 0px' }}>


                                        <Box sx={{ verticalAlign: "center" }}>
                                            <Typography sx={{ color: "white" }}>Patient</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={9}>
                                        <Grid container direction="column" alignSelf="center" spacing={0}>
                                            <Avatar src={logo} sx={{ alignSelf: "center", width: "70px", height: "70px", marginTop: "-40px" }}></Avatar>
                                            <Box >
                                                <Typography>Dolly Tan</Typography>
                                                <p>sathish.rakin@ainqa.com</p>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>


                    </Grid>
                </Grid>
            </Container>
        </body >
    )
}
