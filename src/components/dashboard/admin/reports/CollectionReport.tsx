import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';
import { formatCurrency } from '../../../../utils/formatting';

const dailyData = [
  { name: 'Mon', Collected: 4000, Invoiced: 5500 },
  { name: 'Tue', Collected: 3000, Invoiced: 4000 },
  { name: 'Wed', Collected: 6000, Invoiced: 7000 },
  { name: 'Thu', Collected: 4800, Invoiced: 6000 },
  { name: 'Fri', Collected: 9000, Invoiced: 10000 },
  { name: 'Sat', Collected: 2300, Invoiced: 3000 },
  { name: 'Sun', Collected: 1000, Invoiced: 1500 },
];

const weeklyData = [
  { name: 'Week 1', Collected: 28000, Invoiced: 35000 },
  { name: 'Week 2', Collected: 31000, Invoiced: 40000 },
  { name: 'Week 3', Collected: 25000, Invoiced: 30000 },
  { name: 'Week 4', Collected: 45000, Invoiced: 50000 },
];

const monthlyData = [
  { name: 'Jan', Collected: 125000, Invoiced: 150000 },
  { name: 'Feb', Collected: 110000, Invoiced: 130000 },
  { name: 'Mar', Collected: 140000, Invoiced: 160000 },
  { name: 'Apr', Collected: 135000, Invoiced: 155000 },
];

const pieData = [
    { name: 'Online', value: 400 },
    { name: 'Cash', value: 300 },
    { name: 'Cheque', value: 300 },
    { name: 'Bank Transfer', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const CollectionReport: React.FC = () => {
    const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');

    const dataMap = {
        daily: dailyData,
        weekly: weeklyData,
        monthly: monthlyData,
    };

    const currentData = dataMap[period];
    
    const CustomTooltip = ({ active, payload, label }: any) => {
      if (active && payload && payload.length) {
        return (
          <div className="p-2 bg-white border rounded-lg shadow-lg">
            <p className="font-bold text-gray-800">{`${label}`}</p>
            <p className="text-sm text-blue-500">{`Collected: OMR ${formatCurrency(payload[0].value)}`}</p>
            <p className="text-sm text-gray-500">{`Invoiced: OMR ${formatCurrency(payload[1].value)}`}</p>
          </div>
        );
      }
      return null;
    };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Collection Report</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button onClick={() => setPeriod('daily')} className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${period === 'daily' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'}`}>Daily</button>
          <button onClick={() => setPeriod('weekly')} className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${period === 'weekly' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'}`}>Weekly</button>
          <button onClick={() => setPeriod('monthly')} className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${period === 'monthly' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'}`}>Monthly</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">{period} Collection Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `OMR ${Number(value) / 1000}k`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }} />
                <Legend iconType="circle" iconSize={8} />
                <Bar dataKey="Collected" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Invoiced" fill="#d1d5db" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection by Mode</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `OMR ${formatCurrency(value)}`} />
                    <Legend iconType="circle" iconSize={8} />
                </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionReport;
