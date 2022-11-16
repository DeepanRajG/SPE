// import React from "react";
// import { useEffect } from "react";
// import {
//   Grid,
//   Typography,
// } from "@mui/material";
// import afrin from "../img/afrin.png";
// import Header from "../component/headerr";
// import { makeAPIpost } from '../component/api.js';
// import { Cardd } from "../component/card.jsx"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function App() {
//   let options = ["Option 1", "Option 1", "Option 1"]
//   let options1 = ["Laboratory", "Radiology", "Documents"]
//   let options2 = ["Device", "Apps", "Bed / Rooms"]
//   let options3 = ["Order Meal / Status", "My Diet Plan", "Attender Plan"]
//   let options4 = ["Calls", "Patient Schedules", "Patient Care Team"]
//   let options5 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
//   const bg_image = {
//     height: "92vh",
//     // width: '100vw'
//   };
//   let cardname = []
//   let cardlogo = []
//   let [LOGO, putlogo] = React.useState("");
//   let [TITLE, puttitle] = React.useState("");
//   useEffect(() => {
//     let id = localStorage.getItem('perrolepermsnid')
//     console.log(id);
//     const getData = async () => {
//       let raw = {
//         "db_name": "ipmo",
//         "query": "FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='" + id + "' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return document(IDM_permissionRepoMapping.repoid)._id)})"
//       }
//       console.log(raw)
//       const url = process.env.REACT_APP_QUERY_URL
//       let response = await makeAPIpost(raw, url)
//       let permsn_repo = localStorage.getItem("permsn_repo")
//       let array = permsn_repo.split(',');
//       let raw1 = {
//         "db_name": "ipmo",
//         "query": "for doc in spe_category filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] return doc"
//       }
//       console.log(raw1)
//       const url1 = process.env.REACT_APP_QUERY_URL
//       let response1 = await makeAPIpost(raw1, url1)
//       console.log(response1)
//       let responseData = response1
//       for (let i = 0; i < responseData.length; i++) {
//         cardname[i] = responseData[i].name
//         cardlogo[i] = responseData[i].logo
//       }
//       console.log(responseData)
//       putlogo(cardlogo)
//       puttitle(cardname)
//     }
//     getData();
//   }, [])
//   const settings = {
//     dots: false,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     infinite: false,
//     accessibility: true,
//     // prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
//     nextArrow: <SampleNextArrow sx={{ height: "50px", }} />
//   };
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         sx={{ ...style, background: "#00000029", padding: "25px 10px", borderRadius: "5px", marginRight: "45px" }}
//         onClick={onClick}
//       />
//     );
//   }
//   // function SamplePrevArrow(props) {
//   //   const { className, style, onClick } = props;
//   //   return (
//   //     <div
//   //       className={className}
//   //       style={{ ...style, background: "#00000029",height:"20px",display:"none",appearance:"none",justifyContent:"center",padding:"25px 10px"}}
//   //       onClick={onClick}
//   //     />
//   //   );
//   // }
//   return (
//     <Grid maxWidth="device-width" position="static" style={{ height: "100%", padding: "0px" }}>
//       <Header name="Afrin" profile={afrin} displayP="none" />
//       <Grid container
//         style={{ bg_image, marginTop: { xs: "80px", sm: "80px" } }}
//         sx={{
//           backgroundImage: `url(image/blur.png)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center", height: "100vh",
//           // paddingLeft: "30px"
//         }}

//       >
//         {/* <Grid item container direction="column"> */}
//         <Grid item md={12} >
//           <Typography style={{ marginLeft: "40px", marginTop: "50px", fontSize: "24px", fontFamily: "poppins", fontWeight: 500, opacity: "0.90" }}>Logged In As Nr.Afrin</Typography>
//         </Grid>
//         <Grid item md={12} lg={12} xl={12} xs={12} sm={12} sx={{ paddingLeft: "10px", marginBottom: "100px", display: { sm: "none", xs: "none", xl: "block", lg: "block", md: "block" } }} >
//           <Slider {...settings}  >
//             {Array.from(Array(TITLE.length)).map((_, index) => (

//               <Grid item md={3} lg={3} xl={3} key={index} sx={{ alignSelf: "center" }} >
//                 <Cardd title={TITLE} int={index} images={LOGO} optionName={options1} optionsLength={options1.length} optionsAll={[options, options1, options2, options3, options4, options5]} />
//               </Grid>

//             ))}
//           </Slider>


//         </Grid>
//         <Grid item  xs={12} sm={12} sx={{ paddingLeft: "10px", marginBottom: "100px", display: { sm: "block", xs: "block", xl: "none", lg: "none", md: "none" } }}>
//           {Array.from(Array(TITLE.length)).map((_, index) => (

//             <Grid item rowSpacing={1} xs={12} sm={12} key={index} sx={{ alignSelf: "center" }} >
//               <Cardd title={TITLE} int={index} images={LOGO} optionName={options1} optionsLength={options1.length} optionsAll={[options, options1, options2, options3, options4, options5]} />
//             </Grid>

//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
// export default App;
/////////////////////////////////////////////////////////////////// New Code //////////////////////////////////////////////////////////////////
import React from "react";
import { useEffect } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import afrin from "../img/afrin.png";
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
import { Cardd } from "../component/card.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const bg_image = {
    height: "90vh",
    // width: '100vw'
  };
  let options = []
  let cardname = []
  let cardlogo = []
  let cardurl = []
  let data = []
  let status = []
  let [LOGO, putlogo] = React.useState("");
  let [TITLE, puttitle] = React.useState("");
  let [URL, puturl] = React.useState("");
  let [OPTION, putoption] = React.useState("");
  let [STATUS, putstatus] = React.useState("");
  useEffect(() => {
    const getData = async () => {
      let permsn_repo = await localStorage.getItem("permsn_repo")
      let array = permsn_repo.split(',');
      let raw1 = {
        "db_name": "ipmo",
        "query": "for doc in spe_category filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] sort doc._id return doc"
      }
      console.log(raw1)
      const url1 = process.env.REACT_APP_QUERY_URL
      let response1 = await makeAPIpost(raw1, url1)
      console.log(response1)
      let responseData = response1
      for (let i = 0; i < responseData.length; i++) {
        cardname[i] = responseData[i].name
        cardlogo[i] = responseData[i].logo
        cardurl[i] = responseData[i].url
        status[i] = responseData[i].status
      }
      console.log(responseData)
      const raw2 = {
        "db_name": "ipmo",
        "query": "for doc in spe_application filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] sort doc._id Collect apptype= doc.apptype into grps return {apptype:apptype,grps:grps[*].doc}",
      }
      console.log(raw2);
      const url2 = process.env.REACT_APP_QUERY_URL
      let response = await makeAPIpost(raw2, url2)
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        data[i] = response[i]
        console.log(data)
      }
      for (let i = 0; i < cardname.length; i++) {
        try {
          const index = data.findIndex(object => {
            return object.apptype === cardname[i];
          });
          console.log(index)
          let optionData = response[index]
          console.log(optionData.grps)
          //console.log(Object.entries(optionData.grps));
          let optiondata = []
          for (let j = 0; j < optionData.grps.length; j++) {
            optiondata.push(optionData.grps[j].appname)
            options[i] = optiondata
          }
        } catch (error) {
          console.log(error)
        }
      }
      console.log(options);
      putlogo(cardlogo)
      puttitle(cardname)
      puturl(cardurl)
      putoption(options)
      putstatus(status)
    }
    getData();
  }, [])
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    accessibility: true,
    // prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
    nextArrow: <SampleNextArrow sx={{ height: "50px" }} />,
    responsive: [////////////////////res
 
    {
        breakpoint: 1485,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            
        }
    },
    {
        breakpoint: 1197,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            
        }
    },
    {
        breakpoint: 917,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 585,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
};
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#00000029", padding: "25px 10px", borderRadius: "5px", marginRight: "45px" }}
        onClick={onClick}
      />
    );
  }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px"}}
  //       onClick={onClick}
  //     />
  //   );
  // }
  return (
    <Grid maxWidth="device-width" position="static" style={{ height: "100%", padding: "0px" }}>
      <Header name="Afrin" profile={afrin} displayP="none" />
      <Grid container
        style={{ bg_image, marginTop: { xs: "80px", sm: "80px" } }}
        sx={{
          backgroundImage: `url(image/blur.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center", height: "100vh",
          // paddingLeft: "30px"
        }}
      >
        {/* <Grid item container direction="column"> */}
        <Grid item md={12} >
          <Typography style={{ marginLeft: "60px", marginTop: "60px", fontSize: "24px", fontFamily: "poppins", fontWeight: 500, opacity: "0.90" }}>Logged In As Nr.Afrin</Typography>
        </Grid>
        <Grid container  item md={12} lg={12} xl={12} xs={12} sm={12}  sx={{ paddingLeft: "10px", marginBottom: "100px",display: { sm: "none", xs: "none", xl: "block", lg: "block", md: "block" } }} >
          <Slider {...settings}  >
            {Array.from(Array(TITLE.length)).map((_, index) => (
              <Grid item xs={12} sm={12} md={12} lg={12} key={index} sx={{ marginLeft: "10px"}} >
                <Cardd sx={{ padding: "10px 25px 15px 11px" }} title={TITLE} url={URL} int={index} images={LOGO} status={STATUS} optionsAll={OPTION} />
              </Grid>
            ))}
          </Slider>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12} sm={12} sx={{ paddingLeft: "10px" ,display: { sm: "block", xs: "block", xl: "none", lg: "none", md: "none" } }}>
          {Array.from(Array(TITLE.length)).map((_, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index}  sx={{paddingBottom:"10px",display:"flex",justifyContent:"center"}} >
              <Cardd sx={{ padding: "10px 25px 15px 11px" }} title={TITLE} url={URL} int={index} images={LOGO} status={STATUS} optionsAll={OPTION} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default App;
