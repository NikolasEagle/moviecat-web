import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/Main.js";
import Movie from "./pages/Movie.js";
import Error from "./components/additional/Error.js";
import ErrorPage from "./pages/ErrorPage.js";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/pages/:page_id" element={<Main />}></Route>
        <Route path="/search/:query/pages/:page_id" element={<Main />}></Route>
        <Route path="/movies/:movie_id" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*<Route path="/about_movie/:movie_id" element={<InfoMovie />}></Route>
<Route path="/player/:movie_id" element={<Player />}></Route>*/
