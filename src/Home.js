import React from 'react'
import Product from './Product'
import './Home.css'
import Icon from '@material-ui/core/Icon';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"></img>

            <div className="home__row">
                <Product
                    id="1"
                    title="Book"
                    price={11}
                    rating={5}

                    image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg">

                </Product>
            </div>


        </div>
    )
}

export default Home
