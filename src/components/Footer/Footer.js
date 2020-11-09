import React, { Component } from 'react'
import {FootStyle, FootText} from './FooterStyle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
    render() {
        return (
            <>
            <FootStyle>
                <FootText>
                    Made with ❤️
                    <br></br>
                    by Jessica Salbert <a target="blank_" href="https://www.linkedin.com/in/jessica-salbert/">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                    <br></br>
                    and
                    Gabriel Hicks <a target="blank_" href="https://www.linkedin.com/in/gabrieljhicks/">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                    <br></br>
                    Frontend: <a target="blank_" href="https://github.com/jessicasalbert/rplants-front"><FontAwesomeIcon icon={faGithub} size="1x" /></a> Backend: <a target="blank_" href="https://github.com/jessicasalbert/rplants-back"><FontAwesomeIcon icon={faGithub} size="1x" /></a>
                </FootText>
            </FootStyle>
            </>
        )
    }
}

export default Footer
