import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShowFaculties from '../ShowFaculties/ShowFaculties'
import './Faculties.css';
const Faculties = () => {
    const [faculties, setFaculties] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faculties')
            .then(res => res.json())
            .then(data => setFaculties(data))
    }, []);
    return (
        <div style={{ paddingBottom: "30px" }} id="redi-pro" className="products ">
            <div style={{ paddingBottom: "40px" }} className="container p-5  ">
                <div className="p-5">
                    <h3 style={{ color: 'yellow' }}>
                        Fill the Registered form
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}>
                        Select  Your faculties
                    </h1>
                    <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        faculties.slice(0, 6).map(faculty => <ShowFaculties
                            key={faculty.name}
                            faculty={faculty}
                        >
                        </ShowFaculties>)
                    }
                </div>

            </div>
            <center><NavLink style={{ color: "white", textDecoration: 'none' }} to="/allfaculties" className="project__btn">Find more</NavLink></center>
        </div>
    );
};
export default Faculties; 