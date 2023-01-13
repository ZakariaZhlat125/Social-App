
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
