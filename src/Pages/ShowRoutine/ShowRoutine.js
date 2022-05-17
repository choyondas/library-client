import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const ShowNotice = () => {
    const [notices, setNotices] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/routine')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#282857", textAlign: 'center' }}>
            <div className=" p-5 ">
                <center><h1 id="animation" style={{ color: "white", fontSize: '50px' }} className='text-center'>Download Your Exam Routine</h1>sss</center>
                <div style={{ paddingBottom: "8px" }} className="commonBorder"></div>
                <div className='row'>

                    {
                        notices.map(notice =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">

                                    <div class="card-body">
                                        <h4 style={{ color: '#f9004d' }} class="card-title">{notice.examtype}</h4>
                                        <h4 style={{ color: '#f9004d' }} class="card-title"><span style={{ color: "white" }}>For:</span> {notice.subjectname} <span style={{ color: "white" }}>Students</span></h4>
                                        <h5 style={{ color: '#f9004d' }} class="card-title">{notice.subjectjoinyear}</h5>
                                        <h5 style={{ color: '#f9004d' }} class="card-title">{notice.semester}
                                        </h5>
                                        <a href={notice.routineUrl} target="_blank" rel="noopener noreferrer"><button className="btn"><ArrowDownwardIcon style={{ color: "blue", fontSize: "25px", fontWeight: "bold" }} />Download</button></a>
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