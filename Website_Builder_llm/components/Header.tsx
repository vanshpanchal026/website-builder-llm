'use client'

import { Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Website Builder LLM</h1>
            <p className="text-gray-600 mt-1">Create stunning websites with AI-powered prompts</p>
          </div>
        </div>
      </div>
    </header>
  )
} 