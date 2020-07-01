import React, {useState, useEffect} from 'react';


export const Clock = () => {
   const [time, setTime] = useState(new Date());

   const tick = () =>  {
         setTime(new Date);
         console.log("Tick");
   }

   useEffect(() => {
      const timer = setInterval(() => tick(), 1000);
      return () => clearInterval(timer);
   }, []);

   return (
      <div>
         <div>Time: {time.toLocaleTimeString()}</div>
      </div>
   )
}

// export class Clock extends React.Component {
//    state = {time: new Date()};

//    tick = () => this.setState({time: new Date})

//    componentDidMount() {
//       this.timer = setInterval(() => this.tick(), 1000);
//    }

//    componentWillUnmount() {
//       clearInterval(this.timer);
//    }

//    render() {
//       return (
//          <div>
//             <div></div>
//             <div>Time: {this.state.time.toLocaleTimeString()}</div>
//          </div>
//       )
//    }
// }

