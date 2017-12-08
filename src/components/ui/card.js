import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardWithAvatar extends Component {
    constructor(props){
        super(props);
    }

    render() {

        let card = (<Card>
                        <CardMedia
                            overlay={<CardTitle title={this.props.data} />}
                        >
                            <img src={this.props.immagine} />
                        </CardMedia>
                        <CardTitle title={this.props.titolo} />
                    </Card>);

        if(this.props.useOverlay===false){
            card = (<Card>
                        <CardMedia>
                            <img src={this.props.immagine} />
                        </CardMedia>
                        <CardTitle title={this.props.titolo} />
                    </Card>);
        }
        
        return card;
    }
}

export default CardWithAvatar;