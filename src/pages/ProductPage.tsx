import { CaseTile } from "../components/common/CaseTile";
import { PageFrame } from "../components/common/PageFrame";
import { SiteFooter } from "../components/common/SiteFooter";
import { featuredProduct, productPageNavigation } from "../data/site";

export function ProductPage() {
  return (
    <PageFrame navigation={productPageNavigation}>
      <main id="main">
        <section className="mx-auto grid w-[min(73.75rem,calc(100%_-_2.25rem))] grid-cols-[minmax(0,0.9fr)_minmax(19rem,0.72fr)] items-center gap-[clamp(2.5rem,7vw,7rem)] py-[clamp(4rem,9vw,7rem)] max-[53.75rem]:grid-cols-1 max-[32.5rem]:mx-4 max-[32.5rem]:w-auto max-[32.5rem]:gap-8 max-[32.5rem]:py-14">
          <div>
            <img className="mb-9 block h-auto w-[min(100%,25rem)]" src={featuredProduct.wordmark.src} alt="Field Brief" width={featuredProduct.wordmark.width} height={featuredProduct.wordmark.height} />
            <h1 className="mb-6 max-w-[17ch] font-serif text-[clamp(3rem,5.4vw,5rem)] font-[450] leading-[0.96]">
              Campaign intelligence for people who do PR for a living.
            </h1>
            <p className="mb-0 max-w-[60ch] text-[clamp(1.1rem,1.8vw,1.3rem)] leading-[1.55] text-copy">
              Field Brief turns public campaign evidence into complete, source-linked case studies that show how notable automotive PR programmes unfolded and why they worked.
            </p>
          </div>

          <aside className="rounded-panel bg-navy p-[clamp(1.75rem,4vw,3rem)] text-white shadow-panel" aria-label="What Field Brief provides">
            <p className="mb-7 text-xs font-extrabold uppercase tracking-[0.11em] text-[#ffb0b5]">Inside every report</p>
            <ul className="m-0 grid list-none gap-6 p-0">
              {featuredProduct.benefits.map((benefit) => (
                <li className="grid gap-1.5 border-l-4 border-red pl-4" key={benefit.title}>
                  <strong className="text-[1.08rem]">{benefit.title}</strong>
                  <span className="max-w-[38ch] leading-[1.5] text-[#dbe2eb]">{benefit.description}</span>
                </li>
              ))}
            </ul>
            <a className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-control bg-white px-4 py-2 font-extrabold text-navy no-underline motion-safe:transition motion-safe:duration-200 hover:-translate-y-px hover:bg-control-hover hover:shadow-control active:translate-y-0" href={featuredProduct.url}>
              <img className="size-8 rounded-control" src={featuredProduct.buttonMark} alt="" width="112" height="112" />
              Visit Field Brief
            </a>
          </aside>
        </section>

        <section className="section-shell @container/product" aria-labelledby="case-studies-title">
          <div className="mb-8 grid grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.55fr)] items-end gap-8 max-[53.75rem]:grid-cols-1">
            <div>
              <p className="section-label">Published intelligence</p>
              <h2 className="mb-0 max-w-[16ch] font-serif text-[clamp(2.5rem,4vw,4.1rem)] font-[450] leading-[0.98]" id="case-studies-title">Six campaigns, reconstructed from the evidence.</h2>
            </div>
            <p className="mb-0 max-w-[52ch] text-[1.08rem] leading-[1.6] text-copy">Open any case to read it on Field Brief. Each report follows the campaign sequence, links the underlying sources and draws out lessons for working practitioners.</p>
          </div>

          <div className="grid grid-cols-3 gap-3 bg-gallery p-3 max-[53.75rem]:grid-cols-2 @max-[32.5rem]/product:grid-cols-1">
            {featuredProduct.cases.map((productCase) => (
              <CaseTile productCase={productCase} key={productCase.title} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
