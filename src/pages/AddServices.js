import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import UseTitle from './../customHooks/UseTitle';

const AddServices = () => {

    UseTitle('Add Service')

    const navigate = useNavigate();

    const successToast = () => {
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

    const handleAddNewService = (e) => {
        e.preventDefault();
        
        let serviceName = e.target.serviceName.value;
        let image = e.target.image.value;
        let description = e.target.description.value;
        let status = e.target.status.value;
        let price = e.target.price.value;

        let service = {
            "serviceName": serviceName,
            "description": description,
            "image": image,
            "status": status,
            "price": price
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                e.target.reset();
                successToast();
                navigate('/services');
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <section>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-x-auto w-full my-20">
                <h1 className="text-3xl text-primary font-bold mb-10 text-center">Add New Service</h1>
                <form className='flex flex-col justify-center items-center w-[400px]' onSubmit={handleAddNewService}>
                    <input type="text" placeholder="Service Name" name='serviceName' className="input input-bordered input-primary w-full mb-2" required/>
                    <input type="text" placeholder="image link" name='image' className="input input-bordered input-primary w-full mb-2" required/>
                    <textarea className="textarea textarea-primary w-full mb-2" id='' placeholder="Description..." name='description' required></textarea>
                    
                    <select className="select select-primary w-full mb-2" name='status'>
                        <option disabled defaultValue>Select a Status?</option>
                        <option>Hot</option>
                        <option>New</option>
                        <option>Cold</option>
                    </select>

                    <input type="number" placeholder="Price - $0.00" name='price' className="input input-bordered input-primary w-full mb-2" required/>
                    <input type="submit" value="Add Service" className='btn btn-primary mt-2 w-full' />
                </form>
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

export default AddServices;