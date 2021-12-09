# Best Movie/Shows Downloader API

### You can search movies/shows and get the download link.

<hr>

First, install nodejs(14+), then clone this repository.

<br>

Go inside the directory and run the following commands.

```
1. npm install
2. npm start
```

Server will start listening on port 5000 ... Inside index.js file you can change cors origin to your desird port, if your client port is not 3000.

## Search Movies/Shows

Endpoint:-

```
http://localhost:5000/search?name={movie_name}
```

You will receive an array of objects. Each object contains title, link, size, seeders and peers of that movie.

<hr>

### [END]

### Used cheerio, axios, express... If you find this useful, leave a star.
