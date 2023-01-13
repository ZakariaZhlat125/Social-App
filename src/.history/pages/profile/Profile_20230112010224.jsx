import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

import './Profile.css'

export default function Profile() {
  return (
    <>
    <Header />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  </>
  )
}
