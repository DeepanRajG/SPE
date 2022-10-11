import React from 'react'
import Patient from './patientPage'
import Doctor from './doctorPage'
import Nurse from './nursePage'
import{makeAPIpost} from '../component/api'
import {useEffect,useState} from 'react'

export default function Page() {
  let finaldata;
  let dat =false;
    const items = localStorage.getItem('user')
    console.log(items);


  //   useEffect(() => {
  //     let id=localStorage.getItem('perrolepermsnid')
  //     console.log(id);
  //     const getData = async () => {
  //     let raw = {


    
  //       "query": "FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='"+id+"' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return document(IDM_permissionRepoMapping.repoid)._id)})"
    
  //   }
  //     console.log(raw)
  //     const url = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
    
  //     let response = await makeAPIpost(raw, url)
     
  //     console.log(response[0].permsn_repo)


     
  //       let raw1 = {

  //         "db_name": "ipmo",
      
  //         "query": "for doc in spe_category filter doc.rep_id IN ["+response[0].permsn_repo.map(x => "'" + x + "'").toString()+"] return doc"
      
  //     }
  //       console.log(raw1)
  //       const url1 = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
      
  //       let response1 = await makeAPIpost(raw1, url1)
  //       console.log(response1)
  //       finaldata=response1

  //       dat=true


    

  //   }




  //   getData();
  // }, [])

  








   
   
  




    if(localStorage.getItem('roll_id')==="15" ){

      return (
        <div>
           <Patient renderdata={finaldata}></Patient>
        </div>
      )
    }
    if(localStorage.getItem('roll_id')==="113"){
      return (
        <div>
           <Doctor/>
        </div>
      )
    }
    if(localStorage.getItem('roll_id')==="114"){
      return (
        <div>
           <Nurse/>
        </div>
      )
    }
}
