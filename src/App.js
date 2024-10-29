import "./App.module.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/:page_id" element={<Main />}></Route>
      <Route path="/about_movie/:movie_id" element={<InfoMovie />}></Route>
      <Route path="/player/:movie_id" element={<Player />}></Route>
    </Routes>
  </Router>
);

export default App;
