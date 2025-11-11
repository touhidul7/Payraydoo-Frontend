import React from 'react'

export default function page() {
  return (
    <div>
      {/* capability section */}
      <div className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl px-6 mx-auto flex-col justify-items-center">
          {/* top side */}
          <div className="flex gap-32 justify-center items-center">
            {/* top left */}
            <div className='w-[60%]'>
              <p className="text-indigo-600 font-semibold mb-2">How Payraydoo Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Smarter Workflows.<br />Tangible Results.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From invoice capture to reconciliation, Payraydoo transforms complex AP & AR processes
                into automated, accurate, and scalable flows — with zero guesswork.
              </p>
            </div>
            {/* top right image */}
            <div className="w-[40%] flex justify-center">
              <div className="w-full h-80 md:h-[400px] bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500">
                Replace with Image
              </div>
            </div>
          </div>
          {/* bottom side, core capabilities */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Core Capabilities:</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {/* capture and validate */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-orange-500 text-xl">📄</span>
                  <h4 className="font-semibold text-gray-900 text-sm">Capture & Validate</h4>
                </div>
                <p className="text-sm text-gray-600">
                  AI-powered OCR extracts data from any invoice source and performs 2- or 3-way matching
                  to eliminate manual errors.
                </p>
              </div>

              {/* automate and act */}
              <div className="border-l border-gray-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-cyan-500 text-xl">⚙️</span>
                  <h4 className="font-semibold text-gray-900 text-sm">Automate & Act</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Accelerate workflows — from approvals to collections — with smart routing, dunning
                  schedules, and dispute resolution.
                </p>
              </div>

              {/* sync and track */}
              <div className="border-l border-gray-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-indigo-500 text-xl">📊</span>
                  <h4 className="font-semibold text-gray-900 text-sm">Sync & Track</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Get real-time visibility with dynamic dashboards and seamless ERP integrations like
                  SAP, QuickBooks, and more.
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
