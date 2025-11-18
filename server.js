// 1. Import Express
const express = require('express');
const app = express();
const port = 3000;

// 2. Define Your Movie Data
// (At least 6 movies, 3 genres, with 'isClassic' set based on releaseYear < 2000)
const movies = [
    { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994, isClassic: true, director: 'Frank Darabont' },
    { id: 2, title: 'The Godfather', genre: 'Drama', releaseYear: 1972, isClassic: true, director: 'Francis Ford Coppola' },
    { id: 3, title: 'The Dark Knight', genre: 'Action', releaseYear: 2008, isClassic: false, director: 'Christopher Nolan' },
    { id: 4, title: 'Pulp Fiction', genre: 'Thriller', releaseYear: 1994, isClassic: true, director: 'Quentin Tarantino' },
    { id: 5, title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010, isClassic: false, director: 'Christopher Nolan' },
    { id: 6, title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994, isClassic: true, director: 'Robert Zemeckis' },
    { id: 7, title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999, isClassic: true, director: 'Lana Wachowski, Lilly Wachowski' }
];

// 3. Set up Middleware to Serve Static Files
// This tells Express to serve your 'public' folder (for index.html, style.css, script.js)
app.use(express.static('public'));

// 4. Implement API Endpoints

// Endpoint 1: GET /movies
// Returns all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Endpoint 2: GET /movies/classics
// Returns only movies where isClassic is true
app.get('/movies/classics', (req, res) => {
    const classicMovies = movies.filter(movie => movie.isClassic);
    res.json(classicMovies);
});

// Endpoint 3: GET /movies/genres
// Returns unique genres and their counts
app.get('/movies/genres', (req, res) => {
    // Use reduce to count movies by genre
    const genreCounts = movies.reduce((acc, movie) => {
        // If the genre isn't in our accumulator object, add it with a count of 1
        if (!acc[movie.genre]) {
            acc[movie.genre] = 1;
        } else {
            // Otherwise, increment the count
            acc[movie.genre]++;
        }
        return acc;
    }, {}); // Start with an empty object {}

    // Format the data as requested in the assignment
    // Convert { Drama: 3, Action: 1, ... } to [{ name: 'Drama', movieCount: 3 }, ...]
    const formattedGenres = Object.keys(genreCounts).map(genreName => ({
        name: genreName,
        movieCount: genreCounts[genreName]
    }));

    res.json({ genres: formattedGenres });
});

// 5. Start the Server
app.listen(port, () => {
    console.log(`Movie API server running at http://localhost:${port}`);
});