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
  // for (let i = 0; i < props.OptionList.length; i++) {
  //   if (props.OptionList[props.int] /3== 0) {
  //     return  style={marginBottom:"0px"}
  //   }
  //   else{
  //   }
  // }

    return (
        <CardContent sx={{ justifyContent:"space-between",backgroundColor:"red"}}>
            {Array.from(Array(setoptions.length)).map((_, index) => (
                <Grid {...hide ? { display: "none" } : null} >
                    <Button sx={{ backgroundColor: "#f6f8FA", color: "#277FFe",fontWeight:"medium", boxShadow: "none",textTransform: "capitalize", margin: "10px 0px 10px 0px", "&:hover": { backgroundColor: "transparent" } }} variant="contained" fullWidth>{setoptions[index]}</Button>
                    
                </Grid>
            ))}
        </CardContent>
    )
}