import React, { Component } from "react";

class DataDisplay extends Component {
  render() {
    console.log(this.props.usersIndex);
    return (
      <div className="data-users">
        <h2 className="index-number">
          {this.props.dataNum + 1}/{this.props.users.length}
        </h2>
        <div className="names">
          <div className="first-last">
            <h2>
              {this.props.usersIndex.name.first}{" "}
              {this.props.usersIndex.name.last}
            </h2>
          </div>
          <div className="user-info">
            <h3>From:</h3>
            <p>{this.props.usersIndex.city}</p>
            <p>, {this.props.usersIndex.country}</p>
          </div>
          <div className="user-info">
            <h3>Job Title:</h3>
            <p>{this.props.usersIndex.title}</p>
          </div>
          <div className="user-info">
            <h3>Employer:</h3>
            <p>{this.props.usersIndex.employer}</p>
          </div>

          <div>
            <h3>Favorite Movies: </h3>
            <ol>{this.props.movieList}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDisplay;
