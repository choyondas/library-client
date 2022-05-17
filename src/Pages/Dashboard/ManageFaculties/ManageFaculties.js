// import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
// import imgba from '../../../image/logo.jpg';
const ManageFaculties = () => {
    // import state
    const [products, setProducts] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/faculties')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // handle delete function
    const handleDelproducts = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/faculties/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = products.filter(product => product._id !== id);
                        setProducts(remainUser);
                    }
                })
        }
    }



    return (
        <div id="redi-pro" className="products">
            {/* <Button variant="contained" onClick={() => handleDelproducts(product._id)} >Delete</Button> */}
            <div className="container p-5 ">
                <div className="p-5">
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}>
                        All Available Faculties
                    </h1>
                    <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4"
                >
                    {
                        products.map(product =>
                            <div className="col-lg-4 col-md-6 col-12"
                                key={product._id}
                                product={product}
                            >
                                <div className="container">
                                    <div className="card">
                                        <div className="imgBx">
                                            <img className="w-50" src={product.image} alt="" />
                                        </div>
                                        <div className="contentBx">
                                            <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }} >{product.name}</h2>
                                            <div className="size">
                                                <h3>{product.school}</h3>
                                            </div>
                                            <div className="size">
                                                <h3>{product.durations} Teachers:{product.teachers}</h3>
                                            </div>
                                            <div className="size">
                                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc890a' }}>${product.cost}</h3>
                                            </div>
                                            <div>
                                                <h4 style={{ color: '#fc890a' }}>thesis-review</h4>
                                                <Rating
                                                    initialRating={product.rating}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly
                                                />
                                            </div>
                                            <button onClick={() => handleDelproducts(product._id)} className="button-29 pt-2">Delete</button>
                                            {/* <Button variant="contained" onClick={() => handleDelproducts(product._id)} >Celete</Button> */}
                                            {/* <Link to='/public'><button onClick={() => handleDelproducts(product._id)} className="button-29 pt-2">Delete</button>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>

            </div>
        </div>

    );
};

export default ManageFaculties;