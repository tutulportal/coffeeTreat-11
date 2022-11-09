import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen custom-bg-02">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-primary">Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <Link to="/" className='font-bold text-center hover:underline'>Go Back Home</Link>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Don't have account? Sign-Up</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-black mt-2"><FontAwesomeIcon icon={faKey}></FontAwesomeIcon>&nbsp;Google Sign-In</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;