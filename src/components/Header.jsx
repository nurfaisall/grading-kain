import { motion } from 'framer-motion';
import { Factory, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 mb-8"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl glow"
                    >
                        <Factory className="w-8 h-8 text-white" />
                    </motion.div>

                    <div>
                        <h1 className="text-3xl font-bold gradient-text">
                            Dashboard Grading Kain
                        </h1>
                        <p className="text-slate-400 mt-1">Monitoring Kualitas Produksi Real-time</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-sm font-medium">{formatDate(currentTime)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        <Clock className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-mono font-bold">{formatTime(currentTime)}</span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
