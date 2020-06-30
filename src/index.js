import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock} from './Clock';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  onChange = event => this.setState({inputValue: event.target.value});
  onClick = () => {
    this.props.onAdd(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    return (
      <Fragment>
        <div>{this.props.children}</div>
        <div>
          <input value={this.state.inputValue} onChange={this.onChange}/>
          <button onClick={this.onClick}>Add</button>
        </div>
      </Fragment>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <Fragment>
         {this.props.todoList.map(todo => <div key={todo}>{todo}</div>)}
         <div>
           <Clock/>
          </div>
      </Fragment>
    )
  }
}

Body.defaultProps = {todoList: []};
Body.displayName = 'TodoList';

class App extends React.Component {
  state = {todos: ['1', '2', '3']}
  onAdd = todo => this.setState({todos: [...this.state.todos, todo]});
  render() {
    return (
      <div className="app">
        <Header onAdd={this.onAdd}>This is our ToDo</Header>
        <Body todoList={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
