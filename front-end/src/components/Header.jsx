import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logo" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify Clone</h1>
      </Link>
    </div>
  );
};

export default Header;
