import Logo from "../images/Logo.png";
import ProfileIcon from "../images/profile-icon.png";

const Header = () => {
  return (
    <header>
      <div className="container row">
        <a className="logo" href="#">
          <img src={Logo} />
        </a>
        <nav className="nav">
          <a href="#" className="nav__link nav__link--sign-up-button">
            Giriş Yap
          </a>

          <a href="#" className="nav__link nav__link--profile-button">
            <img src={ProfileIcon} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
