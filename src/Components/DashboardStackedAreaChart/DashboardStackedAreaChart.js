import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useRecharts from '../../Hooks/useRecharts';
import './DashboardStackedAreaChart.css';
const DashboardStackedAreaChart = () => {
    const [data] = useRecharts();
    return (
        <div>
            <h3 className='revenue-investment'>Investment Vs Revenue</h3>
                <AreaChart
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }} className='area-chart' 
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
        </div>
    );
};

export default DashboardStackedAreaChart;