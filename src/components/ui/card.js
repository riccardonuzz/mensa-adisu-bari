import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//import Pranzo from './assets/pranzo.png';

class CardWithAvatar extends Component {

    render() {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={this.props.data} />}
                >
                <img src={this.props.immagine} />
                </CardMedia>
                <CardTitle title={this.props.titolo} />
            </Card>
        );
    }
}

export default CardWithAvatar;