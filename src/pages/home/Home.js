import React from 'react';
import "../home/home.css"


export default function Home() {
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




        </div>
    );
}
