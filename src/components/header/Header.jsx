import "./Header.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdPerson,MdNotifications } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import profile from '../../assets/profile.jpg'
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="headerLeft">
        <span className="logo">Social App</span>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
        <HiMagnifyingGlass className="searchIcon" />
        <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerLinks">
          <span className="headerLink">HomePage</span>
          <span className="headerLink">TimeLine</span>
        </div>
        <div className="headerIcon">
          <div className="headerIconItem">
            <MdPerson />
            <span className="headerIconBage">1</span>
          </div>
          <div className="headerIconItem">
            <SiMessenger />
            <span className="headerIconBage">2</span>
          </div>
          <div className="headerIconItem">
            <MdNotifications />
            <span className="headerIconBage">1</span>
          </div>
        </div>
        <img src={profile} alt="" className="headerImg" />
      </div>
    </div>
  );
}

export default Header;
