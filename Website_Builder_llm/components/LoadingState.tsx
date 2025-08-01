'use client'

import { Loader2, Code, Palette, Wand2 } from 'lucide-react'

export function LoadingState() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Generating Your Website
        </h3>
        <p className="text-gray-600 mb-6">
          AI is crafting your perfect website...
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Wand2 className="h-4 w-4 text-purple-500" />
            <span>Analyzing your requirements</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Code className="h-4 w-4 text-green-500" />
            <span>Writing HTML structure</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Palette className="h-4 w-4 text-blue-500" />
            <span>Designing styles and layout</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
} 