import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMeal } from '../actions/index';
import { Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';

import AppBarMenu from './ui/appbar';
import TableMaterial from './ui/tableMaterial';

import pranzo from '../../assets/img/pranzo.png';
import cena from '../../assets/img/cena.jpg';
import cenaPizza from '../../assets/img/cena_pizza.jpg';

/*
Classe che consente di visualizzare le informazioni relative ad un pasto.
*/

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

    renderPlate() {
        if(this.type == 1) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.primi.primo1.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.primi.primo1.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.primi.primo1.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 2) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.primi.primo2.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.primi.primo2.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.primi.primo2.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 3) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.primi.primo3.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.primi.primo3.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.primi.primo3.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 4) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.secondi.secondo1.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.secondi.secondo1.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.secondi.secondo1.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 5) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.secondi.secondo2.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.secondi.secondo2.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.secondi.secondo2.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 6) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.secondi.secondo3.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.secondi.secondo3.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.secondi.secondo3.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 7) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.contorni.contorno1.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.contorni.contorno1.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.contorni.contorno1.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 8) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.contorni.contorno2.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.contorni.contorno2.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.contorni.contorno2.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if(this.type == 9) {
            return (
                <div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="title">{this.props.meal.contorni.contorno3.nome}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <TableMaterial data={this.props.meal.contorni.contorno3.ingredienti} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <p id="total">{this.props.meal.contorni.contorno3.totale}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
      
    }

    render() {
        //console.log("Checking render (PLATE): ", this.props.meal);

        let renderPlate = this.props.meal ? this.renderPlate() : '';
        let day = this.props.meal ? `${this.props.meal.day.split(' ')[0]}, ${this.props.meal.date}` : '';

        return (
            <div>
                <AppBarMenu title={day} link={`/dishes/${this.props.match.params.data}/${this.props.match.params.id}`} backButton={true}/>
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