import { Button, Container, Stack, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import ApiPlanetas from '../api/planetas';
import ComponenteLayoutPadrao from '../components/layout/padrao';

export default function PaginaPlaneta() {
  const [carregando, setCarregando] = useState(false);
  const [planeta, setPlaneta] = useState({});
  const [erro, setErro] = useState(null);
  const [msg, setMsg] = useState(null);

  const parametros = useParams();

  useEffect(() => {
    (async () => {

      console.log(parametros.slug);

      try {
        let responseApi = await ApiPlanetas.obterUnicoPorSlug(parametros.slug);
        if(!responseApi?.[0]){throw new Error("Planeta não encontrado!")};
        setPlaneta(responseApi?.[0]);
        setCarregando(false);
      } catch (error) {
        setErro({
          subtitulo: `Ocorreu um erro ao obter o detalhe do planeta, tente novamente.`,
          descricao: String(error)
        });
        setCarregando(false);
      }
    })();
  }, []);

  async function ClickCompartilhar() {
    let resImg = await fetch(planeta?.imgUrl);
    let contentType = resImg.headers.get("content-type");
    let blob = await resImg.blob();
    let binaryFile = new File([blob], `${planeta?.nome} - ${planeta?.nome}`, {type: contentType});

    window.navigator.share({
      url: `${window.location.href}`,
      text: `Explore o planeta ${planeta?.nome} e duscubra suas peculiaridades.`,
      title: `Conheça ${planeta?.nome}`,
      files: Array(binaryFile)
    });
  }

  return (
    <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
      <Container maxWidth="xl" className="containerMargin">
        <Link to="/planetas">
          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIosIcon />}
          >
            Voltar
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
          <img
            className="animacaoEfeitoGirar"
            src={planeta?.imgUrl}
            alt={planeta?.descrição}
          />
          <Typography variant="h5" component="h1">
            {planeta?.nome}
          </Typography>

          <Typography variant="body1" component="p">
            {planeta?.descrição}
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ShareIcon />}
            onClick={() => {
              ClickCompartilhar();
            }}
          >
            
            Compartilhar
          </Button>
        </Stack>
      </Container>
    </ComponenteLayoutPadrao>
  );
}
