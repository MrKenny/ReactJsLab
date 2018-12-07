import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

class Button extends React.Component {
    handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    };
  
    render() {
      return (
        <button onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      );
    }
  }
  
  const Result = (props) => {
    return (
      <div>{props.counter}</div>
    );
  };
  
  class App extends React.Component {
    state = { counter: 0 };
  
    incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
    };
  
    render() {
      return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </div>
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
