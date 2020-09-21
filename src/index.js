import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// class App extends React.Component {
//     render(){ // class component mora da ima render
//         return (
//             <h1>App Component</h1>
//         )
//     }
// }

ReactDOM.render(<App />, document.querySelector('#app'))