"use client";

import { FormEvent, useState } from "react";

export function TradeEnquiry() {
  const [message, setMessage] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const requirement = String(form.get("requirement") ?? "").trim();
    const subject = encodeURIComponent(`Trade enquiry from ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nRequirement:\n${requirement}`,
    );

    setMessage("Your email application is opening with the enquiry prepared.");
    window.location.href = `mailto:trade@synoro.eu?subject=${subject}&body=${body}`;
  }

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry}>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input type="text" name="name" autoComplete="name" required placeholder="Full name" />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" autoComplete="organization" required placeholder="Company name" />
        </label>
      </div>
      <label>
        <span>Business email</span>
        <input type="email" name="email" autoComplete="email" required placeholder="name@company.com" />
      </label>
      <label>
        <span>What can we help you trade?</span>
        <textarea name="requirement" rows={5} required placeholder="Product, quantity, origin or destination, timing, and key specifications" />
      </label>
      <button type="submit" className="button button-submit">
        Prepare enquiry
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
      </button>
      <p className="form-privacy">By sending an enquiry, you agree that Synoro may use your details to respond to your request.</p>
      <p className="form-message" aria-live="polite">{message}</p>
    </form>
  );
}
