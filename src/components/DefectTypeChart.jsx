import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const DefectTypeChart = ({ data }) => {
    const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6'];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass p-4 rounded-lg shadow-xl">
                    <p className="text-slate-300 font-semibold mb-2">{label}</p>
                    <p className="text-primary-400 font-bold text-lg">{payload[0].value} cacat</p>
                    <p className="text-slate-400 text-sm mt-1">
                        {((payload[0].value / data.reduce((sum, item) => sum + item.count, 0)) * 100).toFixed(1)}%
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="chart-container"
        >
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-100 mb-1">Distribusi Jenis Cacat</h2>
                <p className="text-slate-400 text-sm">Breakdown cacat berdasarkan tipe</p>
            </div>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis
                        dataKey="type"
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={{ stroke: '#334155' }}
                        angle={-15}
                        textAnchor="end"
                        height={80}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8' }}
                        tickLine={{ stroke: '#334155' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }} />
                    <Bar
                        dataKey="count"
                        name="Jumlah Cacat"
                        radius={[8, 8, 0, 0]}
                        animationDuration={1500}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            {/* Legend with colors */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {data.map((item, index) => (
                    <motion.div
                        key={item.type}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-slate-300 text-sm">{item.type}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default DefectTypeChart;
