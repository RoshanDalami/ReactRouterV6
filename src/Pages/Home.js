import React from 'react'
import { Link } from 'react-router-dom';

const Home = ()=>{
    return (
        <>
            <h1>Home</h1>
        <p>Go To the <Link to={'products'}> products page</Link> </p>
        </>
    );
}

export default Home
