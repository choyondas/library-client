import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const AddFaculty = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/faculties', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container" >
            <div className="add-service">
                <h2 style={{ color: 'white', textAlign: 'center' }}>Add Faculty</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="mt-3" {...register("name")} placeholder="Department name" />
                    <input type="text" {...register("school")} placeholder="SchoolName" />
                    <input type="text" {...register("cost")} placeholder="Academic Fees" />
                    <input type="text" {...register("durations")} placeholder="Durations" />
                    <input type="text" {...register("teachers")} placeholder="teacher in totall  " />
                    <input type="text" {...register("rating")} placeholder="Research-rating" />
                    <input {...register("image")} placeholder="faculty image url" />
                    {/* <textarea {...register("summery")} placeholder="product summery" /> */}
                    <input className="btn" type="submit" value="Submit" />
                    <Link to="/allfaculties"><button className="btn" >ShowFaculty</button></Link>
                </form>
            </div>

        </div>
    );
};

export default AddFaculty;