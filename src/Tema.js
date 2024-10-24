import { createTheme } from "@mui/material";

const tema = createTheme({
  palette:{
    primary: {
      main: "#F5D837",
      contrastText: "#644AA2"
    },
    white:{
      main: '#FFF'   
    }
  },
  typography:{
    allVariants: {
      color: "#FFF"
    }
  }
});

export default tema;