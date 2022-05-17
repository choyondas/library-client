import React, { useEffect, useState } from 'react';
import ShowAllFaculties from '../ShowAllFaculties/ShowAllFaculties';
// import './Products.css';
const AllFaculties = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faculties')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="products">
            <div className="container p-5 ">
                <div className="p-5">
                    <h3 style={{ color: 'tomato' }}>
                        All Faculties-({products.length})
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}>
                        Popular Expected
                    </h1>
                    <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <ShowAllFaculties
                            key={product.name}
                            product={product}
                        >
                        </ShowAllFaculties>)
                    }
                </div>
            </div>
        </div>
    );
};
export default AllFaculties; 