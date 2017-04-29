import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as layoutActions from '../actions/layoutActions';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  parseMarkdown(e) {
    this.props.parseMdSyntax({input: e.target.value});
  }

  render() {
    return(
      <div>
        <div className="col-xs-12 col-md-6">
          <input type="text" onChange={this.parseMarkdown.bind(this)} />
        </div>
        <div className="col-xs-12 col-md-6">
          <div id="mdPreview" dangerouslySetInnerHTML={{__html: this.props.parsedMarkdown}} />
        </div>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  parseMdSyntax: PropTypes.func,
  parsedMarkdown: PropTypes.element
};

const mapStateToProps = (state) => {
  return {
    parsedMarkdown: state.layout.parsedMarkdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    parseMdSyntax: mdVal => dispatch(layoutActions.parseMdSyntax(mdVal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
