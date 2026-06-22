import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import "../styles/Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    inStock: 0,
    outStock: 0,
    revenueData: [],   
    inventoryData: []  
  });

  useEffect(() => { 
    fetchStats(); 
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await API.get("/products/dashboard/stats");
      setStats(data);
    } catch (error) { 
      console.log(error); 
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <div className="dashboard-page">
        <div className="dashboard-header animate-slide-up">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, Admin. Here are your real-time live analytics.</p>
        </div>

        <div className="stats-grid animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="stat-card">
            <div className="stat-icon blue">📦</div>
            <div className="stat-info">
              <h3>Total Products</h3>
              <h2>{stats.totalProducts}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">📑</div>
            <div className="stat-info">
              <h3>Categories</h3>
              <h2>{stats.totalCategories}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✅</div>
            <div className="stat-info">
              <h3>In Stock</h3>
              <h2>{stats.inStock}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">⚠️</div>
            <div className="stat-info">
              <h3>Out Of Stock</h3>
              <h2>{stats.outStock}</h2>
            </div>
          </div>
        </div>

        <div className="charts-grid animate-slide-up" style={{ animationDelay: "0.2s" }}>
          
          <div className="chart-card">
            <div className="chart-header">
              <h3>Real-Time Revenue</h3>
              <select className="chart-filter"><option>Last 6 Months</option></select>
            </div>
            <div className="chart-container">
              {stats.revenueData?.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#008b8b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#008b8b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                      cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '5 5' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#008b8b" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div style={{display:'flex', height:'100%', alignItems:'center', justifyContent:'center', color:'#94a3b8', fontWeight: 600}}>
                  No recent delivered orders found.
                </div>
              )}
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Category Performance</h3>
            </div>
            <div className="chart-container">
              {stats.inventoryData?.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.inventoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
                    <Bar dataKey="stock" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} name="Total In Stock" />
                    <Bar dataKey="sold" fill="#008b8b" radius={[4, 4, 0, 0]} barSize={20} name="Units Sold" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div style={{display:'flex', height:'100%', alignItems:'center', justifyContent:'center', color:'#94a3b8', fontWeight: 600}}>
                  Add products to see performance.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;