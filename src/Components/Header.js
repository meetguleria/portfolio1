import React from "react";

const Header = () => {
    return (
        <header className="intro">
            <h1 className="intro-welcome">Welcome<span className="emoji">👋</span></h1>
                <div class="intro">
                    <h2 className="intro-p">I am <span className="name">Meet Guleria</span>,
                    a web developer based in Vancouver, Canada.
                    I love developing beautiful web applications and interfaces.
                    </h2>

                    <h3 class="in-touch">Get in touch 👉🏼:  <span class="contact">
                            <a href="mailto:meetguleria94@gmail.com">meetguleria94@gmail.com</a>
                        </span>
                    </h3>
                </div>
        </header>
    )
}

export default Header;