import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>BAPPEDA</h1>
      </div>
      <Link href="/homepage">
        <a>Home</a>
      </Link>
      <Link href="/user">
        <a>User</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/grafik">
        <a>Grafik</a>
      </Link>
    </nav>
  );
};

export default Navbar;
