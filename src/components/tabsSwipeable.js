import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import DayTab from './dayTab';
import SelectDateTab from './selectDateTab';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TabsSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
    };
  }



  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };



  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{"marginTop": "63px", "backgroundColor": "#FF9800", "position": 'fixed', "width":"100%", "zIndex": "999"}}
          inkBarStyle={{"background": "#FFF"}}        
        >
          <Tab label="Ieri" value={0} buttonStyle={{"backgroundColor": "#FF9800", "borderColor": "#FF9800"}}/>
          <Tab label="Oggi" value={1} buttonStyle={{"backgroundColor": "#FF9800", "borderColor": "#FF9800"}}/>
          <Tab label="Domani" value={2} buttonStyle={{"backgroundColor": "#FF9800", "borderColor": "#FF9800"}}/>
          <Tab label="Sel. data" value={3} buttonStyle={{"backgroundColor": "#FF9800", "borderColor": "#FF9800"}}/>
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <DayTab day={-1}/>
          </div>
          <div style={styles.slide}>
            <DayTab  day={0}/>
          </div>
          <div style={styles.slide}>
            <DayTab  day={1}/>
          </div>
          <div style={styles.slide}>
            <SelectDateTab />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default TabsSwipeable;