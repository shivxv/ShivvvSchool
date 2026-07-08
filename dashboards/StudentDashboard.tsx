import React from 'react';
import { Card } from '../components/UI/Card';
import { Table } from '../components/UI/Table';
import { Badge } from '../components/UI/Badge';
import { BookOpen, Calendar, Clock, GraduationCap } from 'lucide-react';

const assignments = [
  { id: 'a1', subject: 'Advanced Physics', task: 'Quantum Mechanics Problem Set 4', due: '2026-07-12', status: 'Pending' },
  { id: 'a2', subject: 'Computer Science', task: 'Implement DFS Graph Traversal in Java', due: '2026-07-10', status: 'Completed' },
];

export const StudentDashboard: React.FC = () => {

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold dark:text-white">Scholar Workspace</h1>
        <p className="text-sm text-gray-400 mt-1">Track your daily class schedules, performance metrics, and pending assignments.</p>
      </div>

      {/* Snapshot Performance Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-2xl"><BookOpen className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">6 Active</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Courses Enrolled</p>
          </div>
        </Card>
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-secondary/10 text-brand-secondary rounded-2xl"><Calendar className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">94.2%</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Term Attendance</p>
          </div>
        </Card>
        <Card className="flex items-center gap-5">
          <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-2xl"><GraduationCap className="h-6 w-6" /></div>
          <div>
            <h4 className="text-2xl font-bold dark:text-white">A+ Cumulative</h4>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Academic Standing</p>
          </div>
        </Card>
      </div>

      {/* Coursework Queue Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-secondary" /> Academic Assignment Queue
        </h3>
        <Table headers={['Course', 'Deliverable Target', 'Due Date', 'Status Flag']}>
          {assignments.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{task.subject}</td>
              <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{task.task}</td>
              <td className="px-6 py-4 text-xs font-medium text-gray-400">{task.due}</td>
              <td className="px-6 py-4">
                <Badge variant={task.status === 'Completed' ? 'success' : 'warning'}>
                  {task.status}
                </Badge>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};