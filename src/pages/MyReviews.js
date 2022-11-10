import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTableData from '../components/Sections/SingleTableData';
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../contexts/auth.context';
import UseTitle from './../customHooks/UseTitle';

const MyReviews = () => {
    UseTitle('My Reviews')
    const reviews = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const confirmModal = document.getElementById('confirm-modal');
    const updateModal = document.getElementById('update-modal');
    const [deleteId, setDeleteId] = useState('');
    
    const [allReviews, setAllReviews] = useState(reviews);
    const [refresh, setRefresh] = useState(false);
    const [reviewLength, setReviewLength] = useState(false);

    useEffect( () => {
        if(reviews.length > 0){
            setReviewLength(true);
        }else{
            setReviewLength(false);
        }
    }, [reviews.length])

    useEffect( () => {
        fetch(`http://localhost:5000/reviews/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setAllReviews(data)
            if(data.length > 0){
                setReviewLength(true);
            }else{
                setReviewLength(false);
            }
        })
    }, [user.email, refresh, reviewLength]);

    const successToast = () => {
        toast.success('Comment Deleted Successfully!', {
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

    const successUpdateToast = () => {
        toast.success('Comment Updated Successfully!', {
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

    const errorToast = () => {
        toast.error('Failed To Delete!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const errorUpdateToast = () => {
        toast.error('Failed To Update Comment!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const handleDeleteReview = (id) => {
        setDeleteId(id);
        confirmModal.classList.remove('d-off');
        confirmModal.classList.add('d-on');
    }

    const handleDeleteModalYes = (id) => {
        console.log(id);
        confirmModal.classList.add('d-off');
        confirmModal.classList.remove('d-on');
        // deleting system
        fetch(`http://localhost:5000/reviews/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                successToast();
                setRefresh(!refresh);
            }else{
                errorToast();
            }
        })
        .catch(err => console.error(err));
    }

    const handleDeleteModalNo = () => {
        confirmModal.classList.add('d-off');
        confirmModal.classList.remove('d-on');
    }

    const [editComment, setEditComment] = useState({
        id: '',
        comment: ''
    })

    const handleEditReviews = (id, comment) => {
        let currentEditUser = {
            id: id,
            comment: comment
        }
        setEditComment(currentEditUser);
        updateModal.classList.add('d-on');
        updateModal.classList.remove('d-off');
    }

    const handleCloseUpdateModal = () => {
        updateModal.classList.add('d-off');
        updateModal.classList.remove('d-on');
    }

    const handleUpdateComment = (e) => {
        e.preventDefault();
        let comment = e.target.comment.value;
        const id = editComment.id;
        fetch(`http://localhost:5000/reviews/upadate/${id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({comment})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'updated'){
                successUpdateToast();
                setRefresh(!refresh);
                updateModal.classList.add('d-off');
                updateModal.classList.remove('d-on');
            }else{
                errorUpdateToast();
            }
        })
    }


    


    return (
        <section>
            {/* My Reviews Table */}
            <div className="container mx-auto overflow-x-auto w-full my-20">
                <h1 className="text-3xl text-primary font-bold mb-10 text-center">My Reviews</h1>
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Name - Email</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row --> */}
                    {
                        reviewLength ? <>
                        {
                            allReviews.map(review => <SingleTableData key={review._id} review={review} handleDeleteReview={handleDeleteReview} handleEditReviews={handleEditReviews}></SingleTableData>)
                        }
                        </> : <>
                        <tr>
                            <th>
                            
                            </th>
                            <td>
                            
                            </td>
                            <td>
                                
                            </td>
                            
                            <th>
                                <h2 className='text-error text-center'>No comments found!</h2>
                            </th>
                            <th>
                            
                            </th>
                        </tr>
                        </>
                        
                    }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Name - Email</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>
                    
                </table>
            </div>
            <div className="confirm-modal d-off" id='confirm-modal'>
                <div className="inner-modal">
                    <h2 className='text-2xl text-black py-2 mb-3 font-bold'>Do you want to delete this comment?</h2>
                    <button className='btn btn-success mr-2' onClick={() => handleDeleteModalYes(deleteId)}>Yes</button>
                    <button className='btn btn-error' onClick={handleDeleteModalNo}>No</button>
                </div>
            </div>
            <div className="confirm-modal d-off" id='update-modal'>
                <div className="inner-modal">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h2 className='text-2xl text-black py-2 mb-3 font-bold'>Edit Comment</h2>
                        <button className='btn btn-error' onClick={handleCloseUpdateModal}>Close</button>
                    </div>
                    
                    <form className='flex flex-col justify-center items-center' onSubmit={handleUpdateComment}>
                        <textarea className="textarea textarea-primary w-full" id='' placeholder="Write a comment..." name='comment' defaultValue={editComment.comment} required></textarea>
                        <input type="submit" value="Comment" className='btn btn-primary mt-2 w-full' />
                    </form>
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

export default MyReviews;