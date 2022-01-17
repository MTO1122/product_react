import React from 'react'
import '../style/catalog4.css'
import slide from '../assets/slide4.png'
const Catalog4 = () => {
    return (
        // <div className="container">
        //     <div className="layout-img">
        //         <div className="bg_image">
        //            <img src={slide} alt="error" />
        //         </div>
        //     </div>
        //     <div className="content">
        //         <p>80 Aberdeen, Ontario Ottawa Canada
        //           <br/>Tel: 
        //           <br/>Email: engineering@realwat.net
        //           <br/><a href="https://zinr-stores.myshopify.com/">zinr-stores.myshopify.com</a> 
        //         </p>
        //     </div>
        // </div>
        <div className="zine_layout_template">
            <div className="layout-bg"></div>
            <div className="post-wrapper scale">
                <div className="layout-img ">
                    <img className="image-cover" src={slide} alt="error" />
                </div>
            </div>
            <div className="post-wrapper" >
                <div className="layout-text ">
                    <div className="content-editable">
                        <p>80 Aberdeen, Ontario Ottawa Canada</p>
                        <ul className="no-list">
                            <li>Tel: </li>
                            <li>Email: engineering@realwat.net</li>
                        </ul>
                        <a href="https://zinr-stores.myshopify.com/">zinr-stores.myshopify.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog4
