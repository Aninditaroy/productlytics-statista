import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../../Hooks/useRecharts';
import './StackedBarChart.css';
const StackedBarChart = () => {
    const [data] = useRecharts();
    return (
        <div>
            <h2 className="revenue-bar">Investment Vs Revenue</h2>
            <BarChart
                width={350}
                height={300}
                data={data}  >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="investment"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default StackedBarChart;