import '../styles/token-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue ? <th>Pixels</th> : null}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, token]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{token}</td>
            {hasRemValue ? (
              <td>{Number(token.replace('rem', '')) * 16}px</td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
