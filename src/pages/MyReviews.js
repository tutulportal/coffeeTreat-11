import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTableData from '../components/Sections/SingleTableData';
import { useState } from 'react';

const MyReviews = () => {
    const reviews = useLoaderData();
    
    const confirmModal = document.getElementById('confirm-modal');
    const [deleteId, setDeleteId] = useState('');

    const handleDeleteReview = (id) => {
        setDeleteId(id);
        confirmModal.classList.remove('d-off');
        confirmModal.classList.add('d-on');
    }

    const handleDeleteModalYes = (id) => {
        console.log(id);
        confirmModal.classList.add('d-off');
        confirmModal.classList.remove('d-on');
    }

    const handleDeleteModalNo = () => {
        confirmModal.classList.add('d-off');
        confirmModal.classList.remove('d-on');
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
                        reviews.map(review => <SingleTableData key={review._id} review={review} handleDeleteReview={handleDeleteReview}></SingleTableData>)
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
        </section>
    );
};

export default MyReviews;