import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/assets/images/logo.svg" alt="logo" className="logo" />

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">New</a>
        </li>
        <li>
          <a href="#contact">Popular</a>
        </li>
        <li>
          <a href="#trending">Trending</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
      </ul>
    </nav>
  );
}
