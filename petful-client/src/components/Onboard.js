import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main.jpg'

export default function Onboard() {

    return (
        <>
            <h1>Petful</h1>
            <p>Looking for a dog or a cat to adopt? Welcome to Petful! <br /> Here at Petful we pair you with the perfect dog or cat. <br />We ensure that no sheltered dog or cat stays here longer than they have to, thanks to our first-in/first-out policy.</p>
            <img src={Image} alt='Landing_img' /><br />
            <Link to='/pets'><button>Show me the pets!</button></Link>
        </>
    )
}