const express = require('express');
const fetch = require("node-fetch");
global.fetch = fetch;
const dotenv = require('dotenv');
const Unsplash = require("unsplash-js").default;
const { toJson } = require("unsplash-js");
dotenv.config();
// const bodyParser = require('body-parser')
// const path = require('path');
const app = express();
const port = process.env.PORT || 8080

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

// NOTE: currently not doing any SSR so we wont be serving a build folder
// app.use(express.static(path.join(__dirname, 'build')));
const { joinAlbumsWithPhotos } = require('./server/util')

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json
  } catch (error) {
    console.log(error);
    return error
  }
};

app.get('/posts', async (req, res) => {
  const result = await getData('http://jsonplaceholder.typicode.com/posts')
  return res.send(result);
});

app.get('/comments', async (req, res) => {
  const result = await getData('http://jsonplaceholder.typicode.com/comments')
  return res.send(result);
});

app.get('/albums', async (req, res) => {
  const albumResult = await getData('http://jsonplaceholder.typicode.com/albums')
  const photoResult = await getData('http://jsonplaceholder.typicode.com/photos')
  const result = joinAlbumsWithPhotos({ albumData: albumResult, photoData: photoResult })
  return res.send(result);
});

app.get('/photos', async (req, res) => {
  const result = await getData('http://jsonplaceholder.typicode.com/photos')
  return res.send(result);
});

app.get('/users', async (req, res) => {
  // This Api limits users to 10 count, so the dog photos and users match up exactly
  const userResults = await getData('http://jsonplaceholder.typicode.com/users')
  const dogPhotos = await unsplash.search.photos("dogs", 1, 10, { orientation: "portrait" })
    .then(toJson)
    .then(json => {
      // Your code
      return json
    });
  const newResults = userResults.map((user, index) => {
    user.img = dogPhotos.results[index].urls.thumb;
    return user;
  })
  return res.send({ results: newResults, dogPhotos });
});

// NOTE: Same as SSR note above
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));