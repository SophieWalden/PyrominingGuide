import { useId } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { parseMinecraftText } from './minecraftText'

export function MinecraftTooltip({ children, content, place = 'top', className = '' }) {
  const tooltipId = useId().replaceAll(':', '')

  return (
    <>
      <span
        className={`minecraft-tooltip-trigger ${className}`}
        data-tooltip-id={tooltipId}
        data-tooltip-place={place}
        tabIndex="0"
      >
        {children}
      </span>
      <Tooltip id={tooltipId} className="minecraft-tooltip" opacity={1}>
        {parseMinecraftText(content)}
      </Tooltip>
    </>
  )
}

export function MinecraftPanel({ content, className = '' }) {
  return (
    <div className={`minecraft-panel ${className}`}>
      {parseMinecraftText(content)}
    </div>
  )
}
