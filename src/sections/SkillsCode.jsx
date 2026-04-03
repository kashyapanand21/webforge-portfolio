import { L, kw, fn, str, cm, prop, op, pt, pl } from '../components/Line'

export default function SkillsCode() {
  return (
    <>
      <L n={1}>{cm('// ─── CORE LANGUAGES ──────────────────────────────────────────')}</L>
      <L n={2}>{kw('import ')} {pt('{ ')}<span className="fn">CPP</span>{pt(', ')}<span className="fn">Python</span>{pt(', ')}<span className="fn">JavaScript</span>{pt(' } ')}{kw('from ')} {str('@anand/languages')}{pt(';')}</L>
      <L n={3} />
      <L n={4}>{cm('// ─── FRONTEND ────────────────────────────────────────────────')}</L>
      <L n={5}>{kw('import ')} {pt('{ ')}<span className="fn">React</span>{pt(', ')}<span className="fn">Vite</span>{pt(', ')}<span className="fn">TailwindCSS</span>{pt(', ')}<span className="fn">GSAP</span>{pt(', ')}<span className="fn">WebAPIs</span>{pt(' } ')}{kw('from ')} {str('@anand/frontend')}{pt(';')}</L>
      <L n={6} />
      <L n={7}>{cm('// ─── BACKEND & INFRA ─────────────────────────────────────────')}</L>
      <L n={8}>{kw('import ')} {pt('{ ')}<span className="fn">NodeJS</span>{pt(', ')}<span className="fn">Docker</span>{pt(', ')}<span className="fn">Nginx</span>{pt(', ')}<span className="fn">MongoDB</span>{pt(', ')}<span className="fn">MinIO</span>{pt(' } ')}{kw('from ')} {str('@anand/backend')}{pt(';')}</L>
      <L n={9}>{kw('import ')} {pt('{ ')}<span className="fn">ElectronJS</span>{pt(' } ')}{kw('from ')} {str('@anand/desktop')}{pt(';')}</L>
      <L n={10} />
      <L n={11}>{cm('// ─── AI / ML ──────────────────────────────────────────────────')}</L>
      <L n={12}>{kw('import ')} {pt('{ ')}<span className="fn">TransformersJS</span>{pt(', ')}<span className="fn">NumPy</span>{pt(', ')}<span className="fn">SciKitLearn</span>{pt(' } ')}{kw('from ')} {str('@anand/ai_ml')}{pt(';')}</L>
      <L n={13}>{kw('import ')} {pt('{ ')}<span className="fn">NeuralNetworks</span>{pt(', ')}<span className="fn">MinimaxAlphaBeta</span>{pt(' } ')}{kw('from ')} {str('@anand/algorithms')}{pt(';')}</L>
      <L n={14} />
      <L n={15}>{cm('// ─── WEB3 ────────────────────────────────────────────────────')}</L>
      <L n={16}>{kw('import ')} {pt('{ ')}<span className="fn">Solidity</span>{pt(', ')}<span className="fn">Hardhat</span>{pt(', ')}<span className="fn">EthersJS</span>{pt(' } ')}{kw('from ')} {str('@anand/web3')}{pt(';')}</L>
      <L n={17} />
      <L n={18}>{cm('// ─── TOOLS ───────────────────────────────────────────────────')}</L>
      <L n={19}>{kw('import ')} {pt('{ ')}<span className="fn">Git</span>{pt(', ')}<span className="fn">GitHub</span>{pt(', ')}<span className="fn">VSCode</span>{pt(', ')}<span className="fn">Linux</span>{pt(' } ')}{kw('from ')} {str('@anand/tools')}{pt(';')}</L>
      <L n={20} />
      <L n={21}>{cm('// ─── DSA PROGRESS ───────────────────────────────────────────')}</L>
      <L n={22}>{kw('const ')} {pl('dsa ')} {op('= ')} {pt('{')}</L>
      <L n={23}>&nbsp;&nbsp;{prop('completed')}{pt(': ')}{pt('[')}</L>
      <L n={24}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Arrays & Strings')}{pt(', ')}{str('Binary Search')}{pt(', ')}{str('Stacks & Queues')}{pt(',')}</L>
      <L n={25}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Sliding Window')}{pt(', ')}{str('Two Pointers')}{pt(', ')}{str('Monotonic Queue')}{pt(',')}</L>
      <L n={26}>&nbsp;&nbsp;{pt('],')} </L>
      <L n={27}>&nbsp;&nbsp;{prop('next')}{pt(': ')}{pt('[')}{str('Doubly Linked List')}{pt(', ')}{str('Heap / Priority Queue')}{pt('],')} </L>
      <L n={28}>&nbsp;&nbsp;{prop('language')}{pt(': ')}{str('C++')}{pt(',')}</L>
      <L n={29}>{pt('};')}</L>
      <L n={30} />
      <L n={31}>{cm('// ─── CURRENTLY LEARNING ─────────────────────────────────────')}</L>
      <L n={32}>{kw('const ')} {pl('learning ')} {op('= ')} {pt('{')}</L>
      <L n={33}>&nbsp;&nbsp;{prop('now')}{pt(': ')}{pt('[')}{str('Transformers Architecture')}{pt(', ')}{str('Agentic AI')}{pt('],')} </L>
      <L n={34}>&nbsp;&nbsp;{prop('next')}{pt(': ')}{pt('[')}{str('PyTorch')}{pt(', ')}{str('LangChain')}{pt(', ')}{str('System Design')}{pt('],')} </L>
      <L n={35}>{pt('};')}</L>
      <L n={36} />
      <L n={37}>{kw('export ')} {pt('{ ')}{pl('CPP, Python, React, Docker, TransformersJS, Solidity')}{pt(' };')}<span className="cursor" /></L>
    </>
  )
}
