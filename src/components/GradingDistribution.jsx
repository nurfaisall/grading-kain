import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const GradingDistribution = ({ data }) => {
    const COLORS = {
        'Grade A': '#10b981',
        'Grade B': '#3b82f6',
        'Grade C': '#f59e0b',
        'Reject': '#ef4444',
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass p-4 rounded-lg shadow-xl">
                    <p className="text-slate-300 font-semibold mb-2">{payload[0].name}</p>
                    <p className="text-primary-400 font-bold text-lg">{payload[0].value} unit</p>
                    <p className="text-slate-400 text-sm mt-1">
                        {payload[0].payload.percentage}%
                    </p>
                </div>
            );
        }
        return null;
    };

    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percentage }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                className="font-bold text-sm"
            >
                {`${percentage}%`}
            </text>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="chart-container"
        >
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-100 mb-1">Distribusi Grading</h2>
                <p className="text-slate-400 text-sm">Persentase pencapaian per grade</p>
            </div>

            <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomLabel}
                        outerRadius={120}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        animationDuration={1500}
                        animationBegin={0}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[entry.name]}
                                className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>

            {/* Custom Legend */}
            <div className="mt-6 grid grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="flex items-center justify-between p-3 glass rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: COLORS[item.name] }}
                            />
                            <span className="text-slate-300 font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-100 font-bold">{item.value}</p>
                            <p className="text-slate-400 text-xs">{item.percentage}%</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default GradingDistribution;
