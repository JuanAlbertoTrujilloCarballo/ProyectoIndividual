import "./header.scss";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {

  return (
    <>
      <div>
        <nav className="header">
          <a href="/home" className="header-link">
            Home
          </a>
          <div>
            <a href="/eventList" className="header-link">
              Event
            </a>
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
          <a href="/appuserList" className="header-link">
              Users
            </a>
        </nav>
      </div>
    </>
  );
}

{/* <nav className="header">
<a href="/home" className="header-link">
  Home
</a>
<div>
  <a href="/list" className="header-link">
    List
  </a>
  <a href="/add" className="navbar-brand">
    Add
  </a> */}

{/* <nav className="navbar navbar-expand navbar-dark bg-dark">
  <a href="/home" className="navbar-brand">
    Home
  </a>
  <div className="navbar-nav mr-auto">
    <a href="/list" className="navbar-brand">
      List
    </a>
    <a href="/add" className="navbar-brand">
      Add
    </a> */}