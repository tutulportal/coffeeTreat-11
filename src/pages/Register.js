import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import UseTitle from '../customHooks/UseTitle';

const Register = () => {

    UseTitle('Register')

    const {regWithEmailPass, updateUserOnRegistration} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [emailAlreadyUsed, setEmailAlreadyUsed] = useState(false);

    const handleRegistrationWithEmailAndPassword = (e) =>{
        e.preventDefault();
        const getForm = e.target;
        const email = getForm.email.value;
        const name = getForm.name.value;
        const password = getForm.password.value;
        const photoUrl = getForm.photoUrl.value;

        if(password.length < 6){
            setPasswordLengthError(true);
        }else{
            setPasswordLengthError(false);
            regWithEmailPass(email, password)
            .then(res =>{
                setEmailAlreadyUsed(false);
                updateProfileOfUser(name, photoUrl);
                navigate(from, {replace: true});
            })
            .catch(err =>{
                setEmailAlreadyUsed(true);
            });
        }
    };

    const updateProfileOfUser = (name, photoUrl) =>{
        const profileInfo = {
            displayName: name,
            photoURL: photoUrl
        };
        updateUserOnRegistration(profileInfo)
        .then()
        .catch(err =>{
            console.error(err);
        });
    }

    return (
        <div className="hero min-h-screen custom-bg-02">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-primary">Register</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleRegistrationWithEmailAndPassword}>
                    <Link to="/" className='font-bold text-center hover:underline'>Go Back Home</Link>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="http://www.website.com/photo.png" name='photoUrl' className="input input-bordered" required />
                    </div>
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
                        <Link to="/login" className="label-text-alt link link-hover">Already have account? Sign-In</Link>
                    </label>
                    </div>

                    {
                        passwordLengthError ? <>
                            <div className="form-control">
                                <label className='label'>
                                    <span className='label-text text-red-500'>Password Must be at least 6 digits</span>
                                </label>
                            </div>    
                        </> : <></>
                    }

                    
                    {
                        emailAlreadyUsed ? <>
                            <div className="form-control">
                                <label className='label'>
                                    <span className='label-text text-red-500'>This email has been already in use!</span>
                                </label>
                            </div>    
                        </> : <></>
                    }

                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;