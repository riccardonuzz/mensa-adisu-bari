import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class LittleCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Card>
                <CardHeader
                    title={this.props.titolo}
                    actAsExpander={true}
                    showExpandableButton={false}
                />
                <CardActions>
                    <Link to={this.props.link}>
                        <RaisedButton secondary={true} label="Ingredienti" />
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

export default LittleCard;