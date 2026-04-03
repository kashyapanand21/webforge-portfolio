import { L, kw, fn, str, cm, prop, op, pt, pl, lnk } from '../components/Line'

export default function ProjectsCode() {
  return (
    <>
      <L n={1}>{cm('/**')}</L>
      <L n={2}>{cm(' * @project  VaultFind')}</L>
      <L n={3}>{cm(' * @type     Desktop App · AI-powered · Offline-first')}</L>
      <L n={4}>{cm(' * @stack    Electron · Transformers.js · React')}</L>
      <L n={5}>{cm(' * @status   🚧 In Development ')}</L>
      <L n={6}>{cm(' */')}</L>
      <L n={7}>{kw('const ')} {fn('VaultFind ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={8}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('Offline-first AI file search. No cloud, no compromise.')}{pt(',')}</L>
      <L n={9}>&nbsp;&nbsp;{prop('role')}{pt(': ')}{str('Topic Classifier Module — full ownership')}{pt(',')}</L>
      <L n={10}>&nbsp;&nbsp;{prop('team')}{pt(': ')}<span className="num">4</span>{pt(',')}</L>
      <L n={11}>&nbsp;&nbsp;{prop('status')}{pt(': ')}{str('🚧 Active development — not pushed yet')}{pt(',')}</L>
      <L n={12}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{str('coming soon...')}{pt(',')}</L>
      <L n={13}>{pt('});')}</L>
      <L n={14}>{cm('/**')}</L>
      <L n={15}>{cm(' * @project  Chain Reaction AI Bot')}</L>
      <L n={16}>{cm(' * @type     Game AI · Adversarial Search')}</L>
      <L n={17}>{cm(' * @stack    Python · Minimax · Alpha-Beta Pruning')}</L>
      <L n={18}>{cm(' * @event    IIT Patna — Apeiron 2026 · CRITICAL MASS')}</L>
      <L n={19}>{cm(' */')}</L>
      <L n={20}>{kw('const ')} {fn('ChainReactionBot ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={21}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('AI that plays Chain Reaction using adversarial search.')}{pt(',')}</L>
      <L n={22}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('Built and competed at IIT Patna. Teammate: Zaid Ali.')}{pt(',')}</L>
      <L n={23}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/critical-mass-bot', 'https://github.com/kashyapanand21/critical-mass-bot')}{pt(',')}</L>
      <L n={24}>{pt('});')}</L>
      <L n={25} />
      <L n={26}>{cm('/**')}</L>
      <L n={27}>{cm(' * @project  You Are the Internet')}</L>
      <L n={28}>{cm(' * @type     Frontend · Immersive Experience')}</L>
      <L n={29}>{cm(' * @stack    React · GSAP ScrollTrigger · Web Audio API · CSS Variables')}</L>
      <L n={30}>{cm(' * @event    Frontend Odyssey — 7-Day Hackathon')}</L>
      <L n={31}>{cm(' */')}</L>
      <L n={32}>{kw('const ')} {fn('YouAreTheInternet ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={33}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('A scrollable, era-switching internet history experience.')}{pt(',')}</L>
      <L n={34}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('IntersectionObserver + GSAP + Web Audio. Era theming with CSS vars.')}{pt(',')}</L>
      <L n={35}>&nbsp;&nbsp;{prop('demo')}{pt(': ')}{lnk('kashyapanand21.github.io/you-are-the-internet', 'https://kashyapanand21.github.io/you-are-the-internet')}{pt(',')}</L>
      <L n={36}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/you-are-the-internet', 'https://github.com/kashyapanand21/you-are-the-internet')}{pt(',')}</L>
      <L n={37}>{pt('});')}</L>
      <L n={38} />
      <L n={39}>{cm('/**')}</L>
      <L n={40}>{cm(' * @project  NumPy Neural Network')}</L>
      <L n={41}>{cm(' * @type     ML · Built From Scratch (no ML libraries)')}</L>
      <L n={42}>{cm(' * @stack    Python · NumPy · Math')}</L>
      <L n={43}>{cm(' */')}</L>
      <L n={44}>{kw('const ')} {fn('NumPyNeuralNet ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={45}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('Full backprop, from scratch. No PyTorch. No TensorFlow. Just math.')}{pt(',')}</L>
      <L n={46}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('Forward pass, loss fn, backprop, gradient descent — all NumPy.')}{pt(',')}</L>
      <L n={47}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/Numpy-Neural-Network', 'https://github.com/kashyapanand21/Numpy-Neural-Network')}{pt(',')}</L>
      <L n={48}>{pt('});')}</L>
      <L n={49} />
      <L n={50}>{cm('/**')}</L>
      <L n={51}>{cm(' * @project  TrustSplit')}</L>
      <L n={51}>{cm(' * @type     Web3 dApp · Personal Project')}</L>
      <L n={52}>{cm(' * @stack    Solidity · Hardhat · Ethers.js · React')}</L>
      <L n={53}>{cm(' * @status   🚧 Work in progress')}</L>
      <L n={55}>{cm(' */')}</L>
      <L n={56}>{kw('const ')} {fn('TrustSplit ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={57}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('No trust issues. Just smart contracts.')}{pt(',')}</L>
      <L n={58}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('Fully on-chain group expense splitting with Solidity.')}{pt(',')}</L>
      <L n={59}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/Trust-Split', 'https://github.com/kashyapanand21/Trust-Split')}{pt(',')}</L>
      <L n={60}>{pt('});')}</L>
      <L n={61} />
      <L n={62}>{cm('/**')}</L>
      <L n={63}>{cm(' * @project  Connect the Dots')}</L>
      <L n={64}>{cm(' * @type     Cloud Infrastructure · Hackathon')}</L>
      <L n={65}>{cm(' * @stack    Nginx · Node.js · MongoDB · MinIO · Docker Compose')}</L>
      <L n={66}>{cm(' */')}</L>
      <L n={67}>{kw('const ')} {fn('ConnectTheDots ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={68}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('Full containerized cloud infra built from scratch.')}{pt(',')}</L>
      <L n={69}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('Reverse proxy + object storage + DB + React frontend — all Dockerized.')}{pt(',')}</L>
      <L n={70}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/connect-the-dots', 'https://github.com/kashyapanand21/connect-the-dots')}{pt(',')}</L>
      <L n={71}>{pt('});')}</L>
      <L n={72} />
      <L n={73}>{cm('/**')}</L>
      <L n={74}>{cm(' * @project  Sewa Setu')}</L>
      <L n={75}>{cm(' * @type     Web App · Hyperlocal Platform · Personal Project')}</L>
      <L n={76}>{cm(' * @stack    React · Firebase Firestore · OpenStreetMap')}</L>
      <L n={77}>{cm(' * @scope    NIT Patna — Ashok Rajpath micro-economy')}</L>
      <L n={78}>{cm(' */')}</L>
      <L n={79}>{kw('const ')} {fn('SewaSetu ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={80}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('Hyperlocal coordination platform for NIT Patna students.')}{pt(',')}</L>
      <L n={81}>&nbsp;&nbsp;{prop('features')}{pt(': ')}{pt('[')}</L>
      <L n={82}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Bulk book ordering with discount tiers')}{pt(',')}</L>
      <L n={83}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Realtime vendor discovery on OpenStreetMap')}{pt(',')}</L>
      <L n={84}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Atomic slot booking — Laundry, Printing via Firestore transactions')}{pt(',')}</L>
      <L n={85}>&nbsp;&nbsp;{pt('],')} </L>
      <L n={86}>&nbsp;&nbsp;{prop('roles')}{pt(': ')}{str('Student · Vendor · Admin')}{pt(',')}</L>
      <L n={87}>&nbsp;&nbsp;{prop('demo')}{pt(': ')}{lnk('sewa-setu-14537.web.app', 'https://sewa-setu-14537.web.app')}{pt(',')}</L>
      <L n={88}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21/Sewa-Setu', 'https://github.com/kashyapanand21/Sewa-Setu')}{pt(',')}</L>
      <L n={89}>{pt('});')}</L>
      <L n={90}>{cm('/**')}</L>
      <L n={91}>{cm(' * @project  NITP Robotics Club Website')}</L>
      <L n={92}>{cm(' * @type     Frontend · Web Dev Challenge')}</L>
      <L n={93}>{cm(' * @stack    HTML · CSS · JavaScript')}</L>
      <L n={94}>{cm(' * @collab   Built with Zaid Ali')}</L>
      <L n={95}>{cm(' */')}</L>
      <L n={96}>{kw('const ')} {fn('NITPRoboticsWebsite ')} {op('= ')} {pt('() => (')}{pt('{')}</L>
      <L n={97}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('Official frontend for the Robotics Club of NIT Patna.')}{pt(',')}</L>
      <L n={98}>&nbsp;&nbsp;{prop('highlight')}{pt(': ')}{str('Multi-page site: Home, About, Achievements, Projects, Events, Team.')}{pt(',')}</L>
      <L n={99}>&nbsp;&nbsp;{prop('demo')}{pt(': ')}{lnk('robotics-club-website-zm.web.app', 'https://robotics-club-website-zm.web.app')}{pt(',')}</L>
      <L n={100}>{pt('});')}</L>
      <L n={101}>{kw('export ')} {pt('{ ')}{pl('VaultFind, ChainReactionBot, YouAreTheInternet, NumPyNeuralNet, TrustSplit, ConnectTheDots')}{pt(' };')}<span className="cursor" /></L>
    </>
  )
}
