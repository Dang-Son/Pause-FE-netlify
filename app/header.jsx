import { Link } from "@remix-run/react";
import styled from "styled-components";

const StyledNav = styled.nav`
  border: 1px solid rgba(192, 192, 192) !important;
`;

function Header() {
  return (
    <StyledNav className="navbar navbar-expand-lg bg-light header position-fixed top-0 w-100 p-2">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          Pause
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Feed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
            <li>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div> */}
      </div>

      <li className="nav-item d-flex">
        <a className="nav-link" href="/followed">
          Followed
        </a>
      </li>
      <li className="nav-item d-flex">
        <a className="nav-link" href="/favorite">
          Favorite
        </a>
      </li>
      <li className="nav-item dropdown d-flex">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Icon
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <Link to="/favorite" className="dropdown-item">
              Profile
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Setting
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Log Out
            </a>
          </li>
        </ul>
      </li>
    </StyledNav>
  );
}

export default Header;
