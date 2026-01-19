import { Link } from "react-router-dom";

export default function Home() {
  /* TODO: Design and complete the Home page
    - display instructions
    - link to Cards page
    - style as a landing page */
  return <main className="home-container">
     <div className="home-card">
        <h1 className="home-title">
          <span className="title-greeting">Welcome to</span>
          {"\nCard Management App"}
        </h1>

        <p className="home-intro">
          "Manage Your Cards Effortlessly!"
        </p>

        <section className="home-features">
          <h2 className="home-subtitle">What You Can Do</h2>
          <ul>
            <li>
              <span className="feature-label">VIEW CARDS 🔍</span>
              {"\nSee all your cards at a glance."}
            </li>
            <li>
              <span className="feature-label">ADD CARDS ➕</span>
              {"\nQuickly add new cards with a simple form."}
            </li>
            <li>
              <span className="feature-label">EDIT CARDS ✏️</span>
              {"\nUpdate any card via the edit page."}
            </li>
            <li>
              <span className="feature-label">DELETE CARDS 🗑️</span>
              {"\nRemove cards you no longer need."}
            </li>
          </ul>
        </section>

        <Link to="/cards" className="home-start-button">
          Get Started
        </Link>
      </div>
  </main>;
}
