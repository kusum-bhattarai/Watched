# Movie Library App 

A React-based movie library app that lets users explore movies, view details, and save their favorites—all without requiring authentication. The app fetches data from the [TMDB API](https://www.themoviedb.org/documentation/api) and persists saved movies locally for a seamless experience.

## Features
- Search and browse movies, including popular and trending titles.
- Add movies/series under custom categories with personalized ratings and descriptions so that you can always remember how you felt when you watched the movie/series.
- View detailed movie information, including ratings, descriptions, and streaming providers.
- Persistent storage using `localStorage` for user convenience.

Visit this link for [Live App](https://watched-theta.vercel.app/). 

To try it out on your own device:

### Prerequisites
- Node.js (v14 or higher)
- TMDB API key (Sign up [here](https://www.themoviedb.org/signup) for an API key)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kusum-bhattarai/Watched/ 
   cd Watched
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```bash
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Technologies Used
- React, React Router
- React-Bootstrap
- [TMDB API](https://www.themoviedb.org/documentation/api)
- `localStorage` for persistent data

## Future Improvements
- Add user authentication to sync saved movies across devices.
- Add a database to store user data.

## Contributing
Contributions are welcome!  
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Submit a pull request for review.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
