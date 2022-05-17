import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceAdmit.css';
// import hook--
import { useForm } from 'react-hook-form';

const PlaceAdmit = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    // params id and state
    const { id } = useParams();
    const [item, setItem] = useState([])

    // this is for grtting id based use
    useEffect(() => {
        const url = `http://localhost:5000/faculties/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    // handle submitting data
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        console.log(data);
        fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset()
                }
            })
    };

    return (
        <div style={{ padding: '30px', color: 'white' }} className=' mt-5 ba-color-p '>
            <center>
                <h1 style={{ color: '#f01695', fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }} className='mt-5'>Please Put Your Informations</h1>
                <h3 style={{ color: 'white' }}>Department Id: {id}</h3>
            </center>
            <div className='row mt-5'>
                <div className="col-lg-6 col-md-12 mt-5">
                    <img style={{ height: "250px", width: "300px", marginTop: "5px", borderRadius: "20px" }} src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <h2>{item.school}</h2>
                    <h5>All Teachers: {item.teachers} rsearchRating: {item.rating}</h5>
                    <p>{item.durations}</p>
                    <h4>Academic Fees: $ {item.cost}</h4>
                    <Link to="/home"><button className='btn'>Go back</button></Link>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h2>Your email</h2>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={user.email} {...register("email")} />
                        <br />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}

                        <h4 className="text">Your name</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={user.displayName} {...register("name")} />

                        <h4 className="text">Your image</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }}  {...register("image")} placeholder="put your image url" />

                        <h4>Your registration number</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="yourRegistrationNumber/Passport" defaultValue="" {...register("registerId")} />

                        <h4 className="text"> Your addmited id</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={id} {...register("admitid")} />

                        <h4 className="text">Department name </h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} type="text" defaultValue={item.name} {...register("subjectname", { required: true })} />

                        <h4>Your joining year</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="JoinYear" defaultValue="" {...register("joinyear")} />

                        <h4>Your Running year</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="JoinYear to running" defaultValue="" {...register("runYear")} />

                        <h4>Contact number</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="phone number" defaultValue="" {...register("phone")} />

                        <h4>Course Duration</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={item.durations} {...register("durations", { required: true })} />

                        <h4>Academic fees</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={item.cost} {...register("cost", { required: true })} />

                        <br />
                        <input style={{ width: "30%" }} className="btn" type="Submit" value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceAdmit;