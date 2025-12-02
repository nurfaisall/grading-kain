import { motion } from 'framer-motion';
import { Bell, User, Shield, Palette, Database, Globe } from 'lucide-react';

const Settings = () => {
    const settingsSections = [
        {
            title: 'Profile Settings',
            icon: User,
            color: 'from-blue-500 to-cyan-600',
            settings: [
                { label: 'Full Name', value: 'Quality Control Team', type: 'text' },
                { label: 'Email', value: 'qc@fabriccompany.com', type: 'text' },
                { label: 'Role', value: 'Administrator', type: 'select' },
            ]
        },
        {
            title: 'Notifications',
            icon: Bell,
            color: 'from-purple-500 to-pink-600',
            settings: [
                { label: 'Email Notifications', value: true, type: 'toggle' },
                { label: 'Defect Alerts', value: true, type: 'toggle' },
                { label: 'Daily Reports', value: false, type: 'toggle' },
            ]
        },
        {
            title: 'Security',
            icon: Shield,
            color: 'from-green-500 to-emerald-600',
            settings: [
                { label: 'Two-Factor Authentication', value: true, type: 'toggle' },
                { label: 'Session Timeout', value: '30 minutes', type: 'select' },
                { label: 'Password', value: '••••••••', type: 'password' },
            ]
        },
        {
            title: 'Appearance',
            icon: Palette,
            color: 'from-orange-500 to-red-600',
            settings: [
                { label: 'Theme', value: 'Dark', type: 'select' },
                { label: 'Language', value: 'Bahasa Indonesia', type: 'select' },
                { label: 'Compact Mode', value: false, type: 'toggle' },
            ]
        },
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
                <h1 className="text-3xl font-bold gradient-text mb-2">Settings</h1>
                <p className="text-slate-400">Manage your dashboard preferences and configurations</p>
            </motion.div>

            {/* Settings Sections */}
            <div className="space-y-6">
                {settingsSections.map((section, sectionIndex) => (
                    <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                        className="glass-card p-6 border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                                <section.icon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-white">{section.title}</h2>
                        </div>

                        <div className="space-y-4">
                            {section.settings.map((setting, settingIndex) => (
                                <motion.div
                                    key={settingIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 + settingIndex * 0.05 }}
                                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                                >
                                    <span className="text-slate-300">{setting.label}</span>

                                    {setting.type === 'toggle' ? (
                                        <button
                                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${setting.value ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-slate-700'
                                                }`}
                                        >
                                            <motion.div
                                                animate={{ x: setting.value ? 24 : 0 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                                            />
                                        </button>
                                    ) : setting.type === 'password' ? (
                                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors duration-300">
                                            Change Password
                                        </button>
                                    ) : (
                                        <span className="text-white font-medium">{setting.value}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Additional Settings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="glass-card p-6 border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                            <Database className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Data Management</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors duration-300 group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">Export Data</h3>
                            <p className="text-sm text-slate-400">Download all your quality control data</p>
                        </button>

                        <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors duration-300 group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">Import Data</h3>
                            <p className="text-sm text-slate-400">Upload historical data from CSV</p>
                        </button>

                        <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors duration-300 group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">Backup Settings</h3>
                            <p className="text-sm text-slate-400">Create a backup of your configuration</p>
                        </button>

                        <button className="p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-left transition-colors duration-300 group">
                            <h3 className="text-red-400 font-semibold mb-2">Clear All Data</h3>
                            <p className="text-sm text-slate-400">Permanently delete all records</p>
                        </button>
                    </div>
                </motion.div>

                {/* Save Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-end gap-4"
                >
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors duration-300 text-white font-semibold">
                        Cancel
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 text-white font-semibold">
                        Save Changes
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;
