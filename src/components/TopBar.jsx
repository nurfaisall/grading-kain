import { motion } from 'framer-motion';
import { Bell, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const TopBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-4 border border-white/10 mb-8 sticky top-4 z-30"
        >
            <div className="flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Time & Date */}
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-sm font-mono font-bold text-white">{formatTime(currentTime)}</span>
                        <span className="text-xs text-slate-400">{formatDate(currentTime)}</span>
                    </div>

                    {/* Notifications */}
                    <button className="relative p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 group">
                        <Bell className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Profile */}
                    <button className="flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default TopBar;
