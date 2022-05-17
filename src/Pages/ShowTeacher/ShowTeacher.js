import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ShowTeacher = () => {
    const [review, setReview] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/teacher')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#212335", textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1 style={{ color: "white" }} className='text-center'>All Teachers here</h1>
                <div className='d-flex'>
                    <form className="d-flex mt-5">
                        <input style={{ height: "50px", width: "400px" }} className="form-control me-2" type="search" placeholder="Search by email" aria-label="Search" />
                        <button className="btn-search btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className='row mt-3'>

                    {
                        review.map(revi =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">
                                    < img style={{ borderRadius: "50%", height: "230px", width: "60%", margin: "auto", marginTop: "5px" }} class="card-img-top" src={revi.image} alt="" />
                                    <div class="card-body">
                                        <h5 style={{ color: '#f9004d' }} class="card-title">Name: {revi.name}</h5>
                                        <h5 style={{ color: '#f9004d' }} class="card-title">Department: {revi.depname}</h5>
                                        <p style={{ color: 'white' }} class="card-text">Email: {revi.email}</p >
                                        <p style={{ color: 'white' }} class="card-text">Wechat: {revi.wechat}</p >

                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowTeacher;