import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardLineChart from '../DashboardLineChart/DashboardLineChart';
import DashboardStackedAreaChart from '../DashboardStackedAreaChart/DashboardStackedAreaChart';
import StackedBarChart from '../StackedBarChart/StackedBarChart';
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <Container className='dashboard'>
            <Row>
                <Col className='ps-0'> <DashboardLineChart></DashboardLineChart>
                </Col>
                <Col>
                 <DashboardStackedAreaChart />
                </Col>
            </Row>
            <Row>
                <Col>
                 <StackedBarChart />
                </Col>
                <Col>
                  <TwoLevelPieChart />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;