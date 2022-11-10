import React, { useContext } from 'react';
import { ArrowRightOnRectangleIcon, ChatBubbleLeftEllipsisIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const Header = () => {

    const navigate = useNavigate();
    const {user, logOut} = useContext(AuthContext);

    const goToLogin = () => {
        navigate('/login');
    }

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            navigate('/login');
        });
    };

    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-light btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    {
                        user ? <>
                            <li><Link to="/my-reviews">My Reviews</Link></li>
                            <li><Link to="/add-services">Add Services</Link></li>
                        </> : <></>
                    }
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-primary hover:bg-primary hover:border-primary normal-case text-xl"><FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>&nbsp;CofeeTreat</Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-light btn-circle tooltip tooltip-bottom tooltip-success mr-2 lg:inline-block md:inline-block sm:hidden hidden" data-tip="Live Chat">
                <div className="indicator">
                    <ChatBubbleLeftEllipsisIcon className='w-5 h-5'></ChatBubbleLeftEllipsisIcon>
                </div>
                </button>
                {
                    user ? <>

                        <button className="btn btn-light btn-circle tooltip tooltip-bottom tooltip-success mr-2" data-tip={user.displayName}>
                        <div className="indicator overflow-hidden w-12 h-12 rounded-full ">
                            <img src={user.photoURL} className="h-full w-full" alt="" />
                        </div>
                        </button>

                        <button onClick={handleLogOut} className="btn btn-light btn-circle tooltip tooltip-bottom tooltip-success" data-tip="Logout">
                        <div className="indicator">
                            <ArrowLeftOnRectangleIcon className='w-5 h-5'></ArrowLeftOnRectangleIcon>
                        </div>
                        </button>
                    </> : <>
                        <button onClick={goToLogin} className="btn btn-light btn-circle tooltip tooltip-bottom tooltip-success" data-tip="Login">
                        <div className="indicator">
                            <ArrowRightOnRectangleIcon className='w-5 h-5'></ArrowRightOnRectangleIcon>
                        </div>
                        </button>
                    </>
                }
                
            </div>
        </div>
    );
};

export default Header;