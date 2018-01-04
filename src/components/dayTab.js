import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardWithAvatar from './ui/card';

import { Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';

import moment from 'moment';

import pranzo from '../../assets/img/pranzo.png';
import cena from '../../assets/img/cena.jpg';
import cenaPizza from '../../assets/img/cena_pizza.jpg';



class DayTab extends Component {
    constructor(props){
        super(props);
    }


    getDayNightCards() {
        let date = '';
        let meals = null;

        if(this.props.day==-1) {
            date = this.props.yesterdayDate;
            meals = this.props.yesterdayMeals;
        }
        else if (this.props.day==0) {
            date = this.props.currentDate;
            meals = this.props.todayMeals;
        }
        else if(this.props.day==1){
            date = this.props.tomorrowDate;
            meals = this.props.tomorrowMeals;
        }
        else if(this.props.day==2){
            date = this.props.selectedDate;
            meals = this.props.selectedMeals;
        }

        return this.renderDayNightCards(date, meals);
    }


    renderDayNightCards(date, meals) {
        if(meals) {
            if(meals.length == 2 && meals){
                return (
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <Link to={`/dishes/${meals[0].date.replace(/\//g, '-')}/${meals[0].id}`}>
                                <CardWithAvatar data={`${meals[0].day.split(' ')[0]}, ${date}`} immagine={pranzo} titolo="Pranzo"/>
                            </Link>
                            <br />
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Link to={`/dishes/${meals[1].date.replace(/\//g, '-')}/${meals[1].id}`}>
                                <CardWithAvatar data={`${meals[1].day.split(' ')[0]}, ${date}`} immagine={cena} titolo="Cena"/> 
                            </Link>
                            <br />
                        </Col>
                    </Row>

                );
            }
            else if(meals.length == 3){
                return (
                    <div>
                        <Row>
                            <Col xs={12} md={12} lg={4}>
                                <Link to={`/dishes/${meals[0].date.replace(/\//g, '-')}/${meals[0].id}`}>
                                    <CardWithAvatar data={`${meals[0].day.split(' ')[0]}, ${date}`} immagine={pranzo} titolo="Pranzo"/>
                                </Link>
                                <br/>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <Link to={`/dishes/${meals[1].date.replace(/\//g, '-')}/${meals[1].id}`}>
                                    <CardWithAvatar data={`${meals[1].day.split(' ')[0]}, ${date}`} immagine={cena} titolo="Cena"/>
                                </Link>
                                <br/>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <Link to={`/dishes/${meals[2].date.replace(/\//g, '-')}/${meals[2].id}`}>
                                    <CardWithAvatar data={`${meals[2].day.split(' ')[0]}, ${date}`} immagine={cenaPizza} titolo="Cena Pizza"/>
                                </Link>
                                <br/>
                            </Col>
                        </Row>
                    </div>
                );
            }
        }
    }


    render(){
        const spaces = this.props.day!=2 ? <div><br /><br /><br /><br /><br /><br /></div> : '';

        return (
            <div>
                {spaces}
                {this.getDayNightCards()}
            </div>
        );
    }


}


function mapStateToProps(state) {
   
    //console.log("Checking mapStateToProps (DAYTAB): ", state);

    return {

        todayMeals: _.filter(state.meals, function(element) { return element.date ==  moment().format('D/M/YYYY') }),
        currentDate: moment().format('D/M/YYYY'),

        tomorrowMeals: _.filter(state.meals, function(element) { return element.date == moment().add(1 ,'days').format('D/M/YYYY') }),
        tomorrowDate: moment().add(1, 'days').format('D/M/YYYY'),

        yesterdayMeals: _.filter(state.meals, function(element) { return element.date == moment().subtract(1, 'days').format('D/M/YYYY') }),
        yesterdayDate: moment().subtract(1, 'days').format('D/M/YYYY'),

        selectedMeals: _.filter(state.meals, function(element) { return element.date == state.date }),
        selectedDate: state.date
    };
}
  
export default connect(mapStateToProps, null)(DayTab);