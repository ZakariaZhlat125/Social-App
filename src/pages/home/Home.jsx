import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
