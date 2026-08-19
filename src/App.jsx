import './App.css'

const candidates = [
  {
    name: 'Ben Miller',
    role: 'Incumbent · Seeking re-election',
    photo: '/assets/ben.jpg',
    bio: 'Northfield parent and school board member for the past four years, and a fair, pragmatic voice trusted to get the work done. Has served on the Policy, Legislative Action, and Negotiations committees and the District Youth Council.',
  },
  {
    name: 'Alyssa Melby',
    role: 'Write-in candidate',
    photo: '/assets/AHM-2.jpg',
    bio: 'Parent of three Northfield students. Director of the Svoboda Center for Civic Engagement at St. Olaf College, former Executive Director of the Northfield Arts Guild, and co-chair of the Healthy Community Initiative board.',
  },
]

const benPlatform = {
  heading: "Ben's platform",
  quote: '"A school board seat is about service and stewardship, and being trusted by the community to get the work done."',
  planks: [
    ['Stabilize enrollment', 'Declining enrollment is the district\u2019s biggest challenge. Ben will keep inviting families to choose Northfield and protect the orchestra, arts, languages, and activities that make a Northfield education stand out.'],
    ['Steward the district\u2019s resources', 'Responsible stewardship is the board\u2019s first job: budgets and contracts built in honest partnership with educators, advocacy for better state funding, and ensuring public funding stays with public schools.'],
    ['Let educators lead the classroom', 'Curriculum belongs with the district\u2019s educational experts, with the board overseeing clear, measurable outcomes as the new reading and math curriculums take hold. We can become an even stronger district academically, ensuring that our students leave ready for their next chapter in life.'],
    ['Later start times, done right', 'The research on later starts for older students is clear, and Northfield is the Big 9\u2019s earliest-starting high school. Ben supports the change, planned carefully so the effects on families and finances are understood first.'],
  ],
}

const alyssaPlatform = {
  heading: "Alyssa's platform",
  quote: '"Budgets are where you put your values, and education is a people business."',
  planks: [
    ['Fund our schools for the future', 'Alyssa will pursue new revenue from grants, sponsorships, and earned income to keep our schools strong, listening deeply to the community and educators so every budget reflects Northfield\u2019s values.'],
    ['Put students at the center', 'The district\u2019s mission of educating all students should anchor every board decision, with a governance role focused on vision, policy, budget, and advocacy for public education.'],
    ['Champion our educators', 'Educators are the greatest source of stability in our schools. Alyssa sees the board and educators as partners, with educators at the table from the start on the decisions that affect their classrooms.'],
    ['Let evidence guide decisions', 'Support later start times for older students, where the research is clear, and take a fresh look at 1:1 iPad use: technology should augment and support learning based on what works best for students.'],
  ],
}

const resources = [
  ['Where do I vote?', 'https://sos.mn.gov/elections-voting/election-day-voting/'],
  ['How write-in votes are counted', 'https://www.revisor.mn.gov/rules/8230.2040/'],
  ['What does the Northfield School Board do?', 'https://northfieldschools.org/about/school-board/'],
  // Hidden until KYMN publishes a 2026 guide:
  // ['KYMN elections guide', 'https://kymnradio.net/2024/09/14/meet-the-candidates-for-northfield-school-board-2/'],
]

function StepOneSvg() {
  return ( Ben recognizes that changes to schedules affect students, educators, and families, and these are all voices that need to be heard.<svg viewBox="0 0 300 150" className="step-svg" role="img" aria-label="Ballot with the School Board race highlighted">
      <rect x="70" y="12" width="160" height="126" rx="4" fill="#fff" stroke="#cbbfa6" strokeWidth="2" />
      <rect x="82" y="24" width="70" height="8" rx="2" fill="#cbbfa6" />
      <ellipse cx="92" cy="46" rx="7" ry="4.5" fill="none" stroke="#8a7a58" strokeWidth="1.6" />
      <rect x="106" y="42" width="80" height="7" rx="2" fill="#e4dbc5" />
      <ellipse cx="92" cy="62" rx="7" ry="4.5" fill="none" stroke="#8a7a58" strokeWidth="1.6" />
      <rect x="106" y="58" width="66" height="7" rx="2" fill="#e4dbc5" />
      <rect x="76" y="76" width="148" height="54" rx="4" fill="#fdf3d7" stroke="#FFCC33" strokeWidth="2.5" />
      <text x="86" y="93" fontFamily="Bricolage Grotesque, sans-serif" fontSize="11" fontWeight="800" fill="#7A0019">SCHOOL BOARD</text>
      <ellipse cx="94" cy="107" rx="7" ry="4.5" fill="none" stroke="#8a7a58" strokeWidth="1.6" />
      <rect x="108" y="103" width="76" height="7" rx="2" fill="#e4dbc5" />
      <ellipse cx="94" cy="121" rx="7" ry="4.5" fill="none" stroke="#8a7a58" strokeWidth="1.6" />
      <rect x="108" y="117" width="60" height="7" rx="2" fill="#e4dbc5" />
    </svg>
  )
}

