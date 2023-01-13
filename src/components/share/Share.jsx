import "./Share.css";
import profile from "../../assets/profile.jpg";
import { MdPermMedia,MdLabel,MdRoom,MdEmojiEmotions } from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWarpper">
        <div className="shareTop">
          <img src={profile} alt="" className="shareProfileImg" />
          <input placeholder="What's in your Mind" className="shareInput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia  className="shareIcon tomato" />
              <span className="shareOptionText">Photo or video </span>
            </div>
            <div className="shareOption">
              <MdLabel className="shareIcon blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdRoom className="shareIcon green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions className="shareIcon golde" />
              <span className="shareOptionText">Feelings </span>
            </div>
          </div>
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
}
