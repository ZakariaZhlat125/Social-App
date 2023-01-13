import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../assets/profile.jpg";

import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="prfileRight">
          <div className="prfileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={profile} alt="" />
              <img className="profileUserImg" src={profile} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">Zakaria Zhlat</h4>
              <span className="profileDesc">this is description</span>
            </div>
          </div>
          <div className="prfileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
