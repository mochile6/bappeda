import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { logoutUser as _logoutUser } from "../store/actions/currentUser";

const Navbar = ({ logoutUser }) => {
  const router = useRouter();

  const handleKeluar = () => logoutUser().then(() => router.push("/login"));

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <img
          src="https://thumbs2.imgbox.com/e9/8e/XQ2dT4e1_t.png"
          alt="logo"
          width="40"
          height="40"
        />
        <a className="navbar-brand" href="/index">
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
              <a className="nav-link active" aria-current="page" href="/">
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
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
            <li className="nav-item navbar-right">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li onClick={handleKeluar} className="nav-item navbar-right">
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const connector = connect(null, { logoutUser: _logoutUser });

export default connector(Navbar);
