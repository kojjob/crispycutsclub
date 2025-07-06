'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface HealthCheck {
  status: string
  database: boolean
  environment: string
  configuration: {
    hasDatabase: boolean
    hasAuthSecret: boolean
    hasAuthUrl: boolean
    authUrl: string
  }
  vercel: {
    isVercel: boolean
    region: string
    env: string
  }
  missingVars: string[]
  message: string
}

export default function SetupPage() {
  const [health, setHealth] = useState<HealthCheck | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setHealth(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-crispy-bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crispy-gold mx-auto"></div>
          <p className="mt-4 text-crispy-text-secondary">Checking system status...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-crispy-bg-primary flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-8 bg-crispy-error/10 border border-crispy-error">
          <h1 className="text-2xl font-bold text-crispy-error mb-4">Error</h1>
          <p className="text-crispy-text-primary">{error}</p>
        </div>
      </div>
    )
  }

  const isHealthy = health?.status === 'healthy'

  return (
    <div className="min-h-screen bg-crispy-bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-crispy-text-primary mb-4">
            System Setup Check
          </h1>
          <p className="text-crispy-text-secondary">
            Verify your Crispy Cuts Club deployment configuration
          </p>
        </div>

        {/* Overall Status */}
        <div className={`mb-8 p-6 border ${isHealthy ? 'bg-crispy-success/10 border-crispy-success' : 'bg-crispy-error/10 border-crispy-error'}`}>
          <h2 className={`text-2xl font-bold mb-2 ${isHealthy ? 'text-crispy-success' : 'text-crispy-error'}`}>
            Status: {health?.status || 'Unknown'}
          </h2>
          <p className="text-crispy-text-primary">{health?.message}</p>
        </div>

        {/* Configuration Checks */}
        <div className="space-y-6">
          <div className="border border-crispy-border-primary p-6">
            <h3 className="text-xl font-semibold text-crispy-text-primary mb-4">Database</h3>
            <div className="space-y-2">
              <StatusItem 
                label="Connection" 
                status={health?.database || false} 
                value={health?.database ? 'Connected' : 'Not connected'}
              />
              <StatusItem 
                label="DATABASE_URL" 
                status={health?.configuration.hasDatabase || false} 
                value={health?.configuration.hasDatabase ? 'Set' : 'Missing'}
              />
            </div>
          </div>

          <div className="border border-crispy-border-primary p-6">
            <h3 className="text-xl font-semibold text-crispy-text-primary mb-4">Authentication</h3>
            <div className="space-y-2">
              <StatusItem 
                label="NEXTAUTH_SECRET" 
                status={health?.configuration.hasAuthSecret || false} 
                value={health?.configuration.hasAuthSecret ? 'Set' : 'Missing'}
              />
              <StatusItem 
                label="NEXTAUTH_URL" 
                status={health?.configuration.hasAuthUrl || false} 
                value={health?.configuration.authUrl || 'Not set'}
              />
            </div>
          </div>

          <div className="border border-crispy-border-primary p-6">
            <h3 className="text-xl font-semibold text-crispy-text-primary mb-4">Environment</h3>
            <div className="space-y-2">
              <StatusItem 
                label="Environment" 
                status={true} 
                value={health?.environment || 'Unknown'}
              />
              <StatusItem 
                label="Vercel Deployment" 
                status={health?.vercel.isVercel || false} 
                value={health?.vercel.isVercel ? `Yes (${health.vercel.env})` : 'No'}
              />
              {health?.vercel.isVercel && (
                <StatusItem 
                  label="Region" 
                  status={true} 
                  value={health?.vercel.region || 'Unknown'}
                />
              )}
            </div>
          </div>

          {health?.missingVars && health.missingVars.length > 0 && (
            <div className="border border-crispy-error p-6 bg-crispy-error/10">
              <h3 className="text-xl font-semibold text-crispy-error mb-4">Missing Variables</h3>
              <ul className="list-disc list-inside space-y-1">
                {health.missingVars.map((varName) => (
                  <li key={varName} className="text-crispy-text-primary">
                    <code className="bg-crispy-bg-secondary px-2 py-1">{varName}</code>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/VERCEL_SETUP.md" 
            className="inline-block bg-crispy-gold text-crispy-black px-6 py-3 font-semibold hover:bg-crispy-gold/90 transition-colors mr-4"
          >
            View Setup Guide
          </Link>
          <Link 
            href="/" 
            className="inline-block border border-crispy-text-primary text-crispy-text-primary px-6 py-3 font-semibold hover:bg-crispy-text-primary hover:text-crispy-bg-primary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function StatusItem({ label, status, value }: { label: string; status: boolean; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-crispy-text-secondary">{label}:</span>
      <span className={`font-semibold ${status ? 'text-crispy-success' : 'text-crispy-error'}`}>
        {value}
      </span>
    </div>
  )
}