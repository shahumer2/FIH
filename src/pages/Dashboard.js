import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Security Status Card */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Security Status</h3>
              <p className="text-green-600">All Systems Active</p>
            </div>
            
            {/* Cameras Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Cameras Online</h3>
              <p className="text-blue-600">4/4 Cameras Active</p>
            </div>
            
            {/* Alerts Card */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Recent Alerts</h3>
              <p className="text-yellow-600">No Alerts in Last 24h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;