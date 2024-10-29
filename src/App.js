import "./App.module.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main.js";

const App = () => (
  <Router>
    <Routes>
      <Route path="/:page_id" element={<Main />}></Route>
    </Routes>
  </Router>
);

export default App;

/*<Route path="/about_movie/:movie_id" element={<InfoMovie />}></Route>
<Route path="/player/:movie_id" element={<Player />}></Route>*/
