# Movie Collection Display API

## 1. About the Collection

This collection features a curated list of 7 films spanning several genres. I chose these movies because they represent a mix of critically acclaimed films that have defined their genres, from timeless dramas to mind-bending sci-fi. The collection was chosen to provide a diverse and high-quality viewing experience, highlighting some of the most iconic films from the late 20th and early 21st centuries.

## 2. Project Description

This project is a simple API built with Node.js and Express.js that serves data about a movie collection. It also includes a simple HTML, CSS, and JavaScript frontend that fetches and displays this data, allowing users to browse all movies, filter by classics, and view genre summaries.

**Technologies used:**
* Node.js
* Express.js
* HTML5
* CSS3
* JavaScript (ES6+ Fetch API)

## 3. Genres Available

The following genres are included in this collection:
* Drama
* Action
* Thriller
* Sci-Fi

## 4. Project Structure

movie-collection-api/ ├── node_modules/ (Ignored by Git) ├── public/ (Static files for frontend) │ ├── index.html (Main HTML page) │ ├── style.css (CSS styles) │ └── script.js (Frontend JavaScript for fetch) ├── .gitignore (Tells Git what to ignore) ├── package.json ├── package-lock.json └── server.js (Main Express server file)


## 5. API Documentation

### Endpoint 1: Get All Movies
* **Endpoint:** `/movies`
* **Method:** `GET`
* **Description:** Returns a JSON array of all movie objects in the collection.
* **Sample Response:**
    ```json
    [
      {
        "id": 1,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Frank Darabont"
      },
      {
        "id": 3,
        "title": "The Dark Knight",
        "genre": "Action",
        "releaseYear": 2008,
        "isClassic": false,
        "director": "Christopher Nolan"
      }
    ]
    ```

### Endpoint 2: Get Classic Movies
* **Endpoint:** `/movies/classics`
* **Method:** `GET`
* **Description:** Returns a JSON array of only the classic movies (where `isClassic` is `true`).
* **Sample Response:**
    ```json
    [
      {
        "id": 1,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Frank Darabont"
      }
    ]
    ```

### Endpoint 3: Get Genres
* **Endpoint:** `/movies/genres`
* **Method:** `GET`
* **Description:** Returns a JSON object containing an array of all unique genres and the count of movies for each.
* **Sample Response:**
    ```json
    {
      "genres": [
        {
          "name": "Drama",
          "movieCount": 3
        },
        {
          "name": "Action",
          "movieCount": 1
        },
        {
          "name": "Sci-Fi",
          "movieCount": 2
        }
      ]
    }
    ```

## 6. Installation & Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Fadi929/Movie-Collection-Display-API.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd movie-collection-api
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    node server.js
    ```
    You should see the message: `Movie API server running at http://localhost:3000`

5.  **Access the application:**
    * **Frontend:** Open your browser and go to `http://localhost:3000`
    * **API Endpoints:**
        * `http://localhost:3000/movies`
        * `http://localhost:3000/movies/classics`
        * `http://localhost:3000/movies/genres`

## 7. Features
* Serves a movie collection via a RESTful API.
* Provides 3 distinct endpoints for all movies, classic movies, and genre counts.
* Features a dynamic frontend built with HTML/CSS/JS.
* Uses the `fetch` API to asynchronously request data.
* Dynamically renders HTML to display data without a page reload.
* Includes a visual badge for "Classic" movies.

## 8. GitHub Repository Link

https://github.com/Fadi929/Movie-Collection-Display-API.git

## 9. Author Information

* **Name:** Fadi Subiar
