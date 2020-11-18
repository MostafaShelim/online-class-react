import React, { useState } from 'react';
import './Course.css'
const Course = (props) => {
    var clickChange = {
        backgroundColor: 'white'
    }
    const {title, price, img, instructor} = props.course;
    const [click, setClick] = useState({})
    const changeBackground = () => {
        setClick(clickChange);
    }
    return (
        <div className = "course" style = {click}>
            <img src={img} alt=""/>
            <p>Title: <u>{title}</u></p>
            <p>Instructor: <u>{instructor}</u></p>
            <p>Price: <strong>{price}</strong>$</p>
            <button onClick = {() => props.handleCourses(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;