import React from "react";

function Nav(){
    return <section className="navbar">
        <img src="images/home-banner.jpg" className="banner"/>
    <div className="navDiv">
        <img src="Images/Site_Logo.png" alt="logo" />
        <ul>
            <li><a href="#">Intro</a></li>
            <li><a href="#">Expertise</a></li>
            <li><a href="#">Award</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Private Classes</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </div>
    <p className="navPara1">Start Doing Yoga</p>
    <h1 className="navHeading">
    Start A Healthy <br/>
    Way Of Life<br/>
    Today!<br/>
    </h1>
    <p className="navPara2">Lorem ipsum dolor sit amet consectetur adipisicing repellendus hapdsau <br/>
    soluta, illum blanditiis odit officia</p>
    </section>
}

export default Nav;