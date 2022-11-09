import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = (props) => {
    const service = props.service;
    const {serviceName, description, image, status, price} = service;

    // for limit the words to 100
    function shorten(text,max) {
        return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <figure>
                    <PhotoView src={image}>
                        <img src={image} alt={serviceName} />
                    </PhotoView>
                </figure>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{serviceName}
                    <div className="badge badge-primary uppercase">{status}</div>
                </h2>
                <p>{`${shorten(description,100)}...`}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary font-bold">${price}</div> 
                    <div className="badge badge-outline">USD</div>
                </div>
                <div className="flex flex-row justify-center items-center pt-4">
                    <button className='btn btn-primary w-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;