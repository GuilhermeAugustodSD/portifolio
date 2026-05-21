import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const C = {
  black:  '#111111',
  dark:   '#222222',
  muted:  '#555555',
  light:  '#888888',
  border: '#dddddd',
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.dark,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },

  // ── header ──────────────────────────────────────────────
  header: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 9.5,
    color: C.muted,
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactItem: {
    fontSize: 7.5,
    color: C.muted,
  },

  // ── section ─────────────────────────────────────────────
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    color: C.light,
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },

  // ── summary ─────────────────────────────────────────────
  summaryText: {
    fontSize: 8,
    color: C.muted,
    lineHeight: 1.45,
  },

  // ── experience ──────────────────────────────────────────
  expItem: {
    marginBottom: 7,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expRole: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: C.black,
  },
  expDate: {
    fontSize: 7,
    color: C.light,
  },
  expCompany: {
    fontSize: 7.5,
    color: C.muted,
    marginBottom: 2,
  },
  expDesc: {
    fontSize: 7.5,
    color: C.muted,
    lineHeight: 1.4,
  },

  // ── education ───────────────────────────────────────────
  eduItem: {
    marginBottom: 5,
  },
  eduDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: C.black,
    marginBottom: 1,
  },
  eduMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eduInstitution: {
    fontSize: 7.5,
    color: C.muted,
  },
  eduDate: {
    fontSize: 7,
    color: C.light,
  },

  // ── skills ──────────────────────────────────────────────
  skillsText: {
    fontSize: 8,
    color: C.dark,
    lineHeight: 1.5,
  },

  // ── languages ───────────────────────────────────────────
  langRow: {
    flexDirection: 'row',
    gap: 16,
  },
  langItem: {
    flexDirection: 'row',
    gap: 4,
  },
  langName: {
    fontSize: 8,
    color: C.dark,
    fontFamily: 'Helvetica-Bold',
  },
  langLevel: {
    fontSize: 8,
    color: C.light,
  },
})

const SUMMARY_BR = `Bacharel em Ciência da Computação (UniCEUB) e pós-graduado em Engenharia de Software (FAVENI). Construo e otimizo sistemas web com React, NextJS, Node, PHP, Laravel e SQL. Experiência em portais de notícias, plataformas SaaS e integração de IA. Meu diferencial é resolver problemas complexos com rapidez. Inglês intermediário, interesse em oportunidades no exterior.`

const SUMMARY_US = `Computer Science degree (UniCEUB) and postgraduate in Software Engineering (FAVENI). I build and optimize web systems with React, NextJS, Node, PHP, Laravel and SQL. Experience with news portals, SaaS platforms and AI-integrated systems. My strength is solving complex problems fast. Intermediate English, open to international opportunities.`

export default function CVDocument({ data, lang }) {
  const isBR = lang !== 'US'
  const jobs = data.experience.filter(e => e.type === 'job')
  const edu  = data.experience.filter(e => e.type === 'study')

  const advancedSkills     = data.skills.filter(s => parseInt(s.size) >= 80)
  const intermediateSkills = data.skills.filter(s => parseInt(s.size) >= 60 && parseInt(s.size) < 80)
  const basicSkills        = data.skills.filter(s => parseInt(s.size) < 60)

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── HEADER ─────────────────────────────────────────── */}
        <View style={styles.header}>
          <Text style={styles.name}>Guilherme Dantas</Text>
          <Text style={styles.headerTitle}>
            {isBR ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'}
          </Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>(61) 98262-5630</Text>
            <Text style={styles.contactItem}>guilhermednts2@gmail.com</Text>
            <Text style={styles.contactItem}>gdantasit.com</Text>
            <Text style={styles.contactItem}>linkedin.com/in/guilhermedanta-s</Text>
            <Text style={styles.contactItem}>Brasília, DF</Text>
          </View>
        </View>

        {/* ── RESUMO ──────────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{isBR ? 'RESUMO' : 'SUMMARY'}</Text>
          <Text style={styles.summaryText}>{isBR ? SUMMARY_BR : SUMMARY_US}</Text>
        </View>

        {/* ── EXPERIÊNCIA ─────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{isBR ? 'EXPERIÊNCIA' : 'EXPERIENCE'}</Text>
          {jobs.map((job, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{job.role}</Text>
                <Text style={styles.expDate}>{job.dateStart} — {job.dateEnd}</Text>
              </View>
              <Text style={styles.expCompany}>{job.institution} · {job.locate}</Text>
              <Text style={styles.expDesc}>{isBR ? job.descriptionBR : job.descriptionUS}</Text>
            </View>
          ))}
        </View>

        {/* ── FORMAÇÃO ────────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{isBR ? 'FORMAÇÃO' : 'EDUCATION'}</Text>
          {edu.map((e, i) => (
            <View key={i} style={styles.eduItem}>
              <Text style={styles.eduDegree}>{e.role}</Text>
              <View style={styles.eduMeta}>
                <Text style={styles.eduInstitution}>{e.institution}</Text>
                <Text style={styles.eduDate}>{e.dateStart} — {e.dateEnd}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── COMPETÊNCIAS ────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{isBR ? 'COMPETÊNCIAS' : 'SKILLS'}</Text>
          {advancedSkills.length > 0 && (
            <Text style={styles.skillsText}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                {isBR ? 'Avançado: ' : 'Advanced: '}
              </Text>
              {advancedSkills.map(s => s.title).join(', ')}
            </Text>
          )}
          {intermediateSkills.length > 0 && (
            <Text style={[styles.skillsText, { marginTop: 3 }]}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                {isBR ? 'Intermediário: ' : 'Intermediate: '}
              </Text>
              {intermediateSkills.map(s => s.title).join(', ')}
            </Text>
          )}
          {basicSkills.length > 0 && (
            <Text style={[styles.skillsText, { marginTop: 3 }]}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                {isBR ? 'Básico: ' : 'Basic: '}
              </Text>
              {basicSkills.map(s => s.title).join(', ')}
            </Text>
          )}
        </View>

        {/* ── IDIOMAS ─────────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{isBR ? 'IDIOMAS' : 'LANGUAGES'}</Text>
          <View style={styles.langRow}>
            <View style={styles.langItem}>
              <Text style={styles.langName}>{isBR ? 'Português' : 'Portuguese'}</Text>
              <Text style={styles.langLevel}>— {isBR ? 'Nativo' : 'Native'}</Text>
            </View>
            <View style={styles.langItem}>
              <Text style={styles.langName}>{isBR ? 'Inglês' : 'English'}</Text>
              <Text style={styles.langLevel}>— {isBR ? 'Intermediário' : 'Intermediate'}</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  )
}
