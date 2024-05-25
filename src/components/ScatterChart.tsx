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
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10
    },
    yaxis: {
      tickAmount: 7
    },
    markers: {
      size: 5
    }
  };

  return (
    <div id="chart">
      <Chart options={options} series={options.series} type="scatter" height={350} />
    </div>
  );
};

export default ScatterChart;
