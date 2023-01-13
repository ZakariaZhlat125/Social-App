import './CloseFriends.css'


export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user} alt="" className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}
