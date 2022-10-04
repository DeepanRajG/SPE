import React from 'react'
import Patient from './patientPage'
import Doctor from './doctorPage'
import Nurse from './nursePage'

export default function page() {
    const items = localStorage.getItem('user')
    console.log(items);

    if(items==="patient"){
      return (
        <div>
           <Patient></Patient>
        </div>
      )
    
    }
    if(items==="doctor"){
      return (
        <div>
           <Doctor/>
        </div>
      )
    }
    if(items==="nurse"){
      return (
        <div>
           <Nurse/>
          
        </div>
      )
    }
 
}
