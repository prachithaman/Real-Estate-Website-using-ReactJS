import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion, spring} from 'framer-motion'

const Hero = () => {
    return (
        <>
            <section className="hero-wrapper">
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="flexColStart hero-left">

                        <div className="hero-title">
                            <div className='orange-circle'/>
                            <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:"0rem",opacity:1}} transition={{
                                duration:2,type:"spring"
                            }}>Discover<br />The Most Suitable <br />Properties</motion.h1>
                        </div>

                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Find a variety of properties that suit your lifestyle</span>
                            <span className='secondaryText'>Forget all the hassle to find a home,we got you covered!</span>
                        </div>

                        <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                        </div>

                        <div className="flexCenter stats">
                        
                         
                         <div className="flexColCenter stat">
                            <span><CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Properties</span>
                         </div>

                         <div className="flexColCenter stat">
                            <span><CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                         </div>

                         <div className="flexColCenter stat">
                            <span><CountUp start={0} end={28} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards</span>
                         </div>


                        </div>
                    </div>


                    <div className="flexCenter hero-right">
                        <motion.div initial={{x:"7rem",opacity:0}} animate={{x:"0rem",opacity:1}} transition={{
                                duration:2,type:"spring"
                            }} className="image-container">
                            <img src="./hero-image.png" alt="" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero