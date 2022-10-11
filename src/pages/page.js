import React from 'react'
import Patient from './patientPage'
import Doctor from './doctorPage'
import Nurse from './nursePage'
import{makeAPIpost} from '../component/api'
import {useEffect} from 'react'

export default function Page() {
    const items = localStorage.getItem('user')
    console.log(items);
    useEffect(() => {
      let id=localStorage.getItem('perrolepermsnid')
      const getData = async () => {
      let raw = {
        "db_name":"ipmo",
        "query":"FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='"+id+"' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return merge(IDM_permissionRepoMapping,{repoid:document(IDM_permissionRepoMapping.repoid)}))})"
    }
      console.log(raw)
      const url = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
    
      let response = await makeAPIpost(raw, url)
      console.log(response)
    }
    getData();
  }, [])

    if(localStorage.getItem('roll_id')==="15"){
      return (
        <div>
           <Patient></Patient>
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
    if(localStorage.getItem('roll_id')==="3"){
      return (
        <div>
           <Nurse/>
        </div>
      )
    }
}
