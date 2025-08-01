'use client'

import { WebsiteBuilder } from '@/components/WebsiteBuilder'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <WebsiteBuilder />
    </main>
  )
} 