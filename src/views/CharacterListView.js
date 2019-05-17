import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";

import { getPeople } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
    console.log(this.props.characters)
  }

  render() {
    if (this.props.fetching) {
      return (
      <Loader type="TailSpin" color="#00BFFF" height="90" width="60" />
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div>
        <div className="CharactersList_wrapper">
          {this.props.error && <p>{this.props.error}</p>}
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getPeople }
)(CharacterListView);
