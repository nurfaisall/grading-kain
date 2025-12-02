# Fabric Grading Dashboard - Multi-Page Application

Dashboard monitoring kualitas kain dengan sistem multi-halaman menggunakan React Router.

## 🚀 Fitur Utama

- **Multi-Page Navigation**: 5 halaman utama dengan navigasi sidebar
- **Real-time Monitoring**: Dashboard dengan data produksi real-time
- **Analytics**: Analisis mendalam tentang cacat dan kualitas
- **Production Tracking**: Monitoring jalur produksi
- **Reports**: Sistem pelaporan dengan download
- **Settings**: Konfigurasi aplikasi

## 📁 Struktur Aplikasi

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigasi sidebar dengan animasi
│   ├── TopBar.jsx           # Top bar dengan search & waktu
│   ├── Header.jsx           # Header komponen (legacy)
│   ├── StatCard.jsx         # Kartu statistik
│   ├── DefectTrendChart.jsx # Chart trend cacat
│   ├── DefectTypeChart.jsx  # Chart jenis cacat
│   ├── GradingDistribution.jsx # Chart distribusi grading
│   └── ProductivityChart.jsx   # Chart produktivitas
├── pages/
│   ├── Dashboard.jsx        # Halaman utama dashboard
│   ├── Analytics.jsx        # Halaman analisis
│   ├── Production.jsx       # Halaman produksi
│   ├── Reports.jsx          # Halaman laporan
│   └── Settings.jsx         # Halaman pengaturan
├── App.jsx                  # Router utama
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## 🎨 Halaman-Halaman

### 1. Dashboard (/)
- Overview statistik produksi
- 4 kartu statistik utama
- 4 chart interaktif (Trend, Distribution, Defect Types, Productivity)

### 2. Analytics (/analytics)
- Insight cards dengan metrik penting
- Analisis mendalam jenis cacat
- Progress bars untuk distribusi cacat
- Chart trend dan jenis cacat

### 3. Production (/production)
- Status jalur produksi real-time
- Monitoring 4 production lines
- Chart produktivitas dan distribusi grading
- Statistik output dan efisiensi

### 4. Reports (/reports)
- Daftar laporan yang tersedia
- Filter berdasarkan tanggal dan tipe
- Download laporan
- Generate custom report

### 5. Settings (/settings)
- Profile settings
- Notifications preferences
- Security settings
- Appearance customization
- Data management

## 🛠️ Teknologi

- **React 18** - UI Framework
- **React Router DOM** - Routing
- **Framer Motion** - Animasi
- **TailwindCSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚦 Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Navigasi

Aplikasi menggunakan React Router dengan navigasi sidebar:
- Klik menu di sidebar untuk berpindah halaman
- Active state ditampilkan dengan highlight
- Smooth transitions menggunakan Framer Motion
- Top bar konsisten di semua halaman

## 📊 Data

Saat ini menggunakan sample data. Untuk integrasi dengan backend:
1. Buat API endpoints untuk setiap halaman
2. Replace sample data dengan fetch calls
3. Tambahkan loading states
4. Implement error handling

## 🎨 Desain

- **Glassmorphism**: Efek kaca transparan
- **Gradient**: Warna gradien blue-purple
- **Dark Theme**: Tema gelap modern
- **Animations**: Smooth transitions dengan Framer Motion
- **Responsive**: Mobile-friendly design

## 📝 Catatan

- Sidebar fixed di sisi kiri (width: 256px)
- Main content area: margin-left 256px
- Top bar sticky di atas konten
- Footer di bawah setiap halaman

## 🔄 Update Terakhir

- ✅ Implementasi React Router
- ✅ 5 halaman dengan konten unik
- ✅ Sidebar navigation dengan active state
- ✅ Top bar dengan search & time
- ✅ Smooth page transitions
- ✅ Responsive design

---

**Version**: 2.0.0  
**Last Updated**: 2 Desember 2024  
**Repository**: https://github.com/nurfaisall/grading-kain.git
