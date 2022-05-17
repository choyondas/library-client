import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/students?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // handle delete function
    const handleDelUser = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/students/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = orders.filter(order => order._id !== id);
                        setOrders(remainUser);
                    }
                })
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography style={{ color: "tomato" }} sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                    Your Profile : {orders.length}
                </Typography>

                <Typography style={{ color: "tomato" }} sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                    Your All Information
                </Typography>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {
                        orders.map(order => <Grid item xs={6}
                            key={order.id}

                        >
                            <Box sx={{ bgcolor: 'primary.main' }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        width="400"
                                        image={order.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h4" component="div">
                                            Name: {order.name}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            Email: {order.email}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            Subject: {order.subjectname}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            RunningYear: {order.runYear}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            RegisterNumber: {order.registerId}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            JoinYear: {order.joinyear}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            Phone:  {order.phone}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                                            Course Duration: {order.durations}
                                        </Typography>

                                    </CardContent>

                                </Card>

                                <Link to={`/students/update/${order._id}`}><button className="btn">Edit</button></Link>
                                {order.payment ?
                                    <Link className="btn" to="">AlreadyPaid</Link>
                                    :
                                    <Link className="btn" to={`/dashboard/payment/${order._id}`}>PayNow</Link>}
                                <Link><button className="btn" onClick={() => handleDelUser(order._id)} >Cancel</button></Link>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid >
            </Container>
        </Box >

    );
};

export default MyProfile;