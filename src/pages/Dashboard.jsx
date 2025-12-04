import { motion } from 'framer-motion';
import {
    Package,
    CheckCircle2,
    AlertTriangle,
    Target
} from 'lucide-react';
import StatCard from '../components/StatCard';
import DefectTrendChart from '../components/DefectTrendChart';
import GradingDistribution from '../components/GradingDistribution';
import DefectTypeChart from '../components/DefectTypeChart';
import ProductivityChart from '../components/ProductivityChart';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    // Sample data untuk trend cacat mingguan
    const trendData = [
        { week: 'Minggu 1', gradeA: 850, gradeB: 120, gradeC: 45, reject: 15 },
        { week: 'Minggu 2', gradeA: 920, gradeB: 95, gradeC: 38, reject: 12 },
        { week: 'Minggu 3', gradeA: 880, gradeB: 110, gradeC: 42, reject: 18 },
        { week: 'Minggu 4', gradeA: 950, gradeB: 85, gradeC: 35, reject: 10 },
        { week: 'Minggu 5', gradeA: 1020, gradeB: 75, gradeC: 28, reject: 8 },
        { week: 'Minggu 6', gradeA: 980, gradeB: 90, gradeC: 32, reject: 11 },
    ];

    // Sample data untuk jenis cacat
    const defectTypeData = [
        { type: 'Lubang', count: 145 },
        { type: 'Noda', count: 98 },
        { type: 'Benang Putus', count: 76 },
        { type: 'Salah Warna', count: 54 },
        { type: 'Kusut', count: 42 },
        { type: 'Kotor', count: 38 },
        { type: 'Lainnya', count: 27 },
    ];

    // Sample data untuk distribusi grading
    const gradingData = [
        { name: 'Grade A', value: 5780, percentage: 82.5 },
        { name: 'Grade B', value: 675, percentage: 9.6 },
        { name: 'Grade C', value: 220, percentage: 3.1 },
        { name: 'Reject', value: 74, percentage: 1.1 },
    ];

    // Sample data untuk produktivitas harian
    const productivityData = [
        { day: 'Sen', target: 1200, actual: 1180, defective: 45 },
        { day: 'Sel', target: 1200, actual: 1250, defective: 38 },
        { day: 'Rab', target: 1200, actual: 1190, defective: 42 },
        { day: 'Kam', target: 1200, actual: 1280, defective: 35 },
        { day: 'Jum', target: 1200, actual: 1220, defective: 40 },
        { day: 'Sab', target: 1200, actual: 1150, defective: 48 },
    ];

    // untuk params
    const [option, setOption] = useState('db_zb')
    const [date, setDate] = useState(null)

    const params = {
        option: option,
        date: date
    }

    const [data, setData] = useState([])
    const getDataDayNow = async () => {
        const keys = Object.keys(params)
        const values = Object.values(params)
        const paramas = new URLSearchParams()
        for (let i = 0; i < keys.length; i++) {
            if (values[i] !== null) {
                paramas.append(keys[i], values[i])
            }
        }
        const response = await fetch(import.meta.env.VITE_API_URL + '/main/gradingByDay?' + paramas.toString())
        const data = await response.json()
        console.log(data)

    }
    useEffect(() => {

        getDataDayNow()
    }, []);

    return (
        <div>
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard Overview</h1>
                <p className="text-slate-400">Monitor your fabric grading performance in real-time</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Produksi"
                    value="6,749"
                    unit="meter"
                    change="+12.5"
                    trend="up"
                    icon={Package}
                    delay={0}
                />
                <StatCard
                    title="Grade A"
                    value="82.5"
                    unit="%"
                    change="+3.2"
                    trend="up"
                    icon={CheckCircle2}
                    delay={0.1}
                />
                <StatCard
                    title="Tingkat Cacat"
                    value="13.8"
                    unit="%"
                    change="-2.1"
                    trend="down"
                    icon={AlertTriangle}
                    delay={0.2}
                />
                <StatCard
                    title="Efisiensi"
                    value="95.2"
                    unit="%"
                    change="+1.8"
                    trend="up"
                    icon={Target}
                    delay={0.3}
                />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <DefectTrendChart data={trendData} />
                <GradingDistribution data={gradingData} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DefectTypeChart data={defectTypeData} />
                <ProductivityChart data={productivityData} />
            </div>
        </div>
    );
};

export default Dashboard;
