import React, {Component} from 'react';
import './App.css';


function DangerContainer(props){
  //  return <p>{props.dangerous}</p>
  return <p dangerouslySetInnerHTML={{__html:props.dangerous}}/>;
}

export default DangerContainer;