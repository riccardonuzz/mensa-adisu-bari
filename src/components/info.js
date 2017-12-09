import React, { Component } from 'react';

import { Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';

import AppBarMenu from './ui/appbar';

import riccardo from '../../assets/img/riccardo.jpg';

import facebook from '../../assets/img/social-icons/facebook.png'
import twitter from '../../assets/img/social-icons/twitter.png'
import googlePlus from '../../assets/img/social-icons/googleplus.png'
import linkedin from '../../assets/img/social-icons/linkedin.png'
import github from '../../assets/img/social-icons/github.png'


/* 
Classe contenente le informazioni sullo sviluppatore
*/
class Info extends Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }

    render() { 
        return (
            <div>
                <AppBarMenu link={'/'} backButton={true}/>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <p id="title">Informazioni</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <center>
                            <img id="riccardo" src={riccardo}></img>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <center>
                            <a href="https://www.facebook.com/riccardo.nuzzone"><img id="social-icon" src={facebook}></img></a>
                            <a href="https://twitter.com/RiccardoNuzzone"><img id="social-icon" src={twitter}></img></a>
                            <a href="https://plus.google.com/u/0/105578104868268189419"><img id="social-icon" src={googlePlus}></img></a>
                            <a href="https://www.linkedin.com/in/riccardo-nuzzone-5627b8b8/"><img id="social-icon" src={linkedin}></img></a>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <center>
                            <br />
                            Sviluppato da: <b>Riccardo Nuzzone</b>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <center>
                            <br />
                            <a href="https://github.com/riccardonuzz"><img id="social-icon" src={github}></img></a><a href="https://github.com/riccardonuzz">&nbsp; riccardonuzz</a>
                        </center>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Info;