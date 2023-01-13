import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWarpper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocailApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on App
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Agian" className="loginInput" />
            <button className="loginBotton">Sign Up</button>
            <button className="loginRegisterButtton">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
