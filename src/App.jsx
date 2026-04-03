import { useState, useEffect } from 'react'
import './App.css'
import AboutCode from './sections/AboutCode'
import SkillsCode from './sections/SkillsCode'
import ProjectsCode from './sections/ProjectsCode'
import ContactCode from './sections/ContactCode'

const FILES = [
  { id: 'about',    name: 'about.js',    lines: 35 },
  { id: 'skills',   name: 'skills.js',   lines: 37 },
  { id: 'projects', name: 'projects.js', lines: 73 },
  { id: 'contact',  name: 'contact.js',  lines: 31 },
]

const SECTIONS = { about: AboutCode, skills: SkillsCode, projects: ProjectsCode, contact: ContactCode }

export default function App() {
  const [theme, setTheme]         = useState('dark')
  const [active, setActive]       = useState('about')
  const [tabs, setTabs]           = useState(['about'])
  const [sidebar, setSidebar]     = useState(true)
  const [animKey, setAnimKey]     = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const openFile = (id) => {
    setActive(id)
    setAnimKey(k => k + 1)
    if (!tabs.includes(id)) setTabs(t => [...t, id])
  }

  const closeTab = (id, e) => {
    e.stopPropagation()
    const next = tabs.filter(t => t !== id)
    setTabs(next)
    if (active === id) {
      setActive(next[next.length - 1] ?? 'about')
      setAnimKey(k => k + 1)
    }
  }

  const ActiveSection = SECTIONS[active]
  const activeFile = FILES.find(f => f.id === active)

  return (
    <div className="app">

      {/* ── Title Bar ── */}
      <div className="titlebar">
        <div className="tbar-left">
          <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
        </div>
        <div className="tbar-center">
          <span className="tbar-logo">{'</>'}</span>
          <span className="tbar-title">anand-kashyap — portfolio</span>
        </div>
        <div className="tbar-right">
          <button
            className="theme-btn"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>
          <button
            className="sidebar-btn"
            onClick={() => setSidebar(s => !s)}
            title="Toggle sidebar"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ── Tab Bar ── */}
      <div className="tabbar">
        {tabs.map(tid => {
          const f = FILES.find(f => f.id === tid)
          return (
            <div
              key={tid}
              className={`tab ${active === tid ? 'tab-on' : ''}`}
              onClick={() => openFile(tid)}
            >
              <span className="tab-badge">JS</span>
              {f.name}
              <button className="tab-x" onClick={(e) => closeTab(tid, e)}>×</button>
            </div>
          )
        })}
        {/* Remaining closed files as ghost tabs */}
        {FILES.filter(f => !tabs.includes(f.id)).map(f => (
          <div key={f.id} className="tab tab-ghost" onClick={() => openFile(f.id)}>
            <span className="tab-badge">JS</span>
            {f.name}
          </div>
        ))}
      </div>

      <div className="shell">

        {/* ── Sidebar ── */}
        <aside className={`sidebar ${sidebar ? '' : 'sidebar-hidden'}`}>
          <div className="sb-head">EXPLORER</div>
          <div className="sb-tree">
            <div className="sb-folder">
              <span className="sb-arrow">▾</span>
              <span className="sb-folder-name">ANAND-KASHYAP</span>
            </div>
            <div className="sb-files">
              {FILES.map(f => (
                <div
                  key={f.id}
                  className={`sb-file ${active === f.id ? 'sb-file-on' : ''}`}
                  onClick={() => openFile(f.id)}
                >
                  <span className="sb-badge">JS</span>
                  {f.name}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar bottom info */}
          <div className="sb-info">
            <div className="sb-info-row">
              <span className="sb-info-label">roll</span>
              <span className="sb-info-val">2506050</span>
            </div>
            <div className="sb-info-row">
              <span className="sb-info-label">batch</span>
              <span className="sb-info-val">CSE '29</span>
            </div>
            <div className="sb-info-row">
              <span className="sb-info-label">college</span>
              <span className="sb-info-val">NIT Patna</span>
            </div>
          </div>
        </aside>

        {/* ── Editor ── */}
        <main className="editor">
          <div className="breadcrumb">
            <span className="bc-root">anand-kashyap</span>
            <span className="bc-sep"> › </span>
            <span className="bc-file">{activeFile?.name}</span>
          </div>
          <div className="code-area" key={animKey}>
            <ActiveSection />
          </div>
        </main>

      </div>

      {/* ── Status Bar ── */}
      <footer className="statusbar">
        <div className="sb-l">
          <span className="sb-item sb-branch">⎇ main</span>
          <span className="sb-item">0 errors · 0 warnings</span>
        </div>
        <div className="sb-r">
          <span className="sb-item">Ln {activeFile?.lines}, Col 1</span>
          <span className="sb-item">JavaScript</span>
          <span className="sb-item">UTF-8</span>
          <span className="sb-item sb-name">Anand Kashyap</span>
        </div>
      </footer>

    </div>
  )
}
