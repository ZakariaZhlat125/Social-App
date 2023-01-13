import './Online.css'
export default function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rightbarProfileImageContainer">
      <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightUsername">{user.username}</span>
  </li>
  )
}
