import React, { Component } from 'react';
import PropTypes from 'prop-types';


export const Sum = ({a,b})=> <h1>{a} + {b} = {a + b}</h1>


export function ConditionalDisplay(props){
    return (<div>
        {props.isVisible ? props.children : null}
    </div>);
}


ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
}


