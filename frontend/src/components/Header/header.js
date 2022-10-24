import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
          <a href="/list" className="navbar-brand">
            List
          </a>
          <a href="/add" className="navbar-brand">
            Add
          </a>
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
        </nav>
      </div>
    </>
  );
}