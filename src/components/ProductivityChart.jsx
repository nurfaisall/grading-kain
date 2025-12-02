import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductivityChart = ({ data }) => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass p-4 rounded-lg shadow-xl">
                    <p className="text-slate-300 font-semibold mb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: <span className="font-bold">{entry.value}</span>
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="chart-container"
        >
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-100 mb-1">Produktivitas Harian</h2>
                <p className="text-slate-400 text-sm">Output produksi per hari (meter)</p>
            </div>

            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis
                        dataKey="day"
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8' }}
                        tickLine={{ stroke: '#334155' }}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8' }}
                        tickLine={{ stroke: '#334155' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="circle"
                    />
                    <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#64748b"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Target"
                        dot={false}
                        animationDuration={1500}
                    />
                    <Line
                        type="monotone"
                        dataKey="actual"
                        stroke="#0ea5e9"
                        strokeWidth={3}
                        name="Aktual"
                        dot={{ fill: '#0ea5e9', r: 5 }}
                        activeDot={{ r: 8, className: 'glow' }}
                        animationDuration={1500}
                    />
                    <Line
                        type="monotone"
                        dataKey="defective"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        name="Cacat"
                        dot={{ fill: '#f59e0b', r: 4 }}
                        activeDot={{ r: 7 }}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default ProductivityChart;
