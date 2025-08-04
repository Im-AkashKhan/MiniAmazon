import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-2">
        <div className="logoBox">
          <h3>REACTSHOP</h3>
        </div>
      </div>
      <div className="col-md-8">
        <div className="logoBox">
          <ul className="nav text-center">
            <li> <a className="nav-link" href="/"> HOME </a> </li>
            <li> <a className="nav-link" href="/cart"> CART </a> </li>
            <li> <a className="nav-link" href="/shop"> SHOP </a> </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <div className="logoBox">
          <ul className="nav">
            <li> <a className="nav-link" href="/">
            <FaCartArrowDown />
             {0} </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Header;