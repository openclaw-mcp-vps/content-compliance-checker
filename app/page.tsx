export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR &amp; Accessibility
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Content for{" "}
          <span className="text-[#58a6ff]">Compliance Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically check your blog posts and landing pages for GDPR issues and WCAG accessibility violations — before they become legal problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cookie notice detection</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> WCAG 2.1 checks</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Alt text &amp; contrast audit</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Privacy policy scanner</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited URL scans",
              "Paste-content analysis",
              "GDPR compliance report",
              "WCAG accessibility audit",
              "Downloadable PDF reports",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What does the GDPR scanner check?</h3>
            <p className="text-[#8b949e] text-sm">It detects missing cookie consent banners, absent privacy policy links, unprotected data collection forms, and third-party trackers that require disclosure under GDPR.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which accessibility standards are covered?</h3>
            <p className="text-[#8b949e] text-sm">We run axe-core against WCAG 2.1 Level AA criteria, flagging missing alt text, insufficient color contrast, unlabeled form fields, and keyboard navigation issues.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I scan pasted content or only URLs?</h3>
            <p className="text-[#8b949e] text-sm">Both. Paste raw HTML or plain text directly into the scanner, or provide a public URL and we'll fetch and analyze the live page for you.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Content Compliance Checker. All rights reserved.
      </footer>
    </main>
  );
}
