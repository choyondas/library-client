import React, { useEffect, useState } from 'react';

import './mangeS.css';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />


const ManAllstudents = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students/all')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // handle delete function
    const handleDelorder = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/students/all/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainorder = orders.filter(order => order._id !== id);
                        setOrders(remainorder);
                    }
                })
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                    Totall Students : {orders.length}
                </Typography>

                <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                    Your All Students
                </Typography>
                <div style={{ marginBottom: "20px" }} className='d-flex'>
                    <form className="d-flex mt-3">
                        <input style={{ height: "50px", width: "400px" }} className="form-control me-2" type="search" placeholder="Search mates by email" aria-label="Search" />
                        <button className="btn-search btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                {/* sx={{ bgcolor: 'warning.main' }} */}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        orders.map(order => <Grid item xs={4} sm={4} md={4}
                            key={order.id}

                        >
                            <Box sx={{ bgcolor: 'primary.main' }}>
                                <Card sx={{ minWidth: 275, border: 2, boxShadow: 5, }}>
                                    <CardContent>

                                        <Typography style={{ color: "#f01695" }} variant="h5" component="div">
                                            {order.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Name: <span style={{ color: "#f01695" }}>{order.registerId}</span>
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {element2} {order.email}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Departmet: {order.subjectname}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {element1}Phone: {order.phone}
                                        </Typography>

                                    </CardContent>

                                </Card>
                                <button className="btn" onClick={() => handleDelorder(order._id)} >Cancel</button>
                                <Link to={`/students/update/${order._id}`}><button className="btn">update</button></Link>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid></Container>
        </Box>
    );
};

export default ManAllstudents;