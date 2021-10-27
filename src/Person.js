import React, { Component } from "react";

export class Person extends Component {

  
      
  render() {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              My job is: {this.props.job}
            </p>
            <button onClick={this.props.switchEmployee} className="btn btn-primary">
              Next Employee
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
