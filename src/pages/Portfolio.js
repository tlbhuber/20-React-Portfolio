import React, { Component } from "react";
import {Container } from "react-bootstrap"
import Navbar from "../components/Navbar"
import PortfolioCard from "../components/PortfolioCard"
import projects from "../Portfolio.json"
import "./Portfolio.css"

class Portfolio extends Component{
    state = {
        projects
    }

    render() {
        return(
            <div className = "body">
            <Navbar />
            <Container>
            {this.state.projects.map(project => (
                <PortfolioCard 
                name={project.name}
                description={project.description}
                tech={project.tech}
                link={project.link}
                img={project.img}
                />
            ))}
            </Container>

            </div>
        )
    }
}

export default Portfolio