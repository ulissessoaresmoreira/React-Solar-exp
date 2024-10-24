import { Cached, Home } from '@mui/icons-material';
import { Button, Grid2, Stack, Typography } from '@mui/material';

export default function ComponenteLayoutMsg(props) {
  return (
    <>
      <Grid2 container height="100vh">
        <Grid2 item size={{ xs: 11, sm: 8, md: 6, lg: 5, xl: 4 }} margin="auto">
          <Stack direction="column" alignItems="center" spacing={2}>
            {props?.icone}
            <Typography variant="h4" component="h1" textAlign="center">
              {props?.titulo}
            </Typography>
            <Typography variant="subtitle1" component="p" textAlign="center">
              {props?.subtitulo}
            </Typography>
            <Typography variant="body1" component="p" textAlign="center">
              {props?.descricao}
            </Typography>
            {props.children}

            {props?.btnTentarNovamente === true && (
              <Button
                variant="outlined"
                startIcon={<Cached />}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Tente novamente!
              </Button>
            )}

            {props?.btnInicio === true && (
              <Button
                variant="outlined"
                startIcon={<Home />}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Voltar ao início
              </Button>
            )}
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}
