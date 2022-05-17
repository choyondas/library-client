import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddSubjects = () => {
    // state declare for keeoing notice data
    const [users, setUsers] = useState([]);

    // get users for see who write the notice
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    // -------------post single notice------------
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/subjects', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    // fetch all notice to manage it 
    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // handle delete function
    const handleDelRoutine = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/subjects/${id}`;
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
                <h2 style={{ color: 'white', textAlign: 'center' }}> Add Subjects for department</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-3" {...register("name")} defaultValue={user.displayName} />
                    <input type="text" {...register("depName")} placeholder="Write department" />
                    <input type="text" {...register("period")} placeholder="Write smester" />
                    <input type="text" {...register("subject1")} placeholder="Write addeded subject name" />
                    <input type="text" {...register("subject2")} placeholder="Write addeded subject name" />
                    <input type="text" {...register("subject3")} placeholder="Write addeded subject name" />
                    <input type="text" {...register("subject4")} placeholder="Write addeded subject name" />
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }}>All Addeded subject: {users.length}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        users.map(user => <div className='col-lg-4 col-md-6 col-12' style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
                            key={user._id}
                        >DepartmentName: {user.depName}<li>smester: {user.period}</li>List of subject:
                            <li>{user.subject1}</li>
                            <li>{user.subject2}</li>
                            <li>{user.subject3}</li>
                            <li>{user.subject4}</li>
                            <button style={{ color: "red" }} onClick={() => handleDelRoutine(user._id)} > <span style={{ fontWeight: 'bold', fontSize: "20px" }}> X </span> </button>
                        </div>)
                    }
                </div>


            </div>

        </div>
    );
};

export default AddSubjects;