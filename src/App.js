import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

const Stars = (props) => {
  // const numberOfStars = 1 + Math.floor(Math.random()*9);

    return (
      <div className="col-5">
        {_.range(0,props.numberOfStars).map(i => 
             <i key={i} className="fa fa-star"></i>
        )}
      </div>
    );
}

const Answer = (props) => {
    return (
      <div className="col-5">
        {props.selectedNumbers.map((number,i)=>
        <span key={i}
        onClick = {()=>props.unselectNumber(number)}>{number}</span>
        )}
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
  const numberClassName = (number) => {
    if(props.selectedNumbers.indexOf(number) >=0)
      return 'selected';
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i)=>
        <span key={i} className={numberClassName(number)}
              onClick={()=>props.selectNumber(number)}>{number}</span>
        )}
      </div>
    </div>
  );
};

Numbers.list = _.range(1,10);

class Game extends Component {
  state = {
    selectedNumbers:[],
    numberOfStars: 1 + Math.floor(Math.random()*9)

  }

  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){return;}
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter((number) => number!=clickedNumber)
    }));
  };

  render() {
    const {selectedNumbers,numberOfStars} = this.state;

    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars}/>
          <Button />
          <Answer selectedNumbers={selectedNumbers} 
                   unselectNumber = {this.unselectNumber}/>
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers} 
                 selectNumber = {this.selectNumber}/>
      </div>
      
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
