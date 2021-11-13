import React from "react";
import './Home.css';
import git1 from './git1.png';
import git11 from './git11.png';
import js from './js.png';
import html1 from './html1.png';
import css1 from './css1.png';
import react1 from './react1.png';
import node1 from './node1.png';
function Home() {
    return (
        <div>
            <h1>Welcome<span class="dots">👋</span></h1>
                <div class="intro">
                    <p>I am <span class="name">Meet Guleria</span>, a web developer based in Vancouver, Canada.
                    I love building and developing web applications and beautiful interfaces.
                    </p>

                    <h2>Get in touch: <span class="contact">
                    <a href="mailto:foo@bar.com?Subject=upport">
                    meetguleria94@gmail.com</a></span></h2>
                </div>
            <div class="container">
                <div class="column">
                    <h3>About me: </h3>
                </div>
                <div class="column">
                    <p class="aboutme">I recently graduated from <strong class="bold">New York Institute of Technology</strong> after completing my Masters in Info, Network & Comp Security while doing
                    my masters I also worked on projects and loved building websites. I also
                    have a Bachelor's degree from <strong class="bold">New York City College of Technology</strong> in Computer Engineering
                    Technology.
                    <br/>
                    As a web developer, I enjoy bridging the gap between
                    engineering and design — combining my technical knowledge with my keen eye for design
                    to create a beautiful product. My goal is to always build applications
                    that are scalable and efficient under the hood while providing engaging,
                    beautiful user experiences.</p>
                </div>
            </div>

            <div class="container_skills">
                <div class="column">
                    <h3 class="skills">Skills: </h3>
                </div>
                <div class="column_img">
                    <img src={html1}/>
                    <img src={css1}/>
                    <img src={js}/>
                    <img src={react1}/>
                    <img src={node1}/>
                    <img src={git1}/>
                    <img src={git11}/>
                </div>
            </div>
        </div>

    );
}

export default Home;