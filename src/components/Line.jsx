export const L = ({ n, children }) => (
  <div className="code-line">
    <span className="line-num">{n}</span>
    <span className="line-content">{children ?? '\u00a0'}</span>
  </div>
)

// Syntax token helpers — use these inside L children
export const kw   = (t) => <span className="kw">{t}</span>
export const fn   = (t) => <span className="fn">{t}</span>
export const str  = (t) => <span className="str">"{t}"</span>
export const cm   = (t) => <span className="cm">{t}</span>
export const prop = (t) => <span className="prop">{t}</span>
export const num  = (t) => <span className="num">{t}</span>
export const op   = (t) => <span className="op">{t}</span>
export const pt   = (t) => <span className="punct">{t}</span>
export const pl   = (t) => <span className="plain">{t}</span>
export const lnk  = (t, href) => (
  <a className="str url" href={href} target="_blank" rel="noreferrer">"{t}"</a>
)
