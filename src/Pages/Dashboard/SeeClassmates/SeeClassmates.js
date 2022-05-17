import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowSeeMates from '../../ShowSeeMates/ShowSeeMates';

import "./SeeClass.css";
const SeeClassmates = () => {
    const [classmates, setClassmates] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/students/all')
            .then(res => res.json())
            .then(data => setClassmates(data))
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1 style={{ color: "red" }} className='text-center'>All Classmates here</h1>
                <h3 style={{ color: 'tomato' }}>
                    Totall-({classmates.length})
                </h3>
                <div style={{ paddingBottom: "8px" }} className="commonBorder"></div>
                <div className='d-flex'>
                    <form className="d-flex mt-5">
                        <input style={{ height: "50px", width: "400px" }} className="form-control me-2" type="search" placeholder="Search mates by email" aria-label="Search" />
                        <button className="btn-search btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className='row mt-5'>

                    {
                        classmates.map(classmate => <ShowSeeMates
                            key={classmate.name}
                            classmate={classmate}

                        ></ShowSeeMates>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SeeClassmates;