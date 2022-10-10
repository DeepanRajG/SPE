import React, { Component } from "react";
import Slider from "react-slick";
import {
    Grid,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cardd } from "../component/card.jsx"
import logo from "../img/logo.png";
import union from '../img/Union .svg'
import headset from '../img/headset .png'
import timetable from '../img/Timetable.png'
import system from "../img/System.png";
import statistics from "../img/statistics.png";

export default class SwipeToSlide extends Component {
  render() {
    let title = ["TPP", "Chart & Results", "Manage","Meal Order","Smart Assist","Timetable"]
    let images=[union,statistics,system,logo,headset,timetable]
    let options = ["Option 1","Option 1","Option 1"]
    let options1 = ["Laboratory","Radiology","Documents"]
    let options2 = ["Device", "Apps", "Bed / Rooms"]
    let options3 =["Order Meal / Status","My Diet Plan","Attender Plan"]
    let options4 =["Calls","Patient Schedules","Patient Care Team"]
    let options5 =["Scheduled Visits","Scheduled Activities","Option 3"]

    const settings = {
      className: "center",
      infinite: false,
      slidesToShow: 5,
      slidesToScroll:5,
      arrow:true,
      afterChange: function(index) {
      console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings} >
            {Array.from(Array(7)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} lg={2} key={index} spacing={1}>
              <Cardd title={title} int={index} images={images}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2,options3,options4,options5]} />
            </Grid>
          ))}
         
         
        </Slider>
      </div>
    );
  }
}
