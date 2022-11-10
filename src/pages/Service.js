import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBagShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import SingleReview from '../components/Sections/SingleReview';
import { useState, useEffect } from 'react';
import UseTitle from './../customHooks/UseTitle';

const Service = () => {
    const {user} = useContext(AuthContext);
    const {service, reviews} = useLoaderData();
    const location = useLocation();
    const {_id, serviceName, description, price, image} = service[0];
    const [reviewLength, setReviewLength] = useState(false);
    const [allReviews, setAllReviews] = useState(reviews);
    const [refresh, setRefresh] = useState(false);

    UseTitle(serviceName);

    // current date & time
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    
    useEffect( () => {
        if(reviews.length > 0){
            setReviewLength(true);
        }else{
            setReviewLength(false);
        }
    }, [reviews.length])

    
    useEffect( () => {
        fetch(`http://localhost:5000/services/single/${_id}`)
        .then(res => res.json())
        .then(data => {
            setAllReviews(data.reviews)
            if(data.reviews.length > 0){
                setReviewLength(true);
            }else{
                setReviewLength(false);
            }
        })
    }, [_id, refresh, reviewLength]);

    // success toast
    const successToast = () => {
        toast.success('Comment added successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    

    const handleReviewAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        const review = {
            "dateTime": dateTime,
            "serviceId": `${_id}`,
            "serviceName": serviceName,
            "userUid": user.uid,
            "name": name,
            "photo": user.photoURL,
            "email": user.email,
            "comment": comment,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                e.target.reset();
                setRefresh(!refresh);
                successToast();
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <section>
            {/* service details */}
            <div className="flex flex-col justify-center items-center py-20 bg-white">
                {/* Breadcrumbs */}
                <div className="text-sm breadcrumbs mb-10">
                    <ul>
                        <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>&nbsp;Home
                        </Link>
                        </li> 
                        <li>
                        <Link to="/services">
                            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>&nbsp;Services
                        </Link>
                        </li> 
                        <li>
                            <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>&nbsp;{serviceName}
                        </li>
                    </ul>
                </div>
                {/* service info */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-between items-center container mx-auto">
                        <div className=''><img src={image} alt={serviceName} className='rounded-lg shadow-md border-primary border-4 w-full' /></div>
                        <div className='w-3/4'>
                            <h2 className='text-6xl font-bold text-primary pb-3 px-3'>{serviceName}</h2>
                            <p className='text-sm font-light px-3'>The Coffee you want.</p>
                            <h2 className='px-3 text-2xl py-2 font-semibold'>About - {serviceName}</h2>
                            <p className='px-3 py-2 font-regular text-md'>{description}</p>
                            <h1 className='px-3 text-3xl font-semibold text-success'>${price} USD</h1>
                            <button className="btn btn-primary mx-3 my-3">Get A Hot In Table</button>
                        </div>
                    </div>
                </div>
                {/* servicec comment */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className='text-2xl font-semibold text-primary my-10 text-center w-full'>Review & Comments</h1>
                        <div className="container mx-auto flex flex-col border border-primary p-4 rounded-lg">
                            {
                                user ? <>
                                    <form className='flex flex-col justify-center items-center' onSubmit={handleReviewAdd}>
                                        <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full mb-2" name='name' required />
                                        <textarea className="textarea textarea-primary w-full" placeholder="Write a comment..." name='comment' required></textarea>
                                        <input type="submit" value="Comment" className='btn btn-primary mt-2 w-full' />
                                    </form>
                                </> : <>
                                    <div className='flex flex-col justify-center items-center'>
                                        <Link to='/login' state={{from: location}} replace className='btn btn-primary mt-2 w-full'>Please Login to Review</Link>
                                    </div>
                                </>
                            }

                            {
                                reviewLength ? allReviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>) : <>

                                <div className="flex flex-row justify-start items-start bg-slate-300 rounded-lg mt-3 p-2 shadow-md">
                                    <div>
                                        <h2 className='text-md text-danger font-semibold'>No Reviews Found!</h2>
                                    </div>
                                </div>

                                </>
                                
                            }

                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />

        </section>
    );
};

export default Service;