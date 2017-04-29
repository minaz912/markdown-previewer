import React from 'react';
import {connect} from 'react-redux';

import * as layoutActions from '../actions/layoutActions';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  parseMarkdown(val) {
    this.props.parseMdSyntax({payload: val});
  }

  render() {
    let inputVal;
    return(
      <div>
        <div className="col-xs-12 col-md-6">
          <input type="textarea" ref={node => inputVal = node} onChange={this.parseMarkdown(inputVal.value)} />
        </div>
        <div className="col-xs-12 col-md-6">
          <div id="mdPreview" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parsedMarkdown: state.parsedMarkdown
  };
};

const mapDispatchToProps = (dispatch) => {
  parseMdSyntax: mdVal => dispatch(layoutActions.parseMdSyntax(mdVal))
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
