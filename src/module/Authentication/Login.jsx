import  {Link} from 'react-router-dom';


export default function Login(){
    return(
            <div className="login-container">
                <div className="video-background">
                    <video src={require('../assets/background.mp4')} autoPlay muted loop/>
                </div>
                <div className="container" id="login-box">
                    <div className="login-card">
                        <div className="login-card-flex">
                            <div className="login-card-form">
                                <div className="login-card-form-title">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to continue</p>
                                </div>
                                <form>
                                    <div class="form-group mb-3">
                                        <label for="exampleInputEmail1" className="mb-2">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputPassword1" className="mb-2">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                    <Link to="/main" className="link-button text-primary">Forgot Password?</Link>
                                    <button type="submit" class="btn btn-primary mt-3 mb-2">Login</button>
                                    <div className='register'>
                                        <span>Need Account?</span>
                                        <Link to="/main" className="link-button text-primary">Register</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="login-card-qr">
                                <div className="login-card-qr-icon">
                                    <img src="https://th.bing.com/th/id/OIP.47hE5-3xRXnF18oP6Wj46QHaHa?pid=ImgDet&rs=1" alt=""/>
                                </div>
                                <div className="login-card-qr-text">
                                    <h3 className="fw-bold">Log in with QR Code</h3>
                                    <p>Scan QR Code to login instanly using your mobile phone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}