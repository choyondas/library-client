import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const ChatInterface = () => {
    // state declare for keeoing notice data
    // params id and state
    const { id } = useParams();
    const [receivers, setReceivers] = useState([]);

    // get receivers for see who write the notice
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    // -------------post single notice------------
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/masseges', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    // this is for grtting id based use
    useEffect(() => {
        const url = `http://localhost:5000/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReceivers(data))
    }, [id]);

    // get massege data by login email of students
    // handle delete function
    // const handleDelMassege = id => {
    //     const proceed = window.confirm('Are you want to delete?');
    //     if (proceed) {
    //         const url = `http://localhost:5000/masseges/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully')

    //                     const remainUser = receivers.filter(sender => sender._id !== id);
    //                     setReceivers(remainUser);
    //                 }
    //             })
    //     }
    // }
    return (
        <div className="container" >

            <div className="add-service">

                <h2 style={{ color: 'white', textAlign: 'center' }}> Lets Talk Each-Other</h2>
                <form id="formcolor" className="mt-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <small>sender</small>
                    <input className="mt-3" {...register("senderEmail")} defaultValue={user.email} />
                    <small>receiver</small>
                    <input className="mt-3" {...register("email")} defaultValue={receivers.email} />
                    <textarea {...register("massege")} placeholder="write your massege" />
                    <input className="btn" type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default ChatInterface;