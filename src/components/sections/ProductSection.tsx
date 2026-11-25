const products = [
  {
    id: "field-brief",
    name: "Field Brief",
    category: "Automotive PR intelligence",
    tone: "brief",
    logo: "/assets/fieldbrief-wordmark.svg",
    url: "https://fieldbrief.news/",
    heading: "Understand the campaign behind the headlines.",
    description:
      "Source-linked case studies reconstructing notable automotive PR campaigns, with evidence and practitioner judgment.",
    detail: "Campaigns, in context",
    tags: ["Public evidence", "Campaign sequence", "Practitioner judgment"],
  },
  {
    id: "copyproof-title",
    name: "CopyProof",
    category: "Pharmaceutical document comparison",
    tone: "proof",
    logo: "/assets/copyproof-logo.webp",
    url: "https://copyproof.io/",
    heading: "Every detail. Every difference.",
    description:
      "Compare approved Word or PDF text with medicine labels, package leaflets and PDF artwork. Review the differences before signing off.",
    detail: "Clarity in the details",
    tags: ["Approved text", "Document comparison", "Review decisions"],
  },
  {
    id: "carwashguide-title",
    name: "CarWashGuide",
    category: "U.S. car wash directory",
    tone: "wash",
    logo: "/assets/carwashguide-mark.svg",
    url: "https://carwashguide.org/",
    heading: "Know your wash before you go.",
    description:
      "Find local car washes by city. Compare wash methods, advertised prices and membership options where available, starting in Florida.",
    detail: "A better way to find your wash",
    tags: ["Local discovery", "Wash methods", "Published prices"],
  },
  {
    id: "room-for-mri-title",
    name: "Room for MRI",
    category: "U.S. MRI equipment directory",
    tone: "mri",
    logo: "/assets/room-for-mri-mark.webp",
    url: "https://roomformri.com/",
    heading: "Find the scanner that fits.",
    description:
      "Explore magnetic resonance imaging (MRI) equipment by location. Compare scanner openings, designs and table weight limits using provider-published information.",
    detail: "More room for an informed choice",
    tags: ["Scanner dimensions", "Table limits", "Provider sources"],
  },
];

export function ProductSection() {
  return (
    <section
      className="family-products family-shell"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="mb-10">
        <h2 className="eyebrow" id="products-title">
          The product family
        </h2>
      </div>
      <div className="family-grid">
        {products.map((product) => (
          <article
            className={`family-card ${product.tone}`}
            key={product.id}
            aria-labelledby={product.id}
          >
            <a
              className="brand-stage"
              href={product.url}
              aria-label={`Visit ${product.name}`}
            >
              <div className="brand-identity">
                <img
                  src={product.logo}
                  alt={product.tone === "brief" ? product.name : ""}
                  width={product.tone === "brief" ? 748 : 128}
                  height={product.tone === "brief" ? 152 : 128}
                />
                {product.tone !== "brief" && <span>{product.name}</span>}
              </div>
              <div className="product-art" aria-hidden="true">
                {product.tone === "brief" && (
                  <>
                    <i />
                    <i />
                    <i />
                    <span>
                      Evidence.
                      <br />
                      Sequence.
                      <br />
                      <em>Insight.</em>
                    </span>
                  </>
                )}
                {product.tone === "proof" && (
                  <img
                    className="copyproof-documents"
                    src="/assets/copyproof-documents.svg"
                    alt=""
                    width="360"
                    height="280"
                  />
                )}
                {product.tone === "wash" && (
                  <>
                    <i className="wash-orbit" />
                    <i className="wash-orbit" />
                    <img src={product.logo} alt="" width="64" height="64" />
                  </>
                )}
                {product.tone === "mri" && (
                  <>
                    <i className="scanner-ring" />
                    <i className="scanner-table" />
                  </>
                )}
              </div>
              <span className="brand-caption">{product.detail}</span>
              <span className="brand-plus" aria-hidden="true">
                +
              </span>
            </a>
            <div className="family-card-copy">
              <p className="product-category">{product.category}</p>
              <h3 id={product.id} tabIndex={-1}>
                {product.name}
              </h3>
              <p className="product-pitch">{product.heading}</p>
              <p className="product-description">{product.description}</p>
              <ul className="product-tags" aria-label={`${product.name} focus`}>
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="product-links">
                <a className="text-link" href={product.url}>
                  Explore {product.name} <span aria-hidden="true">+</span>
                </a>
                {product.tone === "brief" && (
                  <a className="case-link" href="/products/field-brief">
                    View case studies
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
