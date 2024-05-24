import Chart from 'react-apexcharts';

export default function GPAHistory(props: {gpa: number[]}) {

    const series = [
        {
            name: "GPA",
            data: props.gpa
        }
    ];

    const options : ApexCharts.ApexOptions = {
        chart: {
            height: 600,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0,
        },
        grid: {
            row: {
                colors: ['transparent'], // alternating background colors
                opacity: 0.5
            },
        },
        xaxis: {
            labels: {
                style: {
                    colors: 'blue'
                },
            },
            categories: Array.from({length: props.gpa.length}, (_, i) => i + 1)
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'blue'
                },
            },
        }
    };

    return (
        <>
            <Chart options={options} series={series} type="line" height={450} width={450}/>
        </>
    );
}