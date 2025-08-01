'use client'

import { useState } from 'react'
import { Download, RefreshCw, Code, Eye } from 'lucide-react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

interface GeneratedWebsite {
  html: string
  css: string
  js: string
  prompt: string
  timestamp: number
}

interface ActionBarProps {
  website: GeneratedWebsite
  onRegenerate: () => void
  isGenerating: boolean
}

export function ActionBar({ website, onRegenerate, isGenerating }: ActionBarProps) {
  const [showCode, setShowCode] = useState(false)

  const downloadWebsite = async () => {
    const zip = new JSZip()
    
    // Create complete HTML file
    const completeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    ${website.html}
    <script src="script.js"></script>
</body>
</html>`

    zip.file('index.html', completeHTML)
    zip.file('styles.css', website.css)
    zip.file('script.js', website.js)
    zip.file('README.md', `# Generated Website

## Prompt
${website.prompt}

## Generated on
${new Date(website.timestamp).toLocaleString()}

## Files
- index.html - Main HTML file
- styles.css - CSS styles
- script.js - JavaScript functionality

## Usage
Open index.html in your web browser to view the website.
`)

    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, `website-${Date.now()}.zip`)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
      
      <div className="space-y-3">
        <button
          onClick={downloadWebsite}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>Download Website</span>
        </button>
        
        <button
          onClick={onRegenerate}
          disabled={isGenerating}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
          <span>{isGenerating ? 'Regenerating...' : 'Regenerate'}</span>
        </button>
        
        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
        >
          {showCode ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
          <span>{showCode ? 'Hide Code' : 'View Code'}</span>
        </button>
      </div>

      {showCode && (
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">HTML</label>
            <textarea
              value={website.html}
              readOnly
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CSS</label>
            <textarea
              value={website.css}
              readOnly
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono resize-none"
            />
          </div>
          {website.js && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">JavaScript</label>
              <textarea
                value={website.js}
                readOnly
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono resize-none"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
} 