import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const Reports = () => {
    const reports = [
        {
            title: 'Weekly Quality Report',
            date: '25 Nov - 1 Des 2024',
            type: 'Quality',
            status: 'ready',
            size: '2.4 MB'
        },
        {
            title: 'Monthly Production Summary',
            date: 'November 2024',
            type: 'Production',
            status: 'ready',
            size: '5.1 MB'
        },
        {
            title: 'Defect Analysis Report',
            date: '18 - 24 Nov 2024',
            type: 'Analytics',
            status: 'ready',
            size: '3.8 MB'
        },
        {
            title: 'Quarterly Performance',
            date: 'Q4 2024',
            type: 'Performance',
            status: 'processing',
            size: 'Processing...'
        },
        {
            title: 'Annual Quality Audit',
            date: '2024',
            type: 'Audit',
            status: 'scheduled',
            size: 'Scheduled'
        },
    ];

    const quickStats = [
        { label: 'Total Reports', value: '156', color: 'from-blue-500 to-cyan-600' },
        { label: 'This Month', value: '24', color: 'from-purple-500 to-pink-600' },
        { label: 'Downloads', value: '892', color: 'from-green-500 to-emerald-600' },
        { label: 'Pending', value: '3', color: 'from-orange-500 to-red-600' },
    ];

    return (
        <div>
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold gradient-text mb-2">Reports & Documents</h1>
                <p className="text-slate-400">Access and download your quality control reports</p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {quickStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 border border-white/10 mb-6"
            >
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white">
                        <Calendar className="w-4 h-4" />
                        <span>Date Range</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white">
                        <Filter className="w-4 h-4" />
                        <span>Filter Type</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 text-white ml-auto">
                        <Download className="w-4 h-4" />
                        <span>Download All</span>
                    </button>
                </div>
            </motion.div>

            {/* Reports List */}
            <div className="space-y-4">
                {reports.map((report, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{report.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {report.date}
                                        </span>
                                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                                            {report.type}
                                        </span>
                                        <span>{report.size}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === 'ready'
                                            ? 'bg-green-500/20 text-green-400'
                                            : report.status === 'processing'
                                                ? 'bg-orange-500/20 text-orange-400'
                                                : 'bg-blue-500/20 text-blue-400'
                                        }`}
                                >
                                    {report.status === 'ready' ? 'Ready' : report.status === 'processing' ? 'Processing' : 'Scheduled'}
                                </span>

                                {report.status === 'ready' && (
                                    <button className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        <Download className="w-5 h-5 text-white" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Generate New Report */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 glass-card p-8 border border-white/10 text-center"
            >
                <h3 className="text-xl font-bold text-white mb-3">Generate Custom Report</h3>
                <p className="text-slate-400 mb-6">Create a custom report with specific date ranges and metrics</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 text-white font-semibold">
                    Create New Report
                </button>
            </motion.div>
        </div>
    );
};

export default Reports;
