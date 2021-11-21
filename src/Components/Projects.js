import React from 'react';
import CustomProject from './CustomHooks/CustomProject';

const Projects = () => {
    return (
        <div className="about">
            <div className="about-title">PROJECTS</div>
            <div className="projects-content">
                <CustomProject
                    name="Counter App"
                    link="https://github.com/meetg94/counter-app"
                    desc="A web app to help you increment or decrment. Reset the number back to 0 when needed."
                    usedArray={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                    ]}
                />
                <CustomProject
                    name="Popcorn Flicks"
                    link="https://github.com/meetg94/popcorn-flicks"
                    desc="Find the recent trending movies and get know all about your favorite movies."
                    usedArray={[
                        "JavaScript",
                        "React",
                        "TMDb API",
                    ]}
                />
            </div>
        </div>
    )
}

export default Projects