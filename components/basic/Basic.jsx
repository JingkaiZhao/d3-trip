import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import './basic.scss';

class Basic extends React.Component {
    componentDidMount() {
        let p = d3.select('#basic-container').selectAll('p')
            .data([4, 8, 15, 16, 23, 42])
            .text(d => 'Item ' + d)
            .style('color', (d, i) => {
                console.log(d, i);
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            })
        p.enter().append("p")
            .text(d => { return "Item " + d; });
        d3.select('#basic-container').transition()
            .duration(5000)
            .style('background-color', 'black');
    }

    render() {
        return <div id="basic-container">
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
            <p>item 5</p>
        </div>
    }
}

export default Basic;
