import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DatePicker from 'material-ui/DatePicker';
import SvgIcon from './ui/svgIcon';

import {setSelectedDate} from '../actions/index';

import { Row, Col } from 'react-flexbox-grid';

class InputDate extends Component {
    constructor(props){
        super(props);

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(event, date){
        const dataString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        this.props.setSelectedDate(dataString);
    }

    formatDate(date){
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      }

    render(){
        return (
            <div>
                <Row>
                    <Col xs={1} md={2} lg={2}>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <SvgIcon />
                    </Col>
                    <Col xs={9} md={5} lg={5}>
                        <DatePicker 
                            hintText="Clicca per selezionare una data" 
                            formatDate={this.formatDate} 
                            onChange={this.inputChangeHandler}
                            minDate={new Date("10/02/2017")} //data americana
                            maxDate={new Date("04/30/2018")}
                        />
                    </Col>
                    <Col xs={1} md={3} lg={3}>
                    </Col>
                </Row>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedDate: bindActionCreators(setSelectedDate, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(InputDate);