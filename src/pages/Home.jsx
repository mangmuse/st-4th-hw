import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail/1">Detail 페이지</Link>
    </div>
  );
}
