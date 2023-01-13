import "./Rightbar.css";
import {FaGift} from "react-icons/fa";
import profile from "../../assets/profile.jpg";


function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWarpper">
        <div className="birthdayContainer">
          <FaGift color="red"  className="birthdayIcon"/>
          <span className="birthdayText">
            <b>Zakaria Zhlat</b>and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="" alt="Ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profile} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Narato</span>
          </li>
        </ul> <ul className="rightFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profile} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Narato</span>
          </li>
        </ul> <ul className="rightFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profile} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">Narato</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
