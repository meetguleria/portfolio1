import React from 'react';

import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3,
    FaNpm,
    FaNode,
    FaGitAlt,
    FaGithub,
  } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="about">
            <div className="about-title">SKILLS</div>
            <div className="icons-container">
                <div className="skills-icons">
                    <FaHtml5 size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaCss3 size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaJsSquare size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaReact size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaGithub size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaNpm size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaNode size={80} style={{fill:'white'}} className="icon-hover" />
                    <FaGitAlt size={80} style={{fill:'white'}} className="icon-hover" />
                </div>
            </div>
        </div>
    )
}

export default Skills