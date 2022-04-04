
import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../../Hooks/useRecharts';
import './DashboardLineChart.css';
const DashboardLineChart = () => {
    const [data] = useRecharts();
    return (
    <>
       <h3 className='month-sell'>Month wise sell</h3>
       <LineChart className='line-chart' width={350} height={300} data={data}>
         <Line dataKey={'sell'}></Line>
         <Legend></Legend>
         <Line dataKey={'investment'}></Line>
         <Tooltip></Tooltip>
         <XAxis dataKey={'month'}></XAxis>
         <YAxis dataKey={'sell'}></YAxis>
        </LineChart>
    </>
    );
};

export default DashboardLineChart;