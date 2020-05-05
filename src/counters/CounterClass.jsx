import React from 'react';
import { Button } from '@material-ui/core';

class Counter extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
    this.increaseHandler = this.increaseHandler.bind(this);
 this.decreaseHandler = this.decreaseHandler.bind(this);
    this.restartHandler = this.restartHandler.bind(this);
}
increaseHandler() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
}
decreaseHandler() {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
}
    restartHandler() {
        this.setState({ count: 0 });
}
render() { return <div>
    <Button variant="contained" color="primary" onClick={this.increaseHandler}>Increase</Button>
    <Button variant="contained" onClick={this.decreaseHandler}>Decrease</Button>
    <Button variant="contained" color="primary" onClick={this.restartHandler}>Restart</Button>
    <div>{this.state.count}</div>
    
</div> }
}
export default Counter;