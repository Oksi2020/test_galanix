import React, { Component } from 'react';
import { useSelector } from 'react-redux';


import './Info.scss';

class Info extends Component {
   constructor(props) {
       super(props);
       this.state = {
        date: new Date(),
    }
   }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.setState({date:new Date()}), 1000);
    }
    componentWillMount() {    
       clearInterval(this.intervalID);
    }

    render =() => {
        return (
            <div className='info__block'>
                <h3>Image count: <i>{this.props.count}</i> Date: <i>{ this.state.date.toLocaleString() }</i></h3>
            </div>
        )
    }
    
}
export default Info;