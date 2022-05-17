import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const SeeSubjects = () => {
    const [subjects, setSubjects] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1>See Your Subjects</h1>
                <div style={{ paddingBottom: "8px" }} className="commonBorder"></div>
                <div className='row mt-5'>

                    {
                        subjects.map(subject => <div className=' mt-5 col-lg-4 col-md-6 col-12' style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
                            key={subject._id}
                        >DepartmentName: {subject.depName}<li>smester: {subject.period}</li>List of subject:
                            <li>{subject.subject1}</li>
                            <li>{subject.subject2}</li>
                            <li>{subject.subject3}</li>
                            <li>{subject.subject4}</li>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SeeSubjects;