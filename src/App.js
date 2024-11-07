import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/Main.js";
import Movie from "./pages/Movie.js";
import ErrorPage from "./pages/ErrorPage.js";
import ProtectedRoute from "./pages/ProtectedRoute.js";

const App = () => (
  <Router basename="/">
    <Routes>
      <Route path="/login" element={<div>Login</div>}></Route>
      <Route element={<ProtectedRoute user={false} />}>
        <Route path="/pages/:page_id" element={<Main />}></Route>
        <Route path="/search/:query/pages/:page_id" element={<Main />}></Route>
        <Route path="/movies/:movie_id" element={<Movie />}></Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
