import { CaseTile } from "../components/common/CaseTile";
import { PageFrame } from "../components/common/PageFrame";
import { SiteFooter } from "../components/common/SiteFooter";
import { featuredProduct, innerPageNavigation } from "../data/site";

export function ProductPage() {
  return (
    <PageFrame navigation={innerPageNavigation}>
      <main id="main">
        <section
          className="company-hero family-shell fieldbrief-hero"
          aria-labelledby="fieldbrief-heading"
        >
          <div className="hero-copy">
            <img
              className="product-wordmark"
              src={featuredProduct.wordmark.src}
              alt="Field Brief"
              width={featuredProduct.wordmark.width}
              height={featuredProduct.wordmark.height}
            />
            <h1 id="fieldbrief-heading">
              Campaign intelligence for people who do <em>PR for a living.</em>
            </h1>
            <div className="product-overview">
              <p>
                Field Brief turns public campaign evidence into complete,
                source-linked case studies that show how notable automotive PR
                programmes unfolded and why they worked.
              </p>
              <a className="product-visit" href={featuredProduct.url}>
                Visit Field Brief
              </a>
            </div>
          </div>
        </section>

        <section
          className="report-details family-shell"
          aria-labelledby="report-details-title"
        >
          <h2 className="eyebrow" id="report-details-title">
            Inside every report
          </h2>
          <ul className="report-benefits">
            {featuredProduct.benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="campaign-section family-shell"
          aria-labelledby="case-studies-title"
        >
          <p className="eyebrow">Published intelligence</p>
          <div className="campaign-heading">
            <h2 id="case-studies-title">
              Six campaigns, reconstructed from the <em>evidence.</em>
            </h2>
            <p>
              Open any case to read it on Field Brief. Each report follows the
              campaign sequence, links the underlying sources and draws out
              lessons for working practitioners.
            </p>
          </div>
          <div className="campaign-grid">
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
