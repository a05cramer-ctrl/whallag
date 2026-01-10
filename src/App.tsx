import { useState, useEffect } from 'react'
import './App.css'
import whaleImage from './4.2 (5).png'

const subheadlines = [
  'Faith. Finance. Whale.',
  'In whale we trust.',
  'habibi Whallah'
]

function App() {
  const [subheadline, setSubheadline] = useState(subheadlines[0])
  const [copied, setCopied] = useState(false)
  const contractAddress = 'bQwB8QHsmWkUWg15ACQof4Eys7m9WHXwGGNPq1abonk'

  useEffect(() => {
    // Rotate subheadline randomly
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * subheadlines.length)
      setSubheadline(subheadlines[randomIndex])
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="App">
      {/* Islamic Background Elements */}
      <div className="islamic-background">
        <div className="crescent-moon">🌙</div>
        <div className="star star-1">⭐</div>
        <div className="star star-2">⭐</div>
        <div className="star star-3">⭐</div>
        <div className="geometric-pattern pattern-1"></div>
        <div className="geometric-pattern pattern-2"></div>
        <div className="geometric-pattern pattern-3"></div>
      </div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="whale-container">
            <img src={whaleImage} alt="Whalleah Mascot" className="whale-image" />
          </div>
          <h1 className="hero-title">Whalleah</h1>
          <p className="hero-subheadline">{subheadline}</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Buy $WHALLEAH</button>
            <button className="cta-button secondary">Read the Holy Whale Paper</button>
          </div>
        </div>
        <div className="floating-coins">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="coin" style={{ '--delay': i * 0.5 + 's' } as React.CSSProperties}></div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            Whalleah is a memecoin based on belief.<br />
            Belief in whales.<br />
            Belief in markets.<br />
            Belief that this somehow pumps.
          </p>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="tokenomics">
        <div className="container">
          <h2 className="section-title">Whalleahnomics <span className="emoji">📿🐋</span></h2>
          <div className="tokenomics-grid">
            <div className="tokenomics-card">
              <h3>Total Supply</h3>
              <p className="tokenomics-value">1,000,000,000</p>
              <p className="tokenomics-label">$WHALLEAH</p>
            </div>
            <div className="tokenomics-card">
              <h3>Tax</h3>
              <p className="tokenomics-value">0%</p>
              <p className="tokenomics-label">(clean intentions)</p>
            </div>
            <div className="tokenomics-card">
              <h3>Liquidity</h3>
              <p className="tokenomics-value">Locked</p>
              <p className="tokenomics-label">(halal)</p>
            </div>
            <div className="tokenomics-card">
              <h3>Ownership</h3>
              <p className="tokenomics-value">Renounced</p>
              <p className="tokenomics-label">(inshallah)</p>
            </div>
          </div>
          <p className="tokenomics-caption">Tokenomics reviewed by the whale.</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <h2 className="section-title">The Path</h2>
          <div className="roadmap-phases">
            <div className="phase">
              <div className="phase-icon">🐋</div>
              <h3>Phase 1</h3>
              <p>Revelation</p>
            </div>
            <div className="phase">
              <div className="phase-icon">📈</div>
              <h3>Phase 2</h3>
              <p>Accumulation</p>
            </div>
            <div className="phase">
              <div className="phase-icon">✨</div>
              <h3>Phase 3</h3>
              <p>Conviction</p>
            </div>
            <div className="phase">
              <div className="phase-icon">📈</div>
              <h3>Phase 4</h3>
              <p>Ascension</p>
            </div>
            <div className="phase">
              <div className="phase-icon">🐋</div>
              <h3>Phase 5</h3>
              <p>Whale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-watermark">🐋</div>
        <div className="footer-content">
          <div className="contract-address">
            <p className="ca-label">CA:</p>
            <p 
              className={`ca-value ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
              title="Click to copy"
            >
              {copied ? 'Copied!' : contractAddress}
            </p>
          </div>
          <div className="social-icons">
            <a href="https://x.com/whalleah" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">𝕏</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
