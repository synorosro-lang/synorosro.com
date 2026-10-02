import Link from "next/link";

export const metadata = { title: "Website terms" };

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">← Back to Synoro</Link>
        <p className="kicker">Legal</p>
        <h1>Website terms</h1>
        <p className="legal-lead">These terms apply to the use of the Synoro website and its business-enquiry information.</p>
        <section><h2>General information</h2><p>The website provides general information about Synoro s. r. o. and its wholesale, import-export, intermediary, and trade-support services.</p></section>
        <section><h2>No binding offer</h2><p>Website content and initial correspondence do not create a binding commercial offer, guarantee availability, or confirm a transaction. Any engagement is subject to separate written agreement.</p></section>
        <section><h2>Accuracy and availability</h2><p>We aim to keep information accurate and the website available, but content may change and uninterrupted access is not guaranteed.</p></section>
        <section><h2>Intellectual property</h2><p>Unless stated otherwise, the website design, branding, and original content belong to Synoro s. r. o. and may not be reused without permission.</p></section>
        <section><h2>Company information</h2><p>Synoro s. r. o., Company ID 57 673 110, registered in the Slovak Republic.</p></section>
        <p className="legal-date">Last updated: 2 October 2026</p>
      </div>
    </main>
  );
}
