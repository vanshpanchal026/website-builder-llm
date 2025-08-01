'use client'

import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

interface PromptInputProps {
  onGenerate: (prompt: string) => void
  isGenerating: boolean
}

export function PromptInput({ onGenerate, isGenerating }: PromptInputProps) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Describe Your Website
      </h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h3 className="font-medium text-blue-900 mb-2">💡 Pro Tip: Be Specific for Better Results</h3>
        <p className="text-blue-800 text-sm">
          Include specific names, prices, services, and details in your prompt. The AI will generate realistic content that matches your description instead of generic placeholders.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Website Description
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Create a website for 'Aurora Cafe', a cozy neighborhood coffee shop. Include a hero with their signature latte, menu with specific items and prices (Espresso $3, Cappuccino $4.50, Avocado Toast $8), about section mentioning owner Maria's 10 years of experience, location at 456 Oak Street, and contact form. Use warm browns and creams with rustic design elements."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isGenerating}
          />
        </div>
        <button
          type="submit"
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Generate Website</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
} 