import React, { Component } from "react";
import { fetchingData, receivedData } from "./action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Spinner extends Component {
  render() {
    if (this.props.LoadingData === true) {
      return <div class="loader">Loading...</div>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  LoadingData: state.pagination.fetchingData,
  ReceivedData: state.pagination.receivedData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchingData,
      receivedData
    },

    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
