import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//import App from './App';
//import Sum from './Sum';
//import ClickyButtons from './ClickyButtons';
//import DangerContainer from './Danger.js';
//import ConditionalDisplay from './Condition';
//import {Sum,ConditionalDisplay} from './Condition';
//import {Events} from './DOMEvents';
//import EvenCounter from './EvenCounter';
import Identity from './Forms';


//First Approach
/*
let model = { clicks: 0 };

function render() {
    ReactDOM.render(<App 

    clicks={model.clicks} 
    onClick={() => {
    model.clicks += 1;
        render();
    }
    } />, document.getElementById('root'));
}*/
// const state = {
//     showSum: true
// }

//1.Default model
let model = {
    running: false,
    time: 0
};

let view = (m) => {
    console.log('Calling view:' + m.time)
    let minutes = Math.floor(model.time / 60);
    let seconds = m.time - (minutes * 60);
    let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;
    let handler = (event) => {
        model = update(model, m.running ? 'STOP' : 'START');
    }
    return <div><p>{minutes}:{secondsFormatted}</p>
        <button onClick={handler}>{m.running ? 'Stop' : 'Start'}</button>
    </div>
};

let intents = {
    TICK: 'TICK',
    START: 'START',
    STOP: 'STOP',
    RESET: 'RESET'
};
//3. Update function applies that intent to make the modification to the model
const update = (model, intent) => {
    console.log(model.time + ':' + model.running);
    const updates = {
        'START': (model) => Object.assign(model, { running: true }),
        'STOP': (model) => Object.assign(model, { running: false }),
        'TICK': (model) => Object.assign(model, { time: model.time + (model.running ? 1 : 0) })
    }
    return updates[intent](model);
};

//4. Which cause the appliation to be rerendered using the view function based on the updated model
const render = () => {
    ReactDOM.render(view(model), document.getElementById('root'));

}
//2. We publish an intent
setInterval(() => {
    model = update(model, 'TICK');
    render();
}, 1000);

/*
function render() {
    //ReactDOM.render(<App />, document.getElementById('root'));
    //ReactDOM.render(<Sum a={5} b={4} />, document.getElementById('root'));
    //ReactDOM.render(<ClickyButtons numberOfButtons={5} onSelection={console.log}/>, document.getElementById('root'))
    //ReactDOM.render(<DangerContainer dangerous="<Strong>Hello</Strong>" />, document.getElementById('root'));
    // ReactDOM.render(<ConditionalDisplay isVisible={state.showSum}>
    //     <h1>A <span>Sum</span></h1>
    //     <Sum a={4} b={2} />
    // </ConditionalDisplay>
    //     , document.getElementById('root'));
    //ReactDOM.render(<Events />, document.getElementById('root'));
    //onEvenClick is a component event
    // ReactDOM.render(<EvenCounter onEvenClick={(data) => {
    //     console.log(`even ${data}`);
    //     }}/>,document.getElementById('root'));

    // ReactDOM.render(<Identity/>,document.getElementById('root'));
}
*/
// setInterval(() => {
//     state.showSum = !state.showSum;
//     render();
// }, 2000);



render();
registerServiceWorker();
