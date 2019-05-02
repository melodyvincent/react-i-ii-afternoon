import React, { Component } from "react";
import Navigation from "./navigation";
import DataDisplay from "./DataDisplay";
import "./App.css";
import data from "./data";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      dataNum: 0,
      users: data.slice()
    };
  }

  handleUpdateindexIncrease = () => {
    let indexAdd = this.state.dataNum;
    console.log(indexAdd);
    if (indexAdd === this.state.users.length - 1) {
      indexAdd = 0;
    } else {
      indexAdd++;
    }
    this.setState({ dataNum: indexAdd });
  };
    handleUpdateindexDecrease = () => {
      let indexDecrease = this.state.dataNum;
      if (indexDecrease === 0){
        indexDecrease = this.state.users.length - 1
      } else {
        indexDecrease--
      }
      this.setState({ dataNum: indexDecrease});
    }

  render() {
    console.log(this.state.users[this.state.dataNum]);
    const usersIndex = this.state.users[this.state.dataNum];
    let movieList = this.state.users[this.state.dataNum].favoriteMovies.map(
      (val, i) => {
        return <li key={i}>{val}</li>;
      }
    );
    return (
      <div className="App">
        <header className="Header">
          <h2 className="header-text">Home</h2>
        </header>
        <div className="data-display">
          <DataDisplay
            dataNum={this.state.dataNum}
            users={this.state.users}
            usersIndex={usersIndex}
            movieList={movieList}
          />

          <Navigation
            dataNum={this.state.dataNum}
            users={this.state.users}
            usersIndex={usersIndex}
            dataNumAdd={this.handleUpdateindexIncrease}
            dataNumDecrease={this.handleUpdateindexDecrease}
          />
        </div>
      </div>
    );
  }
}
