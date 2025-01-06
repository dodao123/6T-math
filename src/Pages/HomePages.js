// math-clb/src/components/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutOur from "../components/AboutOur";
import Introduction from '../components/Introduction';
import CourseCarousel from '../components/Courses';
import TeacherShowcase from '../components/Teacher';
import OutstandingStudents from '../components/GoldBoarder';
import Footer from '../components/Footer';
import NewsSection from './../components/News';

function HomePage() {
    return (
        <div className=' bg-gray-50 '>
            <Header />
            <Banner/>
            <AboutOur/>
            <Introduction/>
            <CourseCarousel/>
            <TeacherShowcase/>
            <OutstandingStudents/>
            <NewsSection/>
            <Footer/>
            <main>
            </main>
        </div>
    );
}

export default HomePage;