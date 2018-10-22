import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';

//numberOfButtons is a value passed into the component
//onSelection 
var _ = require('underscore-node');
function ClickyButtons({numberOfButtons, onSelection}) {
    const makeButton = v => <button key={v} id={v} onClick={event => onSelection(event.target.id)}>{v}</button>;
    return <div>{_.range(1, numberOfButtons + 1).map(makeButton)}</div>;
}

export default ClickyButtons;