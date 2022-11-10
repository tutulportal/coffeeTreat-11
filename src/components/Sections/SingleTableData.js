import React from 'react';

const SingleTableData = (params) => {
    const {_id, comment, dateTime, email, name, serviceName} = params.review;
    const handleDeleteReview = params.handleDeleteReview;
    const handleEditReviews = params.handleEditReviews;
    // console.log(params.review)
    return (
        <tr>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <td>
            <div className="flex items-center space-x-3">
                <div>
                <div className="font-bold">{serviceName}</div>
                </div>
            </div>
            </td>
            <td>
            {name}
            <br/>
            <span className="badge badge-ghost badge-sm">{dateTime}</span>
            </td>
            <td>{email}</td>
            <th>
            <div className="text-sm opacity-100">{comment}</div>
            </th>
            <th>
            <button className="btn btn-warning btn-xs mr-2" onClick={() => handleEditReviews(_id, comment)}>Edit</button>
            <button className="btn btn-error btn-xs" onClick={() => handleDeleteReview(_id)}>Delete</button>
            </th>
        </tr>
    );
};

export default SingleTableData;