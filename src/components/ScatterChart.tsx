import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ScatterChartProps {
    gpa: number[][];
}

const ScatterChart: React.FC<ScatterChartProps> = ({ gpa }) => {
    const options: ApexOptions = {
        series: [{
            name: "GPA",
            data: gpa
        }],
        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                enabled: false,
                type: 'xy'
            },
            toolbar: {
                show: false
            },
            foreColor: '#fff'
        },
        xaxis: {
            tickAmount: gpa.length-1,
        },
        yaxis: {
            tickAmount: 6
        },
        markers: {
            size: 5
        }
    };

    return (
        <Chart options={options} series={options.series} type="scatter" height={450} width={450} />
    );
};

export default ScatterChart;
