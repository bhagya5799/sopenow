import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './index.scss'
import {Link} from 'react-router-dom'


const Home = () => {
    const [chartData, setChartData] = React.useState({
        series: [
            {
                name: 'Line Graph',
                type: 'line',
                data: [5, 60, 120, 60, 49, 26, 24, 21, 10],
            },
            {
                name: 'Bar Graph',
                type: 'bar',
                data: [5, 20, 120, 60, 51, 26, 24, 21, 10],
            },
        ],
        options: {
            chart: {
                id: 'combined-chart',
                stacked: false, // Set to false to group bars and lines side by side
            },
            xaxis: {
                categories: ['12AM-6AM', '6AM-8AM', '8AM-12PM', '12PM-2PM', '2PM-2PM', '2PM-4PM', '4PM-6PM', '6PM-8PM', '8PM-10PM', '10Pm-12AM'],
            },
            yaxis: [
                
                {
                    seriesName: 'Line Graph',
                    labels: {
                        formatter: (value) => {
                            const minutes = Math.floor(value / 60);
                            const seconds = value - minutes * 60;
                            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        },
                    },
                },
                {
                    seriesName: 'Bar Graph',
                    show: false,

                },
            ],
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top',
                    },
                },
            },

            dataLabels: {
                enabled: true,
                offsetY: 20,
                style: {
                    fontSize: '12px',
                    colors: ['#cb4154 '],
                },
            },
            stroke: {
                width: [2, 0],
                curve: 'smooth',
                colors: ['green']


            },
            fill: {
                opacity: [1, 1],
                colors: ['#FFB6C1'],
                borderRadius: 2,
            },
            legend: {
                offsetY: 10,
            },
        },
    });

    return (
        <div className='my-chart'>
            <div>
                <nav>
                    <h3>Discharge <span>Now</span></h3>
                    <Link to='/body'>
                        <button className='button'>Home</button>
                    </Link>
                </nav>
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={500}
                />
            </div>
        </div>
    );
};
export default Home;
