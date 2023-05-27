import { colors } from '@sunset-wind/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => {
    return (
      <div key={key}>
        <div
          style={{
            margin: '1rem 0',
            color: 'white',
            textTransform: 'capitalize',
          }}
        >
          {key}
        </div>
        {Object.entries(value).map(([key, color]) => {
          return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'monospace',
                  color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
                }}
              >
                <span>{key}</span>
                <span>{color}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  })
}
