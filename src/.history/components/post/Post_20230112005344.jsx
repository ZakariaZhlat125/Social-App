import "./Post.css";
import profile from "../../assets/profile.jpg";
import { Users } from "../../dummyData";

import { MdMoreVert } from "react-icons/md";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function Post({post}) {
const [like,setlike]=useState(post.like)
const [islike,setlike]=useState(post.like)
  return (
    <div className="post">
      <div className="postWarpper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((user) => user.id === post?.userId)[0].profilePicture} alt="profile Image" className="postProfileImg" />
            <span className="postUserName">{Users.filter((user) => user.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <AiFillLike className="likeIcon" color=" blue" />
            <AiFillHeart className="likeIcon" color="red" />
            <span className="postLikeCounter">{like} people Liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
