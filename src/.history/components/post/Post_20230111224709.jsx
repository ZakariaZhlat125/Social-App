import React from "react";
import "./Post.css";
import profile from "../../assets/profile.jpg";
import { Users } from "../../dummyData";

import { MdMoreVert } from "react-icons/md";
import { AiFillLike, AiFillHeart } from "react-icons/ai";

export default function Post({post}) {
  const user = User.filter(user=> user.id ===1)
  return (
    <div className="post">
      <div className="postWarpper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profile} alt="profile Image" className="postProfileImg" />
            <span className="postUserName">Zakaria Zhalt</span>
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
            <span className="postLikeCounter">{post.like} people Liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
