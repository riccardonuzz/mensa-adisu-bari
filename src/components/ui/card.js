import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardWithAvatar extends Component {

    render() {
        const style={
            "whiteSpace": "nowrap",
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "width": "60%"
        }
        
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={this.props.data} />}
                >
                <img src={this.props.immagine} />
                </CardMedia>
                <CardTitle style={style} title={this.props.titolo} />
            </Card>
        );
    }
}

export default CardWithAvatar;