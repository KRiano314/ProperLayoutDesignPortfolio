"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import "./LoadingScreen.css"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const [currentPhase, setCurrentPhase] = useState(0)

  // Move loadingPhases outside of component or memoize it to avoid dependency issues
  const loadingPhases = useMemo(
    () => [
      "INITIALIZING NEURAL NETWORK...",
      "LOADING CYBERNETIC MODULES...",
      "ESTABLISHING QUANTUM LINK...",
      "SYNCHRONIZING DATA STREAMS...",
      "ACTIVATING HOLOGRAPHIC INTERFACE...",
      "SYSTEM READY - WELCOME TO THE MATRIX",
    ],
    [],
  )

  // Memoize the onLoadingComplete callback to avoid unnecessary re-renders
  const handleLoadingComplete = useCallback(() => {
    if (onLoadingComplete) {
      onLoadingComplete()
    }
  }, [onLoadingComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => handleLoadingComplete(), 1000)
          return 100
        }
        return prev + 1
      })
    }, 20) // Changed from 50 to 20 (100 steps * 20ms = 2000ms = 2 seconds)

    return () => clearInterval(interval)
  }, [handleLoadingComplete])

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev < loadingPhases.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 450) // Changed from 800 to 300 for faster phase transitions

    return () => clearInterval(phaseInterval)
  }, [loadingPhases.length])

  useEffect(() => {
    const text = loadingPhases[currentPhase] || ""
    let index = 0
    setLoadingText("")

    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setLoadingText(text.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 12) // Changed from 50 to 25 for faster typing

    return () => clearInterval(typeInterval)
  }, [currentPhase, loadingPhases])

  return (
    <div className="loading-screen">
      {/* Background Effects */}
      <div className="loading-bg-effects">
        <div className="scan-lines"></div>
        <div className="grid-overlay"></div>
        <div className="particle-field">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i % 4}`}></div>
          ))}
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="loading-content">
        {/* Cyberpunk Logo/Icon */}
        <div className="loading-icon">
          <svg width="120" height="120" viewBox="0 0 120 120" className="cyber-logo">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="50%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#ffff00" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer Ring */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              className="logo-ring-outer"
              filter="url(#glow)"
            />

            {/* Inner Ring */}
            <circle
              cx="60"
              cy="60"
              r="35"
              fill="none"
              stroke="#00ffff"
              strokeWidth="1"
              className="logo-ring-inner"
              filter="url(#glow)"
            />

            {/* Center Hexagon */}
            <polygon
              points="60,25 85,40 85,65 60,80 35,65 35,40"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="2"
              className="logo-hexagon"
              filter="url(#glow)"
            />

            {/* Center Dot */}
            <circle cx="60" cy="60" r="8" fill="#ffff00" className="logo-center" filter="url(#glow)" />

            {/* Rotating Elements */}
            <g className="logo-rotating">
              <line x1="60" y1="10" x2="60" y2="25" stroke="#00ffff" strokeWidth="3" filter="url(#glow)" />
              <line x1="60" y1="95" x2="60" y2="110" stroke="#00ffff" strokeWidth="3" filter="url(#glow)" />
              <line x1="10" y1="60" x2="25" y2="60" stroke="#ff00ff" strokeWidth="3" filter="url(#glow)" />
              <line x1="95" y1="60" x2="110" y2="60" stroke="#ff00ff" strokeWidth="3" filter="url(#glow)" />
            </g>
          </svg>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <h1 className="loading-title">CYBERPUNK PORTFOLIO</h1>
          <div className="loading-subtitle">
            <span className="loading-phase">{loadingText}</span>
            <span className="cursor">|</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            <div className="progress-glow"></div>
          </div>
          <div className="progress-text">
            <span className="progress-percentage">{progress}%</span>
            <span className="progress-label">LOADING</span>
          </div>
        </div>

        {/* Data Stream Visualization */}
        <div className="data-streams">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`data-stream stream-${i}`}>
              <div className="stream-line"></div>
              <div className="stream-data">
                {[...Array(8)].map((_, j) => (
                  <span key={j} className="data-bit">
                    {Math.random() > 0.5 ? "1" : "0"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Circuit Pattern */}
        <svg className="circuit-pattern" width="100%" height="100%" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,0,0.3)" />
            </linearGradient>
          </defs>

          {/* Circuit Lines */}
          <path
            d="M0,100 L50,100 L70,80 L120,80 L140,100 L200,100 L220,120 L270,120 L290,100 L400,100"
            fill="none"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            className="circuit-line"
          />
          <path
            d="M0,150 L80,150 L100,130 L180,130 L200,150 L280,150 L300,170 L400,170"
            fill="none"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            className="circuit-line"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Circuit Nodes */}
          <circle cx="70" cy="80" r="4" fill="#00ffff" className="circuit-node" />
          <circle cx="140" cy="100" r="4" fill="#ff00ff" className="circuit-node" />
          <circle cx="220" cy="120" r="4" fill="#ffff00" className="circuit-node" />
          <circle cx="100" cy="130" r="4" fill="#00ffff" className="circuit-node" />
          <circle cx="300" cy="170" r="4" fill="#ff00ff" className="circuit-node" />
        </svg>
      </div>
    </div>
  )
}

export default LoadingScreen
        
