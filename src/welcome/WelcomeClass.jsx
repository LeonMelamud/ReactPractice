import React from 'react';
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: `Hello ${props.name}!` }
    }
    render() {
        return <div>{this.state.greeting}</div>; }
    }
export default Welcome;