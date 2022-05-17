import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './ShowNotice.css';

const ShowNotice = () => {
    const [notices, setNotices] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/notice')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#282857", textAlign: 'center' }}>
            <div className=" p-5 ">
                <center><h1 id="animation" style={{ color: "white", fontSize: '50px' }} className='text-center'>Attention! Read the Notice</h1>sss</center>
                <div style={{ paddingBottom: "8px" }} className="commonBorder"></div>
                <div className='row'>

                    {
                        notices.map(notice =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">

                                    <div class="card-body">
                                        <h4 style={{ color: '#f9004d' }} class="card-title">{notice.notice}</h4>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowNotice;