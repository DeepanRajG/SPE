import React from "react";
import {
    Container,
    Avatar,
    Grid,
    Box,
    Card,
    Button,
    CardContent,
    CardActions,
    Collapse,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../css/img/logo.png";
function App() {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: "90px !important",
        // display:"flex",
        // justifyContent:"center",
        // placement:"left-center",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = React.useState(false);
    const [exp, setExp] = React.useState(false);
    const [val, setVal] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dropdown1 = () => {
        setExp(!exp);
    };
    const dropdown2 = () => {
        setVal(!val);
    };
    const styles = {
        paperContainer: {
            backgroundImage: `url(${"static/src/img/main.jpg"})`,
        },
    };
    const bg_image = {
        height: "calc(100% - 60px)",
        // width: '100vw'
    };
    return (
        <Container maxWidth="xl" style={{ height: "100%" }}>
            <Grid container sx={{ height: "60px", padding: "0px", margin: "0px" }}>
                <Grid item md={2} alignSelf="center">
                    <Grid item container direction="row" >
                        <Avatar src={logo} style={{ width: 33, height: 33, marginLeft: "30px" }} />
                        <Typography sx={{ fontSize: "25px", fontFamily: "poppins", fontWeight: '500', color: "#0D224C", textAlign: "center", marginLeft: "10px" }}>SPE</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={7}>
                </Grid>
                <Grid item lg={3} alignSelf="center">
                    <Grid item container direction="row" >
                        <Typography sx={{ padding: "10px", marginLeft: "70px", fontSize: "15px", fontFamily: "poppins", fontWeight: '500', color: "#0D224C", }}>R12</Typography>
                        <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '500', color: "#0D224C", }}>B12</Typography>
                        <NotificationsIcon sx={{ padding: "10px" }}></NotificationsIcon>
                        <Avatar src={profile} style={{ width: 40, height: 40, }} />
                        <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: 'bold', color: "#0D224C" }}>Rakin</Typography>
                        <KeyboardArrowDownRoundedIcon sx={{ padding: "10px", paddingLeft: '0px' }}></KeyboardArrowDownRoundedIcon>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                style={bg_image}
                sx={{
                    backgroundImage: `url(image/jpeg.jpg)`,
                    backgroundSize: "center",
                    backgroundPosition: "center",
                }}
                container
            >
                {/* <Box
        component="img"
        sx={{
          height: 900,
          width: 1500,
          display:"flex",
          maxHeight: { xs: 200, md: 680,xl:900 },
          maxWidth: { xs: 250, md: 1500 ,xl:500},
          backdropFilter: "blur(40px)",
        }}
        src={back}/> */}
                {/* <Box style={{background:"red",width:"100px",height:"100px"}}>
        </Box> */}
                <Grid item style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <h4>Logged In as Dotor</h4>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={2}>
                        <Card sx={{ maxWidth: 220 }}>
                            <CardContent>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 180,
                                        maxHeight: { xs: 100, md: 180 },
                                        maxWidth: { xs: 80, md: 200 },
                                        backgroundColor: "#f3f5f7",
                                        borderColor: "#f3f5f7 ",
                                        borderRadius: "8px"
                                    }}>
                                </Box>
                                <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "10px" }}>TPP</Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="contained" fullWidth>Option 1</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize", margin: "10px 0px 10px 0px" }} variant="contained" fullWidth> Option 2</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="contained" fullWidth>Option 3</Button>
                                </CardContent>
                            </Collapse>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card sx={{ maxWidth: 220 }}>
                            <CardContent>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 180,
                                        maxHeight: { xs: 100, md: 180 },
                                        maxWidth: { xs: 80, md: 200 },
                                        backgroundColor: "#f3f5f7",
                                        borderRadius: "8px"
                                    }}>
                                </Box>
                                <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "10px" }}>Smart Assist</Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                            </CardActions>
                            <Collapse in={exp} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="contained" fullWidth>Calls</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize", margin: "10px 0px 10px 0px" }} variant="contained" fullWidth>My Appointments</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="contained" fullWidth>My Care Team</Button>
                                </CardContent>
                            </Collapse>
                            <ExpandMore
                                expand={exp}
                                onClick={dropdown1}
                                aria-expanded={exp}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card sx={{ maxWidth: 220 }}>
                            <CardContent>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 180,
                                        maxHeight: { xs: 100, md: 180 },
                                        maxWidth: { xs: 80, md: 200 },
                                        backgroundColor: "#f3f5f7",
                                        borderRadius: "8px"
                                    }}>
                                </Box>
                                <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "10px" }}>Timetable</Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                            </CardActions>
                            <Collapse in={val} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="contained" fullWidth>schedules Visits</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize", margin: "10px 0px 10px 0px" }} variant="contained" fullWidth>Scheduled Activity</Button>
                                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe", textTransform: "capitalize" }} variant="disabled" fullWidth>Option 3</Button>
                                </CardContent>
                            </Collapse>
                            <ExpandMore
                                expand={val}
                                onClick={dropdown2}
                                aria-expanded={val}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import './App.css';
