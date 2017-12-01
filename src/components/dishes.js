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


    renderDishes() {
        let date = this.props.meal ? this.props.meal.date.replace(/\//g, '-') : '';
        let id = this.props.meal ? this.props.meal.id : '';
        

          return (
              <div>
                <br />
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <Link to={`/dishes/${date}/${id}/1`}>
                             <CardWithAvatar immagine={primoPiatto} titolo="Primi"/>
                        </Link>
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <Link to={`/dishes/${date}/${id}/2`}>
                            <CardWithAvatar immagine={secondoPiatto} titolo="Secondi"/>
                        </Link>
                        <br />
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <Link to={`/dishes/${date}/${id}/3`}>
                            <CardWithAvatar immagine={contornoPiatto} titolo="Contorni"/> 
                        </Link>
                        <br />
                    </Col>
                </Row>
              </div>
          );
      }
  


    render() {
        
        return (
            <div>
                <AppBarMenu link='/' backButton={true}/>
                <br />
                <br />
                <br />
                <br />
                { this.renderDishes() }
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