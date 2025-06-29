import "./Header.css"
import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar.png"
const Header = () => {
  return (
    <header className="header">
        <img className="header__logo" alt="wtwr app logo" src={logo}/>
        <p className="header__date-and-location">June 01, 2025  New York</p>
        <button type="button" className="header__clothes-add-btn">
        + Add clothes
        </button>
        <div className="header__user-container">
        <p className="header__username">Shehreyar Khan</p>
        <img className="header__avatar" alt="Shehreyar khan" src={avatar}/>
        </div>
    </header>
  )
}

export default Header;