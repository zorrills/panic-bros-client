import React, {Component} from 'react';
import NavBar from "../Components/HeaderComponent/NavBar";

class App extends Component {
    render () {
        const { children } = this.props;
        return (
            React.Children.only(children)
        )
    }
};
export default App;