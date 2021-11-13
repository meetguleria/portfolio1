import React from "react";

const CustomProject = ({ name, link, desc, usedArray}) => {
    return (
        <div className="project">
            <div className="project-name">
                <a
                    href={link}
                    target="_blank"
                    ><span>{name}</span></a>
                    </div>
                <p className="project-description">{desc}</p>
                <div className="project-used">
                    {usedArray.map((used, index) => {
                        return (
                            <span key={index} className="project-used-item">
                                {used}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
}

export default CustomProject;