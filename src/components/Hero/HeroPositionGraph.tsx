import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  HERO_POSITION_AVYRO_SCORES,
  HERO_POSITION_AXIS_ANGLES,
  HERO_POSITION_AXES,
  HERO_POSITION_HINT,
  HERO_POSITION_MARKERS,
  type HeroPositionAxis,
  type HeroPositionMarker,
} from '../../constants/hero'
import './HeroPositionGraph.css'

const CX = 150
const CY = 132
const MAX_R = 96
const AVYRO_MARKER = HERO_POSITION_MARKERS.find((marker) => marker.isAvyro)!

function axisCoord(axisId: HeroPositionAxis['id'], distance: number) {
  const angle = (HERO_POSITION_AXIS_ANGLES[axisId] * Math.PI) / 180
  const radius = (distance / 100) * MAX_R
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  }
}

function avyroPolygon() {
  const scores = HERO_POSITION_AVYRO_SCORES
  return (['crm', 'ra', 'timesheets'] as const)
    .map((axisId) => {
      const { x, y } = axisCoord(axisId, scores[axisId])
      return `${x},${y}`
    })
    .join(' ')
}

function ringTriangle(scale: number) {
  return HERO_POSITION_AXES.map((axis) => {
    const { x, y } = axisCoord(axis.id, scale)
    return `${x},${y}`
  }).join(' ')
}

function labelOffset(axisId: HeroPositionAxis['id']) {
  return axisCoord(axisId, 118)
}

function HeroPositionGraph() {
  const prefersReducedMotion = useReducedMotion()
  const [activeId, setActiveId] = useState<string>('avyro')

  const activeMarker =
    HERO_POSITION_MARKERS.find((marker) => marker.id === activeId) ?? AVYRO_MARKER

  const axisMarkers = HERO_POSITION_MARKERS.filter(
    (marker) => marker.axis && marker.axisPosition,
  )

  const selectMarker = (marker: HeroPositionMarker) => {
    setActiveId((current) => (current === marker.id ? current : marker.id))
  }

  const resetToAvyro = () => {
    setActiveId((current) => (current === 'avyro' ? current : 'avyro'))
  }

  return (
    <div className="hero-position">
      <div
        className="hero-position__chart-wrap"
        onMouseLeave={resetToAvyro}
      >
        <svg
          className="hero-position__chart"
          viewBox="0 0 300 268"
          role="img"
          aria-label="Triangle chart showing Avyro versus leading AEC tools for CRM, time, and resource allocation"
        >
          <defs>
            <linearGradient id="hero-position-fill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#bfdbfe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="hero-position-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="45%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <radialGradient id="hero-position-avyro-dot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="45%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </radialGradient>
            <filter id="hero-position-shadow" x="-80%" y="-80%" width="260%" height="260%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8b5cf6" floodOpacity="0.35" />
            </filter>
          </defs>

          {[33, 66].map((scale) => (
            <polygon
              key={scale}
              points={ringTriangle(scale)}
              className="hero-position__ring"
            />
          ))}

          <polygon
            points={ringTriangle(100)}
            className="hero-position__ring hero-position__ring--outer"
            fill="none"
          />

          {HERO_POSITION_AXES.map((axis) => {
            const tip = axisCoord(axis.id, 100)
            return (
              <line
                key={axis.id}
                x1={CX}
                y1={CY}
                x2={tip.x}
                y2={tip.y}
                className="hero-position__axis"
              />
            )
          })}

          <motion.polygon
            points={avyroPolygon()}
            className="hero-position__area"
            fill="url(#hero-position-fill)"
            stroke="url(#hero-position-stroke)"
            strokeWidth="2"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {axisMarkers.map((marker) => {
            const { x, y } = axisCoord(marker.axis!, marker.axisPosition!)
            const isActive = activeId === marker.id

            return (
              <g
                key={marker.id}
                className="hero-position__marker-group"
                onMouseEnter={() => selectMarker(marker)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={10}
                  className="hero-position__hit"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  className={`hero-position__dot hero-position__dot--vendor${
                    isActive ? ' hero-position__dot--active' : ''
                  }`}
                />
                <title>{marker.name}</title>
              </g>
            )
          })}

          <g
            className="hero-position__marker-group hero-position__marker-group--avyro"
            onMouseEnter={() => selectMarker(AVYRO_MARKER)}
          >
            <circle cx={CX} cy={CY} r={18} className="hero-position__hit" />
            <circle
              cx={CX}
              cy={CY}
              r={16}
              className="hero-position__halo"
              pointerEvents="none"
            />
            <circle
              cx={CX}
              cy={CY}
              r={9}
              className={`hero-position__dot hero-position__dot--avyro${
                activeId === 'avyro' ? ' hero-position__dot--active' : ''
              }`}
              filter="url(#hero-position-shadow)"
              pointerEvents="none"
            />
            <title>Avyro</title>
          </g>

          {HERO_POSITION_AXES.map((axis) => {
            const pos = labelOffset(axis.id)
            const axisMarker = axisMarkers.find((marker) => marker.axis === axis.id)
            const isActive =
              activeId === axisMarker?.id

            return (
              <text
                key={axis.id}
                x={pos.x}
                y={pos.y}
                className={`hero-position__vertex${isActive ? ' hero-position__vertex--active' : ''}`}
                textAnchor="middle"
                dominantBaseline="middle"
                onMouseEnter={() => selectMarker(axisMarker ?? AVYRO_MARKER)}
              >
                {axis.label}
              </text>
            )
          })}
        </svg>
      </div>

      <div
        className={`hero-position__tooltip${
          activeMarker.isAvyro ? ' hero-position__tooltip--avyro' : ''
        }`}
        aria-live="polite"
      >
        <p className="hero-position__tooltip-category">{activeMarker.category}</p>
        <p className="hero-position__tooltip-name">{activeMarker.name}</p>
        <p className="hero-position__tooltip-detail">{activeMarker.detail}</p>
      </div>

      <p className="hero-position__hint">{HERO_POSITION_HINT}</p>
    </div>
  )
}

export default HeroPositionGraph
