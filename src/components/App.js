import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  return(
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

            </ul>
          </div>
        </div>
      </nav>

      {/* Each smaller Components */}
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
