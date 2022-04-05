import React from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis,AreaChart, Area,Tooltip, Bar, Legend, BarChart, PieChart, Pie } from 'recharts';
import './Dashboard.css';

const pdata = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]


const Dashboard=()=> {
  return (
    <div className='charts'>
      <div className="line__chart">
      <h4>Sell</h4>
      <ResponsiveContainer width={500} height={300} data={pdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <LineChart data={pdata}>
          <Line dataKey="sell" type="monotone" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis dataKey="sell"/>
        </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="area__chart">
        <h4>Revenue</h4>
        <ResponsiveContainer width={500} height={300} data={pdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <AreaChart data={pdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="revenue"/>
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>

      <div className="investmentvsreveneu">
        <h4>Investment & Revenue</h4>
        <ResponsiveContainer width={500} height={300} data={pdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <BarChart data={pdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    
      <div className="investmentvsreveneu">
        <h4>Investment vs Revenue</h4>
          <ResponsiveContainer width={500} height={300} data={pdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <PieChart>
          <Pie data={pdata} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={pdata} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>

  )
}

export default Dashboard;