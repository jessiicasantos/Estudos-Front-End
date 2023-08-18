import * as React from 'react';
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Album() {
  const [data, setData] = useState(null);
  
  // async/await
  async function fetchData() {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/'
      );
      response = await response.json()
      // console.log(response);
      setData(response);
      
    }
    
  useEffect(() => {
    fetchData()
  }, []);

  const defaultTheme = createTheme();
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card, ind) => (
              <Grid item key={`card-${ind}`} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title} | Id: {card.id}
                    </Typography>
                    <Typography>
                        {card.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* data test: */}
          {/* <h1>{JSON.stringify(data)}</h1> */}
        </Container>
      </main>
    </ThemeProvider>
  );
}