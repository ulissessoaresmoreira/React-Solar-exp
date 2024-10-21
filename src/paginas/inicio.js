import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function PaginaInicio() {
  return (<>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center">Conheça os planetas do sistema solar</Typography>
        <img className="animacaoEfeitoFlutuando" src='/img/astronauta.png' alt="Astronauta Flutuando" />
        <Link to="/planetas" >
          <Button variant="contained" size='large'>Decolar<ArrowForwardIosIcon/> </Button>
        </Link>
        
      </Stack>
    </>);
}
