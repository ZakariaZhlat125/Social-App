import "./Sidebar.css";
import {
  MdRssFeed,
  MdMessage,
  MdGroup,
  MdBookmark,
  MdBusinessCenter,
  MdEvent,
  MdSchool,
  MdOutlinePlayCircleFilled,
} from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import profile from "../../assets/profile.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <MdMessage className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>

          <li className="sidebarListItem">
            <MdOutlinePlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>

          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <MdBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">MdBookmark</span>
          </li>

          <li className="sidebarListItem">
            <RiQuestionLine className="sidebarIcon" />
            <span className="sidebarListItemText">RiQuestionLine</span>
          </li>

          <li className="sidebarListItem">
            <MdBusinessCenter className="sidebarIcon" />
            <span className="sidebarListItemText">MdBusinessCenter</span>
          </li>

          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">MdEvent</span>
          </li>

          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Cources</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFirendList">


        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
