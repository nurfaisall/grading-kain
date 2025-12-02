import { motion } from 'framer-motion';
import { Package, Clock, Users, Zap } from 'lucide-react';
import ProductivityChart from '../components/ProductivityChart';
import GradingDistribution from '../components/GradingDistribution';
import StatCard from '../components/StatCard';

const Production = () => {
    const productivityData = [
        { day: 'Sen', target: 1200, actual: 1180, defective: 45 },
        { day: 'Sel', target: 1200, actual: 1250, defective: 38 },
        { day: 'Rab', target: 1200, actual: 1190, defective: 42 },
        { day: 'Kam', target: 1200, actual: 1280, defective: 35 },
        { day: 'Jum', target: 1200, actual: 1220, defective: 40 },
        { day: 'Sab', target: 1200, actual: 1150, defective: 48 },
    ];

    const gradingData = [
        { name: 'Grade A', value: 5780, percentage: 82.5 },
        { name: 'Grade B', value: 675, percentage: 9.6 },
        { name: 'Grade C', value: 220, percentage: 3.1 },
        { name: 'Reject', value: 74, percentage: 1.1 },
    ];

    const productionLines = [
        { id: 'Line 1', status: 'active', output: 1250, efficiency: 96.2, operator: 'Team A' },
        { id: 'Line 2', status: 'active', output: 1180, efficiency: 94.8, operator: 'Team B' },
        { id: 'Line 3', status: 'maintenance', output: 0, efficiency: 0, operator: 'Team C' },
        { id: 'Line 4', status: 'active', output: 1320, efficiency: 98.1, operator: 'Team D' },
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
                <h1 className="text-3xl font-bold gradient-text mb-2">Production Monitoring</h1>
                <p className="text-slate-400">Track production lines and output performance</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Output"
                    value="3,750"
                    unit="meter"
                    change="+8.5"
                    trend="up"
                    icon={Package}
                    delay={0}
                />
                <StatCard
                    title="Avg Efficiency"
                    value="96.4"
                    unit="%"
                    change="+2.3"
                    trend="up"
                    icon={Zap}
                    delay={0.1}
                />
                <StatCard
                    title="Active Lines"
                    value="3"
                    unit="/ 4"
                    change="0"
                    trend="neutral"
                    icon={Users}
                    delay={0.2}
                />
                <StatCard
                    title="Uptime"
                    value="22.5"
                    unit="hrs"
                    change="+1.2"
                    trend="up"
                    icon={Clock}
                    delay={0.3}
                />
            </div>

            {/* Production Lines Status */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 border border-white/10 mb-6"
            >
                <h3 className="text-xl font-bold text-white mb-6">Production Lines Status</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {productionLines.map((line, index) => (
                        <motion.div
                            key={line.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            className={`p-4 rounded-xl border ${line.status === 'active'
                                    ? 'bg-green-500/10 border-green-500/30'
                                    : 'bg-orange-500/10 border-orange-500/30'
                                } hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-white">{line.id}</h4>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${line.status === 'active'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-orange-500/20 text-orange-400'
                                        }`}
                                >
                                    {line.status === 'active' ? 'Active' : 'Maintenance'}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Output</span>
                                    <span className="text-white font-semibold">{line.output} m</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Efficiency</span>
                                    <span className="text-white font-semibold">{line.efficiency}%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Operator</span>
                                    <span className="text-white font-semibold">{line.operator}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProductivityChart data={productivityData} />
                <GradingDistribution data={gradingData} />
            </div>
        </div>
    );
};

export default Production;
