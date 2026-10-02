import Link from "next/link";

export const metadata = { title: "Privacy notice" };

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">← Back to Synoro</Link>
        <p className="kicker">Legal</p>
        <h1>Privacy notice</h1>
        <p className="legal-lead">This notice explains how Synoro s. r. o. handles information you provide when making a business enquiry.</p>
        <section><h2>Information we receive</h2><p>We may receive your name, company, business email address, and the information included in your enquiry.</p></section>
        <section><h2>How we use it</h2><p>We use this information to assess and respond to your request, continue relevant business discussions, and maintain appropriate commercial records.</p></section>
        <section><h2>Sharing and retention</h2><p>We do not sell personal information. We share it only when necessary to handle your request, meet legal obligations, or protect legitimate business interests. We retain it only as long as reasonably necessary.</p></section>
        <section><h2>Your choices</h2><p>You may ask us to access, correct, or delete information we hold about you, subject to applicable legal requirements.</p></section>
        <section><h2>Contact</h2><p>Privacy questions may be sent to <a href="mailto:info@synoro.eu">info@synoro.eu</a>.</p></section>
        <p className="legal-date">Last updated: 2 October 2026</p>
      </div>
    </main>
  );
}
