import React from "react"
import theme from '../component/theme.json';
import CssBaseline from '@mui/material/CssBaseline';
import { Authorization } from "atp-authorization";
import { ThemeProvider } from "@mui/material";
function App(){
    localStorage.setItem('RoleId', 121);
    localStorage.setItem('permissionData', "121");
    localStorage.setItem('messageCatlogList', "{}");
    localStorage.setItem('version', "1.0.13");
    console.log(theme);
    return(
        <div>
            <CssBaseline></CssBaseline>
               <ThemeProvider theme={theme} >
            <Authorization  />
            </ThemeProvider>
        </div>
    )
}
export default App