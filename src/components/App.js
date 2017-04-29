import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  return(
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Markdown Previewer</a>
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
