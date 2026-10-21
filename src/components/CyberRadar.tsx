import { useEffect, useRef, useState } from 'react'
import { Shield, Target, AlertTriangle, CheckCircle, Radio } from 'lucide-react'

interface RadarNode {
  id: string
  label: string
  type: 'resolved' | 'active' | 'defense' | 'research'
  x: number // -100 to 100 relative to center
  y: number // -100 to 100 relative to center
  category: string
  details: string
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO'
}

const radarNodes: RadarNode[] = [
  {
    id: 'sarthibus',
    label: 'SarthiBus API',
    type: 'resolved',
    x: -45,
    y: -35,
    category: 'Vulnerability Research',
    details: 'Discovered & responsibly disclosed financial logic tampering flaw. Certificate awarded.',
    severity: 'CRITICAL',
  },
  {
    id: 'vapt-ops',
    label: 'Cyber Octet VAPT',
    type: 'active',
    x: 55,
    y: -25,
    category: 'Offensive Security',
    details: 'Live vulnerability assessments, OWASP Top 10 penetration testing & remediation.',
    severity: 'HIGH',
  },
  {
    id: 'logify-core',
    label: 'LOGify Anomaly Core',
    type: 'research',
    x: 35,
    y: 50,
    category: 'Security Tooling',
    details: 'Automated divergence detection in system logs & real-time telemetry pipelines.',
    severity: 'MEDIUM',
  },
  {
    id: 'ctf-cluster',
    label: 'National CTF Grid',
    type: 'defense',
    x: -60,
    y: 40,
    category: 'Competitions',
    details: 'Winner at Cyber Shadez 26 (Bug Bounty); 14th place at ISEA-ISAP IIT Madras (1613 pts).',
    severity: 'HIGH',
  },
  {
    id: 'thm-sensor',
    label: 'TryHackMe Rank #Top 3%',
    type: 'defense',
    x: 0,
    y: -65,
    category: 'Global Recon',
    details: 'Continuous offensive labs, network pivoting, privilege escalation, Windows forensics.',
    severity: 'INFO',
  },
]

