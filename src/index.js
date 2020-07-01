import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './Clock';
import { Body } from './Body';
import { Header }  from './Header';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



const App = () => {
  const [app, setApp] = useState({
    todos: ['1', '2', '3'],
    showClock: true
  });

  const onAdd = todo => setApp({...app, todos: [...app.todos, todo]});

  const onSwitch = () => setApp({...app, showClock: !app.showClock});

  return (
    <div className="app">
      <Header onAdd={onAdd}>This is our ToDo</Header>
      <Body todoList={app.todos} />
       <button onClick={onSwitch}>Turn Clock {app.showClock ? 'Off' : 'On'}</button>
       {app.showClock && <Clock onSwitch={onSwitch}/>}
    </div>
  )
}

// class App extends React.Component {
//   state = {todos: ['1', '2', '3'], showClock: true};

//   onAdd = todo => this.setState({todos: [...this.state.todos, todo]});
//   onSwitch = () => this.setState({showClock: !this.state.showClock});
//   render() {
//     const {todos, showClock} = this.state;
//     return (
//       <div className="app">
//         <Header onAdd={this.onAdd}>This is our ToDo</Header>
//         <Body todoList={todos} />
//          <button onClick={this.onSwitch}>Turn Clock {showClock ? 'Off' : 'On'}</button>
//          {showClock && <Clock onSwitch={this.onSwitch}/>}
//       </div>
//     )
//   }
// }

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
