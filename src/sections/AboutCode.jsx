import { L, kw, str, cm, prop, op, pt, pl, lnk } from '../components/Line'

export default function AboutCode() {
  return (
    <>
      <L n={1}>{cm('/**')}</L>
      <L n={2}>{cm(' * ╔══════════════════════════════════════════╗')}</L>
      <L n={3}>{cm(' * ║       ANAND KASHYAP  —  PORTFOLIO        ║')}</L>
      <L n={4}>{cm(' * ╚══════════════════════════════════════════╝')}</L>
      <L n={5}>{cm(' *')}</L>
      <L n={6}>{cm(' * @name     Anand Kashyap')}</L>
      <L n={7}>{cm(' * @role     ML/AI Engineer in the making')}</L>
      <L n={8}>{cm(" * @college  NIT Patna, B.Tech CSE '29")}</L>
      <L n={9}>{cm(' * @location Aurangabad, Bihar, India')}</L>
      <L n={10}>{cm(' */')}</L>
      <L n={11} />
      <L n={12}>{kw('const ')} {pl('identity ')} {op('= ')} {pt('{')}</L>
      <L n={13}>&nbsp;&nbsp;{prop('name')}{pt(': ')}{str('Anand Kashyap')}{pt(',')}</L>
      <L n={14}>&nbsp;&nbsp;{prop('tagline')}{pt(': ')}{str('I build things that think.')}{pt(',')}</L>
      <L n={15}>&nbsp;&nbsp;{prop('institute')}{pt(': ')}{str("NIT Patna — B.Tech CSE '29")}{pt(',')}</L>
      <L n={16}>&nbsp;&nbsp;{prop('from')}{pt(': ')}{str('Aurangabad, Bihar, India')}{pt(',')}</L>
      <L n={17}>&nbsp;&nbsp;{prop('interests')}{pt(': [')} </L>
      <L n={18}>&nbsp;&nbsp;&nbsp;&nbsp;{str('AI/ML Engineering')}{pt(',')}</L>
      <L n={19}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Competitive Programming')}{pt(',')}</L>
      <L n={20}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Building Developer Tools')}{pt(',')}</L>
      <L n={21}>&nbsp;&nbsp;&nbsp;&nbsp;{str('Storytelling & Content Creation')}{pt(',')}</L>
      <L n={22}>&nbsp;&nbsp;{pt('],')} </L>
      <L n={23}>&nbsp;&nbsp;{prop('currentlyBuilding')}{pt(': ')}{str('VaultFind — Offline-first AI file search')}{pt(',')}</L>
      <L n={24}>&nbsp;&nbsp;{prop('lookingFor')}{pt(': ')}{str('Internships in ML/AI Engineering')}{pt(',')}</L>
      <L n={25}>&nbsp;&nbsp;{prop('funFact')}{pt(': ')}{str('I write psychological thrillers and build AI tools. Same energy.')}{pt(',')}</L>
      <L n={26}>{pt('};')}</L>
      <L n={27} />
      <L n={28}>{cm('// ─── Quick Links ────────────────────────────────────────────')}</L>
      <L n={29}>{kw('const ')} {pl('links ')} {op('= ')} {pt('{')}</L>
      <L n={30}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21', 'https://github.com/kashyapanand21')}{pt(',')}</L>
      <L n={31}>&nbsp;&nbsp;{prop('linkedin')}{pt(': ')}{lnk('linkedin.com/in/anand-kashyap-1915ew', 'https://linkedin.com/in/anand-kashyap-1915ew')}{pt(',')}</L>
      <L n={32}>&nbsp;&nbsp;{prop('email')}{pt(': ')}{lnk('kashyapanand2020@gmail.com', 'mailto:kashyapanand2020@gmail.com')}{pt(',')}</L>
      <L n={33}>{pt('};')}</L>
      <L n={34} />
      <L n={35}>{kw('export default ')} {pl('identity')}{pt(';')}<span className="cursor" /></L>
    </>
  )
}
