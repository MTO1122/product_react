import React from 'react'
import '../style/product1.css'
import imgpro from '../assets/product1.jpg'
import img from '../assets/product2.jpg'
import img3 from '../assets/product3.jpg'

const Products = () => {
    return (
        <div className="container-base">
            <div className="bg-product">
                <div>
                    <div className="bg-toptitle scale"></div>
                    <div className="page_title scale">
                        <div class="content-editable "> product_catalog_ontario - Untitled 2021-06-09 17:10:09 </div> 
                    </div>
                    <div class="zine_page_num ">
                       <div class="content-editable"><span>01 </span></div>
                    </div>
                </div>
                <ul className="products">
                    <li className="product-1">
                        <div className="bg-products">
                            <div className="product-img scale">
                            <a href="">
                                <img className="itm-img" src={imgpro}></img>
                            </a>
                            </div>
                            <div className="img-product-num scale">
                            <div className="text">01</div>
                            </div>
                            <div className="product-index scale">
                            <div className="text">01.</div>
                            </div>
                            <div className="product-title scale">
                            <div className="text"> Symplex® Piranha X1 Hyper Cut...</div>
                            </div>
                            <div className="product-desc scale">
                            <div className="text">
                                <meta charset="utf-8" />
                                <div>
                                <b>Symplex® Piranha X1,</b>
                                <span>&nbsp;</span>Hyper Cut Ultra Leveling <span>&nbsp;</span>
                                <strong>“Real One Step Compound”&nbsp;... </strong>
                                <p>&nbsp;</p>
                                </div>
                            </div>
                            </div>
                            <div class="product-currency scale blue">
                            <div class="text">CAD</div>
                            </div>
                            <div class="product-price scale blue">
                            <div class="text">16.24</div>
                            </div>
                            <div class="product-sku-title scale blue">
                            <div class="text">SKU:</div>
                            </div>
                            <div class="product-sku scale blue">
                            <div class="text">141-0005-PT</div>
                            </div>
                        </div>
                    </li>
                    <li className="product-2">
                        <div className="bg-products">
                            <div className="product-img2 scale">
                                <a href="">
                                    <img className="itm-img2" src={img} />
                                </a>
                            </div>
                            <div className="img-product-num2 scale">
                                <div className="text">02</div>
                            </div>
                            <div className="product-index2 scale">
                                <div className="text">02.</div>
                            </div>
                            <div className="product-title2 scale">
                            <div className="text"> Annie Necklace </div>
                            </div>
                            <div className="product-desc2 scale" >
                                <div className="content-editable " >
                                    <p>
                                        <em>
                                        This is a demonstration store. You can purchase products likethis from <a href="">Baby & Company... </a>
                                        </em>
                                    </p>
                                </div>
                            </div> 
                            <div className="product-currency2 scale blue" >
                                <div className="text">CAD</div>
                            </div>
                            <div className="product-price2 scale blue" >
                            <div className="text">118.00</div>
                            </div>
                            <div className="product-sku-title2 scale blue" >
                            <div className="text">SKU:</div>
                            </div>
                            <div className="product-sku2 scale blue" >
                            <div class="text">23496</div>
                            </div>
                        </div>
                    </li>
                    <li className="product-3">
                        <div className="bg-products">
                            <div className="product-img3 scale">
                                <a href="">
                                    <img className="itm-img3" src={img3} />
                                </a>
                            </div>
                            <div className="img-product-num3 scale">
                                <div className="text">03</div>
                            </div>
                            <div className="product-index3 scale">
                                <div className="text">03.</div>
                            </div>
                            <div className="product-title3 scale">
                            <div className="text"> Lace Dress </div>
                            </div>
                            <div className="product-desc3 scale" >
                                <div className="content-editable " >
                                    <p>
                                        <em>
                                        This is a demonstration store. You can purchase products likethis from <a href="">Baby & Company... </a>
                                        </em>
                                    </p>
                                </div>
                            </div> 
                            <div className="product-currency3 scale blue" >
                                <div className="text">CAD</div>
                            </div>
                            <div className="product-price3 scale blue" >
                            <div className="text">579.60</div>
                            </div>
                            <div className="product-sku-title3 scale blue" >
                            <div className="text">SKU:</div>
                            </div>
                            <div className="product-sku3 scale blue" >
                            <div class="text">23301</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Products
