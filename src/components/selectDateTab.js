import React, { Component } from 'react';

import InputDate from './inputDate';
import DayTab from './dayTab';


class SelectDateTab extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <InputDate />
                <br />
                <DayTab day={2}/>
            </div>
        );
    }
}

export default SelectDateTab;