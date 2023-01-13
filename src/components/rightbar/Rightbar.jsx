import "./Rightbar.css";
import { FaGift } from "react-icons/fa";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return(<>
      <div className="birthdayContainer">
        <FaGift color="red" className="birthdayIcon" />
        <span className="birthdayText">
          <b>Zakaria Zhlat</b>and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      {/* <img src="" alt="Ad" /> */}
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>);
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">UserInformation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lattakia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Syria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Userfrieds</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Zakaria</span>
          </div>
          <div className="rightbarFollowing">
            <img src="" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Zakaria</span>
          </div>
          <div className="rightbarFollowing">
            <img src="" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Zakaria</span>
          </div>
          <div className="rightbarFollowing">
            <img src="" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Zakaria</span>
          </div>
          <div className="rightbarFollowing">
            <img src="" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Zakaria</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWarpper">
       {profile ? <ProfileRightBar />:<HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
