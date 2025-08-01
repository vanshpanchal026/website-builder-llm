'use client'

import { useState } from 'react'
import { PromptInput } from './PromptInput'
import { WebsitePreview } from './WebsitePreview'
import { ExamplePrompts } from './ExamplePrompts'
import { LoadingState } from './LoadingState'
import { ActionBar } from './ActionBar'
import toast from 'react-hot-toast'

interface GeneratedWebsite {
  html: string
  css: string
  js: string
  prompt: string
  timestamp: number
}

export function WebsiteBuilder() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentWebsite, setCurrentWebsite] = useState<GeneratedWebsite | null>(null)
  const [prompt, setPrompt] = useState('')

  const generateWebsite = async (userPrompt: string) => {
    if (!userPrompt.trim()) {
      toast.error('Please enter a prompt to generate a website')
      return
    }

    setIsGenerating(true)
    setPrompt(userPrompt)

    try {
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userPrompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate website')
      }

      const data = await response.json()
      
      const website: GeneratedWebsite = {
        html: data.html,
        css: data.css,
        js: data.js || '',
        prompt: userPrompt,
        timestamp: Date.now()
      }

      setCurrentWebsite(website)
      toast.success('Website generated successfully!')
    } catch (error) {
      console.error('Error generating website:', error)
      toast.error('Failed to generate website. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const regenerateWebsite = () => {
    if (prompt) {
      generateWebsite(prompt)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Input and Controls */}
        <div className="space-y-6">
          <PromptInput 
            onGenerate={generateWebsite}
            isGenerating={isGenerating}
          />
          
          <ExamplePrompts onSelectPrompt={generateWebsite} />
          
          {currentWebsite && (
            <ActionBar 
              website={currentWebsite}
              onRegenerate={regenerateWebsite}
              isGenerating={isGenerating}
            />
          )}
        </div>

        {/* Right Panel - Preview */}
        <div className="lg:sticky lg:top-8">
          {isGenerating ? (
            <LoadingState />
          ) : currentWebsite ? (
            <WebsitePreview website={currentWebsite} />
          ) : (
            <div className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 p-12 text-center">
              <div className="text-gray-400 text-lg">
                Enter a prompt to generate your website
              </div>
              <div className="text-gray-500 text-sm mt-2">
                Your website preview will appear here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 