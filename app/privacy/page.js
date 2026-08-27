import Link from "next/link";
import Nav from "@/components/site/Nav";
import SiteFooter from "@/components/site/SiteFooter";

// Single source of truth for the published contact address. Swap this one line
// if/when a mailbox on the runewebsites.com domain goes live.
const CONTACT_EMAIL = "willweatherhead636@gmail.com";
const LAST_UPDATED = "27 August 2026";

export const metadata = {
  title: "Privacy Policy · Rune Sites",
  description:
    "How Rune Sites collects, uses, stores and protects personal data — including data accessed through connected platform APIs such as Pinterest.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/[0.06] pt-10">
      <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-300">
        {children}
      </div>
    </section>
  );
}

const CONTENTS = [
  ["who-we-are", "Who we are"],
  ["what-we-collect", "What we collect"],
  ["why-we-use-it", "Why we use it, and our legal basis"],
  ["sharing", "Who we share it with"],
  ["cookies", "Cookies and local storage"],
  ["platform-apis", "Connected platform APIs (Pinterest, Instagram, Etsy)"],
  ["retention", "How long we keep it"],
  ["transfers", "International transfers"],
  ["security", "Security"],
  ["your-rights", "Your rights"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="mx-auto max-w-3xl px-4 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-brand-300"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-24 pt-10">
          <span className="spark-bar" />
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy <span className="accent-text">Policy</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            This policy explains what personal data Rune Sites collects, why we collect it, who we
            share it with and what control you have over it. It covers this website and the
            applications we operate under the Rune Sites name.
          </p>
          <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

          {/* Contents */}
          <nav aria-label="Contents" className="card-surface mt-8 p-6">
            <p className="text-sm font-bold text-slate-400">On this page</p>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {CONTENTS.map(([id, label], i) => (
                <li key={id} className="text-sm">
                  <a
                    href={`#${id}`}
                    className="text-slate-300 transition-colors hover:text-brand-300"
                  >
                    <span className="mr-1.5 text-slate-500">{i + 1}.</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <Section id="who-we-are" title="1. Who we are">
              <p>
                Rune Sites (&ldquo;we&rdquo;, &ldquo;us&rdquo;) designs, builds and looks after
                websites and social media content for small businesses. We operate the website at{" "}
                <a
                  href="https://runewebsites.com"
                  className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:decoration-brand-300"
                >
                  runewebsites.com
                </a>{" "}
                and are based in the United Kingdom.
              </p>
              <p>
                For the personal data described in this policy, Rune Sites is the{" "}
                <strong className="font-semibold text-white">data controller</strong> under the UK
                GDPR and the Data Protection Act 2018. You can reach us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:decoration-brand-300"
                >
                  {CONTACT_EMAIL}
                </a>
                , and we will provide a postal address on request.
              </p>
            </Section>

            <Section id="what-we-collect" title="2. What we collect">
              <p>We only collect data you give us, plus the minimum our hosting needs to run.</p>

              <h3 className="pt-2 font-display text-base font-bold text-white">
                Information you give us
              </h3>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  <strong className="font-semibold text-white">Quote and enquiry forms.</strong>{" "}
                  Your name, email address, business name, and optionally your phone number,
                  together with the details of the project itself — the type of website you want,
                  your business type, the features and package you select, colour and style
                  preferences, example sites you like, and any notes you write.
                </li>
                <li>
                  <strong className="font-semibold text-white">Custom requests.</strong> Your name,
                  email address and the message you send us.
                </li>
                <li>
                  <strong className="font-semibold text-white">Direct correspondence.</strong>{" "}
                  Anything you send us by email, along with your email address.
                </li>
              </ul>

              <h3 className="pt-2 font-display text-base font-bold text-white">
                Information collected automatically
              </h3>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  <strong className="font-semibold text-white">Server and security logs.</strong>{" "}
                  Our hosting provider records standard request data such as IP address, browser
                  user-agent, the page requested and the time of the request. This is used to keep
                  the site running and to protect it from abuse.
                </li>
                <li>
                  <strong className="font-semibold text-white">
                    Your browser&rsquo;s local storage.
                  </strong>{" "}
                  Your basket and any part-completed quote form are saved in your own browser so
                  you don&rsquo;t lose your progress. This stays on your device and is not sent to
                  us until you submit the form.
                </li>
              </ul>

              <div className="card-surface mt-6 p-5">
                <p className="text-[15px] leading-relaxed text-slate-300">
                  <strong className="font-semibold text-white">We do not</strong> run advertising
                  or analytics trackers on this website, we do not use tracking cookies, we do not
                  sell or rent personal data to anyone, and we do not build advertising profiles.
                  We do not take payment card details on this site.
                </p>
              </div>
            </Section>

            <Section id="why-we-use-it" title="3. Why we use it, and our legal basis">
              <p>Under the UK GDPR we must have a lawful basis for using your data. Ours are:</p>
              <div className="overflow-x-auto">
                <table className="mt-2 w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 pr-4 font-semibold text-slate-400">What we do</th>
                      <th className="py-3 font-semibold text-slate-400">Legal basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4">
                        Reply to your enquiry and prepare a quote or proposal
                      </td>
                      <td className="py-3">Steps taken at your request before entering a contract</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4">
                        Deliver, support and invoice for work you have commissioned
                      </td>
                      <td className="py-3">Performance of a contract</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4">
                        Send you a confirmation email when you submit a form
                      </td>
                      <td className="py-3">Steps taken at your request / legitimate interests</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4">
                        Keep the site secure, prevent spam and fix faults
                      </td>
                      <td className="py-3">
                        Legitimate interests in running a safe, working service
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Keep records for tax and accounting</td>
                      <td className="py-3">Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We do not send marketing emails to people who have only requested a quote. If we
                ever introduce a mailing list, it will be opt-in and every message will carry an
                unsubscribe link.
              </p>
            </Section>

            <Section id="sharing" title="4. Who we share it with">
              <p>
                We share personal data only with the service providers that make the site work.
                Each of them processes data on our instructions:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  <strong className="font-semibold text-white">Netlify</strong> — hosting and
                  content delivery for this website, including server logs.
                </li>
                <li>
                  <strong className="font-semibold text-white">Supabase</strong> — the database
                  that stores enquiry and quote submissions.
                </li>
                <li>
                  <strong className="font-semibold text-white">Google (Gmail) and Resend</strong> —
                  delivery of the notification and confirmation emails triggered by our forms.
                </li>
                <li>
                  <strong className="font-semibold text-white">Cloudflare (cdnjs) and unpkg</strong>{" "}
                  — public code libraries used for animation and 3D graphics. Loading a page
                  requests these files, which means your IP address and browser details are visible
                  to those providers, as with any resource your browser fetches.
                </li>
              </ul>
              <p>
                We may also disclose data where the law requires it, or to establish or defend a
                legal claim. We do not sell personal data.
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies and local storage">
              <p>
                This website does not set advertising, analytics or tracking cookies, which is why
                you will not see a cookie banner.
              </p>
              <p>
                We do use your browser&rsquo;s{" "}
                <strong className="font-semibold text-white">local storage</strong> for two things:
                remembering the items in your basket, and saving a quote form you have started so
                you can come back to it. This information is held on your own device. You can clear
                it at any time through your browser&rsquo;s settings for site data, and clearing it
                will not stop the site from working.
              </p>
            </Section>

            <Section
              id="platform-apis"
              title="6. Connected platform APIs (Pinterest, Instagram, Etsy)"
            >
              <p>
                Rune Sites operates internal tools that connect to third-party platform APIs —
                including the <strong className="font-semibold text-white">Pinterest API</strong>,
                and where enabled the Instagram and Etsy APIs — in order to publish and manage our
                own marketing content and that of clients who have asked us to manage their
                accounts.
              </p>

              <h3 className="pt-2 font-display text-base font-bold text-white">
                What we access and why
              </h3>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  Access is granted only through the platform&rsquo;s own OAuth flow, by the owner
                  of the account, after they have reviewed and approved the permissions requested.
                </li>
                <li>
                  We request the narrowest set of permissions needed to do the job: reading the
                  boards or profiles the account holder has authorised, creating and updating posts
                  or pins on those boards, and reading the resulting performance statistics.
                </li>
                <li>
                  We use that access solely to schedule, publish and report on content for the
                  account that granted it. We do not use platform data for advertising, for
                  training machine-learning models, for building profiles of other people, or for
                  any purpose the account holder has not asked us to perform.
                </li>
                <li>
                  We do not access, collect or store the personal data of a platform&rsquo;s wider
                  users — for example other people&rsquo;s Pins, boards, followers or private
                  messages — beyond the aggregate engagement figures the platform returns about the
                  connected account&rsquo;s own content.
                </li>
              </ul>

              <h3 className="pt-2 font-display text-base font-bold text-white">
                How we store and protect it
              </h3>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  Access tokens and account identifiers are held as encrypted server-side
                  credentials, never in the browser and never in our public source code.
                </li>
                <li>
                  Access to these tools is restricted to authenticated Rune Sites operators, and
                  every action that writes to an external platform requires a person to approve it.
                </li>
                <li>
                  Content and statistics retrieved from a platform are kept only as long as the
                  connection is active, and are deleted when it ends.
                </li>
              </ul>

              <h3 className="pt-2 font-display text-base font-bold text-white">
                Revoking access and deletion
              </h3>
              <p>
                An account holder can disconnect us at any time from within their platform&rsquo;s
                own settings — for Pinterest, under Settings &rsaquo; Security and permissions
                &rsaquo; Apps. Revoking access immediately stops all further use. To have the
                associated tokens and stored content deleted from our systems as well, email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:decoration-brand-300"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will delete them within 30 days.
              </p>
              <p>
                Our use of these APIs is also subject to each platform&rsquo;s own developer terms
                and privacy policy. Their handling of your data on their own services is governed
                by their policies, not this one.
              </p>
            </Section>

            <Section id="retention" title="7. How long we keep it">
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>
                  <strong className="font-semibold text-white">
                    Enquiries that do not become projects
                  </strong>{" "}
                  — kept for up to 24 months, then deleted.
                </li>
                <li>
                  <strong className="font-semibold text-white">Client project records</strong> —
                  kept for the life of the working relationship and for 6 years afterwards, which
                  is the period UK tax and accounting rules require.
                </li>
                <li>
                  <strong className="font-semibold text-white">Server and security logs</strong> —
                  kept for a short period by our hosting provider under their retention schedule.
                </li>
                <li>
                  <strong className="font-semibold text-white">Platform API tokens</strong> —
                  deleted when the connection is revoked or the relationship ends.
                </li>
              </ul>
              <p>You can ask us to delete your data sooner — see your rights below.</p>
            </Section>

            <Section id="transfers" title="8. International transfers">
              <p>
                Some of our providers are based outside the UK, principally in the United States.
                Where personal data is transferred outside the UK, it is protected by an adequacy
                decision or by the International Data Transfer Agreement or Addendum (the
                UK&rsquo;s Standard Contractual Clauses), which places contractual obligations on
                the provider to protect your data to UK standards.
              </p>
            </Section>

            <Section id="security" title="9. Security">
              <p>
                The site is served over HTTPS. Form submissions are validated on the server, and
                database and email credentials are held as server-side environment variables, never
                exposed to the browser. Access to stored enquiries is limited to people who need it
                to do the work.
              </p>
              <p>
                No system can be guaranteed completely secure. If a breach affecting your rights
                occurs, we will notify the Information Commissioner&rsquo;s Office and, where
                required, you, without undue delay.
              </p>
            </Section>

            <Section id="your-rights" title="10. Your rights">
              <p>Under UK data protection law you have the right to:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-brand-400">
                <li>Ask what personal data we hold about you, and get a copy of it</li>
                <li>Have inaccurate data corrected</li>
                <li>Ask us to delete your data, where we have no overriding reason to keep it</li>
                <li>Ask us to restrict how we use it, or object to our using it</li>
                <li>Receive the data you gave us in a portable, machine-readable format</li>
                <li>Withdraw consent at any time, where we relied on consent</li>
              </ul>
              <p>
                To exercise any of these, email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:decoration-brand-300"
                >
                  {CONTACT_EMAIL}
                </a>
                . We will respond within one month, and it is free. If you are unhappy with how we
                have handled your data, you can complain to the Information Commissioner&rsquo;s
                Office at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 underline decoration-brand-300/40 underline-offset-2 hover:decoration-brand-300"
                >
                  ico.org.uk
                </a>{" "}
                or on 0303 123 1113 — though we would appreciate the chance to put it right first.
              </p>
            </Section>

            <Section id="children" title="11. Children">
              <p>
                Our services are aimed at businesses. We do not knowingly collect personal data
                from anyone under 16. If you believe a child has given us their data, contact us
                and we will delete it.
              </p>
            </Section>

            <Section id="changes" title="12. Changes to this policy">
              <p>
                We may update this policy as our services change. The date at the top always shows
                the current version, and material changes will be highlighted on this page.
              </p>
            </Section>

            <Section id="contact" title="13. Contact us">
              <div className="card-surface p-6">
                <p className="text-[15px] leading-relaxed text-slate-300">
                  Questions about this policy, or about the data we hold on you:
                </p>
                <p className="mt-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-display text-lg font-bold text-brand-300 hover:text-brand-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Rune Sites · United Kingdom · runewebsites.com
                </p>
              </div>
            </Section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
