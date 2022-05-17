import React from 'react';
import './banner.css';
import bn1 from '../../image/ban-1.png';
import bn2 from '../../image/ban-2.png';
import bn3 from '../../image/ban-3.png';
// import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div id="div-btm" class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="bn-size" src={bn1} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 id="font-sizeh1">Best Research Lab</h1>
                            <h5>We Have the Best Lab in Our University and We Have the Best
                                PHD teachers and Best Award from International ACC Authority</h5>
                            <a href="https://www.youtube.com/watch?v=iZIp3n6fab0&t=86s" target="_blank" rel="noopener noreferrer"><button className="btn">Explore us</button></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img id="bn-size" src={bn2} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 id="font-sizeh1">We provide best Scholarship </h1>
                            <h5>We Have the Best Scholarship provided by CSC govt of China with monthly stipend</h5>
                            <a href="https://www.chinesescholarshipcouncil.com/" target="_blank" rel="noopener noreferrer"><button className="btn">Apply now</button></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img id="bn-size" src={bn3} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 id="font-sizeh1">Best Dormetory Facilities</h1>
                            <h5>We started our Journey from 1923. We have very reliable and great journey. We are very willing to have you in our University</h5>
                            <a href="https://www.chinesescholarshipcouncil.com/" target="_blank" rel="noopener noreferrer"><button className="btn">See videos </button></a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;