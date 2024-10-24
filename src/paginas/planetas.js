import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ComponenteLayoutPadrao from '../components/layout/padrao';
import ApiPlanetas from '../api/planetas';

export default function PaginaPlanetas() {
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [msg, setMsg] = useState(null);
  const [planetas, setplanetas] = useState([]);

  //USEEFFECT EXECUTA FUNÇÃO APENAS QUANDO A PÁGINA É CARREGADA PELA PRIMEIRA VEZ
  useEffect(() => {
    (async () => {

      try {
        let respostaApi = await ApiPlanetas.obterTodos();
        setplanetas(respostaApi);
        setCarregando(false);
      } catch (error) {
        setErro({
          subtitulo: `Ocorreu um erro para obter a lista de planetas, tente novamente.`,
          descricao: String(error) // ISTO MOSTRA O ERRO TÉCNICO, TALVEZ NÃO SEJA UMA BOA MOSTRAR AO USUÁRIO, POIS PODE DEIXÁ-LO CONFUSO
        });
        setCarregando(false);
      }
      
    })();
  }, []);

  return (
    <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
      <Container maxWidth="xl" className="containerMargin">
        <Typography variant="h2" component="h1" textAlign={'center'}>
          Planetas do sistema solar
        </Typography>
        <Grid2 container spacing={2} pt={2}>
          {/* XS = 2 ITEMS*/}
          {/* SM = 3 ITEMS*/}
          {/* MD = 4 ITEMS*/}
          {/* LS = 6 ITEMS*/}
          {/* XL = 6 ITEMS*/}
          {planetas.map((planeta) => (
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}>
              <Card className="cardVidro">
                <Link to={`/planeta/${planeta?.slug}`}>
                  <CardActionArea>
                    <CardContent>
                      <img src={planeta?.imgUrl} alt={planeta?.descrição} width="100%" />
                      <Typography variant="h5" component="h2">
                        {' '}
                        {planeta?.nome}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ComponenteLayoutPadrao>
  );
}
