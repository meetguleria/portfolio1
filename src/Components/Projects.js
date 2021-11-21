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
                    desc="A web app to help you keep count by incrementing or decrementing."
                    usedArray={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                    ]}
                />
                <CustomProject
                    name="Popcorn Flicks"
                    link="https://github.com/meetg94/popcorn-flicks"
                    desc="Grab Popcorn and find the most trending flicks to watch this weekend."
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