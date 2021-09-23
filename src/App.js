import React from 'react';
import Header from './components/Header';
import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Componet {

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
            <Home />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequied
};

export default connect(mapStateToProps, () => ({}))(App);