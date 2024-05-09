import React from 'react';
import "./project1.css";

function Home() {
  return (
    <div>
      <div className="container">
        <h2 className="container-heading">Featured Courses</h2>
        <div className="course-list">
          {/* HTML Course */}
          <div className="course">
            {/* unsplash img for html */}
            <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" />
            <h2>HTML Basics</h2>
            <p>Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
          </div>
          {/* CSS Course */}
          <div className="course">
            <img src="https://source.unsplash.com/300x200/?css, code" alt="CSS Course Image" />
            <h2>CSS Styling</h2>
            <p>Master CSS styling techniques such as selectors, box model, flexbox, and grid.</p>
          </div>
          {/* JavaScript Course */}
          <div className="course">
            <img src="https://source.unsplash.com/300x200/?javascript, code" alt="JavaScript Course Image" />
            <h2>JavaScript Fundamentals</h2>
            <p>Explore the core concepts of JavaScript including variables, functions, and loops.</p>
          </div>
          {/* React Course */}
          <div className="course">
            <img src="https://source.unsplash.com/300x200/?react, code" alt="React Course Image" />
            <h2>React Development</h2>
            <p>Build dynamic web applications with React.js, including state management and component-based architecture.</p>
          </div>
          {/* Next.js Course */}
          <div className="course">
            <img src="https://source.unsplash.com/300x200/?next.js, code" alt="Next.js Course Image" />
            <h2>Next.js Essentials</h2>
            <p>Discover the power of Next.js for server-side rendering, routing, and API integration.</p>
          </div>
          {/* TypeScript Course */}
          <div className="course">
            <img src="https://source.unsplash.com/300x200/?typescript, code" alt="TypeScript Course Image" />
            <h2>TypeScript for Web Development</h2>
            <p>Learn TypeScript to enhance the development of scalable and maintainable web applications.</p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Your Programming Course Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
