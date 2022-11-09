import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../contexts/auth.context';

const Login = () => {

    const {loginWithEmailPass, loginWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [emailFountError, setEmailFoundError] = useState(false);

    const handleLoginFrom = (e) =>{
        e.preventDefault();
        const getForm = e.target;
        const email = getForm.email.value;
        const password = getForm.password.value;
        loginWithEmailPass(email, password)
        .then(res => {
            console.log(res);
            setEmailFoundError(false);
            navigate(from, {replace: true});
        })
        .catch(err => {
            setEmailFoundError(true);
            console.log(err);
        })
    };

    const handleGoogleSignIn = () =>{
        loginWithGoogle()
        .then(res =>{
            navigate(from, {replace: true});
        })
        .catch(err =>{
            console.error(err);
        })
    };

    return (
        <div className="hero min-h-screen custom-bg-02">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-primary">Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleLoginFrom}>
                    <Link to="/" className='font-bold text-center hover:underline'>Go Back Home</Link>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Don't have account? Sign-Up</Link>
                    </label>
                    </div>
                    {
                        emailFountError ? <>
                            <div className="form-control">
                                <label className='label'>
                                    <span className='label-text text-red-500'>User Not Found, Please Enter Correct Information</span>
                                </label>
                            </div>    
                        </> : <></>
                    }
                    
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-black mt-2" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faKey}></FontAwesomeIcon>&nbsp;Google Sign-In</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;