export default function CyberRadar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [selectedNode, setSelectedNode] = useState<RadarNode>(radarNodes[0])
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [sweepAngle, setSweepAngle] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let angle = 0

    // High DPI Canvas Scaling
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) - 24

      ctx.clearRect(0, 0, width, height)

      // Draw subtle grid crosshairs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(centerX - radius, centerY)
      ctx.lineTo(centerX + radius, centerY)
      ctx.moveTo(centerX, centerY - radius)
      ctx.lineTo(centerX, centerY + radius)
      ctx.stroke()

      // Diagonal crosshairs
      ctx.beginPath()
      const diag = radius * 0.707
      ctx.moveTo(centerX - diag, centerY - diag)
      ctx.lineTo(centerX + diag, centerY + diag)
      ctx.moveTo(centerX - diag, centerY + diag)
      ctx.lineTo(centerX + diag, centerY - diag)
      ctx.stroke()

      // Concentric range circles
      const rings = [0.25, 0.5, 0.75, 1.0]
      rings.forEach((r, idx) => {
        ctx.strokeStyle = idx === 3 ? 'rgba(0, 245, 155, 0.25)' : 'rgba(255, 255, 255, 0.07)'
        ctx.lineWidth = 1
        ctx.setLineDash(idx === 3 ? [4, 4] : [])
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * r, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])

        // Range markers
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.font = '9px "JetBrains Mono", monospace'
        ctx.fillText(`${Math.round(r * 100)}m`, centerX + 4, centerY - radius * r + 11)
      })

      // Rotating Radar Sweep Beam
      angle = (angle + 0.02) % (Math.PI * 2)
      setSweepAngle(angle)

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      )
      gradient.addColorStop(0, 'rgba(0, 245, 155, 0.15)')
      gradient.addColorStop(1, 'rgba(0, 245, 155, 0.0)')

      ctx.save()
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, angle - 0.45, angle)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // Sweep leading edge
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      )
      ctx.strokeStyle = 'rgba(0, 245, 155, 0.8)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()

      // Render Nodes on Radar
      radarNodes.forEach((node) => {
        const nx = centerX + (node.x / 100) * radius
        const ny = centerY + (node.y / 100) * radius

        const isHovered = hoveredNode === node.id
        const isSelected = selectedNode?.id === node.id

        // Node color by severity/type
        let nodeColor = '#00f59b' // emerald
        if (node.severity === 'CRITICAL') nodeColor = '#ff3366'
        else if (node.severity === 'HIGH') nodeColor = '#ffb020'
        else if (node.severity === 'MEDIUM') nodeColor = '#00f59b'
        else nodeColor = '#60a5fa'

        // Pulse wave when sweep hits or always
        const nodeAngle = Math.atan2(ny - centerY, nx - centerX)
        const normalizedAngle = (nodeAngle + Math.PI * 2) % (Math.PI * 2)
        const angleDiff = Math.abs(normalizedAngle - angle)
        const isHit = angleDiff < 0.25 || angleDiff > Math.PI * 2 - 0.25

        // Glowing outer halo
        if (isHit || isSelected || isHovered) {
          ctx.beginPath()
          ctx.arc(nx, ny, isSelected ? 12 : 8, 0, Math.PI * 2)
          ctx.strokeStyle = nodeColor
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Inner solid beacon
        ctx.beginPath()
        ctx.arc(nx, ny, isSelected ? 5 : 3.5, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor
        ctx.fill()

        // Label
        ctx.fillStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.65)'
        ctx.font = `${isSelected ? '600' : '400'} 10px "JetBrains Mono", monospace`
        ctx.fillText(node.label, nx + 8, ny - 6)

        // Category micro text
        if (isSelected || isHovered) {
          ctx.fillStyle = nodeColor
          ctx.font = '9px "JetBrains Mono", monospace'
          ctx.fillText(`[${node.severity}]`, nx + 8, ny + 7)
        }
      })

      // Center Core
      ctx.beginPath()
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#00f59b'
      ctx.fill()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [selectedNode, hoveredNode])

  // Handle clicking on canvas to select node
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 24

    radarNodes.forEach((node) => {
      const nx = centerX + (node.x / 100) * radius
      const ny = centerY + (node.y / 100) * radius
      const dist = Math.hypot(clickX - nx, clickY - ny)
      if (dist < 22) {
        setSelectedNode(node)
      }
    })
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 24

    let found = false
    radarNodes.forEach((node) => {
      const nx = centerX + (node.x / 100) * radius
      const ny = centerY + (node.y / 100) * radius
      const dist = Math.hypot(mouseX - nx, mouseY - ny)
      if (dist < 22) {
        setHoveredNode(node.id)
        found = true
      }
    })
    if (!found) setHoveredNode(null)
  }

  return (
    <div className="radar-motion-container">
      <div className="radar-header">
        <div className="radar-header-left">
          <span className="radar-live-beacon" />
          <span className="radar-title-tag">ATTACK_SURFACE_RADAR // LIVE_TELEMETRY</span>
        </div>
        <div className="radar-header-right">
          <span className="radar-stat-pill">SWEEP: ACTIVE</span>
          <span className="radar-stat-pill">MODE: OFFENSIVE</span>
        </div>
      </div>

      <div className="radar-body-grid">
        {/* Radar Scope */}
        <div className="radar-scope-wrapper">
          <canvas
            ref={canvasRef}
            className="radar-canvas"
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
            onMouseLeave={() => setHoveredNode(null)}
          />
          <div className="radar-scope-overlay-hud">
            <span className="hud-corner top-left">+</span>
            <span className="hud-corner top-right">+</span>
            <span className="hud-corner bottom-left">+</span>
            <span className="hud-corner bottom-right">+</span>
            <div className="hud-coords">
              <span>LAT: 23.0225° N</span>
              <span>LON: 72.5714° E</span>
              <span>BEARING: {Math.round((sweepAngle * 180) / Math.PI)}°</span>
            </div>
          </div>
        </div>

        {/* Selected Target Dossier */}
        <div className="radar-target-panel">
          <div className="target-panel-header">
            <div className="target-panel-label">TARGET TELEMETRY</div>
            <div
              className={`target-severity-badge severity-${selectedNode.severity.toLowerCase()}`}
            >
              {selectedNode.severity}
            </div>
          </div>

          <h4 className="target-panel-name">{selectedNode.label}</h4>
          <div className="target-panel-category">{selectedNode.category}</div>
          <p className="target-panel-details">{selectedNode.details}</p>

          <div className="target-metrics-list">
            <div className="metric-row">
              <span className="metric-key">STATUS:</span>
              <span className="metric-val status-verified">VERIFIED & REPORTED</span>
            </div>
            <div className="metric-row">
              <span className="metric-key">RESEARCHER:</span>
              <span className="metric-val">Dhruv Mulani</span>
            </div>
            <div className="metric-row">
              <span className="metric-key">DISCLOSURE:</span>
              <span className="metric-val">RESPONSIBLE // COORDINATED</span>
            </div>
          </div>

          <div className="target-selector-chips">
            <div className="selector-label">SELECT TELEMETRY VECTOR:</div>
            <div className="chips-row">
              {radarNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNode(n)}
                  className={`target-chip ${selectedNode.id === n.id ? 'active' : ''}`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
