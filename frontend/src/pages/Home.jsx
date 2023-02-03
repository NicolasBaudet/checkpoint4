import Homebody from "../components/Home/HomeBody";
import NavBar from "../components/Home/NavBar";
import "./Home.css";
import SideBar from "../components/Home/SideBar";

export default function Home() {
  return (
    <div className="homePage">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="homeBody">
        <Homebody />
      </div>
      <div className="sideBar">
        <SideBar />
      </div>
    </div>
  );
}
