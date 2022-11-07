import React from "react";
import {
    Grid,

    Avatar,
    Typography,
} from "@mui/material";
import net from "../img/mnetflix.png";
function Entertainn(props) {
    const onclickyoutube = () => {
        window.open(props.url[props.int]);
        console.log("props.src");
    }
    return (
        // <Container fixed marginLeft="0%" maxWidth="deviceWidth" style={{ height: "10%", padding: "0px" }}>
            <Grid container direction="column" spacing={1} justifyContent= "center" marginLeft="0px" >
                <Grid item sm={3} xs={3}  style={{ alignItems: "center", justifyContent: "center" ,display:"flex",flexDirection:"column"}}>
                    <Grid >
                        <Avatar style={{ width: "50px", height: "auto" }} src={net} />
                    </Grid>
                    <Grid>
                        <Typography style={{ paddingTop: "20px" }} >hjjgkhfd</Typography>
                    </Grid>
                </Grid>
            </Grid>
        // </Container>
    );
}
export default Entertainn;