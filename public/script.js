// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the buttons and the data container
    const allMoviesBtn = document.getElementById('allMoviesBtn');
    const classicMoviesBtn = document.getElementById('classicMoviesBtn');
    const genresBtn = document.getElementById('genresBtn');
    const dataContainer = document.getElementById('data-container');

    // Add click event listeners to the buttons
    allMoviesBtn.addEventListener('click', () => fetchData('/movies'));
    classicMoviesBtn.addEventListener('click', () => fetchData('/movies/classics'));
    genresBtn.addEventListener('click', () => fetchData('/movies/genres'));

    // Main function to fetch data from a given endpoint
    async function fetchData(endpoint) {
        // Clear the container
        dataContainer.innerHTML = '<p>Loading...</p>';
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            // Pass the data and the endpoint to the display function
            displayData(data, endpoint);
        } catch (error) {
            console.error('Fetch error:', error);
            dataContainer.innerHTML = '<p>Failed to load data. Please try again.</p>';
        }
    }

    // Function to display the data based on the endpoint
    function displayData(data, endpoint) {
        dataContainer.innerHTML = ''; // Clear loading message

        if (endpoint === '/movies/genres') {
            // This is the genres data
            data.genres.forEach(genre => {
                dataContainer.innerHTML += `
                    <div class="genre-card">
                        <h3>${genre.name}</h3>
                        <p><strong>Movie Count:</strong> ${genre.movieCount}</p>
                    </div>
                `;
            });
        } else {
            // This is movie data (either all or classics)
            data.forEach(movie => {
                dataContainer.innerHTML += `
                    <div class="movie-card">
                        ${movie.isClassic ? '<span class="classic-badge">Classic</span>' : ''}
                        <h3>${movie.title}</h3>
                        <p><strong>Genre:</strong> ${movie.genre}</p>
                        <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
                        <p><strong>Director:</strong> ${movie.director}</p>
                    </div>
                `;
            });
        }
    }
});