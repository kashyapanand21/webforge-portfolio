import { L, kw, str, cm, prop, op, pt, pl, lnk } from '../components/Line'

export default function ContactCode() {
  return (
    <>
      <L n={1}>{cm('// ─── REACH OUT ───────────────────────────────────────────────')}</L>
      <L n={2} />
      <L n={3}>{cm('/**')}</L>
      <L n={4}>{cm(' * Open to:')}</L>
      <L n={5}>{cm(' *   ✦ Internship opportunities (ML/AI, SWE)')}</L>
      <L n={6}>{cm(' *   ✦ Hackathon collaborations')}</L>
      <L n={7}>{cm(' *   ✦ Open source contributions')}</L>
      <L n={8}>{cm(" *   ✦ Talking about AI, code, or psychological thrillers")}</L>
      <L n={9}>{cm(' */')}</L>
      <L n={10} />
      <L n={11}>{kw('const ')} {pl('contact ')} {op('= ')} {pt('{')}</L>
      <L n={12}>&nbsp;&nbsp;{prop('email')}{pt(': ')}{lnk('kashyapanand2020@gmail.com', 'mailto:kashyapanand2020@gmail.com')}{pt(',')}</L>
      <L n={13}>&nbsp;&nbsp;{prop('github')}{pt(': ')}{lnk('github.com/kashyapanand21', 'https://github.com/kashyapanand21')}{pt(',')}</L>
      <L n={14}>&nbsp;&nbsp;{prop('linkedin')}{pt(': ')}{lnk('linkedin.com/in/anand-kashyap-1915ew', 'https://linkedin.com/in/anand-kashyap-1915ew')}{pt(',')}</L>
      <L n={15}>&nbsp;&nbsp;{prop('location')}{pt(': ')}{str('NIT Patna, Bihar, India')}{pt(',')}</L>
      <L n={16}>{pt('};')}</L>
      <L n={17} />
      <L n={18}>{cm('// ─── AVAILABILITY ────────────────────────────────────────────')}</L>
      <L n={19}>{kw('const ')} {pl('availability ')} {op('= ')} {pt('{')}</L>
      <L n={20}>&nbsp;&nbsp;{prop('status')}{pt(': ')}{str('open')}{pt(',')}</L>
      <L n={21}>&nbsp;&nbsp;{prop('lookingFor')}{pt(': ')}{pt('[')}</L>
      <L n={22}>&nbsp;&nbsp;&nbsp;&nbsp;{str('ML/AI Internships')}{pt(', ')}{str('SWE Internships')}{pt(', ')}{str('Research Positions')}{pt(',')}</L>
      <L n={23}>&nbsp;&nbsp;{pt('],')} </L>
      <L n={24}>&nbsp;&nbsp;{prop('from')}{pt(': ')}{str('Summer 2026')}{pt(',')}</L>
      <L n={25}>&nbsp;&nbsp;{prop('responseTime')}{pt(': ')}{str('usually within 24 hours')}{pt(',')}</L>
      <L n={26}>{pt('};')}</L>
      <L n={27} />
      <L n={28}>{cm('// ─── DON\'T BE A STRANGER ─────────────────────────────────────')}</L>
      <L n={29}>{kw('const ')} {pl('message ')} {op('= ')} {str("If you're building something interesting, let's talk.")}{pt(';')}</L>
      <L n={30} />
      <L n={31}>{kw('export default ')} {pl('contact')}{pt(';')}<span className="cursor" /></L>
    </>
  )
}
