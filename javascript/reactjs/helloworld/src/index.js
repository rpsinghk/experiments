import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component {
        render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}



ReactDOM.render(<Hello name="Ram Prakash Singh"/>, document.getElementById('root'));
