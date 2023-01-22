import React from 'react';
import CustomProject from './CustomHooks/CustomProject';

const Projects = () => {
    return (
        <div className="about">
            <div className="about-title">PROJECTS</div>
            <div className="projects-content">
                <CustomProject
                    name="Coin Hippo"
                    link="https://github.com/meetg94/crypto-graph"
                    desc="A web application to track cryptocurrency prices and other KPIs using React. 
                    Leveraged Axios and Coingecko API to retrieve pricing data for the most popular cryptocurrencies. 
                    Enhanced user experience by creating user friendly UI using Material UI."
                    usedArray={[
                        "Chart.js",
                        "React",
                        "Coingecko API",
                        "JavaScript",
                        "Material UI"
                    ]}
                />
                <CustomProject
                    name="Quiz App"
                    link="https://github.com/meetg94/quiz-api"
                    desc="An interactive quiz application to test knowledge on various topics."
                    usedArray={[
                        "JavaScript",
                        "React",
                        "openTDB API",
                        "Material UI"
                    ]}
                />
            </div>
        </div>
    )
}

export default Projects