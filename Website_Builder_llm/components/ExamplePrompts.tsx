'use client'

import { Lightbulb } from 'lucide-react'

interface ExamplePromptsProps {
  onSelectPrompt: (prompt: string) => void
}

const EXAMPLE_PROMPTS = [
  {
    title: "Portfolio Website",
    prompt: "Create a modern portfolio website for Sarah Chen, a UX/UI designer specializing in mobile app design. Include a hero section with her tagline 'Designing Digital Experiences That Matter', an about section mentioning her 5 years at tech companies, a project showcase featuring 3 mobile apps (FinanceFlow banking app, MoodTracker wellness app, and ShopSmart e-commerce app), skills in Figma and user research, and a contact form. Use a minimalist design with blue and white colors."
  },
  {
    title: "SaaS Landing Page",
    prompt: "Build a SaaS landing page for 'TaskMaster Pro', a team productivity and project management tool. Include a hero with the tagline 'Streamline Your Team's Workflow', features like real-time collaboration, automated reporting, and deadline tracking, pricing tiers (Starter $9/month, Professional $19/month, Enterprise $39/month), testimonials from companies like TechCorp and InnovateLabs, and call-to-action buttons. Use modern blue gradients and clean typography."
  },
  {
    title: "Restaurant Website",
    prompt: "Design a website for 'Bella Vista', an Italian restaurant in downtown. Include a hero with their signature pasta dish, menu sections for appetizers (Bruschetta $12, Calamari $15), main courses (Spaghetti Carbonara $18, Osso Buco $28), desserts (Tiramisu $8), an about section mentioning Chef Marco's 20 years of experience, location details for 123 Main Street, and reservation form. Use warm colors, elegant typography, and Italian-inspired design elements."
  },
  {
    title: "E-commerce Store",
    prompt: "Create a product page for 'UrbanStyle', a contemporary clothing brand, featuring their bestselling 'Classic Denim Jacket' for $89. Include high-quality product images, size options (XS-XXL), color variants (Indigo, Black, Light Wash), product description highlighting premium cotton denim and modern fit, customer reviews (4.8/5 stars), related products (Basic T-Shirt $25, Slim Jeans $65), and add to cart functionality. Use a clean, modern design with black and white colors."
  },
  {
    title: "Tech Blog",
    prompt: "Build a tech blog homepage for 'CodeInsights' featuring articles about web development and AI. Include a featured post 'The Future of React in 2024' by Alex Rodriguez, a grid of recent articles ('Building Scalable APIs', 'Machine Learning for Beginners', 'CSS Grid vs Flexbox'), author bio mentioning 8 years of full-stack development, categories (Frontend, Backend, AI/ML, DevOps), and newsletter signup. Use a clean, typography-focused design optimized for reading."
  },
  {
    title: "Marketing Agency",
    prompt: "Design a website for 'Digital Catalyst', a marketing agency specializing in social media and content marketing. Include a hero section with 'We Turn Brands Into Conversations', services grid (Social Media Management, Content Creation, Paid Advertising, Analytics), case studies showing 300% engagement increase for client 'FreshFood Co', team showcase featuring Marketing Director Emma Thompson and Creative Lead James Park, client logos, and contact section. Use bold colors and modern animations."
  }
]

export function ExamplePrompts({ onSelectPrompt }: ExamplePromptsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-500" />
        <h3 className="text-lg font-medium text-gray-900">Example Prompts</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {EXAMPLE_PROMPTS.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectPrompt(example.prompt)}
            className="text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <div className="font-medium text-gray-900 text-sm mb-1">
              {example.title}
            </div>
            <div className="text-gray-600 text-xs line-clamp-2">
              {example.prompt}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
} 