import { PageFrame } from "../components/common/PageFrame";
import { innerPageNavigation } from "../data/site";

export function PrivacyPage() {
  return (
    <PageFrame navigation={innerPageNavigation}>
      <main className="legal-copy mx-auto w-[min(55rem,calc(100%_-_2.25rem))] py-[clamp(4rem,10vw,7.375rem)]" id="main">
        <p className="section-label">Privacy</p>
        <h1 className="mb-6 max-w-[12ch] font-serif text-[clamp(3.25rem,7vw,5.8rem)] font-[450] leading-[0.96]">Privacy notice.</h1>
        <p>This website is operated by Loop Applications EOOD, Sofia, Bulgaria, UIC 207745874.</p>
        <p>The site is static and does not include account registration, analytics, tracking pixels or contact forms. If you email us, we will use your email address and message contents only to reply to your request and manage the related business communication.</p>
        <p>Email correspondence is handled on the basis of legitimate interest in responding to business enquiries. We keep correspondence only for as long as needed for the relevant communication, relationship or legal obligation.</p>
        <p>Cloudflare may process standard server log data such as IP address, user agent and request time to deliver and secure the website.</p>
        <p>You may request access, correction, deletion, restriction or objection where applicable. You also have the right to contact Bulgaria&apos;s Commission for Personal Data Protection.</p>
        <p>For privacy questions or deletion requests, contact <a href="mailto:boris@loopapps.bg">boris@loopapps.bg</a>.</p>
      </main>
    </PageFrame>
  );
}
