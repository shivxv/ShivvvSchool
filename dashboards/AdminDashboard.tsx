import React from 'react';
import { analyticalRevenueData, mockNotices } from '../data/mockData';
import { Card } from '../components/UI/Card';
import { Table } from '../components/UI/Table';
import { Badge } from '../components/UI/Badge';
import { TrendingUp, Users, BookOpen, AlertCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const chartMetrics = analyticalRevenueData;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold dark:text-white">Operations Center</h1>
        <p className="text-sm text-gray-400 mt-1">Real-time status metrics, processing lines, and operational metrics.</p>
      </div>

      {/* Analytics Matrix Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-2xl"><Users className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">5,240</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Active Scholars</p>
          </div>
        </Card>
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-secondary/10 text-brand-secondary rounded-2xl"><BookOpen className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">42</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Active Curricula Hubs</p>
          </div>
        </Card>
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-success/10 text-brand-success rounded-2xl"><TrendingUp className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">₹4.2M</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Quarterly Inflow Balance</p>
          </div>
        </Card>
      </div>

      <Card hoverEffect={false} className="p-6 space-y-4">
        <h3 className="text-lg font-bold dark:text-white">Remittance Streams & Enrollment Projections</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {chartMetrics.map((item) => (
            <div key={item.month} className="rounded-3xl border border-gray-100 dark:border-gray-800 p-5 bg-white dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.month}</p>
                <span className="text-xs uppercase tracking-[0.18em] text-brand-primary">Projected</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-3xl font-bold dark:text-white">₹{item.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Increase: {item.growth}%</div>
                <div className="h-3 mt-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary rounded-full" style={{ width: `${item.growth}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Embedded Action Logs Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><AlertCircle className="h-5 w-5 text-brand-accent" /> Active Registrar Circular Announcements</h3>
        <Table headers={['System Reference ID', 'Category Allocation', 'Published Date', 'Summary Context']}>
          {mockNotices.map((notice) => (
            <tr key={notice.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-4 font-mono text-xs text-brand-primary">{notice.id}</td>
              <td className="px-6 py-4"><Badge variant={notice.category === 'Admission' ? 'info' : 'warning'}>{notice.category}</Badge></td>
              <td className="px-6 py-4 text-xs font-medium text-gray-500">{notice.date}</td>
              <td className="px-6 py-4 max-w-sm truncate text-gray-600 dark:text-gray-300">{notice.description}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};