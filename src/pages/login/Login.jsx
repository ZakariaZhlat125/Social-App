import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWarpper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocailApp</h3>
                <span className="loginDesc">Connect with friends and the world around you on App</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginBotton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButtton">Create a New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
