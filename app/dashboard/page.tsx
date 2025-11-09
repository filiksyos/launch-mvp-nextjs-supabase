'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Activity } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Revenue',
    value: '$45,234',
    change: '+8.2%',
    icon: TrendingUp,
    color: 'text-green-500'
  },
  {
    title: 'Active Sessions',
    value: '1,234',
    change: '+5.7%',
    icon: Activity,
    color: 'text-purple-500'
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '+2.1%',
    icon: BarChart3,
    color: 'text-orange-500'
  }
];

const recentActivity = [
  { action: 'New user signup', time: '2 minutes ago', type: 'user' },
  { action: 'Payment received', time: '15 minutes ago', type: 'payment' },
  { action: 'New feature deployed', time: '1 hour ago', type: 'deploy' },
  { action: 'Database backup completed', time: '3 hours ago', type: 'system' },
  { action: 'Support ticket resolved', time: '5 hours ago', type: 'support' }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Welcome back! Here's what's happening with your application.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'payment' ? 'bg-green-500' :
                    activity.type === 'deploy' ? 'bg-purple-500' :
                    activity.type === 'system' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`} />
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {activity.action}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <button className="p-6 bg-primary text-white rounded-xl shadow-lg hover:bg-primary-dark transition-colors">
            <h3 className="font-bold text-lg mb-2">Add New User</h3>
            <p className="text-sm opacity-90">Create a new user account</p>
          </button>
          <button className="p-6 bg-white dark:bg-neutral-dark border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-xl shadow-lg hover:bg-slate-50 dark:hover:bg-neutral-darker transition-colors">
            <h3 className="font-bold text-lg mb-2">View Reports</h3>
            <p className="text-sm opacity-90">Check detailed analytics</p>
          </button>
          <button className="p-6 bg-white dark:bg-neutral-dark border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl shadow-lg hover:bg-slate-50 dark:hover:bg-neutral-darker transition-colors">
            <h3 className="font-bold text-lg mb-2">Settings</h3>
            <p className="text-sm opacity-90">Configure your account</p>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
