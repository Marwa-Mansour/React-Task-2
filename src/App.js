import React, { Component } from "react";
import Header from "./Header";
import Person from "./Person";

export class App extends Component {
  state = {
    Persons: [
      { image: "imgs/person1.jpg", name: "Mark", job: "Front-End Developer" },
    ],
  };

  switchEmployee = () => {
    this.setState({
      Persons: [
        { image: "imgs/person3.jpg", name: "Nancy", job: "Back-End Developer" },
      ],
    });
  };

  switchEmployee2 = () => {
    this.setState({
      Persons: [
        { image: "imgs/person1.jpg", name: "Mark", job: "Front-End Developer" },
      ],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="row align-items-center my-5 mx-auto">
          
          <div className="col-12">
          <button onClick={this.switchEmployee2} className="btn btn-primary mr-4">
              Prev Employee
            </button>
          <button onClick={this.switchEmployee} className="btn btn-primary">
              Next Employee
            </button>
            <Person
              image={this.state.Persons[0].image}
              name={this.state.Persons[0].name}
              job={this.state.Persons[0].job}
              onClick={this.switchEmployee}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
