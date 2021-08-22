import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">/index.html</Link>
        </li>
        <li>
          <Link to="/books">/books</Link>
        </li>
      </ul>
    </nav>
  );
};
