'use client'

import { useState, useEffect, useRef } from 'react'
import { Monitor, Smartphone, Tablet } from 'lucide-react'

interface GeneratedWebsite {
  html: string
  css: string
  js: string
  prompt: string
  timestamp: number
}

interface WebsitePreviewProps {
  website: GeneratedWebsite
}

type ViewportSize = 'desktop' | 'tablet' | 'mobile'

export function WebsitePreview({ website }: WebsitePreviewProps) {
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const getViewportClasses = () => {
    switch (viewportSize) {
      case 'mobile':
        return 'w-80 h-96'
      case 'tablet':
        return 'w-96 h-96'
      default:
        return 'w-full h-96'
    }
  }

  const generateHTML = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <style>
        ${website.css}
    </style>
</head>
<body>
    ${website.html}
    <script>
        ${website.js}
    </script>
</body>
</html>
    `
  }

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(generateHTML())
        doc.close()
      }
    }
  }, [website])

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Preview Controls */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-medium text-gray-900">Preview</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewportSize('desktop')}
            className={`p-2 rounded-lg ${
              viewportSize === 'desktop'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            title="Desktop View"
          >
            <Monitor className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewportSize('tablet')}
            className={`p-2 rounded-lg ${
              viewportSize === 'tablet'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            title="Tablet View"
          >
            <Tablet className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewportSize('mobile')}
            className={`p-2 rounded-lg ${
              viewportSize === 'mobile'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            title="Mobile View"
          >
            <Smartphone className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Preview Frame */}
      <div className="p-4">
        <div className={`mx-auto transition-all duration-300 ${getViewportClasses()}`}>
          <iframe
            ref={iframeRef}
            className="w-full h-full border rounded-lg shadow-sm"
            title="Website Preview"
            sandbox="allow-scripts allow-forms"
          />
        </div>
      </div>
    </div>
  )
} 