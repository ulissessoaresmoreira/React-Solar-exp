import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function PaginaPlanetas() {
  return (
    <>
      <Container maxWidth="xl" className="containerMargin">
        <Typography variant="h2" component="h1" textAlign={'center'} >
          Planetas do sistema solar
        </Typography>

        <Grid2 container spacing={2} pt={2}>
          {/* XS = 2 ITEMS*/}
          {/* SM = 3 ITEMS*/}
          {/* MD = 4 ITEMS*/}
          {/* LS = 6 ITEMS*/}
          {/* XL = 6 ITEMS*/}
          <Grid2 size={{xs: 6, sm: 4, md: 3, lg: 2, xl: 2}}>            
            <Card className="cardVidro">
              <Link to="/planeta/teste">
                <CardActionArea>
                  <CardContent>
                    <img src="" alt="" width="100%" />
                    <Typography variant="h5" component="h2">
                      {' '}
                      Terra{' '}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>            
          </Grid2>    
        </Grid2>

        
      </Container>
    </>
  );
}
