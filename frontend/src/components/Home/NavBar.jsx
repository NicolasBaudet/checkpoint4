/* eslint-disable camelcase */
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarTitle">TravelNico, le voyage qu'il vous faut !</div>
      <div className="navBarIcons">
        <div className="dashboard">
          <Link to="dashboard">Tableau de bord</Link>
        </div>
        <div className="favorite">Favoris</div>
        <div className="basket">Panier</div>
        <div className="login">Connexion</div>
      </div>
    </div>
  );
}

export default NavBar;
