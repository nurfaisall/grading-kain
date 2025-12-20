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
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {


    // Sample data untuk trend cacat mingguan
    const [trendData, setTrendData] = useState([]);

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
    const [gradingData, setGradingData] = useState([
        // { name: 'Grade A', value: 5780, percentage: 82.5 },
        // { name: 'Grade B', value: 675, percentage: 9.6 },
        // { name: 'Grade C', value: 220, percentage: 3.1 },
        // { name: 'Reject', value: 74, percentage: 1.1 },
    ]);

    // Sample data untuk produktivitas harian
    const productivityData = [
        { day: 'Sen', target: 1200, actual: 1180, defective: 45 },
        { day: 'Sel', target: 1200, actual: 1250, defective: 38 },
        { day: 'Rab', target: 1200, actual: 1190, defective: 42 },
        { day: 'Kam', target: 1200, actual: 1280, defective: 35 },
        { day: 'Jum', target: 1200, actual: 1220, defective: 40 },
        { day: 'Sab', target: 1200, actual: 1150, defective: 48 },
    ];

    const [listData, setListData] = useState([])
    const [data, setData] = useState([]);
    const [date, setDate] = useState('')
    const [dataYesterday, setDataYesterday] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [option, setOption] = useState("db_zb")
    const [lifeCycles, setLifeCycle] = useState([])

    const getGradingByDay = async (date) => {
        setTrendData([]);
        const request = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/main/gradingByDay`, { params: { option: option, day: date } });
        const data = await request.data;
        setData(data.data);
        const gradeA = data.data['total_sum']['A1_YARD'] + data.data['total_sum']['A2_YARD'] + data.data['total_sum']['A3_YARD'] + data.data['total_sum']['A4_YARD']
        const gradeB = data.data['total_sum']['B_PROSES_YARD'] + data.data['total_sum']['GRADE_B_PERSIAPAN_YARD'] + data.data['total_sum']['GRADE_B_WEAVING_YARD']
        const gradeC = data.data['total_sum']['B_PROSES_YARD']
        const reject = data.data['total_sum']['B_PROSES_YARD']

        setGradingData([
            { name: 'Grade A', value: gradeA, percentage: parseFloat(gradeA / data.data['total_sum']['FINISH'] * 100).toFixed(2) },
            { name: 'Grade B', value: gradeB, percentage: parseFloat(gradeB / data.data['total_sum']['FINISH'] * 100).toFixed(2) },
            { name: 'Grade C', value: gradeC, percentage: parseFloat(gradeC / data.data['total_sum']['FINISH'] * 100).toFixed(2) },
            { name: 'Reject', value: reject, percentage: parseFloat(reject / data.data['total_sum']['FINISH'] * 100).toFixed(2) },
        ])
        setListData([]);
        if (date == undefined) {
            setDate(formated(data.data['df'][0]['TANGGAL']))
        }
        let counter = 0;
        for (let i = 0; i < 6; i++) {

            const d = new Date(String(date));
            let gradeA = 0;
            let gradeB = 0;
            let gradeC = 0;
            let reject = 0;
            try {
                d.setDate(d.getDate() - i);
                console.log(d.toISOString().split('T')[0]);

                const request = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/main/gradingByDay`, { params: { option: option, day: d.toISOString().split('T')[0] } });
                const data = await request.data;
                gradeA = data.data['total_sum']['A1_YARD'] + data.data['total_sum']['A2_YARD'] + data.data['total_sum']['A3_YARD'] + data.data['total_sum']['A4_YARD']
                gradeB = data.data['total_sum']['B_PROSES_YARD'] + data.data['total_sum']['GRADE_B_PERSIAPAN_YARD'] + data.data['total_sum']['GRADE_B_WEAVING_YARD']
                gradeC = data.data['total_sum']['B_PROSES_YARD']
                reject = data.data['total_sum']['B_PROSES_YARD']
            } catch (error) {

            }

            setTrendData(trendData => [{ tanggal: d.toISOString().split('T')[0], gradeA: gradeA, gradeB: gradeB, gradeC: gradeC, reject: reject }, ...trendData]);
            setListData(listData => [...listData, data.data]);
        }
        console.log("list data");
        console.log(trendData);

        setIsLoading(false);

        return data;
    }

    const lifeCycle = async () => {
        const request = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/main/gradingByDay`, { params: { option: option } });
        const data = await request.data;
        setDate(formated(data.data['df'][0]['TANGGAL']))
        getGradingByDay(formated(data.data['df'][0]['TANGGAL']))
    }

    const formated = (date) => {
        const dd = new Date(date).getDate().toString().length < 2 ? "0" + new Date(date).getDate().toString() : new Date(date).getDate().toString()
        const mm = new Date(date).getMonth().toString().length < 2 ? "0" + new Date(date).getMonth().toString() : new Date(date).getMonth().toString()
        const yyyy = new Date(date).getFullYear()
        return `${yyyy}-${mm}-${dd}`
    }

    useEffect(() => {
        lifeCycle();

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
                <div className='flex justify-between w-full items-center'>
                    <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard Overview</h1>
                    <div>

                        <span className='text-lg font-semibold gradient-text'>Tanggal Grading : </span>
                        {date &&
                            <input type="date" className='gradient-text bg-transparent border rounded-md p-1' value={date} onChange={(e) => {
                                getGradingByDay(e.target.value); console.log(e.target.value + "-<<<"); setDate(e.target.value);
                            }} />
                        }
                    </div>
                </div>
                <p className="text-slate-400">Monitor your fabric grading performance in real-time</p>
            </motion.div>

            {/* Stats Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Produksi"
                    value={isLoading ? "Loading..." : data['total_sum']['FINISH'].toFixed(2)}
                    unit="yard"
                    change="+12.5"
                    trend="up"
                    icon={Package}
                    delay={0}
                />
                <StatCard
                    title="Grade A"
                    value={isLoading ? "Loading..." : (((data['total_sum']['A1_YARD'] + data['total_sum']['A2_YARD'] + data['total_sum']['A3_YARD'] + data['total_sum']['A4_YARD']) / data['total_sum']['FINISH']) * 100).toFixed(1)}
                    unit="%"
                    change="+3.2"
                    trend="up"
                    icon={CheckCircle2}
                    delay={0.1}
                />
                <StatCard
                    title="Tingkat Cacat B Processing"
                    value={isLoading ? "Loading..." : ((data['total_sum']['B_PROSES_YARD'] / data['total_sum']['FINISH']) * 100).toFixed(1)}
                    unit="%"
                    change="-2.1"
                    trend="down"
                    icon={AlertTriangle}
                    delay={0.2}
                />
                <StatCard
                    title="Tingkat Cacat B Weaving"
                    value={isLoading ? "Loading..." : ((data['total_sum']['GRADE_B_WEAVING_YARD'] / data['total_sum']['FINISH']) * 100).toFixed(1)}
                    unit="%"
                    change="-2.1"
                    trend="down"
                    icon={AlertTriangle}
                    delay={0.2}
                />
                <StatCard
                    title="Tingkat Cacat B Persiapan"
                    value={isLoading ? "Loading..." : ((data['total_sum']['GRADE_B_PERSIAPAN_YARD'] / data['total_sum']['FINISH']) * 100).toFixed(1)}
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
