import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      isLoggedIn: true
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    const { savedList } = this.state;
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" render={props => <MovieList {...props} savedList={savedList} />} />
        <Route
          exact path="/movies/:id" render={props => <Movie {...props} savedList={savedList} /> } />
      </div>
    );
  }
}
