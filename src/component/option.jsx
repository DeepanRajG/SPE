import React from 'react'
import {
    Grid,
    Button,
    CardContent,
} from "@mui/material";
export default function Option(props) {
  let setoptions=[];
  let hide =false;
  for (let i = 0; i < props.OptionList.length; i++) {
    if (props.cardint === i) {
        let dat = props.OptionList[i]
        setoptions=dat
    }
    else{
    }
  }
    return (
        <CardContent sx={{marginRight:"-24px",marginBottom:"-10px"}} >
            {Array.from(Array(setoptions.length)).map((_, index) => (
                <Grid container justify="center" {...hide ? { display: "none" } : null}>
                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFE",boxShadow:"none",textTransform: "capitalize", margin: "10px 10px 10px 0px", "&:hover": { backgroundColor: "transparent",boxShadow:"none"} }} variant="contained" fullWidth>{setoptions[index]}</Button>
                </Grid>
            ))}
        </CardContent>
    )
}