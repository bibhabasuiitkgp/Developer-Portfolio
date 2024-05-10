import React from 'react';
import "./project1.css";
import projImg1 from "../assets/image/bookstore.jpg";
import projImg2 from "../assets/image/disease_classifier.jpg";
import projImg3 from "../assets/image/luxurious-hotel-room-wallpaper-preview.jpg";
import projImg4 from "../assets/image/18.png";
import projImg5 from "../assets/image/21.png";
import projImg6 from "../assets/image/25.png";


function Project2() {
    return (
        <div>
            <div className="container" id='projects'>
                <h2 className="container-heading">Projects</h2>
                <div className="course-list">
                    {/* HTML Course */}
                    <div className="course">
                        {/* unsplash img for html */}
                        <img src={projImg4} alt="HTML Course Image" />
                        <h2>StudySphere - Next.js</h2>
                        {/* <p>Online teacher-student learning platform with feature like course purchase etc build on Next.js</p> */}
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>Online teacher-student learning platform with feature like course purchase etc build on Next.js</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://study-sphere.vercel.app" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>
                    {/* CSS Course */}
                    <div className="course">
                        <img src={projImg2} alt="CSS Course Image" />
                        <h2>Disease Classifier - Deep Learning</h2>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>Used deep learning methods and Tensorflow to predict the early blight and layte blight in potato</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://github.com/bibhabasuiitkgp/Potato_Disease_Classifier" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>

                    {/* JavaScript Course */}
                    <div className="course">
                        <img src={projImg3} alt="JavaScript Course Image" />
                        <h2>Hotel KGP - <br />MERN</h2>

                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>A full-stack website of a hotel with registration portal and hotel booking using MERN Stack.</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://github.com/bibhabasuiitkgp/Hotel_KGP" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>
                    {/* React Course */}
                    <div className="course">
                        <img src={projImg6} alt="React Course Image" />
                        <h2>Quiz Game - React.js</h2>

                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>Build dynamic quiz game portal with React.js.</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://github.com/bibhabasuiitkgp/Quiz_Game" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>
                    {/* Next.js Course */}
                    <div className="course">
                        <img src={projImg5} alt="Next.js Course Image" />
                        <h2>MeasureMate - OpenCV Python</h2>

                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>An OpenCV application to measure the length and width of an object</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://github.com/bibhabasuiitkgp/MeasureMate" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>
                    {/* TypeScript Course */}
                    <div className="course">
                        <img src={projImg1} alt="TypeScript Course Image" />
                        <h2>Book Website - React.js</h2>

                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div><p>Simple frontend based book website with different sections build on React.js</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5"><a href="https://github.com/bibhabasuiitkgp/react_stargazing_website" style={{ textDecoration: 'none' }}>Github</a></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project2;
