import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //Make an AJAX call to get data
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // const counters = this.state.counters.map(c => {
    //     if(c.id === counter.id) {
    //         c.value ++;
    //         return c;
    //     }
    //     return c;
    // });

    //Clone the state's counters array into a constant
    const counters = [...this.state.counters];

    //find the index of passed counter in the cloned array
    const index = counters.indexOf(counter);

    //Clone the passed counter into the array of cloned state counters
    counters[index] = { ...counter };

    //Increment the value of cloned counter
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
