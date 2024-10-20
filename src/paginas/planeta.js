import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';

export default function PaginaPlaneta() {

  function ClickCompartilhar(){
    window.navigator.share({
      url: `${window.location.href}`,
      text: `Explore o planeta NOME e duscubra suas peculiaridades.`,
      title: `Conheça NOME`
    })
  }

  return (
    <>
      <Container maxWidth="xl">
        <Link to="/planetas">
          <Button variant="outlined" size="large">
            <ArrowBackIosIcon /> Voltar
          </Button>
        </Link>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img className="efeito-girar" src="" alt="" />
          <Typography variant="h5" component="h1">
            Terra
          </Typography>

          <Typography variant="body1" component="p">
            Descrição do planeta Terra
          </Typography>
          <Button variant="contained" size="large" onClick={() => {ClickCompartilhar()}}>
            {' '}
            <ShareIcon /> Compartilhar
          </Button>
        </Stack>
      </Container>
    </>
  );
}
