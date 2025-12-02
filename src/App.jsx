import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Production from './pages/Production';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="p-4 md:p-8">
            <div className="max-w-[1600px] mx-auto">
              {/* Top Bar */}
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/production" element={<Production />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>

              {/* Footer */}
              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 text-center text-slate-500 text-sm"
              >
                <p>© 2024 Fabric Grading Dashboard - Quality Control System</p>
              </motion.footer>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
