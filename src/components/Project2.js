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
                        <p>Online teacher-student learning platform with feature like course purchase etc build on Next.js</p>
                    </div>
                    {/* CSS Course */}
                    <div className="course">
                        <img src={projImg2} alt="CSS Course Image" />
                        <h2>Potato Disease Classifier - Deep Learning</h2>
                        <p>Used deep learning methods to predict the early blight and layte blight in potato</p>
                    </div>
                    {/* JavaScript Course */}
                    <div className="course">
                        <img src={projImg3} alt="JavaScript Course Image" />
                        <h2>Hotel KGP - MERN</h2>
                        <p>A full-stack website of a hotel using MERN Stack.</p>
                    </div>
                    {/* React Course */}
                    <div className="course">
                        <img src={projImg6} alt="React Course Image" />
                        <h2>Quiz Game - React.js</h2>
                        <p>Build dynamic quiz game portal with React.js.</p>
                    </div>
                    {/* Next.js Course */}
                    <div className="course">
                        <img src={projImg5} alt="Next.js Course Image" />
                        <h2>MeasureMate - OpenCV Python</h2>
                        <p>An OpenCV based application to measure the length and width of an object</p>
                    </div>
                    {/* TypeScript Course */}
                    <div className="course">
                        <img src={projImg1} alt="TypeScript Course Image" />
                        <h2>Book Website - React.js</h2>
                        <p>Simple frontend based book website with different sections build on React.js</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project2;
