import React from 'react';
import { Link } from 'react-router-dom';

const ShowSeeMates = (props) => {
    const { _id, image, name, phone, email, joinyear, subjectname } = props.classmate;
    // const des = description.slice(0, 100);
    return (

        <div class="card-deck col-lg-4 col-md-6 col-12">
            <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">
                < img style={{ borderRadius: "50%", height: "230px", width: "60%", margin: "auto", marginTop: "5px" }} class="card-img-top" src={image} alt="" />
                <div class="card-body">
                    <h4 style={{ color: '#f9004d' }} class="card-title">Name: {name}</h4>
                    <h5 style={{ color: '#f9004d' }} class="card-title">Department: {subjectname}</h5>
                    <h5 style={{ color: '#f9004d' }} class="card-title">Join-Year: {joinyear}</h5>
                    <p style={{ color: 'white' }} class="card-text">Email: {email}</p >
                    <p style={{ color: 'white' }} class="card-text">Contact: {phone}</p >
                    <Link to={`/chat/${_id}`} className="btn" >Lets-chat</Link>
                </div>
            </div>
        </div>
    );
};
export default ShowSeeMates; 