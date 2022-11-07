import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Entertainhead from "./Entertainhead";
const AppContainer = styled("div")(() => ({
  minWidth: "600px",
  minHeight: "400px",
  border: "1px solid #777",
}));
export default function MyApp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
return (
    <AppContainer>
      {!matches && <Entertainhead/>}
      {matches && <h1>Mobile</h1>}
    </AppContainer>
  );
}