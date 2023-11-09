import React from "react";

const fullName = "Steve Mwanzia"

const theme = {

    backgroundColor: "purple",
    color: "pink",
    borderRadius: "10px",
    padding: "5px",
    margin: "10px"
}

const Portfolio = () => {
    return (
        <div>
            <h2 style = {theme}>{fullName}</h2>
            <div style = {theme}>
                <h3>Education</h3>
                <p>Riara University</p>
                <p>Diploma, Diploma In Information Security And Ethical Hacking</p>
                <p>2017 - 2018</p>
            </div>

            <div style = {theme}>
                <h3>Professional Experience</h3>
                <p>Team Lead SME and QA</p>
                <p>February 2021 - Present</p>
            </div>

            <div style = {theme}>
                <h3>Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                </ul>

            </div>
        </div>
    )
}

export default Portfolio