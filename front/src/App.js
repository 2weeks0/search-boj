import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Team from "./pages/Team";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="team" element={<Team />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
