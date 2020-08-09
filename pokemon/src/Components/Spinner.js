import React, { Component } from "react";
import { receivedData } from "./action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Spinner extends Component {
  render() {
    if (this.props.needsFetching === true) {
      return <div class="loader">Loading...</div>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  needsFetching: state.card.needsFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receivedData
    },

    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
