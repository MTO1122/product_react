import React from 'react'
import '../style/catalog1.css'
import  bg from '../assets/slide1.png'
const Catalog1 = () => {
    return (
        <div className="container">
            <div className="bg-image">
                <img src={bg} alt="error"/>
            </div>
            <div className="bg-title">
            </div>
            <div className="title">
                <div className="text">
                   EDIT YOUR PRODUCT 
                   <br/>CATALOG TITLE
                </div>
            </div>
        </div>
    )
}

export default Catalog1
