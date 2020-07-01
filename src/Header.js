import React, {Fragment, useState} from 'react';


export const Header = ({children, onAdd}) => {

  const [inputValue, setInputValue] = useState('');

  const onChange = event => setInputValue(event.target.value);
  const onClick = () => {
    onAdd(inputValue);
    setInputValue('');
  }

  return (
    <Fragment>
         <div>{children}</div>
         <div>
           <input value={inputValue} onChange={onChange}/>
           <button onClick={onClick}>Add</button>
         </div>
       </Fragment>
  )
}

// export class Header extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        inputValue: ''
//      }
//    }
 
//    onChange = event => this.setState({inputValue: event.target.value});
//    onClick = () => {
//      this.props.onAdd(this.state.inputValue);
//      this.setState({inputValue: ''});
//    }
 
//    render() {
//      return (
//        <Fragment>
//          <div>{this.props.children}</div>
//          <div>
//            <input value={this.state.inputValue} onChange={this.onChange}/>
//            <button onClick={this.onClick}>Add</button>
//          </div>
//        </Fragment>
//      )
//    }
//  }