import Image from "next/image";
import Link from "next/link";
import { TradeEnquiry } from "@/components/trade-enquiry";

const capabilities = [
  {
    number: "01",
    title: "Wholesale supply",
    copy: "Structured B2B sourcing for repeat orders, spot requirements, and expanding product ranges across European markets.",
    detail: "Supplier search · Commercial terms · Order coordination",
  },
  {
    number: "02",
    title: "Import & export",
    copy: "Practical coordination across borders, from product readiness and documentation to logistics handover and delivery planning.",
    detail: "Trade documents · Freight alignment · Delivery planning",
  },
  {
    number: "03",
    title: "Trade intermediation",
    copy: "A dependable commercial link between buyers, suppliers, manufacturers, and service partners when markets do not connect easily.",
    detail: "Introductions · Negotiation support · Transaction follow-through",
  },
];

const sectors = [
  "Consumer goods",
  "Technology & equipment",
  "Building materials",
  "Automotive supplies",
  "Packaging & components",
  "General merchandise",
];

const steps = [
  {
    title: "Define the brief",
    text: "Tell us what you need, the target market, quantity, timing, and any non-negotiable specifications.",
  },
  {
    title: "Build the route",
    text: "We identify the right commercial path, coordinate counterparties, and flag documentation or logistics requirements early.",
  },
  {
    title: "Move with control",
    text: "You receive clear updates, aligned next steps, and one practical point of contact through to handover.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 3.4 3.4L16 5.8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <Link href="#top" className="brand" aria-label="Synoro home">
            <span className="brand-mark-wrap">
              <Image src="/synoro-mark.png" alt="" width={44} height={44} className="brand-mark" priority />
            </span>
            <span className="brand-word">SYNORO</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#approach">How we work</Link>
            <Link href="#about">About</Link>
          </nav>
          <Link href="#enquiry" className="button button-small">
            Start an enquiry
            <ArrowIcon />
          </Link>
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          src="/synoro-trade-hero.jpg"
          alt="European logistics infrastructure supporting international trade"
          fill
          sizes="100vw"
          className="hero-image"
          priority
        />
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <p className="eyebrow"><span /> European B2B trade partner</p>
          <h1>Trade moves better<br />when every link works.</h1>
          <p className="hero-copy">
            Synoro connects wholesale buyers, suppliers, and service partners—bringing clarity to sourcing, import-export, and cross-border trade.
          </p>
          <div className="hero-actions">
            <Link href="#enquiry" className="button button-primary">
              Discuss your requirement
              <ArrowIcon />
            </Link>
            <Link href="#capabilities" className="text-link">Explore our capabilities</Link>
          </div>
          <div className="hero-proof" aria-label="Synoro highlights">
            <div><strong>EU</strong><span>Based in Slovakia</span></div>
            <div><strong>B2B</strong><span>Built for commercial trade</span></div>
            <div><strong>01</strong><span>Point of coordination</span></div>
          </div>
        </div>
        <div className="hero-rail" aria-hidden="true">
          <span>Source</span><i /><span>Connect</span><i /><span>Move</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <p>Commercial coordination for</p>
          <div className="trust-item"><span>01</span> Buyers</div>
          <div className="trust-item"><span>02</span> Suppliers</div>
          <div className="trust-item"><span>03</span> Manufacturers</div>
          <div className="trust-item"><span>04</span> Service partners</div>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">What we do</p>
              <h2>One partner across the commercial chain.</h2>
            </div>
            <p>We help businesses find the right route from requirement to transaction—without adding unnecessary layers or noise.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <div className="card-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="card-detail">{item.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section route-section" id="approach">
        <div className="container route-layout">
          <div className="route-intro">
            <p className="kicker kicker-light">How we work</p>
            <h2>A clear route through complex trade.</h2>
            <p>Every requirement is different. Our process stays disciplined: understand the commercial goal, connect the right parties, and keep execution visible.</p>
            <Link href="#enquiry" className="button button-outline">Put a brief in motion<ArrowIcon /></Link>
          </div>
          <div className="route-steps">
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container sectors-layout">
          <div className="sectors-copy">
            <p className="kicker">Where we add value</p>
            <h2>Flexible across products.<br />Consistent in approach.</h2>
            <p>Synoro supports general wholesale and trade opportunities where commercial judgement, reliable coordination, and responsive communication matter.</p>
          </div>
          <div className="sector-list">
            {sectors.map((sector, index) => (
              <div key={sector}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{sector}</strong>
                <i><ArrowIcon /></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-panel">
            <div className="about-motif" aria-hidden="true"><span /><span /><span /></div>
            <p>Bratislava · Slovakia</p>
            <strong>Connected to European trade.</strong>
          </div>
          <div className="about-copy">
            <p className="kicker">About Synoro</p>
            <h2>Commercially practical.<br />International by design.</h2>
            <p>Synoro s. r. o. is a Slovak B2B company supporting wholesale, import-export, intermediary services, and the operational work that helps trade happen.</p>
            <ul>
              <li><CheckIcon /> Direct, responsive communication</li>
              <li><CheckIcon /> Flexible support for one-off and repeat requirements</li>
              <li><CheckIcon /> A practical link between commercial counterparties</li>
            </ul>
            <div className="legal-facts">
              <div><span>Company</span><strong>Synoro s. r. o.</strong></div>
              <div><span>Company ID</span><strong>57 673 110</strong></div>
              <div><span>Registered office</span><strong>Bratislava–Petržalka, Slovakia</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section enquiry-section" id="enquiry">
        <div className="container enquiry-layout">
          <div className="enquiry-copy">
            <p className="kicker kicker-copper">Start a conversation</p>
            <h2>Tell us what needs to move.</h2>
            <p>Share the product, market, timing, or commercial challenge. We will respond with the clearest next step.</p>
            <div className="response-note"><span>Typically responding within one business day</span></div>
          </div>
          <TradeEnquiry />
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="#top" className="brand brand-footer">
              <span className="brand-mark-wrap"><Image src="/synoro-mark.png" alt="" width={44} height={44} className="brand-mark" /></span>
              <span className="brand-word">SYNORO</span>
            </Link>
            <p>Wholesale · Import & export · Trade intermediation</p>
          </div>
          <div className="footer-column">
            <span>Navigate</span>
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#approach">How we work</Link>
            <Link href="#about">About</Link>
          </div>
          <div className="footer-column">
            <span>Contact</span>
            <a href="mailto:info@synoro.eu">info@synoro.eu</a>
            <a href="mailto:trade@synoro.eu">trade@synoro.eu</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Synoro s. r. o. All rights reserved.</p>
          <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </footer>
    </main>
  );
}
