import React, { useEffect, useState } from 'react';
import Course from '../../components/Course/Course'
import fakedata from '../../data/data.json'
import Cart from '../Cart/Cart';
import './Main.css';
const Main = () => {
    const data = fakedata.slice(0, 10);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(data);
    }, [])
    const [cart, setCart] = useState([]);
    const handleCourses = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className = "main">
            <ul>
            {
                courses.map(course => <Course handleCourses={handleCourses} course={course}></Course>)
            }
            </ul>
            <ul>
            {
                courses.map(course => <Course handleCourses={handleCourses} course={course}></Course>)
            }
            </ul>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Main;