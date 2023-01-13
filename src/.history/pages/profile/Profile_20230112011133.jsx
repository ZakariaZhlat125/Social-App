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
            <img className="profileUserImg" src={profile} alt="" />
          </div>
          <div className="prfileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
