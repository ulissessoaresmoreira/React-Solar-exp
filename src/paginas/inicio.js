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
        }}
      >
        <Typography variant="h2" component="h1">Conheça os planetas do sistema solar</Typography>
        <img className="efeito-flutuando" src='/img/astronauta.png' alt="Astronauta Flutuando" />
        <Link to="/planetas" >
          <Button variant="contained" size='large'>Zarpar<ArrowForwardIosIcon/> </Button>
        </Link>
        <h1>Olá mundo!</h1>{' '}
      </Stack>
    </>);
}
