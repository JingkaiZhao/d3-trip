import React from 'react';
import ReactDOM from 'react-dom';
import './barchart.scss';

class BarChart extends React.Component {
    componentDidMount() {
        let data = [4, 8, 15, 16, 23, 42];
        this._craeteBarcharWithDiv(data);
    }

    render() {
        return <div id="barchart-container">
        </div>;
    }

    _craeteBarcharWithDiv(data) {
        let x = d3.scale.linear()
                    .domain([0, d3.max(data)])
                    .range([0, 600])
        d3.select('#barchart-container')
            .selectAll('div')
                .data(data)
            .enter().append('div')
                .style('width', d => x(d) + 'px')
                .text(d => d);
    }
}

export default BarChart;
