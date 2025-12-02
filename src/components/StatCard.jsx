import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StatCard = ({ title, value, unit, change, trend, icon: Icon, delay = 0 }) => {
    const getTrendIcon = () => {
        if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
        if (trend === 'down') return <TrendingDown className="w-4 h-4" />;
        return <Minus className="w-4 h-4" />;
    };

    const getTrendColor = () => {
        if (trend === 'up') return 'text-red-400';
        if (trend === 'down') return 'text-green-400';
        return 'text-slate-400';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="stat-card group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${getTrendColor()}`}>
                    {getTrendIcon()}
                    <span className="font-semibold">{change}%</span>
                </div>
            </div>

            <h3 className="text-slate-400 text-sm font-medium mb-2">{title}</h3>

            <div className="flex items-baseline gap-2">
                <motion.span
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.2 }}
                    className="text-3xl font-bold gradient-text"
                >
                    {value}
                </motion.span>
                {unit && <span className="text-slate-500 text-sm">{unit}</span>}
            </div>
        </motion.div>
    );
};

export default StatCard;
