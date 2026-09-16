import React from 'react'

const COLOR_CODES = {
  '0': '#111111',
  '1': '#2f6bff',
  '2': '#3bd16f',
  '3': '#31c7c2',
  '4': '#e34848',
  '5': '#bd5bda',
  '6': '#f5a623',
  '7': '#ababab',
  '8': '#555555',
  '9': '#6d9dff',
  a: '#70e000',
  b: '#55ffff',
  c: '#ff5555',
  d: '#ff55ff',
  e: '#ffff55',
  f: '#d6d6d6',
}

const FORMAT_CODES = {
  l: { fontWeight: 700 },
  m: { textDecorationLine: 'line-through' },
  n: { textDecorationLine: 'underline' },
  o: { fontStyle: 'italic' },
}

function getShadowColor(color) {
  const red = Math.round(Number.parseInt(color.slice(1, 3), 16) * 0.25)
  const green = Math.round(Number.parseInt(color.slice(3, 5), 16) * 0.25)
  const blue = Math.round(Number.parseInt(color.slice(5, 7), 16) * 0.25)
  return `rgb(${red}, ${green}, ${blue})`
}

export function parseMinecraftText(value) {
  if (typeof value !== 'string') return value

  const parts = value.split(/([&§][0-9a-fklmnor])/gi)
  const segments = []
  let style = { color: COLOR_CODES.f, textShadow: `1px 1px ${getShadowColor(COLOR_CODES.f)}` }

  parts.forEach((part, index) => {
    if (!part) return

    if (/^[&§][0-9a-fklmnor]$/i.test(part)) {
      const code = part[1].toLowerCase()
      if (code === 'r') {
        style = { color: COLOR_CODES.f, textShadow: `1px 1px ${getShadowColor(COLOR_CODES.f)}` }
      } else if (COLOR_CODES[code]) {
        const color = COLOR_CODES[code]
        style = {
          ...style,
          color,
          textShadow: `1px 1px ${getShadowColor(color)}`,
        }
      } else if (FORMAT_CODES[code]) {
        style = { ...style, ...FORMAT_CODES[code] }
      }
      return
    }

    segments.push(
      React.createElement('span', { key: `${part}-${index}`, style }, part),
    )
  })

  return segments
}
