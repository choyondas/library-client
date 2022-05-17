import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notice.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Notice = () => {
    // state declare for keeoing notice data
    const [users, setUsers] = useState([]);

    // get users for see who write the notice
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    // -------------post single notice------------
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/notice', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    // fetch all notice to manage it 
    useEffect(() => {
        fetch('http://localhost:5000/notice')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // handle delete function
    const handleDelRoutine = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/notice/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = users.filter(user => user._id !== id);
                        setUsers(remainUser);
                    }
                })
        }
    }
    return (
        <div className="container" >
            <div className="add-service">
                <h2 style={{ color: 'white', textAlign: 'center' }}> Write Notice for Students</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-3" {...register("name")} defaultValue={user.displayName} />
                    <input className="mt-3" {...register("email")} defaultValue={user.email} />
                    <input type="text" {...register("subjectname")} placeholder="Write department" />
                    {/* <input {...register("image")} placeholder="image url" /> */}
                    <textarea {...register("notice")} placeholder="write notice" />
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }}> Available Notice: {users.length}</h2>
                <ul>
                    {
                        users.map(user => <li className='mt-3' style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
                            key={user._id}
                        >Notice: {user.notice}
                            <button style={{ color: "red" }} onClick={() => handleDelRoutine(user._id)} > <span style={{ fontWeight: 'bold', fontSize: "20px" }}> X </span> </button>
                        </li>)
                    }
                </ul>


            </div>

        </div>
    );
};

export default Notice;