import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as layoutActions from '../actions/layoutActions';

import '../styles/home.scss';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  parseMarkdown(e) {
    this.props.parseMdSyntax({input: e.target.value});
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <textarea className="form-control inputTextArea" onChange={this.parseMarkdown.bind(this)} placeholder="Enter your markdown syntax here" />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="mdPreview">
            <div dangerouslySetInnerHTML={{__html: this.props.parsedMarkdown}} />
          </div>
        </div>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  parseMdSyntax: PropTypes.func,
  parsedMarkdown: PropTypes.string
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
