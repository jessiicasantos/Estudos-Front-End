import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SinglePage = () => {
  const [data, setData] = useState(null);
  const { postId } = useParams();
    
  // async/await
  async function fetchData() {
      try {
        let response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
          
        let dataResponse = await response.data;
        // console.log(dataResponse);

        setData(dataResponse);
      } catch (err) {
        console.error('Errrroooo!!! ', err);
      }
  }

  useEffect(() => {
    fetchData()
  });

  return (
      <>
    <CssBaseline />
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
          {data && 
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                {data.title}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {data.body}
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                </Stack>
            </Container>
          }
      </Box>
              
      {/* <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data && data.map((card, i) => (
            <Grid item key={`card-${i}`} xs={12} sm={6} md={4}>
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
                      {card.id}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
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
      </Container> */}
    </main>
  </>
  );
}

export default SinglePage;