import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

function App() {
  const movies = [
    {
      name: "Freaked",
      year: "1993",
      rating: "PG-13",
      image: "https://i.ebayimg.com/images/g/zNAAAOxyqUpQ58HF/s-l600.jpg"

    },
    {
      name: "Cannibal! The Musical",
      year: "1993",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BODYyMDM0NTM3Nl5BMl5BanBnXkFtZTYwMDE3MTk4._V1_.jpg"

    },
    {
      name: "Real Genius",
      year: "1985",
      rating: "PG",
      image: "https://m.media-amazon.com/images/M/MV5BMjA3MTgwOTk4OV5BMl5BanBnXkFtZTYwNjM5MDc5._V1_.jpg"

    },
    {
      name: "The Rock",
      year: "1996",
      rating: "R",
      image: "https://pad.mymovies.it/filmclub/2006/07/018/locandina.jpg"

    },
    {
      name: "Total Recall",
      year: "1990",
      rating: "R",
      image: "https://filmhafizasi.com/wp-content/uploads/2013/11/total_recall.jpg"
    },
  ]



  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
