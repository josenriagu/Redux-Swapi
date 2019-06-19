import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import DefaultLoader from './../components/Loader';
// import actions
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <DefaultLoader />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isFetching
  }
}
export default connect(mapStateToProps, { fetchCharacters })(CharacterListView);
