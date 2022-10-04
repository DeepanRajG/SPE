  
const url="https://arangodbservice.dev.ainqaplatform.in/api/read_qdmqueries"
export const api =(data)=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "db_name": "eambulance",
    "queryid": "2b5a2375-27b3-45a5-923d-376f393f4d5a",
    "filter": {
      "patientnum": "226611"
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch  (url, requestOptions)
    .then(response => console.log(response.text()))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
export const makeAPIpost = async (jsondata,url) => {
 
  
let data
  try {
    
      const response = await fetch(url, {
       
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'tenantid':'1e4c8e40-a7f8-46de-9ac7-cedde81aa046'
            
          },
          body: JSON.stringify(jsondata) 
      });
       data = await response.json();
      
  }
  catch (e) {
      console.log(e)
  }
return  data
}