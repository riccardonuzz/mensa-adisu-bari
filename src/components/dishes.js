import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMeal } from '../actions/index';
import { Row, Col } from 'react-flexbox-grid';

import AppBarMenu from './ui/appbar';
import CardWithAvatar from './ui/card';

import primoPiatto from '../../assets/img/primo_piatto.jpg';
import secondoPiatto from '../../assets/img/secondo_piatto.jpg';
import contornoPiatto from '../../assets/img/contorno_piatto.jpg';

class Dishes extends Component {
    componentDidMount() {
        if(!this.props.meal){
            //console.log("I'm in the condition.");
            const { id } = this.props.match.params;            
            this.props.fetchMeal(id);
        }
        
    }

    isCenaPizza(){
        console.log("PRIMI", this.props); 
            if(this.props.meal.primi.primo3.nome=="")
                return true;
            return false;
    }

    renderDishes(){
        let date = this.props.meal ? this.props.meal.date.replace(/\//g, '-') : '';
        let id = this.props.meal ? this.props.meal.id : '';

        if(this.props.meal) {

            let primo3 = !this.isCenaPizza() ? (<Col xs={6} md={12} lg={4}>
                                            <Link to={`/dishes/${date}/${id}/3`}>
                                                <CardWithAvatar immagine={primoPiatto} titolo={this.props.meal.primi.primo3.nome}/> 
                                            </Link>
                                            <br />
                                        </Col>) : '';
                                        
            let secondo3 = !this.isCenaPizza() ? (<Col xs={6} md={12} lg={4}>
                                                <Link to={`/dishes/${date}/${id}/6`}>
                                                    <CardWithAvatar immagine={secondoPiatto} titolo={this.props.meal.secondi.secondo3.nome}/> 
                                                </Link>
                                                <br />
                                            </Col>) : '';
            

            return (
                <div>
                    <div>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                    <p id="title">Primi</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/1`}>
                                    <CardWithAvatar immagine={primoPiatto} titolo={this.props.meal.primi.primo1.nome}/>
                                </Link>
                                <br />
                            </Col>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/2`}>
                                    <CardWithAvatar immagine={primoPiatto} titolo={this.props.meal.primi.primo2.nome}/>
                                </Link>
                                <br />
                            </Col>
                            {primo3}
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                    <p id="title">Secondi</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/4`}>
                                    <CardWithAvatar immagine={secondoPiatto} titolo={this.props.meal.secondi.secondo1.nome}/>
                                </Link>
                                <br />
                            </Col>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/5`}>
                                    <CardWithAvatar immagine={secondoPiatto} titolo={this.props.meal.secondi.secondo2.nome}/>
                                </Link>
                                <br />
                            </Col>
                            {secondo3}
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                    <p id="title">Contorni</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/7`}>
                                    <CardWithAvatar immagine={contornoPiatto} titolo={this.props.meal.contorni.contorno1.nome}/>
                                </Link>
                                <br />
                            </Col>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/8`}>
                                    <CardWithAvatar immagine={contornoPiatto} titolo={this.props.meal.contorni.contorno2.nome}/>
                                </Link>
                                <br />
                            </Col>
                            <Col xs={6} md={12} lg={4}>
                                <Link to={`/dishes/${date}/${id}/9`}>
                                    <CardWithAvatar immagine={contornoPiatto} titolo={this.props.meal.contorni.contorno3.nome}/> 
                                </Link>
                                <br />
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        }

    }

    render() {
       return (
           <div>
                <AppBarMenu link='/' backButton={true}/>
                <br />
                <br />
                {this.renderDishes()}
           </div>
       );

        
    }

}

function mapStateToProps({meals}, ownProps) {
    //console.log("Checking mapStateToProps: ",  _.filter(meals, function(element) { return element.id ==  ownProps.match.params.id })[0]);
    
    return {
        meal:  _.filter(meals, function(element) { return element.id ==  ownProps.match.params.id })[0]
    };
}

export default connect(mapStateToProps, {fetchMeal})(Dishes);