import { Container, Paper, Box, Typography, Button, Grid, Avatar } from "@mui/material";
import patient1 from "./patient1.png";
import swap from "./swap.svg";
import logout from "./logout.svg";
function App() {
    const b2 = { height: "70px", width: "248px", backgroundColor: "#223144", marginLeft: "452px", marginTop: "-360px", BorderRadius: "50px" }
    return (
        <Container>
            <Grid container>
                <Grid item xs={15}>
                    <Box display="flex"
                        flexDirection={"column"}
                        maxWidth={200}
                        height={300}
                        alignItems="center"
                        justifyContent={"center"}
                        margin="auto"
                        marginTop={10}
                        padding={3}
                        borderRadius={1}
                        backgroundColor='#FFFFFF' />
                    <Paper elevation={0} style={b2} />
                    <Typography variant="h6" padding={10} textAlign="center" marginTop={"-140px"} fontWeight="400" color={"white"}   >
                        Patient
                    </Typography>
                    <Avatar src={patient1} style={{ width: 60, height: 60, marginLeft: 545, marginTop: -80 }} />
                    <Typography variant="h6" padding={10} textAlign="center" marginTop={"-80px"} fontWeight="400" color={"black"} fontSize="16px"   >
                        Dolly Tan
                    </Typography>
                    <Typography variant="h6" padding={10} textAlign="center" marginTop={"-160px"} fontWeight="400" color={"black"} fontSize="11px"   >
                        sathis.rakin@ainqa.com
                    </Typography>
                    <div class="circle">
                        <p class="text">12</p>
                    </div>
                    <div class="circle2">
                        <p class="text2">12</p>
                    </div>
                    <Typography variant="h6" padding={10} textAlign="center" marginTop={"-78px"} fontWeight="500" color={"black"} fontSize="10px" marginLeft={"-60px"} fontWeight="200">
                        ROOM
                    </Typography>
                    <Typography variant="h6" padding={10} textAlign="center" marginTop={"-175px"} fontWeight="500" color={"black"} fontSize="10px" marginLeft={"60px"} fontWeight="200">
                        BED
                    </Typography>
                    <Button variant='filled' sx={{ color: '#046EB3', fontWeight: "700", width: "180px", height: "41px", backgroundColor: '#E3F4FF', borderColor: 'blue', marginLeft: "485px", marginTop: "-100px", textIndent: "15px", fontSize: "12px" }} >switch user </Button>
                    <Button variant='filled' sx={{ color: '#FA273E', fontWeight: "700", width: "180px", height: "41px", backgroundColor: '#FFE3E7', borderColor: 'blue', marginLeft: "485px", marginTop: "-30px", textIndent: "10px", fontSize: "12px" }} > Logout </Button>
                    <Avatar src={swap} style={{ width: 20, height: 15, marginLeft: 510, marginTop: -87 }} />
                    <Avatar src={logout} style={{ width: 20, height: 20, marginLeft: 510, marginTop: 40 }} />
                    <Box sx={{ borderColor: 'primary.main' }}></Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default App;
#button{
}
.circle {
    display: flexbox;
    width: 30px;
    height: 30px;
    background - color: #FFFFFF;
    border - radius: 50 %;
    border - style: solid;
    border - color: #ACB1C1;
    margin - left: 530px;
    margin - top: -70px;
    border - width: 1px;
}
  .text {
    margin: auto;
    text - align: center;
    margin - top: 3px;
}
  .circle2 {
    display: flexbox;
    width: 30px;
    height: 30px;
    background - color: #FFFFFF;
    border - radius: 50 %;
    border - style: solid;
    border - color: #ACB1C1;
    margin - left: 590px;
    margin - top: -32px;
    border - width: 1px;
}
  .text2 {
    text - align: center;
    margin - top: 3px;
    margin - left: 1px;
}
\
