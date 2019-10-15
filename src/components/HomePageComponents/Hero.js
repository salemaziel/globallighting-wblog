import React from 'react'
import HeroBanner from '../../images/banner-stock-lg.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../../css/HomePageCss/hero.css'
import Button from '../button'
import { Link } from 'gatsby'

const Hero = () => (
    <section className="section-one" style={{
        backgroundImage: `url(${HeroBanner})`,
    }}>
        <div className="container cx_inner">
            <div className="row">
                <div className="col-lg-7 col-md-8">
                    <h1>
                        EMPOWERING <br /><span> THE WORLD</span>
                    </h1>
                    <p>
                        HARNESSING SUSTAINABLE ENERGY TO CREATE LIGHT, CLEAN WATER, NOURISHING FOOD, AND BUILDING SELF-RELIANT COMMUNITIES.
                </p>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
