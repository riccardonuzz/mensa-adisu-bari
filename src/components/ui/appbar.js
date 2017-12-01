import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarMenu extends Component {

  render(){
    let appbar;
    if(!this.props.backButton){
      appbar = <AppBar
      title="Menu mensa A.D.I.S.U. Bari"
      showMenuIconButton={false}
      iconStyleLeft={{"display": "none"}}
      zDepth={0}
      style={{"backgroundColor": "#FF9800", "position": 'fixed'}}
    />
    }
    else {
      appbar = <AppBar
        showMenuIconButton={true}
        iconElementLeft={<Link to={this.props.link}><IconButton ><ArrowBack color="#FFF"/></IconButton></Link>}                
        zDepth={0}
        style={{"backgroundColor": "#FF9800", "position": 'fixed'}}
      />
    }

    return(
      <div>
        {appbar}
      </div>
    );
  }

  
}

export default AppBarMenu;