import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

    return (
      <div className="col-5">
        {_.range(0,numberOfStars).map(i => 
             <i key={i} className="fa fa-star"></i>
        )}
      </div>
    );
}

const Answer = (props) => {
    return (
      <div className="col-5">
      <span>4</span>
      <span>5</span>
    </div>
    );
}

const Button = (props) => {
    return (
      <div className="col-2">
      <button>=</button>
    </div>
    );
}

const Numbers = (props) => {

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i)=>
        <span key={i}>{number}</span>
        )}
      </div>
    </div>
  );
};

Numbers.list = _.range(1,10);

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

export default App;
