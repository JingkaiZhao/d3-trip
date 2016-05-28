import React from 'react';
import ReactDOM from 'react-dom';
import Path from './components/path/Path.jsx'
import './base.scss'

class Graph extends React.Component {
    render() {
        return <h1>D3</h1>
    }
}

ReactDOM.render(
    <Path/>,
    document.getElementById('container')
);
