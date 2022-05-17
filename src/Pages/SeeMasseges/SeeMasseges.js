import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const SeeMasseges = () => {
    // state declare for keeoing notice data

    const [masseges, setMasseges] = useState([]);

    // get receivers for see who write the notice
    const { user } = useAuth()

    // get massege data by login email of students
    useEffect(() => {
        const url = `http://localhost:5000/masseges?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMasseges(data));
    }, []);

    // handle delete function
    const handleDelMassege = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/masseges/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = masseges.filter(massege => massege._id !== id);
                        setMasseges(remainUser);
                    }
                })
        }
    }
    return (
        <div className="container" >
            <div>
                <ul>
                    {
                        masseges.map(massege => <li className='mt-3' style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}
                            key={massege._id}
                        >yourMassege: {massege.massege}...from{massege.senderEmail}

                            <Link className="" to=""><button style={{ color: "red" }} onClick={() => handleDelMassege(user._id)} > <span style={{ fontWeight: 'bold', fontSize: "20px" }}> X </span></button> </Link>
                            <Link to="/seeclassmates"><button className='btn-search btn-outline-success'>Send-him</button></Link>
                        </li>)
                    }
                </ul>


            </div>

        </div>
    );
};

export default SeeMasseges;