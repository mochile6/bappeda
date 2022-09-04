import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <img
          src="https://thumbs2.imgbox.com/e9/8e/XQ2dT4e1_t.png"
          alt="logo"
          width="40"
          height="40"
        />
        <a className="navbar-brand" href="/homepage">
          BAPPEDA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/homepage"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/data">
                Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/grafik">
                Grafik
              </a>
            </li>
            <li className="nav-item navbar-right">
              <a className="nav-link" href="/User">
                User
              </a>
            </li>
            <li className="nav-item navbar-right">
              <a className="nav-link" href="/Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
