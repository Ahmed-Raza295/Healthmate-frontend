import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, Upload, Plus, Activity, 
  FileText, Calendar, ArrowRight 
} from 'lucide-react'

const Dashboard = () => {
  const recentReports = [
    { id: 1, type: 'Blood Test', date: '2024-01-15', status: 'Normal' },
    { id: 2, type: 'MRI Scan', date: '2024-01-10', status: 'Review Needed' },
  ]

  const recentVitals = [
    { id: 1, type: 'BP', value: '120/80', date: '2024-01-16' },
    { id: 2, type: 'Sugar', value: '98 mg/dL', date: '2024-01-16' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-green-500 mr-2" />
            <h1 className="text-xl font-bold text-gray-800">HealthMate</h1>
          </div>
          <nav className="flex space-x-6">
            <Link to="/dashboard" className="text-green-500 font-medium">Dashboard</Link>
            <Link to="/timeline" className="text-gray-600 hover:text-green-500">Timeline</Link>
            <Link to="/upload" className="text-gray-600 hover:text-green-500">Upload</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last BP</p>
                <p className="text-2xl font-bold text-gray-800">120/80</p>
              </div>
              <Activity className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-800">2 Tests</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link to="/upload" className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Upload Report</h3>
                <p className="text-sm text-gray-600 mt-1">Add new medical reports</p>
              </div>
              <Upload className="h-6 w-6 text-green-500" />
            </div>
          </Link>

          <Link to="/add-vitals" className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Add Vitals</h3>
                <p className="text-sm text-gray-600 mt-1">Record BP, Sugar, etc.</p>
              </div>
              <Plus className="h-6 w-6 text-blue-500" />
            </div>
          </Link>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Reports</h2>
            <Link to="/timeline" className="text-green-500 text-sm flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentReports.map(report => (
              <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{report.type}</p>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  report.status === 'Normal' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Vitals */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Vitals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentVitals.map(vital => (
              <div key={vital.id} className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-gray-800">{vital.value}</p>
                <p className="text-sm text-gray-600">{vital.type}</p>
                <p className="text-xs text-gray-500">{vital.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard