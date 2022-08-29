import Link from "next/dist/client/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That Page Cannot be Found</h2>
      <p>
        Go back to the
        <Link href="/homepage">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
