import React from 'react'
import '../style/studio.css'
import Catalog1 from '../page/Catalog1'
import Catalog4 from '../page/Catalog4'
import Catalog2 from '../page/Catalog2'
import Catalog3 from '../page/Catalog3'
const Studio = () => {
    return (
        <>
           <section className="vertical-wrapper">
                   <div className="vertical-body">
                        <div className="inner">
                            <div className="zine_content">
                                <Catalog1 />
                            </div>
                        </div>
                   </div>
                   <div className="vertical-body">
                        <div className="inner">
                            <div className="zine_content">
                                <Catalog2 />
                            </div>
                        </div>
                   </div>
                   <div className="vertical-body">
                        <div className="inner">
                            <div className="zine_content">
                                <Catalog3 />
                            </div>
                        </div>
                   </div>
                   <div className="vertical-body">
                        <div className="inner">
                            <div className="zine_content">
                                <Catalog4 />
                            </div>
                        </div>
                   </div>
            </section>
        </>
    )
}

export default Studio