import React from 'react'
import Catalog1 from '../page/Catalog1'
import Catalog2 from '../page/Catalog2'
import '../style/view.css'
const View = () => {
    return (
        <div className="containerview">
          <div className="contain">
              <a className="btn-nav-page" id="next"/>
          </div> 
          <div id="wrapper">
             <div id="scroller">
                <ul id="slideContainer">
                    <li>
                        <div className="zoom_content">
                           <div className="page_content" style={{width:"1064px"}}>
                               <div className="zine_content1">
                                    <Catalog1 />
                               </div>
                               <div className="zine_content1 ">
                                    <Catalog1 />
                               </div>
                           </div>
                        </div>
                    </li>
                </ul>
             </div>
          </div>
       </div>
    )
}
export default View
