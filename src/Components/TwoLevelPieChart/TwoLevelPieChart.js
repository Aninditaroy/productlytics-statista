import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useBarRecharts from '../../Hooks/useBarRecharts';
import useRecharts from '../../Hooks/useRecharts';
import './TwoLevelPieChart.css';
const TwoLevelPieChart = () => {
    const [data] = useRecharts();
    const [data2] = useBarRecharts();
    return (
        <div>
            <h3 className='pie-Investment '>Investment Vs Revenue</h3>
                <PieChart width={350} height={400} className='pie-chart'>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data2} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
        </div>
    );
};

export default TwoLevelPieChart;