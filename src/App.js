import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/Main";
import AddMovieCard from "./components/AddMovieCard";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/add-new" element={<AddMovieCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export const initialMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 7,
    title: "Schindler's List",
    year: 1993,
    description: "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and he joins a group of rebels to break free from their control.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 9,
    title: "Titanic",
    year: 1997,
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 10,
    title: "Goodfellas",
    year: 1990,
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 11,
    title: "Fight Club",
    year: 1999,
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 13,
    title: "Gladiator",
    year: 2000,
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 14,
    title: "The Silence of the Lambs",
    year: 1991,
    description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 15,
    title: "The Green Mile",
    year: 1999,
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 16,
    title: "The Departed",
    year: 2006,
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 17,
    title: "Saving Private Ryan",
    year: 1998,
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 18,
    title: "The Lion King",
    year: 1994,
    description: "A young lion returns to reclaim the throne that was stolen from him and his father by his treacherous uncle after spending his childhood in exile.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 19,
    title: "The Pianist",
    year: 2002,
    description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 20,
    title: "Schindler's List",
    year: 1993,
    description: "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    poster: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF894,1000_QL80_.jpg"
  }
]  
