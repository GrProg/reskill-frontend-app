import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Endpoint to fetch all posts and photos
app.get('/posts', async (req, res) => {
  try {
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos');

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    // Combine posts with corresponding photos
    const combinedData = posts.map(post => ({
      ...post,
      photo: photos.find(photo => photo.albumId === post.id)
    }));

    res.json(combinedData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Endpoint to fetch a single post with its photo
app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);

    const post = postResponse.data;
    const photo = photoResponse.data;

    const combinedData = {
      ...post,
      photo: photo
    };

    res.json(combinedData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
