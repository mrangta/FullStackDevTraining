import React from 'react';
import propTypes from 'prop-types';

export default class HelloWorld extends React.Component{
    render(){
        let name = "World"
        if(this.props.name){
            name = this.props.name
        }
        return(
            <h1>Hello {name} from component</h1>
        )
    }
}

HelloWorld.propTypes= {
    name: propTypes.string
}