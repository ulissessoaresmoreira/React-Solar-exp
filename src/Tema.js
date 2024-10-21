import { createTheme } from "@mui/material";

const tema = createTheme({
  palette:{
    primary: {
      main: "#F5D837",
      contrastText: "#644AA2"
    }
  },
  typography:{
    allVariants: {
      color: "#FFF"
    }
  }
});

export default tema;