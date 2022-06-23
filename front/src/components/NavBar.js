import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">홈</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">검색</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/team">팀</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
