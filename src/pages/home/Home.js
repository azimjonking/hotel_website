import React from 'react';
import { useState } from 'react';
import "../home/home.css"

import image1 from "../../assets/home/image1.png";
import image2 from "../../assets/home/image2.png";
import slideImg1 from "../../assets/home/slideimg1.png";
import slideImg2 from "../../assets/home/slideimg2.png";
import slideImg3 from "../../assets/home/slideimg3.png";
import slideImg4 from "../../assets/home/slideimg4.png";

export function Home() {

    const [ seeMore, setSeeMore ] = useState(true);
    const moreBtn = () => {
        setSeeMore(!seeMore)
        console.log(seeMore);
    }


    return (
        <div className="home">

            <div className="section1">
                <div className="slides-container">
                    <div className="slide active bcg1">
                        <h1>WELCOME TO</h1>
                        <p>HNG HOTEL</p>
                        <span>Your comfort, our priority</span>
                    </div>

                    <div className="slide bcg2">
                        <h1>WELCOME TO</h1>
                        <p>HNG HOTEL</p>
                        <span>Your comfort, our priority</span>
                    </div>

                    <div className="slide bcg3">
                        <h1>WELCOME TO</h1>
                        <p>HNG HOTEL</p>
                        <span>Your comfort, our priority</span>
                    </div>
                </div>
                <div id="next-slide">next</div>
                <div id="prev-slide">prev</div>
            </div>

            <div className="section2">
                <div className="left">
                    <p>HNG HOTEL</p>
                    <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    </span>
                </div>

                <div className="right">

                    <div className="img">
                        <img src={image1} alt="" />
                    </div>
                    <div className="img">
                        <img src={image2} alt="" />
                    </div>

                </div>
            </div>
            
            <div className="section3">
                <button className='morePhotos' onClick={moreBtn}>More Photos</button>
                <div className={seeMore ? 'box-container' : 'box-container active'} id="photo-container">
                    <div className="box">
                        <img src={slideImg1} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg2} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg3} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg4} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg1} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg2} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg3} alt="" />
                    </div>
                    <div className="box">
                        <img src={slideImg4} alt="" />
                    </div>
                </div>
                <div className="box-position">
                    <p>Book A Room</p>
                    <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    </span>
                    <button>Book A Room</button>
                </div>
            </div>



        </div>
    );
}
