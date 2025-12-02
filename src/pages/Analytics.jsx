import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import DefectTrendChart from '../components/DefectTrendChart';
import DefectTypeChart from '../components/DefectTypeChart';

const Analytics = () => {
    const trendData = [
        { week: 'Minggu 1', gradeA: 850, gradeB: 120, gradeC: 45, reject: 15 },
        { week: 'Minggu 2', gradeA: 920, gradeB: 95, gradeC: 38, reject: 12 },
        { week: 'Minggu 3', gradeA: 880, gradeB: 110, gradeC: 42, reject: 18 },
        { week: 'Minggu 4', gradeA: 950, gradeB: 85, gradeC: 35, reject: 10 },
        { week: 'Minggu 5', gradeA: 1020, gradeB: 75, gradeC: 28, reject: 8 },
        { week: 'Minggu 6', gradeA: 980, gradeB: 90, gradeC: 32, reject: 11 },
    ];

    const defectTypeData = [
        { type: 'Lubang', count: 145 },
        { type: 'Noda', count: 98 },
        { type: 'Benang Putus', count: 76 },
        { type: 'Salah Warna', count: 54 },
        { type: 'Kusut', count: 42 },
        { type: 'Kotor', count: 38 },
        { type: 'Lainnya', count: 27 },
    ];

    const insights = [
        {
            title: 'Peningkatan Grade A',
            description: 'Grade A meningkat 8.2% dalam 6 minggu terakhir',
            trend: 'up',
            icon: CheckCircle,
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: 'Penurunan Reject',
            description: 'Tingkat reject turun 46.7% dari minggu pertama',
            trend: 'down',
            icon: TrendingDown,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            title: 'Cacat Dominan',
            description: 'Lubang masih menjadi jenis cacat terbanyak (30.2%)',
            trend: 'alert',
            icon: AlertCircle,
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Tren Positif',
            description: 'Konsistensi kualitas meningkat setiap minggu',
            trend: 'up',
            icon: TrendingUp,
            color: 'from-purple-500 to-pink-600'
        }
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
                <h1 className="text-3xl font-bold gradient-text mb-2">Analytics & Insights</h1>
                <p className="text-slate-400">Deep dive into your quality control metrics</p>
            </motion.div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {insights.map((insight, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <insight.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                        <p className="text-sm text-slate-400">{insight.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 mb-6">
                <DefectTrendChart data={trendData} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DefectTypeChart data={defectTypeData} />

                {/* Additional Analysis Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glass-card p-6 border border-white/10"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Analisis Mendalam</h3>

                    <div className="space-y-4">
                        {defectTypeData.slice(0, 5).map((defect, index) => {
                            const total = defectTypeData.reduce((sum, d) => sum + d.count, 0);
                            const percentage = ((defect.count / total) * 100).toFixed(1);

                            return (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-300">{defect.type}</span>
                                        <span className="text-sm font-semibold text-white">{percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-400">Total Cacat</span>
                            <span className="text-2xl font-bold gradient-text">
                                {defectTypeData.reduce((sum, d) => sum + d.count, 0)}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Analytics;
