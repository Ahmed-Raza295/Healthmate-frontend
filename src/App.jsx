import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UploadReport from './pages/UploadReport'
import ViewReport from './pages/ViewReport'
import Timeline from './pages/Timeline'
import AddVitals from './pages/AddVitals'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadReport />} />
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/add-vitals" element={<AddVitals />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
