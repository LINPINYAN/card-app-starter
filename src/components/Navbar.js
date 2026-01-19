import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          Card Management App
        </NavLink>

        <NavLink
          to="/cards"
          end
          className={({ isActive }) =>
              isActive ? "nav-link button cardlist-btn active" : "nav-link button cardlist-btn"
          }
        >
          My CardList
        </NavLink>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        <NavLink
          to="/cards/new"
          className={({ isActive }) =>
            isActive ? "nav-link button add-btn active" : "nav-link button add-btn"
          }
        >
          + Add Card
        </NavLink>
      </div>
    </header>
  );
}

