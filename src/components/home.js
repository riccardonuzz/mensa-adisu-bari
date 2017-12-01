import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMeals } from '../actions/index';


import AppBarMenu from './ui/appbar';
import TabsSwipeable from './tabsSwipeable';

class Home extends Component {
  componentDidMount(){
      this.props.fetchMeals();
  }

  render() {
    return (
      <div>
        <AppBarMenu />
        <TabsSwipeable />
      </div>
    );
  }
}

function mapStateToProps({meals}) {
  //console.log("Checking mapStateToProps (HOME): ", meals);
  return {
      meals
  };
}

export default connect(mapStateToProps, {fetchMeals})(Home);