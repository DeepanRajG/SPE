import React from 'react'
import Patient from './patientPage'
import Doctor from './doctorPage'
import Nurse from './nursePage'
import ErrorPage from './errorPage'
export default function Page() {
      // patient user
    if(localStorage.getItem('roll_id')===process.env.REACT_APP_PATIENT_ROLLID ){
      return (
        <div>
           <Patient></Patient>
        </div>
      )
    }
      // doctor user
    if(localStorage.getItem('roll_id')===process.env.REACT_APP_DOCTOR_ROLLID){
      return (
        <div>
           <Doctor/>
        </div>
      )
    }
    //nurse user
    if(localStorage.getItem('roll_id')===process.env.REACT_APP_NURSE_ROLLID){
      return (
        <div>
           <Nurse/>
        </div>
      )
    }
    //error page
    if(localStorage.getItem('roll_id')===process.env.REACT_APP_ERROR_ROLLID){
      return (
        <div>
           <ErrorPage></ErrorPage>
        </div>
      )
    }
    else{
    }
}
