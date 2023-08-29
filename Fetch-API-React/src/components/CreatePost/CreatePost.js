import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { EditNoteOutlined } from '@mui/icons-material';
import axios from 'axios';

export function CreatePost() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       title: data.get('title'),
//       text: data.get('text'),
//     });
//   };
  
  const handlePostSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data);
    
    try {
      let response = await axios.post('https://jsonplaceholder.typicode.com/posts/', {
        data: {
          // userId: data.get('userId'),
          // id: data.get('id'),
          title: data.get('title'),
          text: data.get('text'),
        }
      });

      let dataResponse = await response.data;

      console.log(dataResponse);

      return dataResponse;
    } catch (error) {
      console.error(`Errooo!!! \n`, error);
    }
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EditNoteOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>
          <Box component="form" method="post" onSubmit={handlePostSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
          <TextField
            margin="normal"
            fullWidth
            name="text"
            id="text outlined-multiline-static"
            label="Text"
            multiline
            rows={4}
            // defaultValue="Text"
            autoComplete="current-text"
        />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              // component={Link}
              // to="../posts"
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="error"
              component={Link}
              to="../posts"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

// import { Container } from "semantic-ui-react";

// const CreatePost = () => {
//     return (
//         <Container maxWidth="sm">
//             <h1>Create Post</h1>
//         </Container>
//     );
// }

export default CreatePost;