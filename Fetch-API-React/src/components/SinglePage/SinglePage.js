import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SinglePage = ({ data }) => {
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
            {data && data.map((d, i) => (
                <Container maxWidth="sm" key={`d-${i}`}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {d.id}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {d.title}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                    </Stack>
                    <hr
                        style={{
                            color: 'red',
                            backgroundColor: 'red',
                            height: 5
                        }}
                    />
                </Container>
            ))}
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