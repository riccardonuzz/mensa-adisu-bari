import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMeal } from '../actions/index';
import { Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';

import AppBarMenu from './ui/appbar';
import LittleCard from './ui/littleCard';

import pranzo from '../../assets/img/pranzo.png';
import cena from '../../assets/img/cena.jpg';
import cenaPizza from '../../assets/img/cena_pizza.jpg';

class Plate extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;
        this.data = this.props.match.params.data;
        this.type = this.props.match.params.type;
    }


    componentDidMount() {
        if(!this.props.meal){
            this.props.fetchMeal(this.id);
        }
    }


    isCenaPizza(){
        console.log("PRIMI", this.props);
        if(this.props.meal.primi.primo3.nome=="")
            return true;
        return false;
    }
    

    renderPlate() {
        if(this.props.match.params.type==='1'){
            let primo3 = null;

            if(!this.isCenaPizza()){
                primo3 = (
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/3`} immagine={pranzo} titolo={this.props.meal.primi.primo3.nome} /> 
                        <br />
                        <br />
                    </Col>
                );
            }

            return (
                <div style={{width: "100%"}}>
                    <br />
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/1`} immagine={pranzo} titolo={this.props.meal.primi.primo1.nome} /> 
                        <br />
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/2`} immagine={pranzo} titolo={this.props.meal.primi.primo2.nome} /> 
                        <br />
                        <br />
                    </Col>
                    {primo3}
                </div>
            );
        }
        else if(this.props.match.params.type==='2'){
            let secondo3 = null;            
            if(!this.isCenaPizza()){
                secondo3 = (
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/3`} immagine={pranzo} titolo={this.props.meal.secondi.secondo3.nome} /> 
                        <br />
                        <br />
                    </Col>
                );
            }

            return (
                <div style={{width: "100%"}}>
                    <br />
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/1`} immagine={pranzo} titolo={this.props.meal.secondi.secondo1.nome} />
                        <br />
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/2`} immagine={pranzo} titolo={this.props.meal.secondi.secondo2.nome} /> 
                        <br />
                        <br />
                    </Col>
                    {secondo3}
                    <br />
                </div>
            );
        }
        else if(this.props.match.params.type==='3'){
            return (
                <div style={{width: "100%"}}>
                    <br />
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/1`} immagine={pranzo} titolo={this.props.meal.contorni.contorno1.nome} />
                        <br />
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/2`} immagine={pranzo} titolo={this.props.meal.contorni.contorno2.nome} />
                        <br />
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <LittleCard link={`/dishes/${this.data}/${this.id}/${this.type}/3`} immagine={pranzo} titolo={this.props.meal.contorni.contorno3.nome} />
                        <br />
                        <br />
                    </Col>
                </div>
            );
        }
    }

    render() {
        //console.log("Checking render (PLATE): ", this.props.meal);

        let renderPlate = this.props.meal ? this.renderPlate() : '';
        
        return (
            <div>
                <AppBarMenu link={`/dishes/${this.props.match.params.data}/${this.props.match.params.id}`} backButton={true}/>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    {renderPlate}
                </Row>
            </div>
        );
    }
}

function mapStateToProps({meals}, ownProps) {
    //console.log("Checking mapStateToProps (PLATE): ", meals);

    return {
        meal: _.filter(meals, function(element) { return element.id ==  ownProps.match.params.id })[0],
    };
}

export default connect(mapStateToProps, {fetchMeal})(Plate);