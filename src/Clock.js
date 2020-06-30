import React from 'react';

export class Clock extends React.Component {
   state = {time: new Date()};

   tick = () => this.setState({time: new Date})

   componentDidMount() {
      this.timer = setInterval(() => this.tick(), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   render() {
      return (
         <div>
            <div></div>
            <div>Time: {this.state.time.toLocaleTimeString()}</div>
         </div>
      )
   }
}

