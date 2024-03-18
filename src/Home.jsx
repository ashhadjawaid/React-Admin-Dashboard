import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 import { PieChart, Pie, Cell } from 'recharts';

function Home() {
  const filledLevel = 70; // For example, 50% filled
  const maxCapacity = 100; // Maximum capacity of the tank

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>WEIGHT</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>0.0g</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TARE</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>TARE</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TARGET</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>93</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRESSURE</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>0.5</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Filled', value: filledLevel },
                  { name: 'Remaining', value: maxCapacity - filledLevel }
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                label
              >
                {/* Example of customizing individual pie slices */}
                <Cell key={`cell-${filledLevel}`} fill="#82ca9d" />
                <Cell key={`cell-${maxCapacity - filledLevel}`} fill="#FFBB28" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home





