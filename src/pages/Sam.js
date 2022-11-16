////////////////////////////////////////////// LAUNCH  NEW SMALL CARD CODE ////////////////////////////////////////////
import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import {Grid,Box,Card,Typography,Avatar} from "@mui/material";
import selec from '../img/selec.svg'
export default function SmallC (props){
  const persona = props.persona;
  const imag = props.imag;
  const navigate = useNavigate();
    const [showSelectDoctor, setSelectDoctor] = useState(false)
  const showselectDoctor = () => {
    localStorage.setItem('user', "doctor");
    setSelectDoctor(true)
   
    setTimeout(function () {
        navigate("/login");
    }, 500);
} 

const SelectComponent = () => (
  <Grid item container direction="row">
      <Avatar src={selec} style={{ width: 20, height: 20, margin: "15px 0 0 15px" }} />
      <Typography sx={{ fontSize: "8px", fontFamily: "poppins", fontWeight: '500', color: "#277FFE" }}>Selected</Typography>
  </Grid>
)
return(
   
<Grid sx={{paddingBottom:"30px"}}>
<Card sx={{width:"300px",maxWidth:{xs:"250px",sm:"450px"},height:"auto",borderRadius:"8px",border:"1px solid #DDE4EA",boxShadow:"0"}}>
<Grid container direction="row" sx={{padding:"10px 0px"}}>
    <Grid item xs={7} sm={7} sx={{display:"flex",justifyContent:"flex-start",paddingLeft:"10px"}}>
    <Box component="img" width="35%" height="auto" sx={{padding:"20px",backgroundColor:"#f3f5f7",borderRadius:"8px",cursor:"pointer"}} src={props.imag} onClick={showselectDoctor}  {...showSelectDoctor ? { opacity: "0.5" } : { opacity: "1" }} />
    </Grid>
    <Grid item xs={5} sm={5} sx={{alignSelf:"center"}}>
  
    <Typography sx={{fontSize:{xs:"20px",sm:"25px"}}} style={{fontFamily:"poppins"}} >{props.persona}</Typography>
    </Grid>
</Grid>
</Card>
</Grid>

)
}

