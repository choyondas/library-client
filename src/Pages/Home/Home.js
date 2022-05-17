import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Faculties from '../Faculties/Faculties';
import FaqQuestion from '../FaqQuestion/FaqQuestion';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ShowNotice from '../ShowNotice/ShowNotice';
import ShowRoutine from '../ShowRoutine/ShowRoutine';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <ShowNotice></ShowNotice>
            <ShowRoutine></ShowRoutine>
            <Faculties></Faculties>
            <Contact></Contact>
            <FaqQuestion></FaqQuestion>
            <Footer></Footer>

        </div>
    );
};

export default Home;