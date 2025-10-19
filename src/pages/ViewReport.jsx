import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Download, Share2 } from 'lucide-react'

const ViewReport = () => {
  // Sample report data
  const report = {
    type: 'Blood Test Report',
    date: '2024-01-15',
    parameters: [
      { name: 'Hemoglobin', value: '14.2 g/dL', normalRange: '13.0-17.0', status: 'normal' },
      { name: 'WBC Count', value: '7,500 cells/μL', normalRange: '4,500-11,000', status: 'normal' },
      { name: 'Blood Sugar', value: '150 mg/dL', normalRange: '70-100', status: 'high' },
      { name: 'Cholesterol', value: '210 mg/dL', normalRange: '<200', status: 'high' },
    ],
    aiExplanation: 'Your blood test shows elevated sugar and cholesterol levels. This could indicate pre-diabetic condition and high cholesterol. Consider consulting with your doctor for dietary changes and follow-up tests.'
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
            <Link to="/timeline" className="text-gray-600 hover:text-green-500">Timeline</Link>
            <Link to="/upload" className="text-gray-600 hover:text-green-500">Upload</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          {/* Report Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{report.type}</h2>
              <p className="text-gray-600">Date: {report.date}</p>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Report Parameters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Test Results</h3>
            <div className="space-y-3">
              {report.parameters.map((param, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{param.name}</p>
                    <p className="text-sm text-gray-600">Normal: {param.normalRange}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      param.status === 'normal' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {param.value}
                    </p>
                    <p className={`text-sm font-medium ${
                      param.status === 'normal' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {param.status === 'normal' ? 'Normal' : 'Abnormal'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Explanation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">AI Analysis</h3>
            <p className="text-gray-700 leading-relaxed">{report.aiExplanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewReport