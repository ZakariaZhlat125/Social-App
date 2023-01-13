import "./Rightbar.css";
import {FaGift} from "react-icons/fa";
import {Users} from '../../dummyData'


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
         
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
