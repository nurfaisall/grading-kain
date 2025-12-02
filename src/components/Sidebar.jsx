import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    BarChart3,
    Package,
    FileText,
    Settings,
    ChevronRight
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/analytics', icon: BarChart3, label: 'Analytics' },
        { path: '/production', icon: Package, label: 'Production' },
        { path: '/reports', icon: FileText, label: 'Reports' },
        { path: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-screen w-64 glass-card border-r border-white/10 p-6 z-40"
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <h1 className="text-2xl font-bold gradient-text">Fabric QC</h1>
                <p className="text-sm text-slate-400 mt-1">Quality Control System</p>
            </motion.div>

            {/* Navigation */}
            <nav className="space-y-2">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${isActive
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    <item.icon className="w-5 h-5 relative z-10" />
                                    <span className="font-medium relative z-10">{item.label}</span>

                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="ml-auto relative z-10"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    </motion.div>
                ))}
            </nav>

            {/* Bottom Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6"
            >
                <div className="glass-card p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            QC
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Quality Team</p>
                            <p className="text-xs text-slate-400">Admin Access</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
};

export default Sidebar;
