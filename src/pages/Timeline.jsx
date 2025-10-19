import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, FileText, Activity, Calendar } from 'lucide-react'

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: 'report',
      title: 'Blood Test Report',
      date: '2024-01-15',
      description: 'Complete blood count and lipid profile',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'vital',
      title: 'Blood Pressure',
      date: '2024-01-14',
      description: '120/80 mmHg',
      status: 'Normal'
    },
    {
      id: 3,
      type: 'vital',
      title: 'Blood Sugar',
      date: '2024-01-14',
      description: '98 mg/dL',
      status: 'Normal'
    },
    {
      id: 4,
      type: 'report',
      title: 'MRI Scan',
      date: '2024-01-10',
      description: 'Brain MRI scan',
      status: 'Pending Review'
    },
  ]

  const getIcon = (type) => {
    return type === 'report' ? FileText : Activity
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Normal': return 'text-green-600 bg-green-100'
      case 'Completed': return 'text-blue-600 bg-blue-100'
      case 'Pending Review': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

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
            <Link to="/dashboard" className="text-gray-600 hover:text-green-500">Dashboard</Link>
            <Link to="/timeline" className="text-green-500 font-medium">Timeline</Link>
            <Link to="/upload" className="text-gray-600 hover:text-green-500">Upload</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Health Timeline</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>All Records</span>
            </div>
          </div>

          <div className="space-y-4">
            {timelineData.map((item, index) => {
              const Icon = getIcon(item.type)
              return (
                <div key={item.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg ${
                    item.type === 'report' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <p className="text-gray-500 text-xs mt-2">{item.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline