import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../api/components/Authprovider";
import { useHistory } from 'react-router-dom';
import { assetsImages } from '../Constant/images';

// import axios from '../api/axios';
const LOGIN_URL = '/superadmin_login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            history.push("/home")
        }
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

      console.warn(email,password);
      let item = {email,password};
      let result = await fetch("https://stg-backend.catersmart.in/api/superadmin_login" , {
          method : 'POST',
          headers: {
              "Content-Type":"application/json",
              "Accept": "application/json"
          },
          body : JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push("/home")
    }

    return (
        <div className='login'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (

                <section className='d-flex'>
                    <div className='col-6 login_des row align-items-center'>
                        <div
                            className="loginlogo"
                        >
                            <img
                                src={assetsImages.hmsicon}
                                alt="hms logo"
                                /> 
                        </div>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className='row justify-content-center align-items-center'>
                            <div className="col-6">
                                <div className='form_header text-center'>
                                    <h4>welcome back</h4>
                                    <p>please enter your details</p>
                                </div>
                                <form  onSubmit={handleSubmit}>
                                    <label for="username">Login ID</label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />

                                    <label for="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                    <a href='#' className='text-end'>Forgot Password?</a>
                                    <button>LOGIN</button>
                                    <p className='text-center'>Don't have an acoount? <a href='#'>Sign up</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 logimgblock'>
                        <h1 className='logdes'>
                            HMSHost <span>Feeling Good on the Move</span>
                        </h1>
                        <img
                                src={assetsImages.loginbg}
                                alt="Catersmart Logo"
                                />
                    </div>

                
               
                </section>
            )}
        </div>
    )
}

export default Login
