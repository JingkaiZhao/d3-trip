import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './components/basic/Basic.jsx'
import BarChart from './components/barchart/BarChart.jsx'
import './base.scss'

class Playground extends React.Component {
    render() {
        return <div className="playground-container">
            <BarChart />
        </div>;
    }
}

ReactDOM.render(
    <Playground />,
    document.getElementById('container')
);
