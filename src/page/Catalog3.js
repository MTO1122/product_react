import React from 'react'
import '../style/catalog3.css'
import image from '../assets/ctl.jpg'
const Catalog3 = () => {
    return (
        <div className="containers">
            <div className="page_list">
                <ul className="product-list">
                    <li className="product">
                        <div className="product-wrapper">
                            <div id="product-image" className="product-imgs scale">
                                <a href="" className="tag_a">
                                    <img className="item-img" src={image} />
                                </a>
                            </div>
                            <img className="product_variant_img1" src={image} />
                            <div class="product-title_bg scale" ></div>
                        </div>
                        <div class="product-title">
                            <div class="text" >Everest Stripe Sock</div>
                        </div>
                        <div id="p-desc" className="product-desc scale">
                            <div id="pc-desc" className="text">
                            <p><em>This is a demonstration store. You can purchase products like this
                                from <a href="">Baby &amp; Company</a></em></p>
                            <p><span > <span>Our new collection of Italy made
                                    socks by Etiquette adds some gentlemanly&nbsp;flavor to our
                                    men's line.&nbsp;</span> <span>Focused on impeccable
                                    craftsmanship, using the highest quality materials, and timeless
                                    sophistication that’s fashionable, but always
                                    wearable.&nbsp;</span>Color Blue/Brown.&nbsp;</span> 
                                    <span >100% Cotton. Made in Italy.&nbsp;</span>
                            </p>
                                <p> <span><a href=""><em>Shop our collection of Etiquette.&nbsp;</em></a></span></p>
                            </div>
                        </div>
                        <div className="product-currency scale blue">
                            <div className="text"> CAD</div>
                        </div>
                        <div class="product-price scale blue" >
                            <div class="text">28.00</div>
                        </div>
                        <div class="product-divider scale" ></div>
                        <div class="product-sku-title scale blue" >
                            <div class="text"> SKU:</div>
                        </div>
                        <div class="product-sku scale blue" >
                            <div class="text">30580</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="header_bg scale"></div>
            <div className="footer_bg scale"></div>
            <div className="zine_page_title scale ">
                <div id="ec-page_title-587144" class="text"> 
                   product_catalog_ontario - Untitled 2021-06-09 17:10:09 
                </div>
            </div>
            <div className="page_num scale ">
                <div className="text"><span>02</span></div>
            </div>
        </div>
    )
}

export default Catalog3