function StepTwoSvg() {
  return (
    <svg viewBox="0 0 300 150" className="step-svg" role="img" aria-label="The write-in oval filled in">
      <ellipse cx="70" cy="47" rx="16" ry="10" fill="none" stroke="#8a7a58" strokeWidth="3" />
      <rect x="100" y="40" width="130" height="13" rx="3" fill="#e4dbc5" />
      <ellipse cx="70" cy="98" rx="16" ry="10" fill="#241b16" stroke="#241b16" strokeWidth="3" />
      <text x="100" y="104" fontFamily="Bricolage Grotesque, sans-serif" fontSize="15" fontWeight="800" fill="#7A0019">WRITE-IN</text>
      <line x1="100" y1="116" x2="240" y2="116" stroke="#8a7a58" strokeWidth="2" />
    </svg>
  )
}

function StepThreeSvg() {
  return (
    <svg viewBox="0 0 300 150" className="step-svg" role="img" aria-label="Alyssa Melby written on the write-in line">
      <ellipse cx="52" cy="82" rx="14" ry="9" fill="#241b16" />
      <text x="78" y="88" fontFamily="Caveat, 'Segoe Script', cursive" fontSize="30" fill="#241b16">Alyssa Melby</text>
      <line x1="78" y1="96" x2="252" y2="96" stroke="#8a7a58" strokeWidth="2" />
      <text x="78" y="112" fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fill="#8a7a58">WRITE-IN</text>
    </svg>
  )
}

function Platform({ heading, quote, planks }) {
  return (
    <section className="platform">
      <h2 className="section-title">{heading}</h2>
      <p className="platform-quote">{quote}</p>
      <div className="plank-grid">
        {planks.map(([title, body]) => (
          <div className="plank" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="brand">United <span>for</span> Northfield</div>
        <nav className="topnav">
          <a href="#candidates">Candidates</a>
          <a href="#why">Why We're Running</a>
          <a href="#resources">Resources</a>
          <a className="nav-cta" href="mailto:alyssa.melby.nfld@gmail.com?subject=Yard%20sign%20request">Get a Yard Sign</a>
        </nav>
      </header>

      {/* Endorsement banner hidden until 2026 endorsements land
      <div className="endorsement">
        <span className="badge">2026</span>
        <span>[ Endorsement banner: endorsing organizations to come ]</span>
        <a className="learn-more" href="#">Learn more</a>
      </div> */}

      <section className="hero">
        <div className="eyebrow">Northfield School Board · Tuesday, Nov 3, 2026</div>
        <h1>Strong Schools.<br />Strong Northfield.</h1>
        <p className="hero-sub">Re-elect <strong>Ben Miller</strong> and write in <strong>Alyssa Melby</strong> for the Northfield School Board.</p>
        <div className="hero-ctas">
          <a className="btn-solid" href="mailto:alyssa.melby.nfld@gmail.com?subject=Volunteer">Volunteer</a>
          <a className="btn-outline" href="mailto:alyssa.melby.nfld@gmail.com?subject=Yard%20sign%20request">Request a Yard Sign</a>
        </div>
      </section>

      <section className="writein">
        <h2>How to cast a write-in vote</h2>
        <div className="steps">
          <div className="step">
            <div className="step-label"><span>1</span>Find the School Board race on your ballot.</div>
            <StepOneSvg />
          </div>
          <div className="step">
            <div className="step-label"><span>2</span>Fill in the oval next to "write-in."</div>
            <StepTwoSvg />
          </div>
          <div className="step">
            <div className="step-label"><span>3</span>Print <strong>Alyssa Melby</strong> on the line.</div>
            <StepThreeSvg />
          </div>
        </div>
      </section>

      <section className="candidates" id="candidates">
        <h2 className="section-title">The candidates</h2>
        <div className="candidate-grid">
          {candidates.map((c) => (
            <div className="candidate-card" key={c.name}>
              <img src={c.photo} alt={c.name} className="candidate-photo" />
              <div>
                <h3>{c.name}</h3>
                <div className="candidate-role">{c.role}</div>
                <p>{c.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Platform {...benPlatform} />
      <Platform {...alyssaPlatform} />

      <section className="bottom" id="why">
        <div className="why-card">
          <h2>Why we are running</h2>
          <p>This November, Northfield voters will decide who oversees our public schools. Strong districts depend on steady, experienced leadership focused on students.</p>
          <p>We have aligned our campaigns to preserve the excellent educational system in the Northfield School District, and to let our administrators and staff do what they do best which is to prepare every student for lifelong success. Together, we are United for Northfield.</p>
        </div>
        <div className="resources" id="resources">
          <h2>Resources</h2>
          <ul>
            {resources.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          {/* Forum block hidden until a forum is scheduled
          <div className="forum">
            <h3>Upcoming forum</h3>
            <p>League of Women Voters candidate forum<br />[ Date, time &amp; location to come ]</p>
          </div> */}
        </div>
      </section>

      <footer className="footer">
        <p>Prepared and paid for by the candidates.</p>
        <p>P.O. Box 323, Northfield, MN 55057 · <a href="mailto:unitedfornorthfield@gmail.com">unitedfornorthfield@gmail.com</a></p>
      </footer>
    </>
  )
}
